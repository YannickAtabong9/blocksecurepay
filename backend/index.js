const express = require('express');
const client = require('prom-client');

const app = express();
const port = process.env.PORT || 3000;

// Prometheus metrics setup
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
});

// Middleware to track request metrics
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

// Simple payment route (placeholder)
app.get('/pay', (req, res) => {
  res.send('Payment processed.');
});

// Prometheus metrics route
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(port, () => {
  console.log(`Backend API listening at http://localhost:${port}`);
});
