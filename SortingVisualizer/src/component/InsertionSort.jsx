import ArrayContext,{renderContext} from "./ArrayContext";
import { useContext, useEffect, useRef } from "react";
import {Delay} from "./Header";

function InsertionSort()
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
           <button onClick={sort}>Insertion Sort</button>
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
    let first=document.getElementById(0);
    first.style.backgroundColor='rgb(0, 128, 0)';
        
        for(let i=1;i<arr.length;i++)
        {
                let cur =arr[i];

                let curEl=document.getElementById(i);
                curEl.style.backgroundColor='rgb(255, 165, 0)';

                let j=i-1;
                while(j>=0 && cur<arr[j])
                {
                    let fixed= document.getElementById(j);
                    fixed.style.backgroundColor='blue';
                    swap(arr,j,j+1);
                    setRender(prv=>prv+1)
                    j--;
                    let animationTime= 1000-(time.current*10);
                    console.log("My delay"+animationTime)

                     if(animationTime!=0)
                     await timepass(animationTime);
                         
                    fixed.style.backgroundColor='green';
                }
                curEl.style.backgroundColor='rgb(0, 128, 0)';
                console.log("insertion Sorted ....",arr)
        }

        let last=document.getElementById(arr.length-1);
        last.style.backgroundColor='rgb(0, 128, 0)';

}


export default InsertionSort;