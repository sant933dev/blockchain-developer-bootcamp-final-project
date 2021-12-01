import React, { useEffect, useState } from "react";
import ContextContainer from "../functions/contextContainer";
import createListingTransition from "../functions/createListingTransition";
import Input from "./componentInput";
import Modal from "./componentModal";
import Tick from "./componentTick";
import { useWeb3React  } from "@web3-react/core"
import { NFTCOSMOS_ABI, NFTCOSMOS_ADDRESS } from "../config";
import Web3 from 'web3'

type props = {
    showCreateListing: boolean;
    setShowCreateListing(visible: boolean): void;
};

const CreateListingModal: React.FC<props> = (props) => {
    const { showCreateListing, setShowCreateListing } = props;
    const [image, setImage] = useState<string | undefined>(undefined);
    const [royaltyType, setRoyaltyType] = useState<string>("1");
    const [royaltyValue, setRoyaltyValue] = useState<string>("0");
    const [price, setPriceValue] = useState<string>("0");
    let {library, active, account} = useWeb3React();

    const createListing = () => {
        if (
            !image
        )
            return;
        const web3 = new Web3(library);
        let contract = new library.eth.Contract(NFTCOSMOS_ABI as any, NFTCOSMOS_ADDRESS);
        createListingTransition(
            contract,
            image,
            royaltyType,
            royaltyValue,
            price,
            account,
            web3,
        );
    };

    useEffect(() => {
        setImage(undefined);
        setRoyaltyType("1");
        setRoyaltyValue("0");
        setPriceValue("0");
    }, [showCreateListing]);

    return (
        <Modal
            title="Post your creation"
            visible={showCreateListing}
            setVisible={setShowCreateListing}
            buttonText={"Post!"}
            onClick={createListing}
        >
        <Input
                name="Image URL"
                value={image}
                type="text"
                setValue={setImage}
        />
         <h4 className="font-semibold text-gray-500 text-xs tracking-wide uppercase">
                    Royalty</h4>
            <div className="flex grid md:grid-cols-2 gap-12 mb-8">
                 <div
                        className="flex justify-center items-center cursor-pointer"
                        onClick={() => setRoyaltyType("1")}
                    >
                        
                        <div
                            className={`p-1 bg-gray-200 rounded-lg w-8 h-8 hover:scale-95 transform transition-all 
                            ${
                                royaltyType == "1" ? "" : "hover:bg-gray-300"
                            }`}
                        >
                            <div
                                className={`w-full h-full rounded transition-colors text-transparent ${
                                    royaltyType == "1" ? "" : "hover:bg-gray-300"
                                }`}
                            >
                                {royaltyType === "1" && <Tick />}
                            </div>
                        </div>
                        <p className="text-lg text-gray-800 pr-4 px-4">No Royalty</p>
                    </div>
                    <div
                        className="flex justify-center items-center cursor-pointer"
                        onClick={() => setRoyaltyType("2")}
                    >
                       
                        <div
                            className={`p-1 bg-gray-200 rounded-lg w-8 h-8 hover:scale-95 transform transition-all ${
                                royaltyType == "2" ? "" : "hover:bg-gray-300"
                            }`}
                        >
                            <div
                                className={`w-full h-full rounded transition-colors text-transparent ${
                                    royaltyType == "2"
                                        ? "bg-gray-900 text-gray-200"
                                        : ""
                                }`}
                            >
                                {royaltyType === "2" && <Tick />}
                            </div>
                        </div>
                        <p className="text-lg text-gray-800 pr-4 px-4 ">Creator Royalty</p>
                    </div>
                </div>


            <Input
                name="Royalty Percent"
                value={royaltyValue}
                type="number"
                setValue={setRoyaltyValue}
                unit="%"
            />  

            <Input
                name="Price"
                value={price}
                type="number"
                setValue={setPriceValue}
                unit="ETH"
            />    
        </Modal>
    );
};

export default CreateListingModal;
