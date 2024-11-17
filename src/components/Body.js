
import ResturantCard from "./ResturantCard";
import{useEffect, useState} from "react"

import resList from "../utils/mockData";
import { json } from "react-router-dom";
const Body=()=>{
  const [listOfResturants,setListOfResturant]=useState(resList);

   useEffect(()=>{
    fetchData();
   },[]); 

   const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3174112&lng=82.9738892&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      { mode: "no-cors" }
    );
  
console.log(response)
  };
  
     return(
 <div className="body">
<div className="filter">
    <button 
    className="filter-btn" 
    onClick={()=>{
    //filter logic here
    const filteredList=listOfResturants.filter(
      (res)=>res.info.avgRating > 4
    );
    setListOfResturant(filteredList);
    }}
  
    >
        Top Rated Restaurants
        </button>
</div>
<div className="res-container">
  { listOfResturants.map((resturant)=>(
  <ResturantCard key={resturant.info.id} resData={resturant}/>
))}
</div>
      </div>
    )
  }
  export default Body;