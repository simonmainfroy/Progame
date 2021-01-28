import { pictPlatforms, OldshowMore, hoverCards } from './toolsList';



const PageList = (argument = "") => {

  const preparePage = () => {
    var cleanedArgument = argument.replace(/\s+/g, "-");
    let games = "";
    const pageSize = "?page_size=9";

    const fetchList = (url, argument, pageSize) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "?search=" + argument;
      } else {
        finalURL = url + pageSize;
      };
      fetch(`${finalURL}`)
      .then((response) => response.json())
      .then((response) => {
        console.log("pagelist response :", response);
        response.results.forEach((game) => {
          games += `
          <div class="col">
            <a href = "#pagedetail/${game.id}">
              <div class="cardEachGame">
              <img src="${game.background_image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${game.name}</h5>
                  <p class="card-platform">${pictPlatforms(game.parent_platforms)}</p>
                </div>
              </div>
            </a>
          </div>
          `;
        });
        document.querySelector(".games").innerHTML = games;


        const showMore = () => {
          let button = document.getElementById("button");
          const newFetch = () => {
            console.log("coucou");
            button.removeEventListener("click", newFetch);
            fetchList(response.next)
            console.log("response next:", response.next);
          };
          button.addEventListener("click", newFetch);
        };
        showMore();


      });
    };
    fetchList("https://api.rawg.io/api/games", cleanedArgument, pageSize);
  };


  const render = () => {
    console.log("render PageList");
    pageDetailContent.innerHTML = ``
    pageContent.innerHTML = `
    <h2>...loading<h2>
    `;
    preparePage();
  };
  render();
};



export { PageList };
