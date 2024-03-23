import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { Store } from '../../Context/Store'

function Cart() {

  const {cartItem,food_list,removeFromCart}=useContext(Store)
  return (
    <div className='card'>
      <div className="card-items">
        <div className="card-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item)=>{
          if(cartItem[item._id] >0){
            return(
              <div>
              <div className='cart-items-title cart-items-item' key={item._id}>
                <img src={item.image} alt=''/>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price*cartItem[item._id]}</p>
                <p onClick={()=> removeFromCart(item._id)} className='cross'>X</p>
               
              </div>
              <hr className='line'/>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Cart





