import { useEffect, useState } from "react";

export function useAddedCart(id: any, product: any) {
  const [tempData, setTempData] = useState([]);
  // console.log("🚀 ~ temp kisgfoiuagdosfugvaosvfovasd:", tempData);

  useEffect(() => {
    const filterData = product.filter((item: any) => item.id === id);
    if (filterData.length > 0) {
      setTempData((prev: any) => [...prev, ...filterData]);
    }
  }, [id, product]);

  return tempData;
}
