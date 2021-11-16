import { render, API } from "./utils.js";

const Add = () => {
  const container = document.querySelector("#container");

  render(
    container,
    `<div>
    <h3>Aggiungi una nuova Task</h3>
    <form id="create">
      <div class="row">
        <label for="title">to do:</label>
        <input type="textarea" id="title" name="title" />
      </div>

      <div class="row">
        <label for="expires">Scadenza:</label>
        <input type="date" id="expires" name="expires" />
      </div>

      <button>Salva task</button>
    </form>
    <a href="#" id ="back" ><img src="https://img.icons8.com/ios-glyphs/50/000000/home-page--v1.png" alt="home" width= "35px"/></a>
  </div>`
  );

  const form = document.querySelector("#create");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const todo = {
     
      title: event.target.title.value,
      completed: false,
      expires: event.target.expires.value,
      id: event.target.id.value

    };

    console.log(todo);

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }).then((response) => response.json())
      .then((data) => (location.hash = ""));
  });
};

export { Add };