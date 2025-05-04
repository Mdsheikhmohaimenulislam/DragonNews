import { createBrowserRouter } from "react-router";

import HomeLayOut from "../LayOuts/HomeLayOut";
import Home from "../assets/Home/Home";
import CategoryNews from "../CategoryNews/CategoryNews";
import Login from "../pages/Login";
import AuthLayOut from "../LayOuts/AuthLayOut";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";

export const route = createBrowserRouter([
    {path:'/' , Component:HomeLayOut,
        children:[
            {index:true, Component:Home},
            {
                path:'/category/:id', 
                Component:CategoryNews,
               hydrateFallbackElement:(
                <div>
                    <span className="loading loading-ring loading-xl"></span>
                </div>
               ),
               loader:() => fetch("/news.json")
            },

        ]
    },

    {
        hydrateFallbackElement:(
            <div>
            <span className="loading loading-ring loading-xl"></span>
        </div>
        ),
        path:'/news/:id',
        element:<PrivateRoute><NewsDetails/></PrivateRoute>,
        loader:() => fetch("/news.json")
    },

    {
        path:'/auth',
        Component:AuthLayOut,
        children:[
            {
                path:'/auth/login', 
                Component:Login,
            },
            {
                path:'/auth/register', 
                Component:Register,
            },
        ]
        
    },

])