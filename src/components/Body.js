import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";



const Body= () => {
    
const[listofRestaurants, setListOfRestaurants]=useState(resList);

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
}


console.log("body rendered before useeffect")
    return(
       <div className="body">
          <div className="filter">
            <button className="filter-btn" 
            onClick=
            {()=>{
                const filteredlist= listofRestaurants.filter(
                    (res) => res.card.card.info.avgRating > 4.4
                );
                setListOfRestaurants(filteredlist);
            }}>
              Top Rated Button</button>
          </div>
             <div className="restaurant-container">
                {
                   listofRestaurants.map((card, index) => (
                   <RestaurantCard key={card.card.card.info.id} resData={card}/>
                   // u can also use index as key but react dont recommned  index to be used as key
                   // <RestaurantCard key={index} resData={card}/>
                ))}
             </div>
       </div>
    )
}

export default Body;