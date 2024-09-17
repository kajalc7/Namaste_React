import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



const RestaurantMenu=()=>{

    const[ResInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=3241&catalog_qa=undefined&submitAction=ENTER "
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
                <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li>
                <li>{itemCards[3].card.info.name}</li>
                <li>{itemCards[4].card.info.name}</li>
                <li>{itemCards[5].card.info.name}</li>
                <li>{itemCards[6].card.info.name}</li>
                <li>{itemCards[7].card.info.name}</li>
                <li>{itemCards[8].card.info.name}</li>
                <li>{itemCards[9].card.info.name}</li>
                <li>{itemCards[10].card.info.name}</li>
                <li>{itemCards[11].card.info.name}</li>
                <li>{itemCards[12].card.info.name}</li>
                <li>{itemCards[13].card.info.name}</li>
                <li>{itemCards[14].card.info.name}</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;