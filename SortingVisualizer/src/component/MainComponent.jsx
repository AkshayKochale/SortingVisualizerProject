import React,{ useContext, useEffect, useState } from "react";
import ArrayContext,{renderContext} from './ArrayContext'
import BarComponent from "./BarComponent";


function MainComponent()
{
        const {obj,setObj}=useContext(ArrayContext);
        const {render,setrender}=useContext(renderContext);
            let size=obj.size;   
            let arr=obj.arr;

             

            

            useEffect(()=>
            {
                arr=generateArray(size,setObj)
             setObj(prv=>({...prv,arr}))
            let text= document.getElementById("firstText");
            
            if(text!=null && text!=undefined && size!=0)
             text.innerText=""; 

            }
        ,[size]);

        console.log(arr);

        const generateBar=()=>
        {
            // setObj(prv=>({...prv,isFirst:false}))
            
            let barList=[];
            for(let i=0;i<arr.length;i++)
            {
                barList.push(<BarComponent id={i} key={i} height={arr[i]}></BarComponent>);
            }
            return barList
        }

        return (
            <div className="main" id='main'>
                {size === 0 ? (
                    <h1 id="firstText">Click On Generate Array</h1>
                ) : (
                    generateBar()
                )}
            </div>
        );


    }


function generateRandomValues(range)
{
    if(range==undefined)
    range=500;
    let no=Math.floor(Math.random() * range) + 1;

    if(no<10 || no> 500)return generateRandomValues(range);
     return no;
}

function generateArray(curSize,setObj)
{
        console.log("gen bar called.."+curSize)
             let temp=[];
            for(let i=1;i<=curSize;i++)
            {
                let he=generateRandomValues();
                temp.push(he);
            }

    return temp;
}


export default MainComponent;