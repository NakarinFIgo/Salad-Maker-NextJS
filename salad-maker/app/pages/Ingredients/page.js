'use client'

import { useEffect, useState } from "react"
import axios from "axios"
import IngredientCard from "../../components/IngredientCard"

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
        <div>
          {ingredients.map((item)=>{
            return <IngredientCard ingredients={item}/>
          })}
        </div>
    );
    
}