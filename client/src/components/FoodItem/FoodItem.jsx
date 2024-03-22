import React, { useContext } from 'react'
import './Fooditem.css'
import rating_starts from '../../assets/rating_starts.png'
import add_icon_white from '../../assets/add_icon_white.png'
import add_icon_green from '../../assets/add_icon_green.png'
import remove_icon_red from '../../assets/remove_icon_red.png'
import { Store } from '../../Context/Store'
function FoodItem({id,name,price,description,image}) {

    const {cartItem, addToCart, removeFromCart,} = useContext(Store)

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-img' src={image} alt=""/>
        {!cartItem[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={add_icon_white}/>
            :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={remove_icon_red}/>
                <p>{cartItem [id]}</p>
                <img onClick={()=>addToCart(id)} src={add_icon_green}/>
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-ratings">
            <p>{name}</p>
            <img  src={rating_starts} alt=""/>
        </div>
        <p className="food-item-desc">
            {description}
        </p>
        <p className="food-item-price">
            ${price}
        </p>
      </div>
    </div>
  )
}

export default FoodItem
