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

loadFolderCheck();

function loadNewFolder(folder) {
  allFolder[folder] = [];
  localStorage.setItem("Todo-List-2", JSON.stringify(allFolder));
}

function nameLoad(AppendHere) {
  AppendHere.innerHTML = "";
  let nameArr = [];
  for (const name in allFolder) {
    if (name !== "main") {
      const deleteSymbol = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-circle</title><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z" /></svg>`;
      const contName = create.divCreate("", "container-name");
      const delName = create.divCreate("", `delete-name`, name, deleteSymbol);
      const nameH4 = create.h4Create(name, `${name}-bar`);
      contName.append(nameH4, delName);
      AppendHere.append(contName);
      nameArr.push(name);
    }
  }
  const delLogic = AppendHere.querySelectorAll(`.delete-name`);
  delLogic.forEach((folder) => {
    folder.addEventListener("click", () => {
      delete allFolder[folder.id];
      localStorage.setItem("Todo-List-2", JSON.stringify(allFolder));
      nameLoad(AppendHere);
    });
  });
}

function createSideBar() {
  const sideBar = create.divCreate("", "sidebar");
  const nameCont = create.divCreate("", "side-name-container");
  const name = create.h3Create("Todo App", "side-name");
  const folderName = create.h3Create("main", "folder-name");
  const thisWeek = create.h3Create("This week", "this-week");

  function createFolderControl() {
    const controlBar = create.divCreate("", "control-folder");
    const addFolder = create.divCreate("add", "add-folder");
    controlBar.append(addFolder);
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

const FolderBar = src.querySelector(".bar-add");
nameLoad(FolderBar);

function folderControlLogic() {
  const addBtn = src.querySelector(".add-folder");
  const contFolder = src.querySelector(".control-folder");
  function addMenu() {
    const addSymbol = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil-plus</title><path d="M20.7,7C21.1,6.6 21.1,6 20.7,5.6L18.4,3.3C18,2.9 17.4,2.9 17,3.3L15.2,5.1L19,8.9M3,17.2V21H6.8L17.8,9.9L14.1,6.1L3,17.2M7,2V5H10V7H7V10H5V7H2V5H5V2H7Z" /></svg>`;
    const cancelSymbol = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>`;
    const menu = create.divCreate("", "menu-folder");
    const contContainer = create.divCreate("", "control-container");
    const add = create.divCreate("add", "add-menu", "", addSymbol);
    const cancel = create.divCreate("", "cancel-menu", "", cancelSymbol);
    const inputContainer = create.divCreate("", "input-container");
    const input = create.inputCreate("", "input-menu");
    const warning = create.methodCreate("span", "", "warn-folder");
    inputContainer.append(input, warning);
    contContainer.append(add, cancel);
    menu.append(inputContainer, contContainer);
    return menu;
  }
  addBtn.addEventListener("click", () => {
    const after = contFolder.innerHTML;
    contFolder.innerHTML = "";
    contFolder.append(addMenu());
    const newAdd = contFolder.querySelector(".add-menu");
    const decline = contFolder.querySelector(".cancel-menu");
    const inputVal = contFolder.querySelector(".input-menu");
    const warnInput = contFolder.querySelector(".warn-folder");
    newAdd.addEventListener("click", () => {
      if (
        inputVal.value.trim().length !== 0 &&
        Object.keys(allFolder).length <= 5
      ) {
        loadNewFolder(inputVal.value);
        nameLoad(FolderBar);
        contFolder.innerHTML = after;
        folderControlLogic();
      } else if (
        inputVal.value.trim().length === 0 &&
        Object.keys(allFolder).length <= 5
      ) {
        warnInput.textContent = "Nameless folder";
      } else {
        warnInput.textContent = "max 5 folders";
      }
    });
    decline.addEventListener("click", () => {
      contFolder.innerHTML = after;
      folderControlLogic();
    });
  });
  const folderDel = src.querySelector(".delete-name");
}

folderControlLogic();

src.querySelector(".side-name").addEventListener("click", () => {
  window.location.reload();
});

//
document.body.append(src);
