import React, { useEffect, useState } from "react";
import Product from "./Product";
import QuantityButton from "./QuantityButton";

const CartPage = ({ cartAddedData }: any) => {
  console.log("🚀 ~ CartPage ~ cartAddedData in the map:", cartAddedData);
  const itemInCart = cartAddedData?.length;

  return (
    <div
      style={{
        border: "1px solid white",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "white" }}>Your cart has {itemInCart} items</h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            <th style={{ backgroundColor: "black", padding: "10px" }}>
              Product
            </th>
            <th
              style={{
                backgroundColor: "black",
                padding: "10px",
                width: "200px",
              }}
            >
              Price
            </th>
            <th style={{ backgroundColor: "black", padding: "10px" }}>
              Quantity
            </th>
            <th
              style={{
                backgroundColor: "black",
                padding: "10px",
                width: "200px",
              }}
            >
              Total Price
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(cartAddedData) &&
            cartAddedData.map((e: any) => (
              <tr>
                <td
                  style={{
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Product cartAddedData={e} />
                </td>
                <td style={{ padding: "10px" }}>{e.price}</td>
                <td
                  style={{
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <QuantityButton data={e} />
                </td>
                <td style={{ padding: "10px" }}>{e.totalPrice}</td>
              </tr>
            ))}

          <tr>
            <td colSpan="3" style={{ textAlign: "right", padding: "10px" }}>
              <strong>Total</strong>
            </td>
            <td style={{ padding: "10px" }}>
              <strong>200.00</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartPage;
