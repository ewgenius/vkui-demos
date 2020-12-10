import * as React from "react";
import { render } from "react-dom";
import "@vkontakte/vkui/dist/vkui.css";
import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";
import { App } from "../components/App";

render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById("root")
);
