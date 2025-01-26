
import ResturantCard from "./ResturantCard";
import{useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import Header from "../components/Header"
import About from "../components/About"
import { json } from "react-router-dom";


const Body=()=>{
  //Local State Variable -Super powerful vairable
  const [listOfResturants,setListOfResturant]=useState([]);
  const[filteredResturant,setFilteredResturant]=useState([])
const [searchText,setSearchText]=useState("")
console.log("Body Rendered")
   useEffect(()=>{
    fetchData();
   },[]); 

   const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3174112&lng=82.9738892&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
         
    );
    const json=await data.json();
    console.log(json);
    //Optional Chanining
     setListOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setFilteredResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  //Conditional Rendering
  
     return  listOfResturants.length===0 ? (
     <Shimmer/>):(
 <div className="body">
<div className="filter">
  <div className="search">
    <input 
    type="text" 
    className="search-box" 
    value={searchText}
     onChange={(e)=>{
      setSearchText(e.target.value)
    }}/>
    <button 
    onClick={()=>{
      //Filter the resturant cars and update ui
      console.log(searchText);
      const filteredResturant=listOfResturants.filter((res)=>
      res.info.name.toLowerCase().includes(searchText.toLowerCase()))
      setFilteredResturant(filteredResturant)
    }}
    >
      Search
      </button>
  </div>
    <button 
    className="filter-btn" 
    onClick={()=>{
    const filteredList=listOfResturants.filter(//filter logic 
      (res)=>res.info.avgRating > 4
    );
    setListOfResturant(filteredList);
    }}
  
    >
        Top Rated Restaurants
        </button>
</div>
<div className="res-container">
  {filteredResturant.map((resturant)=>(
  <ResturantCard key={resturant.info.id} resData={resturant}/>
))}
</div>
      </div>
    )
  }
  export default Body;