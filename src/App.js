import React from "react";
import CartItem  from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
  
class App extends React.Component {
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

getCartCount = () => {
  const {products} = this.state;
  let count = 0;
  products.forEach((product) =>{
    count += product.qty;
  });

  return count;
}

getTotalPrice = () => {
  const {products} = this.state;
  let price = 0;
  products.forEach((product) =>{
    price += product.price * product.qty;
  });

  return price;
}


  render(){
    const{products} = this.state;   
    return (
      <div className="App">   
        <Navbar  count = {this.getCartCount()}/>
        {/* <CartItem /> */}
        <Cart               
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity} 
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
        />
         <div style={{padding:10,fontSize:20}}>Total Price: {this.getTotalPrice()}</div>
      </div>

    );
  }
}

export default App;
