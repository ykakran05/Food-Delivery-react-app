import { useState, useEffect, useContext } from "react";
import RestaurantCard, {withOffersLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    //Local State variable - super powerful variable
    const [listOfRestaurants, setListofRestaurants] = useState([]);   // empty array inside useState is the default value of the list 
    const [filteredList, setFilteredList] = useState([]);       // copy of lstOfRestaurants

    const [searchText, setSearchText] = useState("");


    const OffersRestaurantCard = withOffersLabel(RestaurantCard);

    console.log("Body rendered", listOfRestaurants)

     useEffect(() => {
        fetchData();
     }, []);

     const fetchData = async () => {
        try {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const json = await data.json();
          // console.log("API Response:", json);
    
          // Adjust extraction as necessary based on the API response structure.
          const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          // console.log("Cards Response:", restaurants);
          // Check if restaurants is an array; if not, log or handle accordingly.
          if (Array.isArray(restaurants)) {
            setListofRestaurants(restaurants);
            setFilteredList(restaurants)
          } else {
            console.error("Expected restaurants to be an array:", restaurants);
          }
        } catch (error) {
          console.error("Error fetching restaurant data:", error);
        }
      };
    // console.log("menu", listOfRestaurants);
    
      // if(listOfRestaurants.length === 0){
      //   return <Shimmer/>
      // }
      
    // Normal JS variable
    // let listOfRestaurantsJS = [];

    //conditional rendering :

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
      return (
        <h1>
          Looks like you're offline!! Please check your internet connection
        </h1>
      );
      
      const { loggedInUser, setUserName } = useContext(UserContext);

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex">
              <div className="m-4 p-4">
                  <input type="text" className="border border-solid border-black" value = {searchText}
                  onChange={(e) => {                                                  // e is the event
                      setSearchText(e.target.value)
                  }}
                  ></input>
                  <button className="px-2 py-0.5 m-2 border border-solid border-black bg-gray-400 rounded-b-lg"
                  onClick={() => {
                    // filter the restaurant cards and update the ui
                    // search text
                    // we just need to filter the restaurant list and update it for this

                    console.log(searchText);
                    const filteredRestaurants = listOfRestaurants.filter(
                      (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                      setFilteredList(filteredRestaurants)
    
                }}>Search</button>
              </div>
                  <div className="search px-2 py-0.5 flex items-center">
                  <button className="px-2 py-0.5 bg-purple-100 border border-solid border-black rounded-b-lg" onClick={ () => {
                    //filter logic
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3);
                    setListofRestaurants(filteredList);
                    // console.log(listOfRestaurants);
                }
                
                }> 
                    Top Rated Restaurants</button>

                    <label className="mx-8">UserName : </label>
                    <input className="border border-black px-2"
                    value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}/>
                  </div>
            </div>
            <div className="res-container flex flex-wrap">
                

                {Array.isArray(listOfRestaurants) &&
                    filteredList.map((restaurant) => (
                    <Link 
                    key={restaurant.info.id} 
                    to={"/restaurants/"+restaurant.info.id} >
                      {restaurant.info.aggregatedDiscountInfoV3 ? (<OffersRestaurantCard resData={restaurant.info}/>)
                      : <RestaurantCard  resData={restaurant.info} />
                      }
                      
                    </Link>
                ))} 

                
                {/* {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard  resData = {restaurant}/>
                ))} */}
                {/* {console.log(restaurant)} */}
                {/* {<RestaurantCard name="KFC" rating = "4.2 stars" costForTwo = "400 for two" cuisines = "Biryani, North Indian, Asian" image={IMAGE1_URL}/>}
                {<RestaurantCard name="Dominos'" rating = "3.9 stars" costForTwo = "300 for two" cuisines = "Pizza, Italian" image={IMAGE2_URL}/>}
                {<RestaurantCard name="KFC" rating = "3.7 stars" costForTwo = "400 for two" cuisines = "Biryani, North Indian, Asian" image={IMAGE1_URL}/>} */}
               
                
               
            </div>
        </div>
    )
}

export default Body