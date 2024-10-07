// Example code to run a blockchain node
const { exec } = require('child_process');

console.log('Setting up blockchain node...');

// Assuming you use Docker to run the node
exec('docker run -d --name blockchain-node -p 8545:8545 ethereum/client-go', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Node started: ${stdout}`);
});

// Checking connection to the node
const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

web3.eth.getBlockNumber()
    .then(blockNumber => {
        console.log(`Current block number: ${blockNumber}`);
    })
    .catch(error => {
        console.error(`Error fetching block number: ${error.message}`);
    });
