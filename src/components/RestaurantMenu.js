import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



const RestaurantMenu=()=>{

    const[ResInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=12808&catalog_qa=undefined&submitAction=ENTER "
        );
        const json= await data.json();
        console.log(json)
        setResInfo(json.data)
    }
    if (ResInfo===null) return
        <Shimmer/>  
    
    const {name,
        cuisines,
        costForTwoMessage,
        avgRating
    }=ResInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    return (
        
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines}</h3>
            <h4>{costForTwoMessage}</h4>
            <h5>{avgRating}</h5>
            <h2>menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}> {item.card.info.name} - {item.card.info.price/100} Rs </li>
                ))} 
            </ul>
        </div>
    )
}
export default RestaurantMenu;