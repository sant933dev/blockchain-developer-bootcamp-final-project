

const formatListings = async (
    contract: any,
    account: any,
    web3: any
) => {


    let contractResponse = new Array();

    const getRoyaltyType = (royalty_type_code: string) => {
        if (royalty_type_code === "1") {
            return "No Royalty";
        } else if (royalty_type_code === "2") {
            return "Creator Royalty";
        } else if (royalty_type_code === "3") {
            return "Inherited Royalty";
        } else {
            return "No Royalty";
        }
    };

    const accounts = await web3.eth.getAccounts();
    await contract.methods.getTokenUris().call({ from: accounts[0] }, function (err: any, res: any) {
        if (err) {
            console.log("An error occured", err)
            return
        }
        res.forEach((element: any) => {
            if (element.tokenUri) {
                contractResponse.push({
                    id: element.tokenId,
                    name: element.tokenId,
                    image: element.tokenUri,
                    royalty_type: getRoyaltyType(element.royaltyType),
                    price: web3.utils.fromWei(element.price, 'ether'),
                    user_is_host: account == element.owner,
                })
            }
        });
    })

    return contractResponse;

}

export default formatListings;
