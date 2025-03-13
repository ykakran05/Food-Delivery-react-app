import { useDispatch } from "react-redux";
import { MENU_IMG } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    // console.log({items});

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item));
    }
    
    return (
        <div>
             {items.map((item) => (
                <div key = {item.card.info.id} className="p-2 m-2 border-b-1 border-gray-300 text-left flex justify-between items-center">
                    {/* <img src={MENU_IMG + item.card.info.imageId} className="w-15"></img> */}
                    
                        
                        <div className="py-2 flex-1">
                        <div>{item.card.info.name}</div>
                        <div>₹ {item.card.info.price/100 ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</div>
                        <p className="text-xs">
                        {item.card.info.description}
                        </p>
                    
                        
                    </div>
                       

                    <div>
                    
                    <button className="absolute top--1 left--2 bg-red-500 text-white text-xs px-4 py-2 rounded-bl-lg rounded-tr-lg cursor-pointer"
                    onClick={() => handleAddItem(item)}>Add +</button>
                </div>
                <img 
                        src={MENU_IMG + item.card.info.imageId} 
                        className="w-24 h-24 object-cover rounded-lg"
                    />
            
             </div>
             
             ))}
        </div>
    )
}

export default ItemList