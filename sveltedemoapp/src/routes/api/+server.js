import { APIKEY } from "$env/static/private";
console.log(APIKEY);

import { json } from "@sveltejs/kit";

export async function GET({ fetch }) {
    const response = await fetch("https://www.affirmations.dev/");
    const content = await response.json();
    return json(content);
}

