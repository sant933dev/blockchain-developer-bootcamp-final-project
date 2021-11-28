import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./componentButton";
import Input from "./componentInput";
import { useWeb3React } from "@web3-react/core"
import { injected } from "../functions/injectedConnectors";



const Header: React.FC = () => {
    const [searchString, setSearchString] = useState<string | undefined>(undefined);

    const { active, account, activate } = useWeb3React();

    async function connectToWallet() {
        try {
            await activate(injected);
        } catch (ex) {
            console.log(ex)
        }
    }

    return (
        <header className="bg-gray-900 sticky top-0 z-10">
            <div className="container mx-auto px-4 lg:px-2 py-3 flex justify-between items-center">
                NFT Cosmos
                <Input
                    name="" value="" setValue={setSearchString} placeHolder="Search" />
                {active ?
                    (<b className="text-white font-small text-sm">
                        {account}
                    </b>)
                    :
                    (<Button
                        text={"Connect To Wallet"}
                        onClick={connectToWallet}
                        white
                        header
                    />)}
            </div>
        </header>
    );
};

export default Header;
