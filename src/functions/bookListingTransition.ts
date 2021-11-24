import toast from "react-hot-toast";
import { decodeZilPayError } from "./decodeMessage";
import getCallParameters from "./getCallParameters";
import transitionMessageAlert from "./transitionMessageAlert";
import getCurrentUser from "../functions/getCurretUser";

/* Calls book_listing transition */

const bookListingTransition = async (
    contract: any,
    zilPay: any,
    id: string,
    amount: string,
    buyerAddress: string,
) => {
    try {
        const current_user = getCurrentUser(undefined, zilPay);
        const callTransition = await contract.call(
            "TransferFrom",
            [
                {
                    vname: "to",
                    type: "ByStr20",
                    value: buyerAddress,
                },
                {
                    vname: "token_id",
                    type: "Uint256",
                    value: id,
                },
            ],
            getCallParameters(zilPay, amount)
        );
        transitionMessageAlert(zilPay, callTransition.ID, "Purchasing");
    } catch (error) {
        toast.error(decodeZilPayError(error));
    }
};

export default bookListingTransition;
