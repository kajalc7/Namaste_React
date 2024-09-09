import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body=()=>{
    return(
       <div className="body">
          <div className="search">Search</div>
             <div className="restaurant-container">
                {
                   resList.map((card, index) => (
                   <RestaurantCard key={card.card.card.info.id} resData={card}/>
                   // u can also use index as key but react dont recommned  index to be used as key
                   // <RestaurantCard key={index} resData={card}/>
                ))}
             </div>
       </div>
    )
}

export default Body;