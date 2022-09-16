import React, { useState } from 'react'
import './Slideshow.css'

// -------------------------------------------

export default function Slideshow(props) {
  const [slideIndex, setSlideIndex] = useState(0)
  const imgSize = () => {
    const slideshowImg = document.querySelector('.slideshow-container img')
    if (!slideshowImg) {
      return 0
    }
    return slideshowImg.width
  }

  const onNext = () => {
    if (slideIndex === props.img.length - 1) {
      setSlideIndex(0)
    } else {
      setSlideIndex(slideIndex + 1)
    }
  }

  const onPrev = () => {
    if (slideIndex === 0) {
      setSlideIndex(props.img.length - 1)
    } else {
      setSlideIndex(slideIndex - 1)
    }
  }

  return (
    <div className="slideshow">
      <div
        className="slideshow-container"
        style={{ transform: `translateX(-${slideIndex * imgSize()}px)` }}
      >
        {props.img.map((picture) => (
          <img
            className="slideshow-container-img"
            src={picture}
            alt=""
            key={picture}
          />
        ))}
      </div>
      <div className={'slideshow-controls'}>
        <img
          src="../chevron-left.png"
          className={'chevron'}
          onClick={onPrev}
          alt=""
        />
        <img
          src="../chevron-right.png"
          className={'chevron'}
          onClick={onNext}
          alt=""
        />
      </div>
      <div className={'slideshow-index'}>
        {slideIndex + 1} / {props.img.length}
      </div>
    </div>
  )
}
