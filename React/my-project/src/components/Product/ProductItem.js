
import Styles from './ProductItem.module.css'
import CustomWrapper from '../layouts/CustomWrapper';
import FavouriteContext from './store/ContextFavourite';
import {useContext} from 'react'


function ProductItem(props){

    const FavouriteContext = useContext(FavouriteContext);
    const isFavouriteItem = favouriteContext.isFavouriteItem(props.item._id)


    cont toggleFavourite = () => {
        if(isFavourite){
            favouriteContext.removeFavouriteItem(props.item._id)
            console.log("removed")
        }else{
            favouriteContext.addFavouriteItem({...props.item});
            console.log("added")
        }
        }
    }
  return <li key={props.item._id}>
      <CustomWrapper>
        <div className={Styles.image}>
            <img src={props.item.image} alt="no" />
        </div>
        <div className={Styles.content}>
            <h2>{props.item.product_name}</h2>
            <p>{props.item.description}</p>
            <h3>{props.item.price}</h3>
        </div>
        <div className={Styles.btn}>
            <button>BUY</button>
        </div>
<div>
    <button  className= {isFavourite?Styles.heartfvrt: Styles.heartUnfvrt} onClick= {toggleFavourite}></button>
    

        </div>

        </CustomWrapper>
      
    </li>;
  
}

export default ProductItem;
