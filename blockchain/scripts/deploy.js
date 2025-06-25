const hre = require("hardhat");

async function main() {
  const Payment = await hre.ethers.getContractFactory("Payment");
  const payment = await Payment.deploy();

  console.log(`Payment contract deployed to: ${payment.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
