import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super();

        this.state = {
            products :[
                {
                    price:100,
                    title:'Watch',
                    qty:1,
                    img:'',
                    id:1
                },
                {
                    price:20000,
                    title:'phone',
                    qty:5,
                    img:'',
                    id:2
                },
                {
                    price:10000,
                    title:'Laptop',
                    qty:4,
                    img:'',
                    id:3
                }
            ]
        }
    }

    render(){
        const { products } = this.state;
        return(
            <div className="cart">
               {
                //   arr.map((item)=>{
                //     return item+5;
                //   })

                products.map((product) =>{
                    return <CartItem product={product} key={product.id} />
                })
               }
            </div>
        );
    }
}

export default Cart;