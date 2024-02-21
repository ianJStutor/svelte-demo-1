<script>
    let affirmation = $state("...");

    async function getAffirmation() {
        const response = await fetch("./api/");
        const content = await response.json();
        affirmation = content.affirmation;
    }

    $effect(getAffirmation);

    $effect(async () => {
        const orders = await fetch("./api/demo/").then(r => r.json());
        console.log(orders);
    });
</script>

<style>
    h1 { color: blue; }
</style>

<h1>{affirmation}</h1>
<button onclick={getAffirmation}>Get new affirmation</button>