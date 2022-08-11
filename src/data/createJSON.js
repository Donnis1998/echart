/* const fs = require("fs");

//import { writeFile } from "fs";

export const createNewTree = () => {
  let objectToSave = { variable: "1", variable2: "2" };

  fs.writeFile(
    "./archivo.json",
    JSON.stringify(objectToSave),
    "utf8",
    (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    }
  );
}; */

export const SaveNewTree = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const GetSavedTree = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

export const RemoveTree = (name) => {
  localStorage.removeItem(name);
};

export const GetListAvailablesTrees = () => {
  let list = [];
  for (let index = 0; index < localStorage.length; index++) {
    let name = localStorage.key(index);
    list.push({ id: name, label: name });
  }
  return list;
};

export const TreesAvailables = [
  { id: "BSoft", label: "BSoft" },
  { id: "Frontend", label: "Frontend" },
  { id: "Backend", label: "Backend" },
  { id: "Datos", label: "Datos" },
];
