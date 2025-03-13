import { useContext } from "react";
import UserContext from "../utils/UserContext";

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = ({resData}) => {
    // const {resData} = props
    // console.log("resData", resData);
    
    const {name, avgRating, costForTwo, cuisines, cloudinaryImageId = "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg"} = resData;
    // const {name, rating, costForTwo, cuisines, image} = props
    // console.log("cuisines", cuisines);

    const { loggedInUser } = useContext(UserContext)
    
    return (
        <div className="m-4 p-4 w-[250px] break-words rounded-lg bg-gray-200 hover:bg-gray-300 ">
            <img className="res-image rounded-lg" 
            alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{cuisines.join(",")}</h4>
            <h4>User : {loggedInUser}</h4>
            {/* // alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.cards.cloudinaryImageId}></img>
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.locality}</h4>
            <h4>{resData.data.costForTwo}</h4>
            <h4>{resData.data.cuisines}</h4> */}
        </div>
    )
   }

   
    export const withOffersLabel = (RestaurantCard) => {
    return (props) => {
        const { resData } = props;
        const discountInfo = resData.aggregatedDiscountInfoV3;
        return (
            <div >
            
                <div className="absolute top--2 right--1 bg-red-500 text-white text-xs px-4 py-2 rounded-bl-lg rounded-tr-lg">
                    <strong>{discountInfo.header}</strong> — {discountInfo.subHeader}
                </div>
            
            <RestaurantCard {...props} />
        </div>
        )
    }
   }

   export default RestaurantCard