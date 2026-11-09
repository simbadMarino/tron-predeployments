const Multicall3 = artifacts.require('Multicall3.sol');

// eslint-disable-next-line no-unused-vars
module.exports = async function (deployer) {
  await deployer.deploy(Multicall3);
};
