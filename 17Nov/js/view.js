import { render, API } from "./utils.js";

const View = (id = 0) => {
  console.log(id);

  fetch(`${API}/${id}`)
    .then((response) => response.json())
    .then((movie) => {
      const container = document.querySelector("#container");
      render(
        container,
        `<article>
        <div class=movie>
        <div class=movie-img><img src="${movie.poster}" /></div>
        <div class=movie-description><h2>${movie.title}</h2>
        <p>${movie.year}</p>
        <p>${movie.description}</p></div>
        </div>
        <hr />
        <a href="#" id="back"><img  id ="home" src="https://img.icons8.com/ios-glyphs/50/000000/home-page--v1.png" alt="home"/></a>
      </article>`
      );
    });
};

export { View };
