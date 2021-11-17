import { render, API } from "./utils.js";

const List = (data) => {
  const elements = data
    .map(
      (item) => `<li>
        <img src="${item.poster}" alt="movie poster"/>
        <a href="#view-${item.id}">${item.title}</a> <p>${item.year}</p>
        <div><a class="edit" href="#edit-${item.id}"><img src="https://img.icons8.com/ios-glyphs/50/000000/edit.png" alt= "edit"/></a>
        <button class="delete" id="${item.id}"><img src="https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/50/000000/external-bin-mobile-user-interface-tulpahn-detailed-outline-tulpahn.png" alt="delete"/></button></div>
      </li>`
    )
    .join("");

  const container = document.querySelector("#container");
  render(
    container,
    `
    <h3>Elenco schede film</h3>
    <ul>${elements}</ul>
    <a href="#add" id="add">Aggiungi una nuova scheda</a>
    `
  );

  const btns = [...document.querySelectorAll(".delete")];

  const deleteItem = (event) => {
    const id = parseInt(event.target.id);
    const filtered = data.filter((movie) => movie.id !== id);

    fetch(`${API}/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then(() => List(filtered));
  };

  const btnClicks = (btn) =>
    btn.addEventListener("click", deleteItem, { once: true });

  btns.forEach(btnClicks);
};

export { List };
