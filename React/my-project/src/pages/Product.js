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

  return <section>
    <div>
      with data
      <ProductList products={products} />
    </div>
    </section>
  
}

export default Product;
