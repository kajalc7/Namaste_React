import { useState } from "react";
import Itemlist from "./Itemlist";

const RestaurantCategory = ({data}) =>{

    const [showItems,setshowItems] = useState(false)

    const HandleClick =() => {
        setshowItems(!showItems); //toggle mtlb agr hm isme true kr dete to hmara accordian open hi rhta fr close nhi hota
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