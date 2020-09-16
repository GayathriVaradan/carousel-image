import React from 'react';
import ImageSlider from  "../ImageSlider/ImageSlider";
import './Carousel.css';


function Carousel(props){
  const setShowCarousel =  props.setShowCarousel;
    function closeCarousel(isCarouselOpen){
      setShowCarousel(isCarouselOpen) 
    }
    const imgUrls = props.url;
    const currentImageIndex = props.currentImageIndex;
    const setCurrentImageIndex = props.setCurrentImageIndex;
    function previousSlide () {
        const lastIndex = imgUrls.length - 1;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;    
        setCurrentImageIndex(index)
      }
    
    function nextSlide () {
        const lastIndex = imgUrls.length - 1;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(index)
      }

        return (
            <div className="modal">
              
       <button className="close" onClick={() => {
                closeCarousel(false);
              }}>&times;</button>
              <ImageSlider url={ imgUrls[currentImageIndex] }
              thumbnails = {imgUrls}
              currentImageIndex = {currentImageIndex}
              setCurrentImageIndex = {setCurrentImageIndex}
              />


<button className="prev" onClick={() => { previousSlide();}}> &#8678;</button>
<button className="next" onClick={() => { nextSlide(); }}>&#8680;</button>


            </div>
          );
}
export default Carousel;
