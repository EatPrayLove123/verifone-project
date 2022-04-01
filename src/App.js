import React from 'react';
import './App.css';
import {useState} from 'react'; 
import data from "./components/back/data";
import Header from "./components/front/Header";
import Products from './components/front/Products';
import Cart from './components/front/Cart';

const App = () => {

  const { productItems } = data;
  const [ cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      { ...ProductExist, quantity: ProductExist.quantity + 1 } : item)
      );  
    }
    else{
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  };

  const handleRemoveProduct =(product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
      cartItems.map((item ) => 
      item.id === product.id 
      ? { ...ProductExist, quantity: ProductExist.quantity -1}
      : item
      )
    )
  }
  
  }
   

  return (
    <div className='bg'> 
      <div className="row">
        <div className="col-l-12">
          <Header/>
        </div>
        <div className="col-lg-6">
          <Products 
          productItems={productItems} 
          handleAddProduct={handleAddProduct}/>
        </div>
        <div className="col-lg-5">
          <Cart 
          cartItems={cartItems} 
          handleAddProduct={handleAddProduct} 
          handleRemoveProduct={handleRemoveProduct}/>
        </div>
      </div>
    </div>
  );
};

export default App;
