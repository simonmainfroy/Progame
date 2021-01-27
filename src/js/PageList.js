const PageList = (argument = "") => {
  const preparePage = () => {
    var cleanedArgument = argument.replace(/\s+/g, "-");
    let games = "";

    const pictPlatforms = (platforms) => {
      let platformsAvailable = "";
      platforms.forEach(platform => {
        switch(platform.platform.name) {
          case "PC":
          platformsAvailable += `<img src="./src/images/windows.svg" alt="icon-pc">`;
          break;
          case "Xbox":
          platformsAvailable += `<img src="./src/images/xbox.svg" alt="icon-pc">`;
          break;
          case "Playstation":
          platformsAvailable += `<img src="./src/images/ps4.svg" alt="icon-pc">`;
          break;
          case "Nintendo":
          platformsAvailable += `<img src="./src/images/switch.svg" alt="icon-pc">`;
          break;
          default: //leave blank
          break;
        }
      });
      return platformsAvailable;
    }


    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "?search=" + argument;
      }

      fetch(`${finalURL}`)
      .then((response) => response.json())
      .then((response) => {
        console.log("pagelist reponse :", response);
        response.results.forEach((game) => {
          games += `
          <div class="col">
            <a href = "#pagedetail/${game.id}">
              <div class="cardEachGame">
                <img src="${game.background_image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${game.name}</h5>
                  <p class="card-platform">
                  ${pictPlatforms(game.parent_platforms)}
                  </p>
                </div>
              </div>
            </a>
          </div>
          `;



        });
        document.querySelector(".games").innerHTML = games;
        // document.querySelector(".page-list .games").innerHTML = games; 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
      });
    };

    fetchList("https://api.rawg.io/api/games", cleanedArgument);
  };

  const render = () => {
    console.log("render PageList");
    pageContent.innerHTML = `
      ...loading
    `;
    // <section class="page-list">
    // </section>                     🔴🔴🔴🔴🔴🔴🔴

    preparePage();
  };

  render();
};

export { PageList };
