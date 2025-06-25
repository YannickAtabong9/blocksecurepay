# BlockSecurePay 🔐💸

A secure, blockchain-integrated payment web app with full DevOps and cloud infrastructure simulation — built to demonstrate hands-on skills in DevSecOps, Infrastructure as Code (IaC), API security, and observability.

---

## 🏗️ Architecture Overview

Frontend (React)
│
▼
Backend (Node.js + Express)
│
├── Prometheus metrics → Grafana Dashboard
├── Ethereum Smart Contract (via Hardhat)
└── DevOps CI/CD (GitHub Actions)


Infrastructure managed via **Terraform** and simulated with **LocalStack**.

---

## 🧰 Tech Stack

| Layer         | Tools / Frameworks                             |
|---------------|------------------------------------------------|
| Frontend      | React + Vite + Axios                           |
| Backend       | Node.js, Express, Prometheus, Ethers.js        |
| Blockchain    | Solidity, Hardhat, Local Ethereum RPC Node     |
| Monitoring    | Prometheus, Grafana                            |
| DevOps        | GitHub Actions, Docker, Docker Compose         |
| Infrastructure| Terraform, LocalStack (simulated AWS)          |

---

## 🧪 Key Features

- 📦 Blockchain smart contract: `Payment.sol` to simulate on-chain payments
- 🔄 `/pay` route: sends 0.01 ETH to contract
- 📈 `/metrics` route: exposes Prometheus metrics (e.g. `http_requests_total`)
- 🔍 Grafana dashboards with real-time API observability
- ☁️ Terraform-defined EC2 infrastructure using LocalStack
- 🔄 CI pipeline runs on every GitHub push

---

## 📸 Screenshots

| Feature            | Screenshot Path                              |
|--------------------|----------------------------------------------|
| Terraform Apply    | `docs/screenshots/terraform-apply.png`       |
| Prometheus Targets | `docs/screenshots/prometheus-up.png`         |
| Grafana Metrics    | `docs/screenshots/grafana-api.png`           |
| React UI           | `docs/screenshots/frontend-ui.png`           |
| API Call Output    | `docs/screenshots/pay-endpoint.png`          |

---

## 📁 Folder Structure

blocksecurepay/
├── backend/ # Node.js API with Prometheus + Ethers.js
├── frontend/ # React UI (Pay button)
├── blockchain/ # Hardhat smart contract + deploy
├── terraform/ # Infra as Code (EC2 simulated)
├── monitoring/ # Prometheus config
├── .github/workflows/ # GitHub Actions CI/CD
├── docs/screenshots/ # Project proof
└── docker-compose.yml # Local orchestration

---

## 🚀 Getting Started

```bash
# Start backend + frontend + Prometheus + Grafana
docker compose up --build

# Start blockchain locally
cd blockchain
npx hardhat node

# In another terminal
npx hardhat run scripts/deploy.js --network localhost

# Start backend manually (optional)
cd backend
node index.js

