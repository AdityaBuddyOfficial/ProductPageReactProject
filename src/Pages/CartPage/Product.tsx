import React from 'react'

const Product = ({cartAddedData}:any) => {
  console.log("🚀 ~ Product ~ cartmeDalaHuaData inside the maine cart product:", cartAddedData)
  return (
    <div style={{border:"1px solid white"}}>
      <div style={{color:"orange"}}>
        <h2>
        {cartAddedData.productName}
        </h2>
        <div style={{height:"50px", overflow:"scroll", textOverflow: "ellipsis",color:"white"}}>{cartAddedData.description}</div>
        </div>
      

    </div>
  )
}

export default Product
