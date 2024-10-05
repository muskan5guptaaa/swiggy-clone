
import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";

const Body=()=>{
    const listOfRest=[];
    return(
 <div className="body">
<div className="filter">
    <button className="filter-btn" onClick={()=>{console.log("Button Clicked")

    }}
  
    >
        Top Rated Restaurants
        </button>
</div>
<div className="res-container">
  { resList.map(resturant=>
  <ResturantCard key={resturant.info.id} resData={resturant}/>)
  }



  
</div>
      </div>
    )
  }
  export default Body;