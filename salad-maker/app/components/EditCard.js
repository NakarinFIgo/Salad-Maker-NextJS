"use client";

import { useState } from "react";
import Image from "next/image";

export default function EditCard({ recipesList }) {
    const [count, setCount] = useState(0);

    const handleAddIngredient = () => {
        setCount((prevcount) => prevcount + 1);
    };

    return (
        <div className="w-[1495px] h-[80px] bg-yellow-100 ">
            <div className="flex justify-between">
                <div className="flex gap-[10px]">
                    <div>
                        {recipesList.image && (
                            <Image
                                src={recipesList.image}
                                alt={recipesList.ingredient}
                                width={80}
                                height={80}
                            />
                        )}
                    </div>
                    <div className="gap-4 font-semibold text-[18px] gap-[10px]">
                        <div className="flex">
                            <div className="h-[52px] content-center">
                                <div className="grid">
                                    <p className="text-[18px]">{recipesList.ingredient}</p>
                                </div>
                                <div className="flex gap-[16px] font-normal text-[14px]">
                                    <p>x2</p>
                                    <p className="text-[#FE0000]">Delete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[10px]">
                    <p className="content-center">+{recipesList.calories}</p>
                    <p className="text-[#F8B602] content-center">Cal</p>
                </div>
            </div>
        </div>
    );
}
