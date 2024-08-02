'use client'


import Link from "next/link";
import { useState } from "react";

export default function RecipeCard({recipes}) {
    const [count, setCount] = useState(0)

    const handleAddIngredient = ()=>{
        setCount(prevcount=>prevcount+1)
    }

    const handleDeleteIngredient = ()=>{
        setCount(prevcount=>(prevcount > 0 ? prevcount-1 : 0))
    }
    return (
        <div className="">
            <div className="bg-yellow-200 py-[32px] px-[24px] rounded-[16px] w-[344px] h-[363px]">
                {recipes.image && <img className='w-[296px] h-[180px]' src={recipes.image} alt={recipes.ingredient} />}
                <div className="relative w-[296px] h-[107px]">
                    <h3 className="text-[18px]">{recipes.ingredient}</h3>
                    <div className="flex gap-4 font-bold h-[40px] w-[67px] gap-[10px]">
                        <p className="text-[24px] content-center">{recipes.calories}</p>
                        <p className="text-[28px] text-[#F8B602]">Cal</p>
                    </div>
                    <Link href="/pages/EditRecipes">Edit</Link>
                </div>
            </div>
        </div>
    );
}
