'use client'

import { useEffect, useState } from "react"
import axios from "axios"
import RecipeCard from "../../components/RecipeCard"

export default function RecipesPage (){
    const [recipes,setRecipes] = useState([])

    async function fetchRecipes(){
        try {
            const response = await axios.get('http://localhost:8000/recipes')
            console.log(response.data);
            setRecipes(response.data)
        } catch (error) {
            console.error('Error fetching data',error);
        }
    }
    
    useEffect(()=>{
        fetchRecipes();
    },[])

    return (
        <div className="bg-[#F5F5F5] w-full">
            <div>
                <div>Recipe</div>
                <div className="bg-white  w-[1495px] h-screen ">
                    <div>Your Recipe</div>
                    <div className="grid grid-cols-4 gap-[24px] pr-[24px]">
                        {recipes.map((item)=>(
                            <RecipeCard recipes={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
    
}