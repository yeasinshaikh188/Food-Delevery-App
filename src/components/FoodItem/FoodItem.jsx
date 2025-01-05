import { useSearchParams } from "react-router-dom"
import { assets } from "../../assets/assets"
import "./FoodItem.css"
import { useState } from "react"

function FoodItem({id, price, description, image, name}) {

    const [itemCount, setItemCount] = useState(0); 
  return (
    <div className="food-item">
        <div className="food-item-img-container">
            <img className="food-item-image" src={image} alt="" />
            {!itemCount
             ? <img className="add" onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt="" />
             :<div className="food-item-counter"></div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem