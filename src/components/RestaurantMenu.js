import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { menu_api } from "../utils/constants";




const RestaurantMenu=()=>{

    const[ResInfo,setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async()=>{
        const data=await fetch(menu_api + resId );
            // "&catalog_qa=undefined&submitAction=ENTER " //this is optional
        
        const json= await data.json();
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