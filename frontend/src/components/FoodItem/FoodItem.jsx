import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,description,image,price}) => {
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)
  return (
    <div>
      <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-image' src={"http://localhost:4000/images/"+ image} alt="" />
            {!cartItems[id]? 
            <img src={assets.add_icon_white} className="add" onClick={() => addToCart(id)} />
            :
            <div className='food-item-counter'>
                <img src={assets.remove_icon_red} alt="" onClick={() => removeFromCart(id)}/>
                <p> {cartItems[id]} </p>
                <img src={assets.add_icon_green} alt="" onClick={() => addToCart(id)} />

                </div>
            }
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p> {name} </p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-desc'> {description} </p>
            <p className='food-item-price'> ${price}</p>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
