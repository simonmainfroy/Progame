import { ContentPageDetail } from './contentPageDetail';

const PageDetail = (argument) => {
  const preparePage = () => {
    var cleanedArgument = argument.replace(/\s+/g, "-");

    let gameDOM = document.querySelector("div#pageDetailContent");

    const fetchGame = (url, argument) => {
      let finalURL = url + argument;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          console.log("pagedetail reponse:", response);

        // Response and info needed :
          let { name, released, description, background_image, rating, developers, platforms, publishers, genres, tags, stores, ratings_count, website, clip} = response;


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
          let dimitri = `
          <div class="jumbotron" style="background-image:url(${background_image});">
          <p class="lead text-right">
            <button class="btn buttonWebsite"> <a href="${website}">Check Website</a></button>
          </p>
          </div> `
          

          gameDOM.querySelector("h2.title").innerHTML = name;
          gameDOM.querySelector("p.rating span.ratingNote").innerHTML = rating;
          gameDOM.querySelector("p.rating span.numberNote").innerHTML = ratings_count;
          gameDOM.querySelector("p.description").innerHTML = description;
          gameDOM.querySelector("div.release-date span.dateReleased").innerHTML = released;
          gameDOM.querySelector("div.imgTop").innerHTML = dimitri;
          
          

          gameDOM.querySelector("div.platforms").innerHTML = platformsAvailable;
          gameDOM.querySelector("div.developers").innerHTML = developersAvailable;
          gameDOM.querySelector("div.publishers").innerHTML = publishersAvailable;
          gameDOM.querySelector("div.genres").innerHTML = genresAvailable;
          gameDOM.querySelector("div.tags").innerHTML = tagsAvailable;
          gameDOM.querySelector("ul.buyStore").innerHTML = storesAvailable;
          


         });

        // ###########################################
        // New fetch Screenshots
        // ###########################################

        let screenshotsURL = url + argument + "/screenshots";
        console.log(screenshotsURL);
        fetch(`${screenshotsURL}`)
        .then((response) => response.json())
        .then((response) => {

          let {results} = response;


          // Boucle screenshots :
          let screenshotAvailable = "";
          results.forEach((screenshot) => {
            screenshotAvailable += `<div class="protectImg"><img src="${screenshot.image}"></div> ` 
          }); 


          gameDOM.querySelector("div#imgScreenshots").innerHTML = screenshotAvailable;

        });


        // ###########################################
        // New fetch Trailer
        // ###########################################

        let moviesURL = url + argument + "/movies";
        console.log(moviesURL);
        fetch(`${moviesURL}`)
        .then((response) => response.json())
        .then((response) => {
          //console.log("pagedetail moviesURL response:", response);
          if(response.count > 0){
            gameDOM.querySelector("div#videotrailer video").innerHTML = `<source src="${response.results[0].data.max}" type="video/mp4"> `;
          }
        });

        // ###########################################
        // New fetch Youtube
        // ###########################################

        // https://www.youtube.com/watch?v=${variable}   F9tni2Z-T0w
        // <iframe width="420" height="345" src="https://www.youtube.com/embed/F9tni2Z-T0w"> </iframe>



        let youtubeURL = url + argument + "/youtube";
        console.log(youtubeURL);
        fetch(`${youtubeURL}`)
        .then((response) => response.json())
        .then((response) => {
          let {results} = response;
          console.log("pagedetail youtube response:", results);


          let contentYoutubeBis = "";
          for(let i = 1; i<4; i++){
            contentYoutubeBis += `
            <div>
              <div><iframe width="420" height="245" src="https://www.youtube.com/embed/${results[i].external_id}"></iframe></div>
              <div>
                <h5>${results[i].channel_title}</h5>
                <p>${results[i].created}</p>
              </div>
            </div>
              ` 
          }; 


          let testYoutube = `
            <div><iframe width="520" height="345" src="https://www.youtube.com/embed/${results[0].external_id}"></iframe></div>
            <div>
              <h5>${results[0].channel_title}</h5>
              <p>${results[0].created}</p>
            </div>

          ` //youtubeContent
          gameDOM.querySelector("div#youtubeContent").innerHTML = testYoutube;
          gameDOM.querySelector("div#youtubeContentBis").innerHTML = contentYoutubeBis;


        });


    };
    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = ``;
    pageDetailContent.innerHTML = ContentPageDetail();

    preparePage();

  };

  render();



};


export { PageDetail };




// https://api.rawg.io/api/games/{id}/movies -> Trailer
// https://api.rawg.io/api/games/{game_pk}/screenshots -> Screenshots
// https://api.rawg.io/api/games/{id}/youtube -> Youtube
// Similare games ?