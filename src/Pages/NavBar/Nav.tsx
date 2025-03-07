import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../ReduxStore/hooks";

const Nav = ({ navCms, setSearchInput, searchInput, cartAddedData }: any) => {
  const cartDataElement = useAppSelector((state: any) => state.cartData);
  // console.log("🚀 ~ Nav ~ navCms:", navCms);
  const validationOfCart = cartDataElement.length > 0;

  return (
    <div style={{ marginBottom: "20px" }}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "transparent",
          border: "1px solid white",
        }}
      >
        <div
          style={{
            height: "60px",
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            marginLeft: "10px",
          }}
        >
          {" "}
          {navCms?.companyLogo}
        </div>
        <h1
          style={{
            marginLeft: "20px",
            fontSize: "24px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {navCms?.companyName}
        </h1>

        <div
          style={{
            fontSize: "30px",
            // display: "flex",
            // justifyContent: "center",
            marginLeft: "50px",
            // marginBottom: "-30px",
          }}
        >
          {validationOfCart && (
            <div style={{ position: "relative", display: "inline-block" }}>
              <span style={{ fontSize: "24px" }}>🛒</span>
              <span
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "5px 10px",
                  fontSize: "12px",
                }}
              >
                {cartDataElement.length}
              </span>
            </div>
          )}
        </div>
        <input
          type="text"
          placeholder={navCms.placeholder}
          style={{
            marginLeft: "auto",
            padding: "5px",
            fontSize: "16px",
            width: "800px",
          }}
          value={searchInput}
          onChange={(e: any) => setSearchInput(e.target.value)}
        />
        <div
          style={{
            height: "60px",
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            marginLeft: "10px",
            marginTop: "15px",
          }}
        >
          {" "}
          {navCms?.searchLogo}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
