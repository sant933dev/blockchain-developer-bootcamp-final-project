import React, { useEffect, useState } from "react";
import ContextContainer from "../functions/contextContainer";
import formatListings from "../functions/formatListings";
import getCurrentEpochNumber from "../functions/getCurrentEpochNumber";
import getCurrentUser from "../functions/getCurretUser";
import Button from "./componentButton";
import { useHistory, useParams } from "react-router-dom";
import bookListingTransition from "../functions/bookListingTransition";
import Input from "./componentInput";
import { useWeb3React } from "@web3-react/core";


/*
Listing Component

This component presents a detailed view of the individual listings.
The description, rooms, amenities, map, etc are presented in a detailed manner.
Users can book the listing withing this component, which uses the makeReservation function.
The map embed url is built using the Google Plus Code and the Google Maps API Key.
*/

const Listing: React.FC = () => {
    const [listing, setListing] = useState<any | undefined>(undefined);
    const [buyerAddress, setBuyerAddress] = useState<any | undefined>(undefined);
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const {account} = useWeb3React();
    

    useEffect(() => {
        
        (async () => {
            const listing = formatListings()
            .filter((listingRef) => {
                return listingRef['id'] === parseInt(id);
            })[0];
            if (!listing) history.push("/listings");
            setListing(listing);
        })();
    },[]);

    const makeReservation = () => {
        // bookListingTransition(contract, zilPay, listing.id, listing.price);
    };

    return (
        <>
            {listing ? (   



                <div className="container mx-auto px-4 lg:px-2 pb-10">
                    <div className="pt-10 pb-10">
                        <h1 className="text-gray-900 text-3xl font-medium">
                            {listing.name}{account}
                        </h1>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-12 relative">
                     <div className="order-1">
                            <div className="sticky top-32 p-6 rounded-xl border-2 w-full">
                                <div className="text-center">
                                    <p className="mt-4 mb-8 text-xl text-gray-900 font-medium">
                                    {listing.price} ZIL
                                    </p>
                                </div>
                                
            <Input
                name="Buyer Address"
                value={buyerAddress}
                type="text"
                setValue={setBuyerAddress}
            />
                                <Button
                                    modal
                                    onClick={makeReservation}
                                    text="Sell"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : false ? (
                <p className="pt-20 text-xl text-center">Loading</p>
            ) : (
                <p className="pt-20 text-xl text-center">
                    Please connect ZilPay
                </p>
            )}
        </>
    );
};

export default Listing;
