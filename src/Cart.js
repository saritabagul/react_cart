import React from "react";
import CartItem from "./CartItem";

// class Cart extends React.Component{
    const Cart = (props) =>{
    
    // render(){
        const { products } = props;
        return(
            <div className="cart">
               {
                //   arr.map((item)=>{
                //     return item+5;
                //   })

                products.map((product) =>{
                    return <CartItem 
                    product={product} 
                    key={product.id} 
                    onIncreaseQuantity = {props.onIncreaseQuantity} 
                    onDecreaseQuantity = {props.onDecreaseQuantity}
                    onDeleteProduct = {props.onDeleteProduct}/>
                })              
               }    
              </div>
        );
    // }
}

export default Cart;