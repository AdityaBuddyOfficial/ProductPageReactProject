import { useEffect, useState } from "react";

import "./App.css";

import CarouselSlider from "./Pages/Products/CarouselSlider";
import Nav from "./Pages/NavBar/Nav";
import navData from "./CMS Data/NavBarCms/navBarCms";
import CartCms from "./CMS Data/ProductCms/ProductCartCms";
import CartPage from "./Pages/CartPage/CartPage";
import { useSearchHook } from "./Services/useSearchHook";
import { useAddedCart } from "./Services/useAddedProduct";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import { useAppDispatch, useAppSelector } from "./ReduxStore/hooks";
import { addCart } from "./ReduxStore/slices/cartProduct";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <HomePage />,
  //   },
  //   {
  //     path: "/cart",
  //     element: <CartPage />,
  //   },
  // ]);
  const dispatch = useAppDispatch();
  const productListData = useAppSelector((state: any) => state.productPageData);
  console.log("🚀 ~ App ~ dataOfRedux:", productListData);

  const [searchInput, setSearchInput] = useState("");
  console.log("🚀 ~ App ~ searchInput:", searchInput);
  const [id, setId] = useState("");

  function onclickProductId(id: any) {
    console.log("🚀 ~ App ~ id:", id);
    setId(id);
  }

  const cartAddedData: any = useAddedCart(id, productListData);
  console.log(
    "🚀 ~ App ~ cartAddedData inside app which is filtered:",
    cartAddedData
  );

  useEffect(() => {
    if (cartAddedData && cartAddedData.length > 0) {
      dispatch(addCart(cartAddedData));
    } else {
      console.log("No product added to the cart.");
    }
  }, [cartAddedData]);

  const cartAddedDataInRedux = useAppSelector((state: any) => state.cartData);

  console.log(
    "🚀 ~ App ~ cartAddedDataInRedux comming from redux after store:",
    cartAddedDataInRedux
  );

  const { productData } = useSearchHook(searchInput, productListData);

  return (
    <>
      <HomePage>
        <Nav
          navCms={navData}
          setSearchInput={setSearchInput}
          searchInput={searchInput}
          cartAddedData={cartAddedData}
        />
        <CarouselSlider
          productData={productData}
          productCms={CartCms}
          onclickProductId={onclickProductId}
          // handleAddCartData={handleAddCartData}
        />
      </HomePage>

      <CartPage />

      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
