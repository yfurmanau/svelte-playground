<script>
  export let size = "small";
  export let shadow = false;
  export let bgColor;
  export let textColor;
</script>

<button
  style:background-color={bgColor}
  style:color={textColor}
  class:size-lg={size === "large"}
  class:size-sm={size === "small"}
  class:shadow
>
  <slot />
</button>

<style lang="scss">
  @use "../styles/variables";

  button {
    border: none;
    background-color: variables.$color;
    color: var(--buttonTextColor);
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    &.size-sm {
      padding: 15px 20px;
    }
    &.size-lg {
      padding: 20px 25px;
      font-size: 20px;
    }
    &.shadow {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    &:hover {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
    }
    &:active {
      background-image: linear-gradient(
        rgba(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0)
      );
    }
  }
</style>
