import React from 'react';
import { BsFillInfoCircleFill} from "react-icons/bs";
import Tooltip from "react-simple-tooltip"
import 'bootstrap/dist/css/bootstrap.min.css';


const Cart = ({cartItems, handleAddProduct, handleRemoveProduct})=>{
  
    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
  
    return ( 
  
    

  <div className='cart-card' >
    <div className="container">

    {cartItems.length === 0 ? <h3 className='cart-title'>No products in your shopping cart</h3>: 
        <><h3 className='cart-title'>Products in your shopping cart</h3><div className="row">
            <div className="col-lg-6">
                <p>Product </p>
            </div>
            <div className="col-lg-2 ">
                <p> Quantity  </p>
            </div>
            <div className="col-lg-2">
                <p>Value</p>
            </div>
                <div className='cart-border'></div>
            </div></>
    }
        {cartItems.map((item) => (
            <div key={item.id}>
                    <div className="row">
                        <div className="col-lg-6">                          
                            <div><b>{item.name} </b> <Tooltip className='mx-2' content={item.description} placement='right' background='white' color='black' > <BsFillInfoCircleFill/> </Tooltip>
                              </div>
                            
                            
                        </div>

                        <div className="col-lg-2 ">
                            
                            <div className='d-flex'>
                                <button className='add-item' onClick={() => handleAddProduct(item)}>+</button>
                                <div className="quantity-box">{item.quantity}</div>
                                <button className='remove-item' onClick={()=> handleRemoveProduct(item)}>-</button>
                            </div>
                        </div>                     

                        <div className="col-lg-2">
                            
                            <div className="cart-price"><b>{item.price}</b></div>
                        </div>    
                </div>
            </div>
        ))}
        {cartItems.length === 0 ? <div></div> : <div>
            <div className='cart-border-bottom'></div>
            <div className='total'> <b> Total:{totalPrice} </b></div>
            <button className='button2'>Continue</button>
        </div>}
        
    </div>
  </div>
)            
};

export default Cart;