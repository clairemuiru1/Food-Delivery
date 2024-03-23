import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { Store } from '../../Context/Store'
import { useNavigate } from 'react-router-dom';

function Cart() {
    const { cartItem, food_list, removeFromCart, getTotalCartAmount } = useContext(Store);
    
    const navigate = useNavigate()

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
                {food_list.map((item) => {
                    if (cartItem[item._id] > 0) {
                        return (
                            <div key={item._id}>
                                <div className='cart-items-title cart-items-item'>
                                    <img src={item.image} alt=''/>
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItem[item._id]}</p>
                                    <p>${item.price * cartItem[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
                                </div>
                                <hr className='line'/>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount()===0?0:2}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <b>Total</b><b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <button onClick={()=> navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code, Enter it here</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder="Promo Code"/>
                            <button>Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
