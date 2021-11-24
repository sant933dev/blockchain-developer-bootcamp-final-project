import getCallParameters from "./getCallParameters";
import toast from "react-hot-toast";
import transitionMessageAlert from "./transitionMessageAlert";
import { decodeZilPayError } from "./decodeMessage";
import getCurrentUser from "../functions/getCurretUser";

/* Calls create_listing transition */

const createListingTransition = async (
    image: string | undefined,
    royaltyType: string,
    royaltyValue: string,
    price: string,
    zilPay: any,
    contract: any,
) => {
    try {
        const current_user = getCurrentUser(undefined, zilPay);
        const callTransition = await contract.call(
            "Mint",
            [
                {
                    vname: "to",
                    type: "ByStr20",
                    value: current_user.address,
                },
                {
                        vname: "royalty_value",
                        type: "String",
                        value: royaltyValue,
                    },
                    {
                        vname: "royalty_type",
                        type: "String",
                        value: royaltyType,
                    },
                    {
                        vname: "sale_price",
                        type: "String",
                        value: price,
                    },
                {
                    vname: "token_uri",
                    type: "String",
                    value: image
                },
                
                // {
                //     vname: "royalty_value",
                //     type: "Uint256",
                //     value: royaltyValue,
                // }
            ],
            getCallParameters(zilPay)
        );
        transitionMessageAlert(zilPay, callTransition.ID, "Posting your creation!");
    } catch (error) {
        toast.error(decodeZilPayError(error));
    }
};

export default createListingTransition;
