import * as React from "react";
import { render } from "react-dom";
import "@vkontakte/vkui/dist/vkui.css";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import { App } from "../components/App";

const Root = () => (
  <ConfigProvider isWebView>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>
);

render(<Root />, document.getElementById("root"));
