import "./style.css";
import * as create from "./components/methods.js";


const src = create.divCreate("", "src");

function createSideBar() {
  const sideBar = create.divCreate("", "sidebar");
  const main = create.h3Create("main", "side-main");
  
  sideBar.append(main);
  return sideBar;
}

// temporary
src.append(createSideBar());
//


document.body.append(src);