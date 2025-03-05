import { useState, useEffect } from "react";
import ProductCardData from "../Api Data/Product/ProductCardData";

export function useSearchHook(input:any,Product:any)


{
    
    const [productData,setProductData]=useState(Product)
    console.log("🚀 ~ productData:", productData)



    useEffect(() => {

        if(input === "") {
            setProductData(ProductCardData);}
        else{
            const filteredData = ProductCardData.filter((e) =>
                e.productName.toLowerCase().includes(input.toLowerCase())
           
            );
            input?setProductData(filteredData):setProductData(ProductCardData);
 
        }
   
      
      
    }, [input]);

    return{productData}
}