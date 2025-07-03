module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Ganache's RPC server
      port: 7545,            // Ganache GUI default port
      network_id: "*",       // Match any network
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",      // Match contract compiler version
    }
  }
};