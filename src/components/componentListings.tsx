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
import ImageGrid from "./componentImageGrid";

const Listings: React.FC = () => {
    const [showCreateListing, setShowCreateListing] = useState<boolean>(false);
    const [showManageListing, setShowManageListing] = useState<boolean>(false);
    const [modalListing, setModalListing] = useState<any | undefined>(
        undefined
    );
    const [listings, setListings] = useState<any | undefined>(undefined);
    const [count, setCount] = useState<any | undefined>(0);
    const history = useHistory();

    const hostedListings = listings?.filter((listing: any) => {
        return listing.user_is_host;
    });

    const nonHostedListings = listings?.filter((listing: any) => {
        return !listing.user_is_host;
    });


    useEffect(() => {
        if (count > 0) return;
        setListings(
            formatListings()
        );
        setCount(1);
    }, [listings, count]);

    return (
        <div className="container mx-auto px-4 lg:px-2 pb-10">
            <div className="pt-10 pb-5 flex justify-between items-center">
                <h1 className="text-gray-900 text-2xl font-medium">Marketplace</h1>
            </div>
            {nonHostedListings ? (
                <>
                    {nonHostedListings.length > 0 ? (
                        <>
                            <div className="grid md:grid-cols-5 gap-6">
                                {nonHostedListings.map((listing: any, index: number) => {
                                    return (
                                        <ListingCard
                                            {...listing}
                                            onClick={() => {
                                                history.push(
                                                    `/listing/${listing.id}`
                                                );
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        </>
                    ) : (
                        <p className="text-xl text-center">No listings</p>
                    )}


                    <div className="pt-16 pb-5 flex justify-between items-center">
                        <h1 className="text-gray-900 text-2xl font-medium">
                            Ongoing Polls
                        </h1>
                    </div>
                    {hostedListings.length > 0 ? (
                        <div className="grid md:grid-cols-5 gap-6">
                            {hostedListings.map(
                                (listing: any, index: number) => {
                                    return (
                                        <ImageGrid
                                            {...listing}
                                        />
                                    );
                                }
                            )}
                        </div>
                    ) : (
                        <p className="text-xl text-center">
                            No listings
                        </p>
                    )}





                    <div className="pt-16 pb-5 flex justify-between items-center">
                        <h1 className="text-gray-900 text-2xl font-medium">
                            Your Tokens
                        </h1>
                        <div className="flex items-center space-between">
                            <Button
                                text={"Create a token"}
                                onClick={() => setShowCreateListing(true)}
                            />
                            <div className="px-5" ></div>
                            <Button
                                text={"Start Poll"}
                                onClick={() => setShowCreateListing(true)}
                            />
                        </div>
                    </div>
                    {hostedListings.length > 0 ? (
                        <div className="grid md:grid-cols-5 gap-6">
                            {hostedListings.map(
                                (listing: any, index: number) => {
                                    return (
                                        <ListingCard
                                            {...listing}
                                            onClick={() => {
                                                setModalListing(
                                                    listing
                                                );
                                                setShowManageListing(
                                                    true
                                                );
                                            }}
                                        />
                                    );
                                }
                            )}
                        </div>
                    ) : (
                        <p className="text-xl text-center">
                            No listings
                        </p>
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

export default Listings;
