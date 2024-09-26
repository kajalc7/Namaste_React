import { useState } from "react";
import Itemlist from "./Itemlist";

const RestaurantCategory = ({data, showItems, setshowIndex}) =>{
//restaurant category is a controlled component now because its
//controlled by restaurant menu now expansion and collapsed is on hand of parent
    const HandleClick = () =>{
        setshowIndex();
    }
    
    return(
        <div>
            {/* header */}
           <div className= "w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4  rounded-md">
           <div className="flex justify-between cursor-pointer" onClick={HandleClick}>
                <span className= "font-bold text-lg">
                    {data.title} ({data.itemCards.length})
                </span>
                <span>👇</span>
           </div>
                 {/* Accordion body */}
            { showItems && <Itemlist items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;