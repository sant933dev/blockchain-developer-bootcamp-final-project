const Migrations = artifacts.require("Migrations");
const NFTCosmos = artifacts.require("NFTCosmos");


module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(NFTCosmos);
};
