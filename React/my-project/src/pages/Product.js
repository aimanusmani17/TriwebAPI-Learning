import ProductList from "../components/Product/ProductList";

function Product() {
  let products = [
    {
      id: "p1",
      image: " ",
      product_name: "Country tour",
      description: " World tour",
      price: "10000000",
    },
    {
      id: "p2",
      image: " ",
      product_name: "City tour",
      description: " famous five city tour",
      price: "5000000",
    }
  ];

  return <div>
    <ul>
      {products.map((item) => {
        return <li key={item.id}> {item.product_name}</li>
      })}
      <ProductList />
    </ul>
  </div>;
}

export default Product;
