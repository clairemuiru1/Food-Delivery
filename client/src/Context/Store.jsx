import { createContext } from "react";
import { food_list } from "../assets/assets";

export const Store = createContext(null)

const StoreProvider = (props) =>{


    const contextValue = {
        food_list
    }
    return (
        <Store.Provider value={contextValue}>
            {props.children}
        </Store.Provider>
    )
}

export default StoreProvider