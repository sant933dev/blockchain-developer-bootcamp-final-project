# NFT Cosmos

https://sant933dev.github.io/blockchain-developer-bootcamp-final-project/listings


# Getting Started with NFTCosmos

The NFTCosmos app is a full-fledged application on the Ethereum blockchain for listing and selling ethereum based NFTs with royalty.

>A royalty payment is a payment made by one party to another that owns a particular asset, for the right to ongoing use of that asset. Royalties are typically agreed upon as a percentage of gross or net revenues derived from the use of an asset or a fixed price per unit sold of an item of such, but there are also other modes and metrics of compensation.A royalty interest is the right to collect a stream of future royalty payments.`



# Application Features
-  User can mint an NFT by uploading an art and specify the royalty type
    -  ***Creator Royalty*** : The creator of the NFT gets royalty each time it has been transfered from one user to another using the platform.
    -  ***No Royalty*** : The creator can forgo the royalty so the user doesnt get royalty each time the NFT is trrasnferred.

## UI Features
- Login with Metamask.
- Mint NFTs, list all other NFTs , purchase NFTs and burn.
- Sewtup royalty while minting

Deployed in Ropsten Test Network on address `0x2cAfaB9F8eC2605da6D04FBbbe5D8f025C3C33a6`

# The technology

- [Create React App](https://github.com/facebook/create-react-app) for the frontend.
- [Tailwind CSS](https://tailwindcss.com) for styling.
- [Ethereum](https://ethereum.org/en/) blockchain technology.
- [Openzepplin](https://openzeppelin.com/)for base contracts 



# Steps to run the project

## Prerequisites
 - Node.js >= v14
 - Truffle and Ganache
 - Yarn
 - git checkout master

## Contracts
  - Run yarn install in project root to install Truffle build and smart contract dependencies
  - Run local testnet in port 7545 with an Ethereum client, e.g. Ganache
  - truffle migrate --network development
  - truffle console --network development
  - Run tests in Truffle console: test
  - development network id is 1337, remember to change it in Metamask as well!]


**Please reach out to me to get your public key approved to test the contract.***Discord username : sant933#3578*** **

## Frontend
  - npm install
  - npm start
  - Open http://localhost:3000/listings


# Simple workflow

1. Enter the web site.
2. Login with Metamask.
4. Click on "Create a token" (NFT)
5. Copy an image URL and fill in the royalty details and submit.
6. Sign the transaction with the Metamask in Ropsten test
7. You will see the new NFT token under "Your Tokens" listing (Refresh if needed). (Smart contract call - Fetched from the CosmosToken smart contract)
8. Click on the token that the buyer has shown interest.
9. Add his address in buyers address text box and approve him for purchase.
9. Buyer clicks on the listing that is listed in marketplace.
10. UI opens a new page to display the art.
11. Buyer clicks on the purchase button.
12. Sign the transaction in Metamask to tranfer the token.
13. The smart contract computes the royalty amount based on the type and percent and transfers the token with appropriate ether transfers.


## Public Ethereum wallet for certification as NFT:
0x77E832cA0d59B1791d5377856633795334ae07fF


# Screencast
https://www.loom.com/share/6614c24a030746c0a555dde57c7108d4
