import { useContext } from "react";
import ProductList from "../components/Product/ProductList";
import FavouriteContext from  "../store/ContextFavourite";


function FavItem() {
    const favouriteContext = useContext(FavouriteContext);
    
    return <div>
        <ProductList productList={favouriteContext.favouriteItem}/>
    </div>
    
}

export default FavItem;