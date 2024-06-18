<script>
  import settings from "../stores/settings.js";
</script>

<h2>Settings</h2>

<label>
  <input
    bind:group={$settings.colorScheme}
    type="radio"
    name="colorScheme"
    value="dark"
  /> Dark
</label>
<label>
  <input
    bind:group={$settings.colorScheme}
    type="radio"
    name="colorScheme"
    value="light"
  /> Light
</label>
