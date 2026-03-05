import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import ShopNetPage from "./containers/StartupProjects/ShopNetPage";
import TalkToPdfPage from "./containers/StartupProjects/TalkToPdfPage";

const routes = {
  "/shop_net": ShopNetPage,
  "/talk_to_pdf": TalkToPdfPage,
};

function App() {
  const Page = routes[window.location.pathname];
  if (Page) return <Page />;
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
