import React, { useContext, useState } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import { Modal } from "react-bootstrap";
import DefaultDetail from '../../DefaultDetail';
import DefaultPoster from '../../DefaultPoster';

//css
import '../../assets/styles/Destaques.css';
import '../../assets/styles/ModalDetail.css';
//slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Destaques = () => {
  const { destaques, isFavorite, handlerIcon } = useContext(MoviesContext);
  var settings = {
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    infinite: true,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const filteredHighlight = destaques.filter(movie => movie.highlight === true);
  const sliders = () => {
    return filteredHighlight.map((data) => {
      return (
        <>
          <DefaultPoster {...data} key={data.id} />
        </>
      );
    });
  }

  return (
    <div>
      <h3 className='title-destaque'>Destaques</h3>
      <Slider {...settings}>
        {sliders()}
      </Slider>
    </div>
  );
}

export default Destaques