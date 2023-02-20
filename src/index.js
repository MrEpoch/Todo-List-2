import "./style.css";
import * as create from "./components/methods.js";

const src = create.divCreate("", "src");
let allFolder = {};
let displayFolder = "main";

function loadFolderCheck() {
  if (JSON.parse(localStorage.getItem("Todo-List-2")) === null) {
    allFolder.main = [];
    localStorage.setItem("Todo-List-2", JSON.stringify(allFolder));
  } else {
    allFolder = JSON.parse(localStorage.getItem("Todo-List-2"));
  }
}

console.log(JSON.parse(localStorage.getItem("Todo-List-2")).main);

loadFolderCheck();

function createSideBar() {
  const sideBar = create.divCreate("", "sidebar");
  const nameCont = create.divCreate("", "side-name-container");
  const name = create.h3Create("Todo App", "side-name");
  const folderName = create.h3Create("main", "folder-name");
  const thisWeek = create.h3Create("This week", "this-week");

  function createFolderControl() {
    const controlBar = create.divCreate("", "control-folder");
    const deleteFolder = create.divCreate("del", "delete-folder");
    const addFolder = create.divCreate("add", "add-folder");
    controlBar.append(addFolder, deleteFolder);
    return controlBar;
  }

  function createAddBar() {
    const bar = create.divCreate("", "bar-add");

    bar.append();
    return bar;
  }

  const addBar = createAddBar();
  const folderControl = createFolderControl();
  nameCont.append(name);

  sideBar.append(nameCont, folderName, thisWeek, folderControl, addBar);
  return sideBar;
}

function createMainBody() {
  const main = create.divCreate("", "main-container");
  const folderName = create.h2Create("main", "main-name");
  const workMiddle = create.divCreate("", "main-middle");

  workMiddle.append(folderName);
  main.append(workMiddle);
  return main;
}

// temporary
src.append(createSideBar(), createMainBody());

src.querySelector(".side-name").addEventListener("click", () => {
  window.location.reload();
});

//
document.body.append(src);
