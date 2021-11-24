import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./componentButton";
import Input from "./componentInput";
import { useWeb3React } from "@web3-react/core"
import ContextContainer from "../functions/contextContainer";
import { injected } from "../functions/injectedConnectors";

type props = {
    setShowSignUp(showSignUp: boolean): void;
};



const Header: React.FC<props> = (props) => {
    
    const { setShowSignUp } = props;
    const [searchString, setSearchString] = useState<string | undefined>(undefined);
    const { setAccount } = ContextContainer.useContainer();
    const { active, account, library, connector, activate, deactivate } = useWeb3React();
   
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
                <Link
                    className="text-white text-2xl font-medium cursor-pointer"
                    to="/listings"
                >
                    NFT Cosmos
                </Link>
                <Input name="" value="" setValue={setSearchString} placeHolder="Search"/>
                {active ? 
                (<b className="text-white font-small text-xl">
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
