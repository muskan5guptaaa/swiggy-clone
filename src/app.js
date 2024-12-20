import React from "react";
import ReactDOM from "react-dom/client"
import Body from "./components/Body.js";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import ResturantMenu from "./components/ResturantMenu.js";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

  
  const AppLayout = ()=>{
    return (
        <div className="app">
     <Header />
     <Outlet/>
        </div>
    );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      }
      ,
      {
        path:"/about",
        element:<About/>
      },{
        path:"/contact",
        element:<Contact/>
      },{
        path:"/resturants/:resId",
        element:<ResturantMenu/>
      }
    ],
    errorElement:<Error/>
  }
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)