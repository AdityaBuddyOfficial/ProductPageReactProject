import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ProductCard';

const CarouselSlider = ({ productData,productCms,onclickProductId}:any) => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        
      };


  return (
    <Slider  {...settings} >
        {productData.map((productData:any)=>
(<ProductCard data={productData} productCms={productCms} key={productData.id} onclickProductId={onclickProductId}/>)
   
          )}

    </Slider>
  )
}

export default CarouselSlider
