import getCallParameters from "./getCallParameters";
import toast from "react-hot-toast";
import transitionMessageAlert from "./transitionMessageAlert";
import { decodeZilPayError } from "./decodeMessage";

/* Calls delete_listing transition */

const setApproveTransition = async (
    contract: any,
    web3: any,
    id: string,
    buyerAddress: any
) => {
    try {
        const accounts = await web3.eth.getAccounts();
        contract.methods.approve(buyerAddress, id).send({ from: accounts[0] })
        .on('transactionHash', function (hash: any) {
            toast.loading("Approval in process!");
          })
          .on('error', toast.error)
          .then(function (value: any) {
            toast.success("Buyer Approved!");
            window.location.href = "/listings";
          });


        //transitionMessageAlert(zilPay, callTransition.ID, "Providing Operator Previleges!");
    } catch (error) {
        //toast.error(decodeZilPayError(error));
    }
};

export default setApproveTransition;
