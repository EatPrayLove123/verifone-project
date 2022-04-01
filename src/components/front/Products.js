import React from 'react';
import { FaOpencart} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = ( {productItems, handleAddProduct} ) => {

    console.log(productItems)

  return (
      <>
       <div className='mx-5'>
            {productItems.map(productItem => (
               <div className="card"> 
                    <div className="items ">
                        <p key={productItem.id} className='product-name'>
                            {productItem.name} </p>
                        <p className='price'> <b> Price: <span className="blue"> {productItem.price} </span></b></p>
                        <button className="product-button" onClick={() => handleAddProduct(productItem)}> <FaOpencart className="icon"/> <b>Add to cart  </b> </button>       
                    </div>
                 </div>
            ))}       
      </div>
    
    </>
  )
}

export default Products;