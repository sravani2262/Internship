import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import './CarouselPage.css';
function CarouselPage(){
    return(
        <div>
        <Carousel>
        <Carousel.Item>
          <img className="d-block image"
          src="https://res.cloudinary.com/deryas3xc/image/upload/v1712825163/maxresdefault_kgmibp.jpg"
          alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block image"
          src="https://res.cloudinary.com/deryas3xc/image/upload/v1712825158/Aakash-Byjus-Banner-NEET-UG-2021-800x400px_yi7fan.jpg"
          alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block image"
          src="https://res.cloudinary.com/deryas3xc/image/upload/v1712825212/NEET-toppers-2019_iuoom1.png"
          alt="Third slide"
          />
        
        </Carousel.Item>
      </Carousel>
      </div>
    )
}

export default CarouselPage