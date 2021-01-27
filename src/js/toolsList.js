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

export { pictPlatforms };
