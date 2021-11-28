import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ContextContainer from "../functions/contextContainer";
import formatListings from "../functions/formatListings";
import getCurrentEpochNumber from "../functions/getCurrentEpochNumber";
import getCurrentUser from "../functions/getCurretUser";
import Button from "./componentButton";
import CreateListingModal from "./componentCreateListingModal";
import ListingCard from "./componentListingCard";
import ManageListingModal from "./componentManageListingModal";
import PollCard from "./comonentPollCard";

const Poll: React.FC = () => {
    const [showCreateListing, setShowCreateListing] = useState<boolean>(false);
    const [showManageListing, setShowManageListing] = useState<boolean>(false);
    const [modalListing, setModalListing] = useState<any | undefined>(
        undefined
    );
    const [listings, setListings] = useState<any | undefined>(undefined);
    const [count, setCount] = useState<any | undefined>(0);
    const history = useHistory();
    const {contract} = ContextContainer.useContainer();

    const hostedListings = listings?.filter((listing: any) => {
        return listing.user_is_host;
    });

    const nonHostedListings = listings?.filter((listing: any) => {
        return !listing.user_is_host;
    });


    useEffect(() => {
        if (count > 0) return;
        setListings(
            formatListings(contract, null, null)
        );
        setCount(1);
    }, [listings, count]);

    return (
        <div className="container mx-auto px-4 lg:px-2 pb-10">
            <div className="pt-10 pb-5 flex justify-between items-center">
                <h1 className="text-gray-900 text-2xl font-medium">Poll</h1>
            </div>
            {nonHostedListings ? (
                <>
                    {nonHostedListings.length > 0 ? (
                        <>
                            <div className="grid md:grid-cols-1 gap-10">
                                {nonHostedListings.map((listing: any, index: number) => {
                                    return (
                                        <PollCard
                                            {...listing}
                                        />
                                    );
                                })}
                                 {hostedListings.map((listing: any, index: number) => {
                                    return (
                                        <PollCard
                                            {...listing}

                                        />
                                    );
                                })}
                            </div>
                        </>
                    ) : (
                        <p className="text-xl text-center">No listings</p>
                    )}
                </>
            ) : false ? (
                <p className="text-xl text-center">Loading</p>
            ) : (
                <p className="text-xl text-center">Please connect To Wallet</p>
            )}
            <CreateListingModal
                {...{ showCreateListing, setShowCreateListing }}
            />
            {modalListing && (
                <ManageListingModal
                    {...{
                        modalListing,
                        showManageListing,
                        setShowManageListing,
                    }}
                />
            )}
        </div>
    );
};

export default Poll;
