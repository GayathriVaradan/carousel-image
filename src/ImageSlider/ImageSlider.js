import React from 'react';
import "./ImageSlider.css"

const ImageSlider = (props) => {
    const imgUrls = props.url;
    const setCurrentImageIndex = props.setCurrentImageIndex;
    const thumbnailPics = props.thumbnails;
    const styles = {
      backgroundImage: `url(${imgUrls})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',     
      backgroundPosition: 'center',
      margin: 'auto',
      padding: 0,
      width: '90%',
    };
    let allPicures = thumbnailPics.map((pic,ind) => {
      return <section key={ind}>
         <img onClick={()=>handleClick(ind)} src={pic} alt="No img." />
         </section>
            })

    function handleClick(i){
      setCurrentImageIndex(i);
    }
    
    return (
      <div>
      <div className="image-slide" style={styles}></div>
      <div className='thumbnail'>
        {allPicures}
      </div></div>
    );
  }

export default ImageSlider;