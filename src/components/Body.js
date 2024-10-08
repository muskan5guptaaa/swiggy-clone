
import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import{useState} from "react"
const Body=()=>{

  const [listOfResturants,setListOfResturant]=useState(resList);
  return(
 <div className="body">
<div className="filter">
    <button 
    className="filter-btn" 
    onClick={()=>{
    //filter logic here
    const filteredResturant=listOfResturants.filter(
      (res)=>res.data.avgRating > 4
    );
    setListOfResturant(filteredResturant);
    }}
  
    >
        Top Rated Restaurants
        </button>
</div>
<div className="res-container">
  { listOfResturants.map(resturant=>
  <ResturantCard key={resturant.info.id} resData={resturant}/>)
  }
</div>
      </div>
    )
  }
  export default Body;