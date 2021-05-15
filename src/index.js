import App from "./App";
// import Logo
import Logo from "./logo.svg";
import _ from "lodash";
// inside innerHTML
const root = document.getElementById("root");
root.innerHTML = `
<img src="${Logo}" alt="build icon" />;
<h1> learning web tooling today </h1>
${App({name: "Tanay"})}
`;
