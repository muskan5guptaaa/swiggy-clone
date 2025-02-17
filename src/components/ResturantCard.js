
import { CDN_URL } from "../utils/constant";
const ResturantCard=(props)=>{
    const {resData}=props;
    const{cloudinaryImageId,name,cuisines,costForTwo,deliveryTime,avgRating}=resData?.info
    return(
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img  className="res-logo"
        alt="res-logo"
        src={CDN_URL+cloudinaryImageId}
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}40 minutes</h4>
       </div>
    )
  }
  export default ResturantCard;