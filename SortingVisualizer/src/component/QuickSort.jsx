import ArrayContext,{renderContext} from "./ArrayContext";
import { useContext, useEffect, useRef } from "react";
import {Delay} from "./Header";

  function QuickSort()
{

    let {obj,setObj}=useContext(ArrayContext); 
    let {render,setRender}=useContext(renderContext);
    let time=Delay;
       
    async function sort()
    {
        console.log("quick called..");
       await customSort(obj.arr,setRender,time,0,obj.arr.length-1);
        console.log("After Quick Sort");
        changeColor(obj.arr,0,obj.arr.length,"green")
        setRender(prv=>prv+1);
   }

    return (
        <>
           <button onClick={sort}>Quick Sort</button>
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

      async function customSort(arr, setRender, time, s, e)
       {

        if (s < e) 
        {
            let p = await setPivot(arr, s, e,setRender, time);
            // changeColor(arr,s,p-1,"blue");
            await customSort(arr, setRender, time, s, p - 1);
            await timepass(time.current);
            // changeColor(arr,p+1,e,"Orange");
            await customSort(arr, setRender, time, p + 1, e);
            await timepass(time.current);
        }

       }
       
        // 4 j1 3 k7 8 5

        async function setPivot(arr, low, high,setRender, time)
         {
             let pivot = arr[high];
             changeColor(arr,high,high,"red");
             let animationTime= 1000-(time.current*10);
             await timepass(animationTime);
            let i = low - 1;
        
            for (let j = low; j < high; j++) {
                if (arr[j] <= pivot) {
                    i++;
                    await swap(arr, i, j);
                    await timepass(animationTime);
                }
                setRender(prv=>prv+1);
            }
        
            await swap(arr, i + 1, high);

            changeColor(arr,high,high,"green");
            return i + 1;
        }
        
    
    
    

    function changeColor(arr, i, j,color)
    {
        
        while(i<=j)
        {
            document.getElementById(i).style.background=color;
            i++;
        }
    }



export default QuickSort;