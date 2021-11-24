import React, { useEffect, useState } from "react";
import Header from "./components/componentHeader";
import Listing from "./components/componentListing";
import Listings from "./components/componentListings";
import SignUpModal from "./components/componentCreateAccountModal";
import ContextContainer from "./functions/contextContainer";
import { Toaster } from "react-hot-toast";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'


const App: React.FC = () => {

    const [showSignUp, setShowSignUp] = useState<boolean>(false);

    function getLibrary(provider:any) {
        return new Web3(provider)
      }

    return (
        <Web3ReactProvider getLibrary={getLibrary}>
        <div className="rentonzilliqa">
            <Router>
                <Header {...{ setShowSignUp }} />
                <main>
                   <Switch>
                        <Route path="/" exact>
                            <Redirect to={"/listings"} />
                        </Route>
                        <Route path="/listings">
                            <Listings />
                        </Route>
                        <Route path="/listing/:id">
                            <Listing />
                        </Route>
                        <Redirect to={"/listings"} />
                    </Switch>
                </main> 
            </Router>
            <Toaster
                toastOptions={{
                    success: { duration: 6000 },
                    error: { duration: 8000 },
                    loading: { duration: 130000 },
                }}
            />
        </div>
        </Web3ReactProvider>
    );
};

export default App;
