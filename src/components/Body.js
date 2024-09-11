import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";



const Body= () => {
    
const arr=useState(resList);

// const[listofRestaurants, setListOfRestaurants]=arr;

const listofRestaurants=arr[0];
const setListOfRestaurants=arr[1];


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