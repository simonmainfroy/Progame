import { PageList } from './PageList';
import { PageDetail } from './PageDetail';
import { pictPlatforms } from './toolsList';
import { MyRoute } from './index';

  const routes = {
    "": PageList,
    "pagelist": PageList,
    "pagedetail": PageDetail,
  };

export { routes };
