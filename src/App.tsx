import { useEffect, useState } from "react";

import "./App.css";

import CarouselSlider from "./Pages/Products/CarouselSlider";
import Nav from "./NavBar/Nav";
import navData from "./CMS Data/NavBarCms/navBarCms";
import ProductCardData from "./Api Data/Product/ProductCardData";
import CartCms from "./CMS Data/ProductCms/ProductCartCms";

function App() {
const [searchInput,setSearchInput]=useState("");
console.log("🚀 ~ App ~ searchInput:", searchInput)
const [productData,setProductData]=useState(ProductCardData)



useEffect(() => {
  const filteredData = ProductCardData.filter((e) =>
      e.productName.toLowerCase().includes(searchInput.toLowerCase())
  );
  searchInput?setProductData(filteredData):setProductData(ProductCardData);
  
}, [searchInput]);
  return (
    <>
      <Nav navCms={navData} setSearchInput={setSearchInput} searchInput={searchInput}/>
      <CarouselSlider productData={productData} productCms={CartCms}/>
    </>
  );
}

export default App;
