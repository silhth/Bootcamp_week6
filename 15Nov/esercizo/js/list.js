import { render } from "./utils.js";

const List = (data) => {
  const elements = data
    .map((item) => `<li><label><input 
    type="checkbox" ${item.completed ? "checked" : ""} id="${item.id}"
  />${item.title} <p> Deadline: ${item.expires}</p></label></li>`)
    .join("");

  const container = document.querySelector("#container");
  render(
    container,
    `
    <p>To do List</p>
    <ul>${elements}</ul>`
  );
};

export { List };