import ProductList from "../components/Product/ProductList";

function Product() {
  let products = [
    {
      id: "p1",
      image: "https://img.freepik.com/premium-photo/illustration-famous-monument-world_117023-16.jpg",
      product_name: "Country tour",
      description: " World tour",
      price: "10000000",
    },
    {
      id: "p2",
      image: " https://www.shutterstock.com/image-photo/tourists-enjoying-views-new-york-600nw-1399814936.jpg",
      product_name: "City tour",
      description: " famous five city tour",
      price: "5000000",
    }
  ];

  return <div>
    
      {/* {products.map((item) => {
        return <li key={item.id}>{item.product_name}</li>;

      })} */}

      <ProductList products={products}/>
    
  </div>;
}

export default Product;
