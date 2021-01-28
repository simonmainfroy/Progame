import { PageList } from './PageList';



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



const hoverCards = () => {
  let hoverCard = document.getElementsByClassName("cardEachGame").onmouseover = function() {
    console.log("pourt");
    console.log(hoverCard);
    this.style.backgroundColor = "blue";
  };
};



const OldshowMore = () => {
  // let button = document.getElementById("button");
  // const newFetch = () => {
  // console.log("coucou");
  //   button.removeEventListener("click", newFetch);
  //   fetchList(response.next)
  //   console.log("response next:", response.next);
  // };
  // button.addEventListener("click", newFetch);
};



export { pictPlatforms, OldshowMore, hoverCards };
