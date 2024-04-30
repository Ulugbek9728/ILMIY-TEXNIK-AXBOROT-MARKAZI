import { getInstance } from "../utils/httpClient";



// news
export const getHomeNews = () => getInstance().get(`news/top3`);
