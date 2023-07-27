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
        this.testing();
    }

    testing(){
        const promise = new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve("done");
            },5000)
        });

        promise.then(()=>{
            //setState acts like a synchronous call

            this.setState({qty:this.state.qty+10});
            this.setState({qty:this.state.qty+10});
            this.setState({qty:this.state.qty+10});

            console.log("state",this.state);
        });
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
        const {qty} = this.state;
        if(qty === 0){
            return;
        }
            this.setState((prevState) =>{                                               
                    return{
                        qty:prevState.qty - 1 
                    }                 
            });
       }

    render(){
        console.log(this.props);
        const {price,title,qty} = this.props.product;
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