import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import { Route, Routes } from "react-router-dom";

import Product  from "./pages/Product";
import Layout from "./components/layouts/Layout";
import AddProduct from "./pages/AddProduct";


function App() {
  return (
    <Layout>
     
      <Routes>
        <Route path="/About" element={<About />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/Product/add" element={<AddProduct />}></Route>
      </Routes>
      </Layout>
  );
}

export default App;
