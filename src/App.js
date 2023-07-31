import React from "react";
import CartItem  from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

  
class App extends React.Component {
  constructor(){
    super();

    this.state = {
        products:[],
        loading:true
        // products :[
        //     {
        //         price:100,
        //         title:'Watch',
        //         qty:1,
        //         img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
        //         id:1
        //     },
        //     {
        //         price:20000,
        //         title:'phone',
        //         qty:5,
        //         img:'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
        //         id:2
        //     },
        //     {
        //         price:10000,
        //         title:'Laptop',
        //         qty:4,
        //         img:'https://media.istockphoto.com/id/1389603578/photo/laptop-blank-screen-on-wood-table-with-blurred-coffee-shop-cafe-interior-background-and.webp?b=1&s=170667a&w=0&k=20&c=fPqy8pPGL4IQa2LvQQ2tX9qUPmIhPfmqu-xEVMEC1vY=',
        //         id:3
        //     }
        // ]
    }      
  }

  componentDidMount(){
      firebase
        .firestore()
        .collection('products')
        .get()
        .then(snapshot => {
          console.log(snapshot);

          // snapshot.docs.map((doc)=>{
          //   console.log(doc);
          // })
          const products =  snapshot.docs.map((doc)=>{
            const data = doc.data();
            data["id"] = doc.id;
            return data;
          });

          this.setState({
            products,
            loading:false
          })
        })
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
    const{loading,products} = this.state;   
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
        {loading && <h1>Loading Products...</h1>}
         <div style={{padding:10,fontSize:20}}>Total Price: {this.getTotalPrice()}</div>
      </div>

    );
  }
}

export default App;
