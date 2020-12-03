import * as React from "react";
import { render } from "react-dom";
import "@vkontakte/vkui/dist/vkui.css";
import { AppRoot } from "@vkontakte/vkui";
import { App } from "../components/App";
import { Navigation } from "../components/Navigation";

const Root = () => (
  <div>
    <h1>Embedded VKUI App</h1>
    <div style={{ display: "flex" }}>
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
        <AppRoot embedded>
          <App />
        </AppRoot>
      </div>

      <div
        className="embedded"
        style={{
          maxWidth: 320,
          width: "calc(100% - 20px)",
          height: 667,
          position: "relative",
          margin: 10,
          border: "1px solid #000",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <AppRoot embedded>
          <Navigation />
        </AppRoot>
      </div>
    </div>
  </div>
);

render(<Root />, document.getElementById("root"));
