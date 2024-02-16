import { json } from '@sveltejs/kit';

export async function GET() {
    const response = await fetch("https://www.affirmations.dev/");
    const content = await response.json();
    console.log(content);
    return json(content);
}