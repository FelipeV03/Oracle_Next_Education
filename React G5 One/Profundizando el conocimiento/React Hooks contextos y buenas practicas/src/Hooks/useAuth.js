import { React, useState, useEffect } from "react";

const useAuth = (jwt) => {
    const [isAuth, setIsAuth] = useState(false);


    useEffect(() => {

        if (jwt.length < 25) {
            setIsAuth(false);
        } else {
            setIsAuth(true);
        }
    },[])


    return isAuth;
}

export default useAuth;