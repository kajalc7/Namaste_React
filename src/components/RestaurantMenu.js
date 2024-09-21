import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

//responsibility of restaurant menu fetching data and displaying data 
//ideally it should be rsponsible for dispalying dtaa
//not for where the data is coming 


const RestaurantMenu = ()=>{

    const {resId} = useParams();

    const ResInfo = useRestaurantMenu(resId);

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