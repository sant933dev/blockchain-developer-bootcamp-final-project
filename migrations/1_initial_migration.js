const Migrations = artifacts.require("Migrations");
const CosmoToken = artifacts.require("CosmoToken");


module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(CosmoToken);
};
