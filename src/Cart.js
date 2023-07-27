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

    handleIncreaseQuantity = (product) =>{
        console.log('Inc qty',product);

        const{products} = this.state;            
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            // products:products  //or
            products
        });
    }

    handleDecreaseQuantity = (product) =>{
        // console.log('Inc qty',product);

        const{products} = this.state;            
        const index = products.indexOf(product);
        if(products[index].qty === 0){
           return;
        }
        products[index].qty -= 1;
        this.setState({
            // products:products  //or
            products
        });
    }

    handleDeleteProduct = (id) =>{
        const {products} = this.state;

        const items = products.filter((item) => {
            return item.id !== id
        });

        this.setState({
            products:items
        });
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
                    return <CartItem 
                    product={product} 
                    key={product.id} 
                    onIncreaseQuantity = {this.handleIncreaseQuantity} 
                    onDecreaseQuantity = {this.handleDecreaseQuantity}
                    onDeleteProduct = {this.handleDeleteProduct}/>
                })
               }
            </div>
        );
    }
}

export default Cart;