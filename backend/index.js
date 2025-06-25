require('dotenv').config();
const express = require('express');
const client = require('prom-client');
const { ethers } = require('ethers');
const contract = require('./blockchain');

const app = express();
const port = process.env.PORT || 3000;

// Prometheus setup
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
});

app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestCounter.inc({
      method: req.method,
      route: req.path,
      status: res.statusCode
    });
  });
  next();
});

// API to call smart contract's getBalance()
app.get('/balance', async (req, res) => {
  try {
    const balance = await contract.getBalance();
    res.json({ balance: ethers.formatEther(balance) + " ETH" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API to simulate a payment
app.get('/pay', async (req, res) => {
  try {
    const tx = await contract.pay({ value: ethers.parseEther("0.01") });
    await tx.wait();
    res.json({ message: "Payment sent!", txHash: tx.hash });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Prometheus metrics
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(port, () => {
  console.log(`Backend API listening at http://localhost:${port}`);
});
