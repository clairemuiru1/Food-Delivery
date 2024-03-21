import React, { useState } from 'react'
import './Fooditem.css'
import rating_starts from '../../assets/rating_starts.png'
import add_icon_white from '../../assets/add_icon_white.png'
import add_icon_green from '../../assets/add_icon_green.png'
import remove_icon_red from '../../assets/remove_icon_red.png'
function FoodItem({id,name,price,description,image}) {

    const [itemCount,setItemCount] = useState(0)

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-img' src={image} alt=""/>
        {!itemCount
            ?<img className='add' onClick={()=>setItemCount(prev=> prev+1)} src={add_icon_white}/>
            :<div className='food-item-counter'>
                <img onClick={()=>setItemCount(prev=> prev-1)} src={remove_icon_red}/>
                <p>{itemCount}</p>
                <img onClick={()=>setItemCount(prev=> prev+1)} src={add_icon_green}/>
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
