import { useEffect, useState } from "react"

const useOnline = () =>{
    const [isOnline, setIsOnline] = useState(true);


    useEffect(()=>{
        const userOnline = ()=>{
            setIsOnline (true);
        };

        const userOffline = ()=>{
            setIsOnline (false);
        };

    window.addEventListener ("Online", userOnline);
    window.addEventListener ("offline", userOffline);

    return () => {
        window.removeEventListener ("isOnline", userOnline);
        window.removeEventListener ("offOnline", userOffline);
    };
}, []);

 return isOnline;

};

export default useOnline;