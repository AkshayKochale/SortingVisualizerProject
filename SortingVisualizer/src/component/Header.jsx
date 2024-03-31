import React,{ useContext,useEffect } from "react";
import ArrayContext  from "./ArrayContext";
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort"
import SelectionSort from "./SelectionSort";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";

let Delay=React.createRef(0) ;
export  default ()=>
{
   let {obj,setObj}=useContext(ArrayContext);
    const flag=true;
    let curSize=0;

    useEffect(()=>{
        Delay.current=obj.animationTime
     },
     [obj.animationTime])
    
    const getValue=()=>
    {
       let input= document.getElementById("input"); 
        let isVisible=input.style.display;
        if(isVisible=='none')
                input.style.display='flex';
        else
             {
                input.style.display='none';
             }

    }

    const renderArray=(e)=>
    {
        e.preventDefault();
        setObj(prv=>({...prv,size:0}));
        setTimeout(() => {
               console.log("waiting.....") 
               setObj(prv=>({...prv,size:curSize}));
        }, 100);
        getValue();
        document.getElementById("inputField").value=null;
       
        
    }

    const setsize=(e)=>
    {
        curSize=parseInt(e.target.value);
    }

    const getSpeed=(e)=>
    {
       let speed=e.target.value;
        setObj(prv=>({...prv,animationTime:speed}));
    }

    return (

            <>
            <div className="header">

                    <button onClick={getValue}> Generate Array</button>
                    <BubbleSort></BubbleSort>
                    <InsertionSort></InsertionSort>
                    <SelectionSort></SelectionSort>
                    <MergeSort></MergeSort>
                    <QuickSort></QuickSort>
                    <input type="range" id="range" min={0} max={100} value={obj.animationTime} onChange={getSpeed}></input>
                    <p className="speed"> Speed {obj.animationTime} </p>
                    
            </div>    
             <div className="input" id="input">

                    <p>Enter size between 30 to 50 for better experience</p>
                    <form onSubmit={renderArray}>
                    <input className="inputField" type="number" id="inputField" min={10} onChange={setsize}/>
                    <button className="inputBtn" >Submit</button>
                    </form>

            </div>
            
            
            </>
    );
}
export {Delay};