
import ResturantCard from "./ResturantCard";
import{useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { json } from "react-router-dom";
const Body=()=>{
  const [listOfResturants,setListOfResturant]=useState([]);
const [searchText,setSearchText]=useState("")
   useEffect(()=>{
    fetchData();
   },[]); 

   const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3174112&lng=82.9738892&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
         
    );
    const json=await data.json();
    console.log(json);
     setListOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  //Conditional Rendering
    if(listOfResturants.length===0){
    return <Shimmer/>
  }

 
  
     return  listOfResturants.length===0 ? (
     <Shimmer/>):(
 <div className="body">
<div className="filter">
  <div className="search">
    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
      setSearchText(e.target.value)
    }}/>
    <button onClick={()=>{
      //Filter the resturant cars and update ui
      //searchText
      console.log(searchText)
    }}>Search</button>
  </div>
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