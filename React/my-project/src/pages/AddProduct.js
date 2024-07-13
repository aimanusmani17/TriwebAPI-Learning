import AddProductForm from "../components/Product/AddProductForm";

function AddProduct(){

     function addProductHandler(newProduct){

          console.log("newProduct",newProduct);
          fetch("http://localhost:3002/product", {
               method:"POST",
               body: newProduct,
               headers:{
                    'Content-Type': 'application/json'
               }
          })
     }
     return <AddProductForm  addProductHandler={addProductHandler}/>

}

export default AddProduct;