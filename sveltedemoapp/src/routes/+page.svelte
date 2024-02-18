<script>
    let affirmation = $state("Hello!");

    async function getAffirmation() {
        const response = await fetch("./api/");
        const content = await response.json();
        affirmation = content.affirmation;
    }
</script>

<style>
    h1 { color: blue; }
</style>

<h1>{affirmation}</h1>
<button on:click={getAffirmation}>Get new affirmation</button>