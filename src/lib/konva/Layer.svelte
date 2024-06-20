<script>
  import Konva from "konva";
  import { getContext, setContext } from "svelte";
  import { stageKey, layerKey } from "./contest-keys.js";

  const { getStage } = getContext(stageKey);
  const stage = getStage();
  const layer = new Konva.Layer();

  setContext(layerKey, layer);

  stage.add(layer);
</script>

<slot />
