import { NextResponse } from 'next/server';

export async function POST(req) {
    const body = await req.json();
    console.log('New recipe received:', body);
    return NextResponse.json({ message: 'Recipe submitted successfully' });
}
