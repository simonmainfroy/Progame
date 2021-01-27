import '../sass/style.scss';
import { routes } from './routes';
import { PageList } from './PageList';

const searchForm = document.getElementById("searchForm");

const MyRoute = () => {

  console.log("before route");
  const searchForm = document.getElementById("searchForm");

  let pageArgument;

  const setRoute = () => {
    let path = window.location.hash.substring(1).split("/");
    console.log("path " + path);
    pageArgument = path[1] || "";

    //SearchBar to Rework 🔴
    const formSearch = document.getElementById("searchForm");
    formSearch.addEventListener("submit", (event) => {
      event.preventDefault();
      const searchInput = document.getElementById("searchValue").value;
      PageList(searchInput);
    });

    var pageContent = document.getElementById("pageContent");
    routes[path[0]](pageArgument);
    return true;
  };

  window.addEventListener("hashchange", () => setRoute());
  window.addEventListener("DOMContentLoaded", () => setRoute());
};

export { MyRoute };
MyRoute();
