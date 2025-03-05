import { useEffect, useState } from "react";

import "./App.css";

import CarouselSlider from "./Pages/Products/CarouselSlider";
import Nav from "./NavBar/Nav";
import navData from "./CMS Data/NavBarCms/navBarCms";
import CartCms from "./CMS Data/ProductCms/ProductCartCms";
import CartPage from "./Pages/CartPage/CartPage";
import { useSearchHook } from "./Services/useSearchHook";
import ProductCardData from "./Api Data/Product/ProductCardData";
import { useAddedCart } from "./Services/useAddedProduct";


function App() {
const [searchInput,setSearchInput]=useState("");
console.log("🚀 ~ App ~ searchInput:", searchInput)
const[id,setId]=useState("")

function onclickProductId(id:any)
{
  console.log("🚀 ~ App ~ id:", id)
  setId(id)
}

  const cartAddedData=useAddedCart(id,ProductCardData)
  console.log("🚀 ~ App ~ cartmeDalaHuaData:", cartAddedData)

const {productData}=useSearchHook(searchInput,ProductCardData)
  return (
    <>
  
      <Nav navCms={navData} setSearchInput={setSearchInput} searchInput={searchInput}/>
      <CarouselSlider productData={productData} productCms={CartCms} onclickProductId={onclickProductId}/>
      <CartPage cartAddedData={cartAddedData} />
    </>
  );
}



export default App;
