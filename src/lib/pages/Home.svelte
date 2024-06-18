<script>
  import settings from "../stores/settings.js";
  import location from "../stores/location.js";
</script>

<h2>Home</h2>

{#if $location}
  {$location.latitude}
  {$location.longitude}
{/if}
{$settings.colorScheme}
