import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";

export const Store = createContext(null)

const StoreProvider = (props) =>{

    const [cartItem, setcardItem] = useState({});

    const addToCart =(itemId) =>{
        if(!cartItem[itemId]){
            setcardItem((prev) => ({...prev, [itemId] :1}))
        }
        else{
            setcardItem((prev) => ({...prev, [itemId] : prev[itemId]+1}))
        }
    }
    
     const removeFromCart =(itemId) =>{
        setcardItem((prev) => ({...prev, [itemId] : prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItem);
    }),[cartItem]

    const contextValue = {
        food_list,
        setcardItem,
        cartItem,
        addToCart,
        removeFromCart
    }
    return (
        <Store.Provider value={contextValue}>
            {props.children}
        </Store.Provider>
    )
}

export default StoreProvider