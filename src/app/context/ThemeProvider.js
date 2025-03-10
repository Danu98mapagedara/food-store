"use client";
import { createContext,useContext, useState } from "react"

const Themecontext = createContext();

export function ThemeProvider({children}){

const [theme,setTheme]=useState("light");


const toggleTheme=()=>{
    setTheme((preveTheme)=> (preveTheme==="light"? "dark" :"light"));
}

return (

    <Themecontext.Provider value={{theme,toggleTheme}}>

    <body className={theme==="dark"? "dark":""}>
        {children}
    </body>
</Themecontext.Provider>
); 


}
export function useTheme() {
    return useContext(Themecontext);
  }