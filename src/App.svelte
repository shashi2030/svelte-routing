<script>
  import { Router, Route } from "svero";
  import Home from "./containers/Home.svelte";
  import About from "./containers/About.svelte";
  import AppBar from "./components/AppBar.svelte";
</script>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>

<AppBar/>
<Router>
  <Route path="/" component={Home} />
  <Route path="/home" component={Home} />
  <Route path="/about" component={About} />
</Router>