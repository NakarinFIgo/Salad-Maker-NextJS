"use client";

import EditCard from "../../components/EditCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EditPage() {
  const [recipesList, setRecipesList] = useState([]);

  async function fetchRecipesList() {
    try {
      const response = await axios.get("http://localhost:8000/recipes");
      const recipes = response.data;
      console.log(response.data);
      for (let i = 0; i < recipes.length; i++) {
        const element = recipes[i];
        setRecipesList(element);
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  useEffect(() => {
    fetchRecipesList();
  }, []);

  return (
    <div className="bg-[#F5F5F5] w-full">
      <div>
        <div>Edit Recipe</div>
        <div className="bg-white  w-[1495px] h-screen ">
          <div>Your ingredients to make a salad Recipe</div>
          <div className="grid gap-[24px] pr-[24px]">
            {recipesList.map((item) => (
              <EditCard recipesList={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
