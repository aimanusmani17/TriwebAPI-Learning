
import Styles from './ProductItem.module.css'
import CustomWrapper from '../layouts/CustomWrapper';
import FavouriteContext from '../../store/ContextFavourite';
import {useContext} from 'react'


function ProductItem(props){
    console.log(props.item)
    const favouriteContext = useContext(FavouriteContext);
    const isFavourite = favouriteContext.isFavouriteItem(props.item._id);


    const toggleFavourite = () => {
        if (isFavourite){
            favouriteContext.removeFavouriteItem(props.item._id)
            
        }else{
            favouriteContext.addFavouriteItem({...props.item});

        }
    }
    
  return <li key={props.item._id}>
      <CustomWrapper>
        <div className={Styles.image}>
            <img src="https://img.freepik.com/free-vector/flat-background-world-tourism-day-celebration_23-2149570029.jpg" alt="no" ></img>
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
