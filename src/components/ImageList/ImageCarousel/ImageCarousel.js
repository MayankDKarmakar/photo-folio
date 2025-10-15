import React, { useState } from "react";
import "./ImageCarousel.css";
import { IoClose, IoChevronForward, IoChevronBack } from "react-icons/io5";
// import { IoIosCloseCircle } from "react-icons/io";

const ImageCarousel = ({
  imageLists,
  selectedImgForCarousel,
  setSelectedImgForCarousel,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(
    imageLists.indexOf(selectedImgForCarousel)
  );

  function handleCloseCarousel() {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImgForCarousel(null);
    }, 300);
  }
  function handleBackBtn() {
    if (currentIndex <= 0) {
      setCurrentIndex(imageLists.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleForwardBtn() {
    if (currentIndex >= imageLists.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <div
      className={`image-carousel-overlay ${
        isClosing ? "fadeOutCarousel" : "fadeInCarousel"
      }`}
    >
      <div className="carousel-container">
        <IoClose className="closeIcon" onClick={handleCloseCarousel} />
        <div className="image_container">
          <img
            src={imageLists[currentIndex].url}
            alt={imageLists[currentIndex].title}
          />
        </div>
        <IoChevronBack className="backIcon" onClick={handleBackBtn} />
        <IoChevronForward className="forwardIcon" onClick={handleForwardBtn} />
      </div>
    </div>
  );
};

export default ImageCarousel;
