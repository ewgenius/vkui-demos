import * as React from "react";
import { render } from "react-dom";
import "@vkontakte/vkui/dist/vkui.css";
import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";
import { Navigation } from "../components/Navigation";

const Root = () => (
  <ConfigProvider>
    <AdaptivityProvider>
      <AppRoot embedded>
        <Navigation />
      </AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>
);

render(<Root />, document.getElementById("root"));
