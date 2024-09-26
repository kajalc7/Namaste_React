import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

//responsibility of restaurant menu fetching data and displaying data 
//ideally it should be rsponsible for dispalying dtaa
//not for where the data is coming 


const RestaurantMenu = ()=>{

    const {resId} = useParams();

    const ResInfo = useRestaurantMenu(resId);

    const [showIndex,setshowIndex] = useState(null) //all will be collapsed when we passs null when it was 1 sec will be remain opened

    if (ResInfo===null) return
        <Shimmer/>  
    
    const {name,
        cuisines,
        costForTwoMessage,
        avgRating
    }=ResInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // this below line giving us all card based on categories
    // console.log(ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);


    //removing nested as few restauraunt does not have nested category
    // const categories1 = ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
    // console.log(categories1)

 // filtering data on basis of categories
    const categories = ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories);



    return (
        
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <p className="font-bold my-10 text-lg">{cuisines.join(", ")}
                - {costForTwoMessage}
            </p>
        {/*categories accordion*/}
        {categories.map((category, index) => (
            //rescategory is controlled component now
        <RestaurantCategory key={category?.card?.card?.title} 
        data = {category?.card?.card}
        showItems={index===showIndex ? true : false}
        setshowIndex={()=> setshowIndex(index)}

        />))}
        </div>
    )
}
export default RestaurantMenu;