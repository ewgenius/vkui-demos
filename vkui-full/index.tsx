import * as React from "react";
import { render } from "react-dom";
import "@vkontakte/vkui/dist/vkui.css";
import { AppRoot } from "@vkontakte/vkui";
import { App } from "../components/App";

render(
  <AppRoot>
    <App />
  </AppRoot>,
  document.getElementById("root")
);
