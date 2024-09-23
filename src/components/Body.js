import RestaurantCard, {withOpenLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlineStatus";




const Body= () => {
    
const[listofRestaurants, setListOfRestaurants]=useState([]);
const[filteredrestaurants,setFilteredRestaurants]=useState([]);

const[searchText,setSearchText]=useState("");

//higher order 
const RestaurantCardOpened = withOpenLabel(RestaurantCard);

console.log(listofRestaurants);


useEffect(()=>{
    fetchData();
},[]);

//calling api
const fetchData = async () =>{
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  //converting api data into json
  const json= await data.json();


//optional chaining
setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
};

const onlineStatus = useOnlinestatus();

if(onlineStatus===false)
  return(
    <h1 className ="offline-status">Looks like you are offline please check your internet connection</h1>
)


return listofRestaurants.length === 0? <Shimmer/> :(
       <div className="body">
          <div className="flex justify-center place-content-center">
            <div className="m-4 p-4">
              <input type="text" className="border border-solid border-black rounded-md" value={searchText}
               onChange={(e)=>{
                setSearchText(e.target.value);
                }}/>
              <button className="px-2 py-2 bg-green-100 m-4 rounded-md" onClick={()=>{
                console.log(searchText)

                const filteredRestuarants = listofRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurants(filteredRestuarants);
                console.log(filteredRestuarants);
              }}>Search</button>
            </div>
            <div className="m-4 p-4">
            <button className="px-4 py-2 bg-red-200 m-4 rounded-md" 
            onClick=
            {()=>{
                const filteredlist= listofRestaurants.filter(
                    (res) => res.info.avgRating > 4.4
                );
                setFilteredRestaurants(filteredlist);
            }}>
              Top Rated Button</button>
              </div>
          </div>
             <div className="flex flex-wrap">
                {
                   filteredrestaurants.map((restaurant) => (
                   <Link key={restaurant.info.id} 
                   to ={"./restaurants/"+ restaurant.info.id}>

                    {/* if the restaurant is open so open tag to it else normal card used terniary operator*/}
                    {
                      restaurant.info.availability.opened ? (<RestaurantCardOpened  resData={restaurant}/>    
                      ) : (
                      <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    )
                    }
                   
                   </Link>
                ))}
             </div>
       </div>
    )
}

export default Body;