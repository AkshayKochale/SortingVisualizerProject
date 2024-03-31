    import ArrayContext,{renderContext} from "./ArrayContext";
    import { useContext, useEffect, useRef } from "react";
    import {Delay} from "./Header";

    function BubbleSort()
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
               <button onClick={sort}>Bubble Sort</button>
            </>
        );
    }

    export default BubbleSort;

    function swap(temp,s,i)
    {
            let t=temp[s];
            temp[s]=temp[i];
            temp[i]=t;
    }

    const timepass = (delay) => {
        return new Promise(resolve => setTimeout(resolve, delay));
      };
      

  async  function customSort(temp,setRender,time)
    {   

        for(let i=0;i<temp.length;i++)
        {
            let cur=document.getElementById(i)
            cur.style.backgroundColor='rgb(255, 165, 0)';
            for(let j=i+1;j<temp.length;j++)
            {
                let check=document.getElementById(j)
                check.style.backgroundColor='rgb(255, 165, 0)';
                let secHeight=temp[j];
                let firstHeight=temp[i];
                    
                   if(firstHeight>secHeight) 
                       { 
                             swap(temp,i,j);
                            setRender(prv=>prv+1)
                        }
                        
                       let animationTime= 1000-(time.current*10);
                       console.log("My delay"+animationTime)

                        if(animationTime!=0)
                        await timepass(animationTime);
                            
                        check.style.backgroundColor='rgb(128, 128, 128)';
            }   
            // await timepass(100);
            cur.style.backgroundColor='rgb(0, 128, 0)';
        }   
        console.log("Sort completed..."+temp)
    }