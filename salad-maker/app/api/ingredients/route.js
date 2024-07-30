import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'ingredient.json');

export async function GET() {
  try {
    // อ่านข้อมูลจากไฟล์
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // แปลงข้อมูล JSON เป็น JavaScript Object
    const ingredients = JSON.parse(fileContents);

    // ส่งข้อมูลกลับไป
    return new Response(JSON.stringify(ingredients), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error reading or parsing file:', error);

    // ส่งข้อความข้อผิดพลาดกลับไป
    return new Response('Internal Server Error', { status: 500 });
  }
}
