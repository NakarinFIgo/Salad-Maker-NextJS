import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('http://localhost:8000/ingredients/');
  const ingredients = await res.json();
  return NextResponse.json(ingredients);
}
