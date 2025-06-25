require('dotenv').config();
const { ethers } = require("ethers");
const paymentAbi = require("./PaymentABI.json").abi;

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, paymentAbi, wallet);

module.exports = contract;
