import { useEffect, useState } from "react";
import { artsService } from "../services/ArtsService";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
import { Artwork } from "../models/Artwork";
import { observer } from "mobx-react";

export default function HomePage() {
  async function getArtworks() {
    try {
      await artsService.getArtworks();
    }
    catch (e){
      Pop.error(e as Error);
    }
  }

  const onMounted = () => {
    getArtworks();
  }

  useEffect(onMounted, [])

  const ArtworkList = observer(() => AppState.artworks.map(art => 
    <div key={art.id}>
      <img className="img-fluid" src={art.imgUrls.regular} alt={art.altDescription} />
    </div>
  ))

  return (
    <section className="container-fluid py-2 px-3">
      <div className="row">
        <div className="col-md-3">
          <div className="py-3 d-flex flex-column justify-content-between h-100">
            <div>
              <div className="mx-auto w-50">
                <img className="sidebar-account-img" src="https://i.pinimg.com/736x/72/c9/09/72c909f532124dee6e5db815f6625d3e.jpg" alt="" />
              </div>
              <p className="fs-5 m-0 text-center">Batman</p>
              <div className="text-center">
                <button type="button" className="btn btn-outline-dark">Logout</button>
              </div>
            </div>

            <div>
              <p className="text-center"><i className="fa-solid fa-book-open"></i></p>
              <p className="text-center">1 of 27</p>
              <button type="button" className="d-block btn btn-outline-dark rounded-pill w-75 mx-auto">next</button>
              <button type="button" className="d-block btn btn-outline-dark rounded-pill w-75 mx-auto mt-2">previous</button>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <h3>Institute Of Art</h3>
          <div className="masonry-contain">
            <div className="masonry-design">
              <ArtworkList />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}