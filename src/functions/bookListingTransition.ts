import toast from "react-hot-toast";
import { decodeZilPayError } from "./decodeMessage";
import getCallParameters from "./getCallParameters";
import transitionMessageAlert from "./transitionMessageAlert";
import getCurrentUser from "../functions/getCurretUser";

/* Calls book_listing transition */

const bookListingTransition = async (
    contract: any,
    web3: any,
    id: string,
    amount: number
) => {
    try {
        const accounts = await web3.eth.getAccounts();
        let price = web3.utils.toWei(amount, 'ether');
        contract.methods.buy(id).send({from:accounts[0], value : price})
        .on('transactionHash', function (hash: any) {
            toast.loading("Purchase in process!");
          })
          .on('error', toast.error)
          .then(function (value: any) {
            toast.success("Purchased!");
            window.location.href = "/listings";
          });
    } catch (error) {
        //toast.error(decodeZilPayError(error));
    }
};

export default bookListingTransition;
