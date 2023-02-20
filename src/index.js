import "./style.css";
import * as create from "./components/methods.js";

const src = create.divCreate("", "src");
let allFolder = {};

function loadFolderCheck() {
  if (JSON.parse(localStorage.getItem("Todo-List-2")) === null) {
    allFolder.main = [];
    localStorage.setItem("Todo-List-2", JSON.stringify(allFolder));
  } else {
    allFolder = JSON.parse(localStorage.getItem("Todo-List-2"));
  }
}

loadFolderCheck();

function createSideBar() {
  const sideBar = create.divCreate("", "sidebar");
  const main = create.h3Create("main", "side-main");

  function createFolderControl() {
    const controlBar = create.divCreate("", "control-folder");
    const curFolder = create.h4Create("", "current-folder");
    const deleteFolder = create.divCreate("", "delete-folder");
    const addFolder = create.divCreate("", "add-folder");
    controlBar.append(curFolder, addFolder, deleteFolder);
    return controlBar;
  }

  function createAddBar() {
    const bar = create.divCreate("", "bar-add");
    const addNew = create.divCreate("", "add");
    const deleteOne = create.divCreate("", "delete");

    bar.append(addNew, deleteOne);
    return bar;
  }

  const addBar = createAddBar();
  const folderControl = createFolderControl();

  sideBar.append(main, folderControl, addBar);
  return sideBar;
}

function createMainBody() {
  const main = create.divCreate("", "main-container");

  return main;
}

// temporary
src.append(createSideBar());
//

document.body.append(src);
