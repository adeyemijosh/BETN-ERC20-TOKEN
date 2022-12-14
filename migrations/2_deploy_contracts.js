const BerryToken = artifacts.require("BerryToken");

module.exports = function (deployer) {
  deployer.deploy(BerryToken, '1000000');

};

