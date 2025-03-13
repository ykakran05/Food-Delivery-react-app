import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const data = useContext(UserContext);

    // Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log("cartitems", cartItems);


    return (
        <div className="flex justify-between shadow-lg m-2 bg-pink-100 sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo-container">
                <img className="w-50" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-5 m-5">
                    <li className="px-4 text-lg">Online Status : {onlineStatus ? "✔" : "🚩"}</li>
                    <li className="px-4 text-lg"><Link to = "/">Home</Link></li>
                    <li className="px-4 text-lg"><Link to = "/about">About us</Link></li>
                    <li className="px-4 text-lg"><Link to = "/contact">Contact us</Link></li>
                    <li className="px-4 text-lg"><Link to = "/grocery">Grocery</Link></li>
                    <li className="px-4 text-lg"><Link to = "/cart">Cart - ({cartItems.length} items)</Link></li>
                    <button className= "bg-gray-400 px-4 border border-solid border-b-black text-lg" onClick={() => { 
                            btnNameReact === "Login" 
                            ? setBtnNameReact("Logout") 
                            : setBtnNameReact("Login");
                          
                    }}>{btnNameReact}</button>
                    <li className="px-4 text-lg font-bold">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
        
    );
   };

   export default Header