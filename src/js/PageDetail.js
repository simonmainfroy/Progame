const PageDetail = (argument) => {
  const preparePage = () => {
    var cleanedArgument = argument.replace(/\s+/g, "-");

    const fetchGame = (url, argument) => {
      let finalURL = url + argument;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          console.log("pagedetail reponse:", response);
          let { name, released, description } = response;

          let gameDOM = document.querySelector(".page-detail .game");

          gameDOM.querySelector("h1.title").innerHTML = name;
          gameDOM.querySelector("p.release-date span").innerHTML = released;
          gameDOM.querySelector("p.description").innerHTML = description;
        });
    };
    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="game">
          <h1 class="title"></h1>
          <p class="release-date">Release date : <span></span></p>
          <p class="description"></p>
          <button class="btn btn-primary" id="btnTest">COUCOU</button>
        </div>
      </section>
    `;



    preparePage();

  const testss = () => {
    console.log("sfqsdqsdqsd");
  }

  const btnTest = document.getElementById("btnTest");
  btnTest.addEventListener("click", () => testss());

  };

  render();



};


export { PageDetail };
