// app/api/recipes/route.js
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'recipe.json');

export async function GET() {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return new Response(fileContents, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function POST(request) {
  const newRecipe = await request.json();
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const recipes = JSON.parse(fileContents);
  
  recipes.push(newRecipe);
  fs.writeFileSync(filePath, JSON.stringify(recipes, null, 2), 'utf8');
  
  return new Response(JSON.stringify(newRecipe), {
    status: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function DELETE({ params }) {
  const id = params.id;
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const recipes = JSON.parse(fileContents);
  
  const newRecipes = recipes.filter(recipe => recipe.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(newRecipes, null, 2), 'utf8');
  
  return new Response('Deleted', { status: 204 });
}

export async function PATCH({ params, request }) {
  const id = params.id;
  const updatedRecipe = await request.json();
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const recipes = JSON.parse(fileContents);
  
  const index = recipes.findIndex(recipe => recipe.id === id);
  if (index > -1) {
    recipes[index] = updatedRecipe;
    fs.writeFileSync(filePath, JSON.stringify(recipes, null, 2), 'utf8');
    return new Response(JSON.stringify(updatedRecipe), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  
  return new Response('Not Found', { status: 404 });
}
