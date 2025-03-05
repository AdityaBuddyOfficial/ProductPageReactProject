import React, { useEffect, useState } from "react";

const QuantityButton = ({ key, data }: any) => {
  console.log("🚀 ~ QuantityButton inside the counter ~ e:", data);
  const [counter, setCounter] = useState(1);
  const [updatedData, setUpdatedData] = useState(data);
  console.log("🚀 ~ QuantityButton ~ updatedData:", updatedData);

  const incrementHandler = () => {
    setCounter((prevCounter) => {
      const newCounter = prevCounter + 1;
      updateData(newCounter);
      return newCounter;
    });
  };

  const decrementHandler = () => {
    if (counter >= 1) return;
    setCounter((prevCounter) => {
      const newCounter = prevCounter - 1;
      updateData(newCounter);
      return newCounter;
    });
  };
  const updateData = (newCounter: any) => {
    const newData = {
      ...updatedData,
      totalPrice: newCounter * parseInt(updatedData.price.replace(/,/g, "")),
    };
    setUpdatedData(newData);
  };

  // useEffect(() => {
  //   setTempData(updateData);
  // }, [counter]);

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid white",
        borderRadius: "20px",
        width: "150px",
        height: "50px",
        justifyContent: "space-evenly",
        marginTop: "30px",
      }}
    >
      <div
        style={{
          borderRight: "1px solid white",
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          paddingRight: "10px",
        }}
        onClick={decrementHandler}
      >
        −
      </div>

      <div style={{ marginTop: "-10px" }}>
        <h3>{counter}</h3>
      </div>
      <div
        style={{
          borderLeft: "1px solid white",
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          paddingLeft: "10px",
        }}
        onClick={incrementHandler}
      >
        +
      </div>
    </div>
  );
};

export default QuantityButton;
