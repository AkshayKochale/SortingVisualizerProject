    import { useContext,useState } from "react";
    import ArrayContext from "./ArrayContext";

    export default function BarComponent({id,height})
    {
    let {obj,setObj}= useContext(ArrayContext);
    let size=obj.size;
    let cur=id;

        let he=height;
        
        const commonWidth=100/size;
        let style={height:he+"px" ,width :commonWidth+'%'};

        return(
            <>
                <div key={cur} id={cur} value={he} className="bar" style={style}><label className="curVal">{he}</label></div>
            </>
        );
    }


    function generateRandomValues(range)
    {
        if(range==undefined)
        range=500;
        let no=Math.floor(Math.random() * range) + 1;

        if(no<10 || no> 500)return generateRandomValues(range);
        else return no;
    }