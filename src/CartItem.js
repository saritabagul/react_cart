import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price:999,
            title:'phone',
            qty:1,
            img:'',
        };
        
    }
    render(){
        const {price,title,qty} = this.state;
        return(
        <div className="cart-item">
            <div className='left-block'>
                <img style={styles.image}/>
            </div>
            <div className='right-block'>
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>{price}</div>
                <div style={{color:'#777'}}>Qty:{qty}</div>
                <div className='cart-item-actions'>{/*button*/}</div>
            </div>
        </div>
    );    
    }
}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:'#ccc'
    }
}

export default CartItem;