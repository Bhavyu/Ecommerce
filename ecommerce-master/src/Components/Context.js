import React, {useEffect, useState} from 'react';

export const UserContext = React.createContext();

export const UserProvider = ({children}) => {
    const localUserObject = window.localStorage.getItem("user")
    const localUser = JSON.parse(localUserObject)
    const sessionUser = {
        "name":"",
        "cartList":[]
    };
    if(localUser !== null){
        sessionUser.name = localUser.name
        sessionUser.cartList = localUser.cartList
    }
    else{
        console.log("Nahi hai kuch bhai")
    }
    
    const [user, setUser] = useState({
        name: sessionUser.name,
        cartList: sessionUser.cartList
    });
    useEffect(()=>{
        window.localStorage.setItem("user", JSON.stringify(user));
    },[user])
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserConsumer = UserContext.Consumer;