import ArrayContext,{renderContext} from "./ArrayContext";
import { useContext, useEffect, useRef } from "react";
import {Delay} from "./Header";

  function MergeSort()
{

    let {obj,setObj}=useContext(ArrayContext); 
    let {render,setRender}=useContext(renderContext);
    let time=Delay;
       
    async function sort()
    {
       await customSort(obj.arr,setRender,time,0,obj.arr.length);
        console.log("After Merge Sort");
        changeColor(obj.arr,0,obj.arr.length,"green")
        setRender(prv=>prv+1);
   }

    return (
        <>
           <button onClick={sort}>Merge Sort</button>
        </>
    );

}

 

    const timepass = (delay) => {
        return new Promise(resolve => setTimeout(resolve, delay));
      };

      async function customSort(arr, setRender, time, s, e) {
        if (s >= e - 1) { 
            return; 
        }
    
        let m = Math.floor((s + e) / 2);
    
        await customSort(arr, setRender, time, s, m); 
        changeColor(arr, s, m, "blue");
    
        await customSort(arr, setRender, time, m, e); 
        changeColor(arr, m + 1, e, "red");
    
        await merge(arr, s, m, e, setRender, time);
    }
    
    async function merge(arr, start, mid, end, setRender, time) {
        let leftEnd = mid - 1;
        let rightStart = mid;

        let animationTime= 1000-(time.current*10);
    
        while (start <= leftEnd && rightStart < end) {
            // Visual changes before comparison
            changeColor(arr, start, rightStart, "orange");
            await timepass(animationTime);
    
            if (arr[start] <= arr[rightStart]) {
                start++;
            } else {
                let value = arr[rightStart];
                let index = rightStart;
    
                while (index !== start) {
                    arr[index] = arr[index - 1];
                    index--;
                }
    
                arr[start] = value;
                start++;
                leftEnd++;
                rightStart++;
            }
            await setRender(prev => prev + 1);
        }
    }
    
    

    function changeColor(arr, i, j,color)
    {
        
        while(i!=j)
        {
            document.getElementById(i).style.background=color;
            i++;
        }
    }



export default MergeSort;