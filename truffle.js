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
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
      network_id: 3,
      gas: 500000
    }
  },
  solc: {
    optimizer: { 
      enabled: true,
      runs: 500
    }
  } 
};

// ropsten settings: https://www.screencast.com/t/IuGi0BETN
