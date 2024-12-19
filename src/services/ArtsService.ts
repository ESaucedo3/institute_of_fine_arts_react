import { AppState } from "../AppState";
import { Artwork } from "../models/Artwork";
import { api } from "./AxiosService";

class ArtsService {
  async getArtworks() {
    const response = await api.get('api/artworks');
    console.log(response.data)
    AppState.artworks = response.data.artworks.map((art: Artwork) => {
      if (art.imgUrls) {
        const allowedKeys = ["full", "regular", "small"];
        const specificImgUrls = Object.keys(art.imgUrls).filter(key => allowedKeys.includes(key)).reduce((obj, key) => {
          obj[key] = art.imgUrls[key];
          return obj;
        }, {});
        art.imgUrls = specificImgUrls;
      }

      return new Artwork(art);
    });
    AppState.page = response.data.page;
    AppState.pages = response.data.pages;
  }

}

export const artsService = new ArtsService();