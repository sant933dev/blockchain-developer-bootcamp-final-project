import getCallParameters from "./getCallParameters";
import toast from "react-hot-toast";
import transitionMessageAlert from "./transitionMessageAlert";
import { decodeZilPayError } from "./decodeMessage";
import getCurrentUser from "../functions/getCurretUser";
import Web3 from "web3";

/* Calls create_listing transition */

const createListingTransition = async (
  contract: any,
  image: string | undefined,
  royaltyType: string,
  royaltyValue: string,
  price: string,
  account: any,
  web3: any
) => {
  let accounts = await web3.eth.getAccounts();
  await contract.methods.safeMint(
    account as any,
    image as any,
    royaltyType as any,
    royaltyValue as any,
    web3.utils.toWei(price, 'ether') as any
  ).send({ from: accounts[0] })
    .on('transactionHash', function (hash: any) {
      toast.loading("Minting in process");
    })
    .on('error', toast.error)
    .then(function (value: any) {
      toast.success("Mint Complete!");
      window.location.href = "blockchain-developer-bootcamp-final-project/listings";
    });
};

export default createListingTransition;
