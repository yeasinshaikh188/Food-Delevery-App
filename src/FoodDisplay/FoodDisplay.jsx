import { useContext } from "react"
import "./FoodDisplay.css"
import { storeContext } from "../StoreContext/StoreContext.JSX"
import FoodItem from "../components/FoodItem/FoodItem";

function FoodDisplay({category}) {

    const {food_list} = useContext(storeContext); 

  return (
    <div className="food-display" id="food-display">
        <h2>Top dishesh near you</h2>
        <div className="food-display-list">
            {food_list.map((item,index) =>{
                return <FoodItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} />
            })}
        </div>
    </div>
  )
}

export default FoodDisplay