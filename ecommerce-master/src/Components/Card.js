import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "./Context";
const Cardcontainer = styled.div`
border: 1px solid black;
width: 20vw;
`;
const Cardimage = styled.img`
padding:5%;
width: 90%;
height: 90%
`;
const Carddesc = styled.div`
font-size: large;
font-family:system-ui;
`;
const Cardbuttons = styled.div`
`;
const Button = styled.button`
border:none;
border-radius: 5px;
font-size: 15px;
padding: 5px;
margin:5px;
color:white;
background-color: ${props=>props.cart ? 'red' : 'blue'}
`;
export default function Card(props){
    const {user,setUser} = useContext(UserContext);
    function addItem(arr,value){
        if(!arr.includes(value)){
            arr.push(value)
        }
        return arr
    }
    function removeItem(arr,value){
        var i = 0;
        while (i < arr.length) {
          if (arr[i] === value) {
            arr.splice(i, 1);
          } else {
            ++i;
          }
        }
        return arr;
    }
    function addCart(props){
        setUser({
            ...user,
            cartList: addItem(user.cartList,props)
        })
        console.log(props)
    }
    function removeCart(props){
        setUser({
            ...user,
            cartList: removeItem(user.cartList,props)
        })
        console.log(props)
    }

    function checkCart(id){
        if (user.cartList.includes(id)){
            return(
            <Button cart onClick={()=>{
               removeCart(id)
            }}>Remove From Cart</Button>
            );
            }
        else {
            return( 
            <Button onClick={()=>{
                // eslint-disable-next-line
                if(user.name == ""){
                    alert("Please Login")
                }
                else{
                    addCart(id)
                }
            }}>Add to cart</Button>
            );
        }
    }
    return(
            <Cardcontainer>
            <Cardimage src={props.url}></Cardimage>
                <Carddesc>
                    {props.desc}
                </Carddesc>
                <Cardbuttons>
                {checkCart(props.id)}
                </Cardbuttons>
        </Cardcontainer>
    );
}