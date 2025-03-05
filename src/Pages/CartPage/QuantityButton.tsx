import React from "react";

const QuantityButton = ({counter,incrementHandler,decrementHandler}:any) => {
  return (
    <div style={{ display: "flex",border:"1px solid white",borderRadius:"20px" ,width:"150px",height:"50px",justifyContent:"space-evenly",marginTop:"30px"}}>
      <div style={{borderRight:"1px solid white",display:"flex",justifyContent:"center",fontSize:"30px",paddingRight:"10px"}} onClick={ decrementHandler}>−</div>
     
      <div style={{marginTop:"-10px"}}>
        <h3>{counter}</h3>
      </div>
      <div style={{borderLeft:"1px solid white",display:"flex",justifyContent:"center",fontSize:"30px",paddingLeft:"10px"}} onClick={incrementHandler}>+</div>
    </div>
  );
};

export default QuantityButton;
