<script context="module">
  let totalButtons = 0;

  export function getTotalButtons() {
    return totalButtons;
  }
</script>

<script>
  export let size = "small";
  export let shadow = false;
  export let bgColor = undefined;
  export let textColor = undefined;

  console.log($$restProps);
  let isLeftHovered;

  totalButtons += 1;
</script>

{totalButtons}
<button
  style:background-color={bgColor}
  style:color={textColor}
  class:size-lg={size === "large"}
  class:size-sm={size === "small"}
  class:shadow
  {...$$restProps}
  on:click|preventDefault
>
  {#if $$slots.leftContent}
    <div
      class="left-content"
      on:mouseenter={() => (isLeftHovered = true)}
      on:mouseleave={() => (isLeftHovered = false)}
    >
      <slot name="leftContent" />
    </div>
  {/if}
  <slot {isLeftHovered}>Fallback</slot>
</button>

<style lang="scss">
  @use "../styles/variables";

  button {
    display: flex;
    align-items: center;
    border: none;
    background-color: variables.$color;
    color: var(--buttonTextColor);
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    .left-content {
      margin-right: 10px;
    }
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
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    &:hover {
      background-image: linear-gradient(
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0)
      );
    }
    &:active {
      background-image: linear-gradient(
        rgba(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0)
      );
    }
  }
</style>
