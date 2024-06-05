import { useState, useEffect } from "react";
import "../style/SliderImg.css";

const Slider = ({ hotel }) => {
  const [imgSelect, setImgSelect] = useState(0);

  const objStyle = {
    width: `${hotel?.images.length * 100}%`,
    transform: `translateX(calc(-${imgSelect}/${hotel?.images.length}*100%))`,
  };

  const handlePrev = () => {
    if (imgSelect !== 0) {
      setImgSelect(imgSelect - 1);
    }else{
      setImgSelect(hotel?.images.length - 1)
    }
  };

  const handleNext = () => {
    if (imgSelect !== hotel.images.length - 1) {
      setImgSelect(imgSelect + 1);
    }else{
      setImgSelect(0)
    }
  };
  
  /*useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 2000)
  }, [imgSelect])*/
  

  return (
    <div className="container-slaider">
      <div className="slider">
        <button onClick={handlePrev} className="slider__btn slider__prev">
          &lt;
        </button>
        <div style={objStyle} className="slider__movable">
          {
          hotel?.images.map((imgInfo) => (
            <div key={imgInfo.url} className="slider__img-container">
              <img className="slider__img" src={imgInfo.url} alt="" />
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="slider__btn slider__next">
          &gt;
        </button>        
      </div>
      <div className="slider__footer">
      {
          hotel?.images.map((imgInfo, index) => (
            <div key={imgInfo.url} className="slider__footer-container">
              <img className={`slider__footer__img ${index === imgSelect && 'slider__footer__active'}`} src={imgInfo.url} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Slider;
