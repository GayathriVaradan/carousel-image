import './App.css';
import React, { useState } from 'react';
import Carousel from "./Carousel/Carousel"

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [showCarousel, setShowCarousel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleClick(i) {
    setCurrentImageIndex(i);
    setShowCarousel(true);
  }
  function fetchingURL(searchInput) {

    setIsLoading(true);
    fetch("https://api.unsplash.com/search/photos?query=" + searchInput + "&client_id=YckN8iQj8ID45fgyApj3f8SesoDVBtnuRn2Y9lZ1-Mo&extras=url_regular&per_page=15&format=json&nojsoncallback=1").then((res) =>
      res.json().then(
        (data) => {
          setIsLoading(false)
          var picturesArray = (data.results).map(pic => {
            return pic.urls.regular
          })
          setPhotos(picturesArray)
        }
      ))
  }

  let allPicures = photos.map((pic, ind) => {

    return <section key={ind}>
      <img onClick={() => handleClick(ind)} src={pic} alt="No img." />
    </section>
  })

  return (
    <div className="App">
      <header className="App-header">

        <form onSubmit={e => e.preventDefault()}>
          <div className="welcomeText">Have a great day!!</div>
          <input className="textbox" onChange={e => setSearchInput(e.target.value)} type="text" placeholder="Search for a picture" value={searchInput} />
        &nbsp;  <button className="button" onClick={() => { fetchingURL(searchInput) }
          }>Search</button>
        </form>
      </header>
      {isLoading ? <div className="Loading">Loading...</div> :
        <div className="carousel">

          {showCarousel &&
            <Carousel
              url={photos}
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
              setShowCarousel={setShowCarousel}
            />
          }
          {allPicures}

        </div>
      }
    </div>
  );
}

export default App;
