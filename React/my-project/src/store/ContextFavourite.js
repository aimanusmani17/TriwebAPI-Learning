import {createContext, useState} from 'react'; 

const FavouriteContext = createContext({
    favouriteItems: [],
    addFavouriteItem: () => {},
    removeFavouriteItem: () => {},
    isFavouriteItem: () => {} 
});
export function ContextFavourite(props) {
    const [userFavourite, setUserFavourite] = useState([]);
    //add
    const addFavouriteItem = (product) => {
        setUserFavourite((prevUserFavoutite) => {
            return prevUserFavoutite.concat(product);
        });
    };
    //remove
    const removeFavouriteItem = (id) => {
        setUserFavourite((prevUserFavoutite) => {
            return prevUserFavoutite.filter((product) => product._id !== id);
        });
    };
    //check
    const isFavouriteItem = (id) => {
        return userFavourite.some((product) => product._id === id);
    };
    const context = {
        favouriteItems: userFavourite,
        addFavouriteItem: addFavouriteItem,
        removeFavouriteItem: removeFavouriteItem,
        isFavouriteItem: isFavouriteItem
    };
    return <FavouriteContext.Provider value={context}>
        {props.children}
    </FavouriteContext.Provider>
};

export default FavouriteContext;