import React from 'react'

const ProductCard = ({data,productCms}:any) => { 
  console.log("🚀 ~ ProductCard ~ productCms:", productCms)
  return (
   <div style={{display:"flex",justifyContent:"center"}}>
  <div style={{border: '1px solid #ccc', padding: '16px', width: '300px', fontFamily: 'Arial, sans-serif'}}>
        <h2>{data?.productName}</h2>
        <div style={{height:"150px", overflow:"scroll", textOverflow: "ellipsis"}}>
          <p>{data?.description}</p>
        </div>
        <p style={{fontWeight: 'bold'}}>{productCms?.price}{data?.price}</p>
        <div style={{width:"100%",display:"flex",justifyContent:"space-evenly"}}>
        <button style={{backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer'}}>{productCms?.buy}</button>
        <button style={{backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer'}}>{productCms?.details}</button>
        </div>   
      </div>
   </div>
    

  )
}

export default ProductCard
