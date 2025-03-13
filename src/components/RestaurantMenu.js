import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";



const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(null);
    
    
    const {resId} = useParams();
    // console.log("res", resId)

    const resInfo = useRestaurantMenu(resId);


    if (resInfo === null) return <Shimmer/> 
    // console.log(resId);
    

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    
    // const {itemCards} = 
    // console.log(name);

    // const {itemCards} = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // console.log("categories", resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    
    const categories = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log("cat",categories);
    
    // console.log(itemCards);
    
    // console.log("menu",resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    
    

    // if(resInfo === null) return <Shimmer/> 

    return (
        <div className="menu text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} -  
            {costForTwoMessage}
            </p>

            {/* Categories Accordions */}

            {categories.map((category, index) => (
                <RestaurantCategory key={category?.card?.card?.title}
                                    data = {category?.card?.card}
                                    showItems = {index === showIndex ? true : false}
                                    setShowIndex = {() => setShowIndex(index === showIndex ? null : index)}/>
            ))}
            {/* <h2>Menu</h2>
            <ul>
                {
                    itemCards.map((item) => (
                        <li key={item.card.info.id}>{item.card.info.name} - {" Rs. "}{item.card.info.price/100} 
                        <img width={100} src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`} alt={item.card.info.name} /></li>
                    ))
                }
            </ul> */}
        </div>
    )
}

export default RestaurantMenu