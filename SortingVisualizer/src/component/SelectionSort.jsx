import ArrayContext,{renderContext} from "./ArrayContext";
import { useContext, useEffect, useRef } from "react";
import {Delay} from "./Header";


function SelectionSort()
{
    let {obj,setObj}=useContext(ArrayContext); 
    let {render,setRender}=useContext(renderContext);
    let time=Delay;
       
    const sort=()=>
    {
        customSort(obj.arr,setRender,time);
        setRender(prv=>prv+1);
   }

    return (
        <>
           <button onClick={sort}>Selection Sort</button>
        </>
    );
}


function swap(temp,s,i)
    {
            let t=temp[s];
            temp[s]=temp[i];
            temp[i]=t;
    }

    const timepass = (delay) => {
        return new Promise(resolve => setTimeout(resolve, delay));
      };


async function customSort(arr,setRender,time)
{
    for(let i=0;i< arr.length;i++)
    {
        let min=100000;
        let minInx=-1;
        let curEl=document.getElementById(i);
        curEl.style.backgroundColor='rgb(255, 165, 0)';
        for(let j=i;j<arr.length;j++)
        {
            if(min>arr[j])
            {
               min=arr[j];
               minInx=j;
            }
            
        }
        if(minInx!=-1)
        {
            document.getElementById(minInx).style.backgroundColor="blue";
            swap(arr,minInx,i);
            setRender(prv=>prv+1);
            let animationTime= 1000-(time.current*10);
            console.log("My delay"+animationTime)
            
            if(animationTime!=0)
            await timepass(animationTime);
            document.getElementById(minInx).style.backgroundColor="grey";
        }
        curEl.style.backgroundColor="green"
    }
    
}


export default SelectionSort;