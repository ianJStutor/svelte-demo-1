export async function load({ fetch }) {
    const response = await fetch("https://www.affirmations.dev/");
    const content = await response.json();
    return content;
}

