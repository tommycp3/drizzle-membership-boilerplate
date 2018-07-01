var HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config()


var infura_apikey = process.env.INFURATOKEN;
var mnemonic = process.env.MNEMONIC;



module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 500
    }
  } 
};
