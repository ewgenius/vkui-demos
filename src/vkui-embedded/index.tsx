import * as React from "react";
import { render } from "react-dom";
import "@vkontakte/vkui/dist/vkui.css";
import {
  AdaptivityProvider,
  ANDROID,
  AppRoot,
  ConfigProvider,
} from "@vkontakte/vkui";
import { App } from "../components/App";

const Root = () => (
  <div>
    <h1>Embedded VKUI App</h1>
    <div
      className="embedded"
      style={{
        maxWidth: 1280,
        width: "calc(100% - 20px)",
        height: 800,
        position: "relative",
        margin: 10,
        border: "1px solid #000",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <ConfigProvider platform={ANDROID} isWebView>
        <AdaptivityProvider embedded>
          <AppRoot>
            <App />
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </div>
  </div>
);

render(<Root />, document.getElementById("root"));
