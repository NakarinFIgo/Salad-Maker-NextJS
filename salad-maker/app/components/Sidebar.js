'use client'

import Link from "next/link"

export default function Sidebar() {
    return (
    <div>
        <div className="w-[345px] h-full py-[56px] px-[46px] gap-[59px] bg-white">
            <p className=" text-[30px] font-bold">
                SALADMAKER.
            </p>
            <div className="grid">
                <Link href='/' className="text-black">Home</Link>
                <Link href='/pages/Recipes' className="text-black">Recipe</Link>
            </div>
        </div>
        
    </div>

    )}