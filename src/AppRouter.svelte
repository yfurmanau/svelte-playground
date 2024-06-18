<script>
  import Home from "./lib/pages/Home.svelte";
  import Settings from "./lib/pages/Settings.svelte";
  import { onMount } from "svelte";
  import settings from "./lib/stores/settings.js";

  let page;

  const onRouteChange = () => {
    const path = window.location.hash.slice(1);
    if (path === "/") {
      page = "home";
    } else if (path === "/settings") {
      page = "settings";
    } else {
      window.location.hash = "/";
    }
  };

  onMount(() => {
    onRouteChange();
  });
</script>

<svelte:window on:hashchange={onRouteChange} />
<svelte:head>
  {#if $settings.colorScheme === "dark"}
    <style>
      :root {
        --backgroundColor: #1d1d1d;
        --textColor: #fff;
      }
    </style>
  {:else}
    <style>
      :root {
        --backgroundColor: #fff;
        --textColor: #000;
      }
    </style>
  {/if}
</svelte:head>

{$settings.colorScheme}
<nav>
  <a href="#/">Home</a>
  <a href="#/settings">Settings</a>
</nav>

{#if page === "home"}
  <Home />
{:else if page === "settings"}
  <Settings />
{/if}
