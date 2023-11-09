import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "../components/Layout/Layout";
import Error from "../pages/Error";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Inventory from "../pages/Inventory";
import Customers from "../pages/Customers";
import Orders from "../pages/Orders";
import Conservations from "../pages/Conservations";
import Settings from "../pages/Settings";
import Conservation from "../pages/Conservation";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout isAuth/>,
        errorElement: <Error/>,
        children:[
            {
                path:'/',
                element: <Dashboard/>,
                id:'Dashboard',
            
            },
            {
                path:'orders',
                element:<Orders/>
            },
            {
                path:'customers',
                element:<Customers/>
            },
            {
                path:'inventory',
                element:<Inventory/>
            },
            {
                path:'conservations',
                element:<Conservations/>,
                children:[
                    {
                        path:'conversation/:id',
                        element: <Conservation/>
                    }
                ]
            },
            {
                path:'settings',
                element:<Settings/>
            },
        ]
    },
    {
        path:'/login',
        element: <Login/>
    },
                
    {
        path:'/register',
        element: <Register/>
    }
])

export default router