import getCallParameters from "./getCallParameters";
import toast from "react-hot-toast";
import transitionMessageAlert from "./transitionMessageAlert";
import { decodeZilPayError } from "./decodeMessage";

/* Calls delete_listing transition */

const setApproveTransition = async (
    contract: any,
    zilPay: any,
    id: string
) => {
    try {
        const callTransition = await contract.call(
            "SetOperatorForAll",
            [
                {
                    vname: "to",
                    type: "ByStr20",
                    value: "0xa675aaF2ACE34Ef2858fcE869abD5Af80535CA42",
                },
                // {
                //     vname: "token_id",
                //     type: "Uint256",
                //     value: parseInt(id),
                // },
            ],
            getCallParameters(zilPay)
        );
        transitionMessageAlert(zilPay, callTransition.ID, "Providing Operator Previleges!");
    } catch (error) {
        toast.error(decodeZilPayError(error));
    }
};

export default setApproveTransition;
