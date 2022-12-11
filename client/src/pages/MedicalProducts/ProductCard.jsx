import   React from 'react';
  import { useState } from 'react';
import { Rate } from 'antd';
import h from './images/h.PNG'
import './Product.css'
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { set } from 'mongoose';
function ProductCard({product,setR}) {
const [rating,setRating]=useState(product.rating);
console.log(rating);

function a(value){
    setRating(value)
}

const reload= () => {
  setR(true)
}

  return (
    <>
    <Link  onClick={reload}  to={`/medproducts/${product.name.split(' ')[0]}?id=${product._id}`}>
    <div  style={{ margin:'auto',marginBottom:'2rem'}}   class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={product.images[0]} alt="Avatar" style={{width:'100%', borderRadius: '12px',  height:'200px'}}/>
    </div>
    <div class="flip-card-back">
      <h5   style={{color:'whitesmoke'}}>{product.name}
</h5> 
      <h6 style={{color:'whitesmoke',fontWeight:'700', backgroundColor:'#0000ff1a', width:'fit-content',margin:'auto' ,borderRadius:'6px',padding:'4px'}} >Le 0,000</h6> 
     
        <Rate allowHalf style={{color:'gold',margin:'auto',  fontSize:'1rem'}} onChange={a} defaultValue={product.rating}  />
        <span style={{ color:'white'}}>In Stock:{product.countInStock}</span>
      <span style={ { color:'white'}}  >Free shipping</span>
    </div>
  </div>
</div>

</Link>
    
    </>
  );
}

export default ProductCard;
