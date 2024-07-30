'use client'

import { useEffect, useState } from "react"
import axios from "axios"
import IngredientCard from "../components/IngredientCard"
import Sidebar from "./Sidebar"
import Header from "./Header"


export default function IngredeintsPage (){
    const [ingredients,setIngredients] = useState([])

    async function fetchIngredients(){
        try {
            const response = await axios.get('http://localhost:8000/ingredients/')
            setIngredients(response.data)
        } catch (error) {
            console.error('Error fetching data',error);
        }
    }
    
    useEffect(()=>{
        fetchIngredients();
    },[])
    
    return (
        <div className="flex gap-[40px] bg-[#F5F5F5] w-full">
            <Sidebar/>
            <div className=" w-screen">
                <Header/>
                <div className="mt-[40px] mb-[24px] font-bold text-xl ">Select Category</div>
                <div className="flex gap-[24px]">
                    {['vegetable','fruit','topping', 'protein', 'dressing'].map(category=>(
                        <div className="grid w-[160px] h-[160px] py-[32px] px-[24px] content-center justify-center bg-white rounded-[16px]">
                            <div>
                                <span>
                                    Icon
                                </span>
                                <h2 className="text-[18px] text-[#A098AE]">{category}</h2>
                            </div> 
                        </div>
                    ))}
                </div>
                <div className="mt-[40px] mb-6 text-xl font-bold">Choose yoour ingredients to make a salad</div>
                <div className="grid grid-cols-4 gap-[24px] w-[1495px] pr-[24px]">
                    {ingredients.map((item)=>(
                        <IngredientCard ingredients={item}/>
                    ))}
                </div>
            </div>
        </div>
    );
    
}