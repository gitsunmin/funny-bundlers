import React from "react";
import ReactDOM from "react-dom";

const getRandomWelcomeText = () => {
  const welcomeTexts = ["Webpack", "Rollup", "Esbuild"];

  return welcomeTexts[Math.ceil(Math.random() * 10) % welcomeTexts.length];
};

const App = () => (
  <div>
    <h1>Hello, Bundlers with React!</h1>
    <h2>
      The Best Bunder is{" "}
      <span style={{ color: "teal" }}>{getRandomWelcomeText()}</span>
    </h2>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
