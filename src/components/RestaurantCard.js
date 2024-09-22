import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        deliveryTime,
        costForTwo,
        avgRating,
    } = resData?.info;

    return (
        <div className="bg-gray-200 rounded-lg shadow-lg p-4 m-4 w-[250px] transition-colors duration-300 hover:bg-gray-500 cursor-pointer">
            <img
                className="w-full h-40 object-cover rounded-t-lg"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="text-lg font-semibold mt-2">{name}</h3>
            <h4 className="text-sm text-gray-700">{cuisines.join(", ")}</h4>
            <h4 className="text-sm text-gray-500">Delivery: {deliveryTime} minutes</h4>
            <h4 className="text-sm text-gray-500">Cost for two: {costForTwo}</h4>
            <h4 className="text-sm text-yellow-500 font-bold">{avgRating} Stars</h4>
        </div>
    );
};

export default RestaurantCard;
