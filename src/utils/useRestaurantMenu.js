import { useEffect, useState } from "react";
import { menu_api } from "./constants";


const useRestaurantMenu = (resId) => {

    const [ResInfo , setResinfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(menu_api + resId);

        const json = await data.json();
        setResinfo(json.data);
    }

 
    return ResInfo;
}

export default useRestaurantMenu
