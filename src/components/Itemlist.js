import { CDN_URL } from "../utils/constants";

const Itemlist = ({items})=> {
    console.log(items)
    return ( 
    <div>
        {items.map((item) =>(
           <div key={item.card.info.id} className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between">
            <div className="w-9/12">
                <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span>
                        - ₹
                        {item.card.info.price ? 
                        item.card.info.price/100 
                        : item.card.info.defaultPrice /100}
                    </span>
                </div>
                <p className = "text-xs">{item.card.info.description}</p>
            </div>
            <div className="relative w-3/12 p-4">
            {item.card.info.imageId ? (
                    <img 
                        src={CDN_URL + item.card.info.imageId} 
                        className="w-full h-40 object-cover rounded-xl" 
                        alt="food item"
                    />
                ) : (
                    <div className="w-full h-40 bg-gray-300 flex items-center justify-center rounded-xl">
                        <span className="text-gray-500 text-sm">No Image Available</span>
                    </div>
                )}
                <button className="p-2 bg-white shadow-md rounded-xl absolute bottom-4 right-4 text-sm font-semibold">
                    Add +
                </button>
            </div>
           </div>
        ))}
        
    </div>
    )
}

export default Itemlist;