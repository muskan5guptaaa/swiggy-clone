
import ResturantCard from "./ResturantCard";
import{useState} from "react"

import resList from "../utils/mockData";
const Body=()=>{
  const [listOfResturants,setListOfResturant]=useState(resList);

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