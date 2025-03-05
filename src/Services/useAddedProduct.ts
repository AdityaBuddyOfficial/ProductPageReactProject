import { useEffect, useState } from "react";

export function useAddedCart(id: any, product: any) {
  // const [cartData,setCartData]=useState(product);
  const [tempData, setTempData] = useState(product);
  console.log("🚀 ~ temp kisgfoiuagdosfugvaosvfovasd:", tempData);

  useEffect(() => {
    const filterData = product.filter((item: any) => item.id === id);
    console.log("🚀 ~ useEffect ~ filterData:", filterData);
    // setTempData((e)=>[...e,filterData]);
    setTempData((prev) => [...prev, filterData]);
  }, [id, product]);

  return tempData;
}
