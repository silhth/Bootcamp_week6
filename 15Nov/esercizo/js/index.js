import { API } from "./utils.js";
import { List } from "./list.js";
import { Add } from "./add.js";

const loadlist = () => fetch(API)
.then((response) => response.json())
.then((data) => List(data));


document.addEventListener("DOMContentLoaded",loadlist);

window.addEventListener('hashchange', () => {
  switch(location.hash) {
    case '#add':
      Add();
      break;
    
    case '':
      loadlist();
      break;
  }
});