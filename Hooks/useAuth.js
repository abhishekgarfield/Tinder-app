import { createContext, useContext, useState } from "react";
import { Text, View } from "react-native";
const authContext=createContext({});
export const AuthProvider=({children})=>{
    
    return(
            <authContext.Provider value={{user:"abhishek"}}>
            {children}
            </authContext.Provider>
       
    );
}

export default useAuth=()=>{
    return useContext(authContext);
}
