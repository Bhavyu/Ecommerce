import React from "react";
import { UserContext } from "./Context";
import { useContext } from "react";
export default function User(){
    const { user, setUser} =useContext(UserContext)
    function loginUser(){
        setUser({
            ...user,
            name:"Hrishikesh"})
    }
    function logoutUser(){
        setUser({
            ...user,
            name:"",
            cartList:[]
        })
    }
    return(
        <div>
            {(!user.name)?<button onClick={loginUser}>Login</button>:
            <div>
                <span>Hi {user.name}</span><button onClick={logoutUser}>Logout</button>
            </div>}
            <div>
                {user.cartList}
            </div>
        </div>
    );
}