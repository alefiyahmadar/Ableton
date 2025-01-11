import {  createContext, useState } from "react";
export const MediaContext = createContext();

export const ContextProvider =({children})=>{
const sum = 4
const [isMenuOpen , setMenuopen] = useState(false)




return(
    <MediaContext.Provider value={{sum , isMenuOpen , setMenuopen}}>
        {children}
    </MediaContext.Provider>
)
}