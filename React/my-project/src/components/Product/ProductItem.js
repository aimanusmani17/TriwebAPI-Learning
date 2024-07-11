
import Styles from './ProductItem.module.css'
import Wrapper from '../layouts/Wrapper';


function ProductItem(props){
  return <li key={props.item.id}>
      <Wrapper>
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
        </Wrapper>
      
    </li>;
  
}

export default ProductItem;