/*
Takes the multiple Map objects in the contract state and returns a handy user object.
Checks if user is host and if listing is rented.
Prices and rent are converted from Qa.
Amenities are converted to bool.
*/

const formatListings = (
) => {
    //  let {
    // //     listing,
    // //     listing_price,
    //      token_uris,
    //      token_royalty_type ,
    //      token_sale_price,
    //      token_owners,       
    //  } = contractState;

    const token_names = new Map();
    token_names.set(1,"Nature Paiting");
    token_names.set(2,"Evening Path");
    const token_uris = new Map();
    token_uris.set(1,"https://m.media-amazon.com/images/I/715VqZqfrgL._AC_SY450_.jpg");
    token_uris.set(2,"https://e3.365dm.com/21/02/768x432/skynews-kim-kardashian-instagram_5268011.jpg?20210210153143");
    const token_royalty_type = new Map();
    token_royalty_type.set(1,"1");
    token_royalty_type.set(2,"2");
    const token_sale_price = new Map();
    token_sale_price.set(1,"100");
    token_sale_price.set(2,"200");
    const token_owners = new Map();
    token_owners.set(1,"0");
    token_owners.set(2,"1");

     const getRoyaltyType = (royalty_type_code: string) => {
        if(royalty_type_code === "1"){
            return "No Royalty";
        }else if (royalty_type_code === "2") {
            return "Creator Royalty";
        }else if (royalty_type_code === "3") {
            return "Inherited Royalty";
        }else{
            return "No Royalty";
        }
    };
    let formattedListings: { id: any; name: string; image: any; royalty_type: string; price: any; user_is_host: boolean; }[] = [];
    token_uris.forEach(
        (value, key, map) => {
            formattedListings.push({
                id: key,
                name: token_names.get(key),
                image: token_uris.get(key),
                royalty_type: getRoyaltyType(token_royalty_type.get(key)),
                price: token_sale_price.get(key),
                user_is_host: token_owners.get(key) === "0",
            });
        }
    );

    return formattedListings;

}

export default formatListings;
