const RestaurantCategory = ({data}) =>{
    console.log(data)
    return(
        <div>
           <div className= "w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 flex justify-between rounded-md">
            <span className= "font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>👇</span>
            </div>
        </div>
    )
}

export default RestaurantCategory;