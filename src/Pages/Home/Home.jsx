import { useState } from "react"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import Header from "../../components/Header/Header"
import "./Home.css"
import FoodDisplay from "../../FoodDisplay/FoodDisplay";

function Home() {

  // function for menu
  const [category, setCategory] = useState("All"); 


  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home