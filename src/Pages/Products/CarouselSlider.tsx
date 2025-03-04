import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ProductCard';
import ProductCardData from '../../Api Data/Product/ProductCardData';
import { useState } from "react";
import CartCms from "../../CMS Data/ProductCms/ProductCartCms";



const CarouselSlider = () => {

const [productData,setProductData]=useState(ProductCardData)
const [productCms,setProductCms]=useState(CartCms)
console.log("🚀 ~ CarouselSlider ~ productCms:", productCms)
console.log("🚀 ~ CarouselSlider ~ productData:", productData)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      };


  return (
    <Slider  {...settings} >
        {productData.map((productData:any)=>(<ProductCard data={productData} productCms={productCms}/>))}

    </Slider>
  )
}

export default CarouselSlider
