import "./style.css";
import * as create from "./components/methods.js";

const src = create.divCreate("", "src");
const allName = "Todo-List-2";
let allFolder = {};
let displayFolder = "main";

function loadFolderCheck() {
  if (JSON.parse(localStorage.getItem(allName)) === null) {
    allFolder.main = [];
    localStorage.setItem(allName, JSON.stringify(allFolder));
  } else {
    allFolder = JSON.parse(localStorage.getItem(allName));
  }
}

loadFolderCheck();

function loadNewFolder(folder) {
  allFolder[folder] = [];
  localStorage.setItem(allName, JSON.stringify(allFolder));
}

function nameLoad(AppendHere) {
  AppendHere.innerHTML = "";
  let nameArr = [];
  for (const name in allFolder) {
    if (name !== "main") {
      const deleteSymbol = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete folder</title><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z" /></svg>`;
      const contName = create.divCreate("", "container-name");
      const delName = create.divCreate("", `delete-name`, "", deleteSymbol);
      const nameH4 = create.h4Create(name, `name-bar`);
      contName.append(nameH4, delName);
      AppendHere.append(contName);
      nameArr.push(name);
    }
  }
  let count = 0;
  const delLogic = AppendHere.querySelectorAll(`.delete-name`);
  delLogic.forEach((folder) => {
    folder.addEventListener("click", () => {
      delete allFolder[nameArr[count]];
      count += 1;
      localStorage.setItem(allName, JSON.stringify(allFolder));
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
  const folderName = create.divCreate("", "main-name");
  const inputEleSearch = create.inputCreate("main", "input-search", "text");
  const inputDateSearch = create.inputCreate("", "input-date", "date");

  folderName.append(inputEleSearch, inputDateSearch);
  const workMiddle = create.divCreate("", "main-middle");
  const topAdd = create.divCreate("", "top-adding");
  const addTodoSymbol = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Add Todo</title><path d="M20.7,7C21.1,6.6 21.1,6 20.7,5.6L18.4,3.3C18,2.9 17.4,2.9 17,3.3L15.2,5.1L19,8.9M3,17.2V21H6.8L17.8,9.9L14.1,6.1L3,17.2M7,2V5H10V7H7V10H5V7H2V5H5V2H7Z" /></svg>`;
  const addTodo = create.divCreate("", "add-todo", "", addTodoSymbol);
  topAdd.append(folderName, addTodo);
  workMiddle.append(topAdd);
  main.append(workMiddle);
  return main;
}

// temporary
src.append(createSideBar(), createMainBody());

function contentLoad(folder) {
  const barToAppend = src.querySelector(".main-middle");

  const mainFold = allFolder[folder];
  const mainFoldEle = src.querySelector(".folder-name");
  const weekFold = allFolder["weekFolder"];
  const weekFoldEle = src.querySelector(".this-week");

  mainFoldEle.addEventListener("click", () => {
    barToAppend.append();
  });

  weekFoldEle.addEventListener("click", () => {});
}

function addToFolder() {
  const addTodoEle = src.querySelector(".add-todo");
  const todoThing = src.querySelector(".input-search");
  const todoDate = src.querySelector(".input-date");
  addTodoEle.addEventListener("click", () => {
    let dateVal = todoDate.value;
    if (todoDate.value.length === 0) {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDay();
      dateVal = `${day}.${month}.${year}`;
    }
    const objectMix = {
      text: todoThing.value,
      date: dateVal,
    };
    allFolder[displayFolder].push(objectMix);
    localStorage.setItem(allName, JSON.stringify(allFolder));
  });
}

addToFolder();

const FolderBar = src.querySelector(".bar-add");
nameLoad(FolderBar);

function folderControlLogic() {
  const addBtn = src.querySelector(".add-folder");
  const contFolder = src.querySelector(".control-folder");
  function addMenu() {
    const addSymbol = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>file-document-plus</title><path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H13.81C13.28 21.09 13 20.05 13 19C13 18.67 13.03 18.33 13.08 18H6V16H13.81C14.27 15.2 14.91 14.5 15.68 14H6V12H18V13.08C18.33 13.03 18.67 13 19 13S19.67 13.03 20 13.08V8L14 2M13 9V3.5L18.5 9H13M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z" /></svg>`;
    const cancelSymbol = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>`;
    const menu = create.divCreate("", "menu-folder");
    const contContainer = create.divCreate("", "control-container");
    const add = create.divCreate("add", "add-menu", "", addSymbol);
    const cancel = create.divCreate("", "cancel-menu", "", cancelSymbol);
    const inputContainer = create.divCreate("", "input-container");
    const input = create.inputCreate("", "input-menu");
    input.setAttribute("maxlength", "16");
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
