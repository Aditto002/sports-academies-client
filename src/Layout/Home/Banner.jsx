import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Banner() {
  return (
    <div> <Carousel >
    <div>
        <img src="https://cdn.pixabay.com/photo/2012/04/18/23/18/dart-38220_640.png" />

    </div>
    <div>
        <img src="https://cdn.pixabay.com/photo/2014/07/01/12/25/roller-skates-381216_640.jpg" />

    </div>
    <div>
        <img src="https://cdn.pixabay.com/photo/2017/10/25/19/45/arrows-2889040_640.jpg" />
 
    </div>
    <div>
        <img src="https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_640.jpg" />

    </div>

</Carousel></div>
  )
}

export default Banner