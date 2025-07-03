const SimpleToken = artifacts.require("SimpleToken");

module.exports = function (deployer) {
  deployer.deploy(SimpleToken, 1000); // Deploy with initial supply of 1000 tokens
};