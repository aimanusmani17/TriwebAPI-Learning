
import Styles from './ProductItem.module.css'



function ProductItem(props){
  return <li key={props.item.id}>
      <div>
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
      </div>
    </li>;
  
}

export default ProductItem;
