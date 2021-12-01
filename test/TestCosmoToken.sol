// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CosmoToken.sol";

contract TestCosmoToken {
    address testAddress = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;

    address contractAddress = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;

    address transferredAddress = 0xE0f5206BBD039e7b0592d8918820024e2a7437b9;

    function testMintingToken() public {
        CosmoToken cosmoToken = new CosmoToken();
        cosmoToken.safeMint(testAddress, "dgjhwsajgdgvajsa", 1, 1, 10);
        Assert.equal(
            cosmoToken.balanceOf(testAddress),
            1,
            "Must have one token since minted"
        );
    }

    function testMintingAndAssertTokenUriAfterCreation() public {
        CosmoToken cosmoToken = new CosmoToken();
        cosmoToken.safeMint(testAddress, "dgjhwsajgdgvajsa", 1, 1, 10);
        Assert.equal(
            cosmoToken.tokenURI(0),
            "dgjhwsajgdgvajsa",
            "Must return the token uri used for minting"
        );
    }

    function testMintingOwnerAfterCreation() public {
        CosmoToken cosmoToken = new CosmoToken();
        cosmoToken.safeMint(testAddress, "dgjhwsajgdgvajsa", 1, 1, 10);
        Assert.equal(
            cosmoToken.ownerOf(0),
            testAddress,
            "owner of the token must match the mint parameter"
        );
    }

    function testMintingAssertStructCreation() public {
        CosmoToken cosmoToken = new CosmoToken();
        cosmoToken.safeMint(testAddress, "dgjhwsajgdgvajsa", 1, 1, 10);
        CosmoToken.CosmoTokenStruct[] memory cosmoTokenStructs = cosmoToken
            .getTokenUris();
        Assert.equal(
            cosmoTokenStructs[0].tokenId,
            0,
            "tokenId of the token must match the mint parameter"
        );
        Assert.equal(
            cosmoTokenStructs[0].royaltyType,
            1,
            "royaltyType of the token must match the mint parameter"
        );
        Assert.equal(
            cosmoTokenStructs[0].royaltyPercent,
            1,
            "royaltyPercent of the token must match the mint parameter"
        );
        Assert.equal(
            cosmoTokenStructs[0].price,
            10,
            "price of the token must match the mint parameter"
        );
        Assert.equal(
            cosmoTokenStructs[0].owner,
            testAddress,
            "owner of the token must match the mint parameter"
        );
        Assert.equal(
            cosmoTokenStructs[0].minter,
            testAddress,
            "minter of the token must match the mint parameter"
        );
    }

    function testOwner() public {
        CosmoToken cosmoToken = new CosmoToken();
        cosmoToken.transferOwnership(contractAddress);
        Assert.equal(
            cosmoToken.owner(),
            contractAddress,
            "Owner of the contract should the same as the contract deployer"
        );
    }
}
