import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Loading_URL } from "../utils/constants";




const Body= () => {
    
const[listofRestaurants, setListOfRestaurants]=useState([]);

useEffect(()=>{
    fetchData();
},[]);
//calling api
const fetchData = async () =>{
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  //converting api data into json
  const json= await data.json();

console.log(json);

//optional chaining
setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

// console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

};

//this is for loading contant to increase the user experience
if (listofRestaurants.length === 0) {
  return (
    <div className="loading-container">
      <img
        className="loading-image"
        alt="Food-loading"
        src={Loading_URL}
      />
    </div>
  );
}


return(
       <div className="body">
          <div className="filter">
            <button className="filter-btn" 
            onClick=
            {()=>{
                const filteredlist= listofRestaurants.filter(
                    (res) => res.info.avgRating > 4.4
                );
                setListOfRestaurants(filteredlist);
            }}>
              Top Rated Button</button>
          </div>
             <div className="restaurant-container">
                {
                   listofRestaurants.map((restaurant) => (
                   <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                   // u can also use index as key but react dont recommned  index to be used as key
                   // <RestaurantCard key={index} resData={card}/>
                ))}
             </div>
       </div>
    )
}

export default Body;