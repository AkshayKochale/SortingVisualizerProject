import React, { useRef, useState } from "react";

const  ArrayContext = React.createContext();

const  ContextProvider=({ children })=>
{
    const [obj,setObj]=useState({
        arr:[],
        size:0,
        animationTime:0, // times in milliseconds,
        isfirst:true 
    });
      return(
          <ArrayContext.Provider value={{obj,setObj}}>
              {children}
          </ArrayContext.Provider>
      );
}


let renderContext =React.createContext();

 const RenderProvider=({children})=>
{
    let [render,setRender]=useState(0);
    return(
    <renderContext.Provider value={{render,setRender}}>
        {children}
    </renderContext.Provider>
    )
}

export default ArrayContext;
export  {ContextProvider,renderContext,RenderProvider};



