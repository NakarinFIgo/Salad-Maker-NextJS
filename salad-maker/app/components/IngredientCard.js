'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function IngredientCard({ ingredients, addToCart}) {
    const [count, setCount] = useState(0)

    const handleAddIngredient = ()=>{
        setCount(prevcount=>prevcount+1)
    }

    const handleDeleteIngredient = ()=>{
        setCount(prevcount=>(prevcount > 0 ? prevcount-1 : 0))
    } 
    return (
        <div className="">
            <div className="bg-white py-[32px] px-[24px] rounded-[16px] w-[344px] h-[363px]">
                {ingredients.image && 
                <Image 
                src={ingredients.image} 
                alt={ingredients.ingredient}
                width={296} 
                height={180}  
                />}
                <div className="relative w-[296px] h-[107px]">
                    <h3 className="text-[18px]">{ingredients.ingredient}</h3>
                    <div className="flex gap-4 font-bold h-[40px] w-[67px] gap-[10px]">
                        <p className="text-[24px] content-center">{ingredients.calories}</p>
                        <p className="text-[28px] text-[#F8B602]">Cal</p>
                    </div>
                    <span className="absolute right-20">
                        <motion.svg 
                        whileTap={{ scale: 1.2 }} 
                        className='w-[40px] bg-[#F8B602] text-white rounded-[20px]' 
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                        fill="currentColor"
                        onClick={handleDeleteIngredient}>
                            <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </motion.svg>
                    </span>
                    <span>{count}</span>
                    <span className="absolute right-0">
                        <motion.svg 
                        whileTap={{ scale: 1.2 }} 
                        className='w-[40px] bg-[#F8B602] text-white rounded-[20px]' 
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                        fill="currentColor"
                        onClick={handleAddIngredient}>
                            <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </motion.svg>
                    </span>
                </div>
            </div>
        </div>
    );
}
