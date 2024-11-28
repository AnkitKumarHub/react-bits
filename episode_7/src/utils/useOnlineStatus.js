import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline", (event) => {
            setOnlineStatus(false);
          });

        window.addEventListener("online", (event) => {
            setOnlineStatus(true);
          }); 
    }, []);

    return onlineStatus; //return boolean value
}

export default useOnlineStatus;