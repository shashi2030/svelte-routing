<script>
  import { Link } from "svero";
  import { onMount } from "svelte";

  onMount(() => {
    console.log("AppBar component has mounted");
  });
</script>
<style>
  div {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<div>
  <Link href="/">Go to home!</Link>
  <Link href="/home">Go to Home!</Link>
  <Link href="/about">Go to About!</Link>
</div>