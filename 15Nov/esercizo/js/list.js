import { render } from "./utils.js";
import { API } from "./utils.js";

const List = (data) => {
  const elements = data
    .map((item) => `<li><label>
    <input 
    type="checkbox" ${item.completed ? "checked" : ""} id="${item.id}"
    />${item.title} 
    <div class= "deadline">
    <p> Deadline: ${item.expires}</p>
    <button class="delete" id="${item.id}">x</button>
    </div>
    </label></li>`)
    .join("");

  const container = document.querySelector("#container");
  render(
    container,
    `
    <p>To do List</p>
    <ul>${elements}</ul>
    <a href="#add" id ="add" >Aggiungi una nuova scheda</a>`
  );

const btns = [...document.querySelectorAll('.delete')];

  btns.forEach((btn) => {
    btn.addEventListener("click", (event)=> {
      const id = parseInt(event.target.id);
      const filtered = data.filter(movie => movie.id !== id);
      // List(filtered);

      fetch (`${API}/${id}`, {method: "DELETE"})
        .then(response => response.json())
        .then(()=> List(filtered));
    },
      {once: true})
  })
};


export { List };