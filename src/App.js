       import React, { lazy, Suspense, useEffect, useState } from "react";
       import ReactDOM from "react-dom/client"
       import Header from "./components/Header";
       import Body from "./components/Body";
    //    import RestaurantCard from "./components/RestaurantCard";
       import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
       import About from "./components/About";
       import Contact from "./components/Contact";
       import Error from "./components/Error";
       import RestaurantMenu from "./components/RestaurantMenu";
       import UserContext from "./utils/UserContext";
       import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";


       const Grocery = lazy(() => import("./components/Grocery"))
       
       
       // const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
       /* const parent = React.createElement("div", {id:"parent"}, 
            [React.createElement("div", {id:"child1"}, 
                [React.createElement("h1", {id:"heading"}, "This is Namaste React 🧨"), React.createElement("h2", {}, "by one and only Yogesh Kakran")]
            ),
            React.createElement("div", {id:"child2"}, 
                [React.createElement("h1", {}, "I am an h1 tag"), React.createElement("h2", {}, "I am an h2 tag")]
            )
        ]); */

        // const jsxHeading = <h1 className="Header">Namaste React Element</h1>;
        /*const Title = () => (<h1 className="head" tabIndex="5">
            Namaste React using JSX 🧨
            </h1>);

        // console.log(jsxHeading);

        const HeadingComponent = () => (<div id="container">
            <Title/>
            <h1 className="heading">
            Namaste React functional Component
        </h1>
        </div>);*/
      
        const AppLayout = () => {

            const [userName, setUserName] = useState();

            useEffect(() => {
                // Api call for authentication of username and password

                const data = {
                    name : "Yogesh Kakran",
                }
                setUserName(data.name)
            },[])


            return (
                    // Yogesh Kakran 
                    <Provider store={appStore}>
                    <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
                        <div className="app">
                            {<Header/>}
                            {<Outlet/>}
                        </div>
                    </UserContext.Provider>
                    </Provider>
            )
            
           };

           const appRouter = createBrowserRouter([
            {
                path : "/",
                element : <AppLayout/>,
                children : [
                    {
                        path : "/",
                        element : <Body/>,
                    },
                    {
                        path : "/about",
                        element : <About/>,
                    },
                    {
                        path : "/contact",
                        element : <Contact/>,
                    },
                    {
                        path : "/grocery",
                        element : <Suspense fallback={<h1>Loading........</h1>}><Grocery/></Suspense>,
                    },
                    {
                        path : "/restaurants/:resId",
                        element : <RestaurantMenu/>
                    },
                    {
                        path : "/cart",
                        element : <Cart/>
                    }
                ],
                errorElement : <Error/>
            },
            
           ]);
       

       const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(<RouterProvider router={appRouter}/>);