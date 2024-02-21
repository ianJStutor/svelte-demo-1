import { json } from "@sveltejs/kit";

// import { APIKEY } from "$env/static/private";
// console.log(APIKEY);

export async function GET() {
    const response = await fetch("https://www.affirmations.dev/");
    const content = await response.json();
    console.log(content);
    return json(content);
}

