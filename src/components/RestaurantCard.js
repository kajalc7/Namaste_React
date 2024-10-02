import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;

    console.log(resData);

    const {
        cloudinaryImageId,
        name,
        cuisines,
        deliveryTime,
        costForTwo,
        avgRating,
    } = resData?.info;

    const {loggedInUser} = useContext(UserContext);

    return (
        <div data-testid="resCard" className="bg-gray-200 rounded-lg shadow-lg p-4 m-4 w-[250px] transition-colors duration-300 hover:bg-gray-500 cursor-pointer">
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
            <h4 className="text-sm text-yellow-500 font-bold">User: {loggedInUser}</h4>
        </div>
    );
};

// Higher-order component of RestaurantCard that adds the "Opened" label
export const withOpenLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative">
                <label className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded-lg">Opened</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
