import Itemlist from "./Itemlist";

const RestaurantCategory = ({data}) =>{
    return(
        <div>
            {/* header */}
           <div className= "w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4  rounded-md">
           <div className="flex justify-between">
                <span className= "font-bold text-lg">
                    {data.title} ({data.itemCards.length})
                </span>
                <span>👇</span>
           </div>
                 {/* Accordion body */}
                <Itemlist items={data.itemCards}/>
            </div>
        </div>
    )
}

export default RestaurantCategory;