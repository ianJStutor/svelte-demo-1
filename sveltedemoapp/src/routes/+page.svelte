<script>
    let affirmation = $state("Hello!");

    async function getAffirmation() {
        const response = await fetch("./");
        const content = await response.json();
        affirmation = content.affirmation;
    }
</script>

<h1>{affirmation}</h1>
<button on:click={getAffirmation}>Get new affirmation</button>