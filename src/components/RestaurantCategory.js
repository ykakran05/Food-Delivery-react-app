import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    // console.log({data});

    // const [showItems, setShowItems] = useState(false)
    
    const handleClick = () => {
        // setShowItems(!showItems);
       setShowIndex();
        
    }
    
    return (
        <div>
            {/* Header accordion */}
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>▼</span>
                </div>

                
                    {/* body accordion */}

                    {showItems && <ItemList items={data.itemCards}/>}
                
                
            </div>

            
        </div>
    )
}

export default RestaurantCategory