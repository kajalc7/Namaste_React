import RestaurantCard from "./RestaurantCard";

//normal JS variable uing this like we are getting two restaurant using filter  in console 
//but that is not getting reflected in UI for that we need to give some powerto our js variable
let listofRestaurants =[
    {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "3241",
              "name": "Meghana Foods",
              "cloudinaryImageId": "iivuhjc2mswi9lublktf",
              "locality": "Residency Road",
              "areaName": "Residency Road",
              "costForTwo": "₹500 for two",
              "deliveryTime": 23,
              "cuisines": [
                "Biryani",
                "Andhra",
                "South Indian",
                "Chinese",
                "Seafood"
              ],
              "avgRating": 4.6
            }
            }
        }
    },
    {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "3242",
              "name": "KFC",
              "cloudinaryImageId": "iivuhjc2mswi9lublktf",
              "locality": "Residency Road",
              "areaName": "Residency Road",
              "costForTwo": "₹500 for two",
              "deliveryTime": 23,
              "cuisines": [
                "chicken",
                "mughlai",
                "north Indian",
                "Chinese",
                "Seafood"
              ],
              "avgRating": 4.0
            }
            }
        }
    },
    {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "3243",
              "name": "Dominos",
              "cloudinaryImageId": "iivuhjc2mswi9lublktf",
              "locality": "Residency Road",
              "areaName": "Residency Road",
              "costForTwo": "₹500 for two",
              "deliveryTime": 23,
              "cuisines": [
                "chicken",
                "mughlai",
                "north Indian",
                "Chinese",
                "Seafood"
              ],
              "avgRating": 4.4
            }
            }
        }
    },

];

const Body=()=>{
    return(
       <div className="body">
          <div className="filter">
            <button className="filter-btn" 
            onClick=
            {()=>{
                listofRestaurants = listofRestaurants.filter(
                    (res) => res.card.card.info.avgRating > 4
                );
                console.log(listofRestaurants);
            }}>Top Rated Button</button>
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