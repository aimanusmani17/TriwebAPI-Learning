import ProductList from "../components/Product/ProductList";
import { useState,useEffect } from "react";


function Product() {
  let [products, setProducts] = useState([]);
  let [isDataFetching, setIsDataFetching] = useState(true);

  useEffect(() => {
    setIsDataFetching(true);
    fetch("http://localhost:3002/product")
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData.data);
        setIsDataFetching(false);
        setProducts(responseData.data);
      })
      .catch(err => console.log(err));
  }, []);

  if (isDataFetching) {
    return <div>
      Data is loading
      </div>;
  }

  return 
    <div>
      with data
      <ProductList products={products} />
    </div>
   
  
}

export default Product;
