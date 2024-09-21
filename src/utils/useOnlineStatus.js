import { useEffect, useState } from "react";

const  useOnlinestatus = () =>{
    
    const[onlineStatus,setonlinestatus] = useState(true);
    //check if online

    //eventlistener are superpower given to us by window object and browser
    useEffect(()=>{
        window.addEventListener("offline", () => {
            setonlinestatus(false);
        });

        window.addEventListener("online", () => {
            setonlinestatus(true);
        });
        
    },[])
   

    //boolean value
    return onlineStatus;
}

export default useOnlinestatus;;