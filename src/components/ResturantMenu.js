import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";

const ResturantMenu=()=>{

    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
         fetchMenu();  
    },[]);


    const fetchMenu=async()=>{
        const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3174112&lng=82.9738892&restaurantId=617594&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
        console.log(json);
        setResInfo(json.data)
    }
    return  resInfo===null? <Shimmer/>:(
        <div className="menu">
            <h1>Name of the Resturant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Pasta</li>
           
            </ul>
        </div>
    )
}
export default ResturantMenu;