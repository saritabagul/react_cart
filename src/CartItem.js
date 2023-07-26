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

       increaseQuantity = () => {
        // console.log('this',this.state);
        // form 1 : used when did not required prev state or just change the things..for ex. change title does not need prev state
        // this.setState({
        //     qty:this.state.qty +1
        // });

        //form 2  // used when required prev state
        this.setState((prevState) => {
            return{
              qty:prevState.qty +1
            }              
        });
       } 

       decreaseQuantity = () =>{
            this.setState((prevState) =>{
                if(prevState.qty !== 0){                                 
                    return{
                        qty:prevState.qty - 1 
                    }
                }else{
                    return{
                        qty:0
                    }
                }    
            });
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
                <div className='cart-item-actions'>
                    {/*button*/  }
                    <img alt="increase" onClick={this.increaseQuantity} className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992651.png"/>
                    <img alt="decrease" onClick={this.decreaseQuantity} className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"/>
                    <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"/>
                  
                </div>
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