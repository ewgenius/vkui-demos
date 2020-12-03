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
  <div
    className="embedded"
    style={{
      minWidth: 320,
      width: "calc(100% - 20px)",
      height: 800,
      position: "relative",
      margin: 10,
      border: "1px solid #000",
      boxSizing: "border-box",
      overflow: "hidden",
    }}
  >
    <ConfigProvider platform={ANDROID}>
      <AdaptivityProvider>
        <AppRoot>
          <App />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  </div>
);

render(<Root />, document.getElementById("root"));
