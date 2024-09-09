import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const{resData}=props;
 
    const{
       cloudinaryImageId,
       name,
       cuisines,
       sla: { deliveryTime },
       costForTwo
       ,avgRating
    }=resData?.card.card.info
 
    return(
       <div className="Res-card" >
          <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL
            +
           resData.card.card.info.cloudinaryImageId
          }
          />
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{deliveryTime} minutes</h4>
          <h4>{costForTwo}</h4>
          <h4>{avgRating} Stars</h4>
       </div>
    )
}

export default RestaurantCard;