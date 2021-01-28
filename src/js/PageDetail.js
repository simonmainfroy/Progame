const PageDetail = (argument) => {
  const preparePage = () => {
    var cleanedArgument = argument.replace(/\s+/g, "-");

    const fetchGame = (url, argument) => {
      let finalURL = url + argument;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          console.log("pagedetail reponse:", response);

        // Response and info needed :
          let { name, released, description, background_image, rating, developers, platforms, publishers, genres, tags, stores, ratings_count, website} = response;


        // ####################################################
        // Boucles pour récupérer les infos :
        // ####################################################

        // Boucle platforms :
          let platformsAvailable = "";
          platforms.forEach((game) => {
            platformsAvailable += `${game.platform.name} `
          });

        // Boucle developers :

        let developersAvailable = "";
          developers.forEach((game) => {
            developersAvailable += `${game.name} `
          });

        // Boucle publishers :
        let publishersAvailable = "";
          publishers.forEach((game) => {
            publishersAvailable += `${game.name} `
          });


        //Boucle genres :
        let genresAvailable = "";
          genres.forEach((game) => {
            genresAvailable += `${game.name} `
          });


        // Boucle tags :
        let tagsAvailable = "";
          tags.forEach((game) => {
            tagsAvailable += `${game.name} `
          });

          // Boucle stores :
        let storesAvailable = "";
          stores.forEach((game) => {
            storesAvailable += `<li><a href="${game.url}">${game.store.name}</a></li> `
          });

          // #########################################################

          let gameDOM = document.querySelector("div#pageDetailContent");

          gameDOM.querySelector("h1.title").innerHTML = name;
          gameDOM.querySelector("p.rating span.ratingNote").innerHTML = rating;
          gameDOM.querySelector("p.rating span.numberNote").innerHTML = ratings_count;
          gameDOM.querySelector("p.description").innerHTML = description;
          gameDOM.querySelector("div.release-date span.dateReleased").innerHTML = released;
          gameDOM.querySelector("div.imgTop").innerHTML = `<img src="${background_image}" style="width:100%;">`;
          gameDOM.querySelector("button.buttonWebsite").innerHTML = `<a href="${website}">Check Website</a> `;
          gameDOM.querySelector("div.platforms").innerHTML = platformsAvailable;
          gameDOM.querySelector("div.developers").innerHTML = developersAvailable;
          gameDOM.querySelector("div.publishers").innerHTML = publishersAvailable;
          gameDOM.querySelector("div.genres").innerHTML = genresAvailable;
          gameDOM.querySelector("div.tags").innerHTML = tagsAvailable;
          gameDOM.querySelector("ul.buyStore").innerHTML = storesAvailable;


         });
    };
    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = ``;
    pageDetailContent.innerHTML = `
      <section class="page-detail">

        <div class="game">

          <div class="imgTop">

          </div>
          <button class="btn buttonWebsite"> </button>

          <h1 class="title"></h1>
          <p class="rating"> <span class="ratingNote"> </span> /5 - <span class="numberNote"></span> votes</p>
          <p class="description"></p>

          <div class="informationsRow">
            <div class="release-date">
              <h5>Released Date</h5>
              <span class="dateReleased"> </span>
            </div>
            <div>
              <h5>Developer</h5>
              <div class="developers"></div>
            </div>
            <div>
              <h5>Platforms</h5>
              <div class="platforms"></div>
            </div>
            <div>
              <h5>Publishers</h5>
              <div class="publishers"></div>
            </div>
            <div>
              <h5>Genres</h5>
              <div class="genres"></div>
            </div>
            <div>
              <h5>Tags</h5>
              <div class="tags"></div>
            </div>
          </div>
          <div>
            <h3>Buy</h3>
            <ul class="buyStore"> </ul>
          </div>
          <div>
            <h3> Trailer </h3>
            <div><video width="640" height="480" controls>
  <source src="https://media.rawg.io/media/stories-640/c10/c10ef05b12482e4d2c647c4e26138d5b.mp4" type="video/mp4">
</video></div>

          </div>



        </div>
      </section>
    `;




    preparePage();

  // const testss = () => {
  //   console.log("sfqsdqsdqsd");
  // }

  // const btnTest = document.getElementById("btnTest");
  // btnTest.addEventListener("click", () => testss());

  };

  render();



};


export { PageDetail };




// pageContent.innerHTML = `

//           <img src="${response.background_image}">

//         <div class="game">
//           <h1 class="title">${response.name}</h1>
//           <p> ${response.rating} </p>
//           <p class="description">${response.description}</p>
//         </div>
//         <div>
//         <p>${response.released}</p>
//         <p>${response.developers[0].name}</p>
//         <p>${response.platforms[0].platform.name}</p>
//         <p>${response.publishers[0].name}</p>
//         <p>${response.genres[0].name}</p>
//         <p>${response.tags[0].name}</p>
//         </div>
//       </section>
//     `;
