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
          <div class="col" id="testId">
            <a href = "#pagedetail/${game.id}">
              <div class="cardEachGame" id="cardFront">
              <img src="${game.background_image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${game.name}</h5>
                  <p class="card-platform">${pictPlatforms(game.parent_platforms)}</p>
                </div>
              </div>
              <div class="col" id="toShow" style="display:none;">
                <p>${game.released}</p>
                <p>${game.rating}</p>
              </div>
            </a>
          </div>
          `;
        });
        document.querySelector(".games").innerHTML = games;

        //showmore
        const showMore = () => {
          //console.log("FUNCTION : showMore");
          let button = document.getElementById("divButtonMore");
          button.innerHTML = `<button id="button" class="btn btn-primary">ShowMore</button>`
          const newFetch = () => {
            button.removeEventListener("click", newFetch);
            fetchList(response.next)
            console.log("response next:", response.next);
          };
          button.addEventListener("click", newFetch);
        };
        showMore();
        //showmore


        //hover
        const hoverFunction = () => {

          //console.log("FUNCTION : hover");
          const groupCards = document.querySelectorAll("#testId");
          //console.log("each cards " + groupCards);

          groupCards.forEach((card) => {
            card.addEventListener("mouseover", () => {
              card.childNodes[1].childNodes[1].style.display="none";
              // console.log(card.childNodes[1].childNodes[1]);
              // console.log(card.childNodes[1].childNodes[3]);
              card.childNodes[1].childNodes[3].style.display="block";
              //this.innerHTML = ``;
              //this.innerHTML += ``
            })
          })

          groupCards.forEach((card) => {
            card.addEventListener("mouseleave", () => {
              card.childNodes[1].childNodes[1].style.display="block";
              card.childNodes[1].childNodes[3].style.display="none";
              //this.innerHTML = ``;
            })
          })

        };
        hoverFunction();
        //hover


      //filter
      //filter


      });

      //fetch

    };
    fetchList("https://api.rawg.io/api/games", cleanedArgument, pageSize);
  };


  const render = () => {
    console.log("render PageList");
    pageDetailContent.innerHTML = ``
    pageContent.innerHTML = `
    <div class="jumbotron">
      <h1 class="display-4">Welcome</h1>
      <p class="lead">The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,
      the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,
      brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,
      groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you
      with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p>
    </div>
    <div class="container">
      <div class="row row-cols-3 games">
        <h2>...loading<h2>
      </div>
    </div>
    `;
    preparePage();
  };
  render();
};



export { PageList };
