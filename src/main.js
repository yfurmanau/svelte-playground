import "./app.css";
import App from "./AppActions.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
