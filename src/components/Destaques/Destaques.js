import React, { useContext, useState } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
//modal
import { Modal } from "react-bootstrap";
//css
import '../../styles/Destaques.css';
//slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
//icon
import IconLike from '../../assets/icon/icon-like.png'
import IconHeart from '../../assets/icon/icon-heart.png';

const Destaques = () => {
  const { destaques } = useContext(MoviesContext);
  const [showStatus, setShowStatus] = useState(false);
  const handleShow = () => setShowStatus(true);
  const handleClose = () => setShowStatus(false);
  const [isFavorite, setIsFavorite] = useState(false);
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
    return filteredHighlight.map((data,index) => {
      return (
        <div key={index} className='container-card'>
          <div className='card-img'>
            <img alt={data.title} src={data.poster} />
            <i style={isFavorite ? { color: "#ff0000" } : { color: "#000" }}
              className={isFavorite ? 'heartIcon' : 'hidden heartIcon'}
            >
              <img src={IconHeart} alt={data.title} />
            </i>
          </div>
          <div className='box-content'>
            <div className='box-title-vote'>
              <h4 className='card-title'>
                {data.title}
              </h4>
              <div className='box-vote-like'>
                <span className='card-vote-average'>4/5</span>
                <i className='icon-like-destaques'>
                  <img src={IconLike} alt="icon like"></img>
                </i>
              </div>
            </div>
            <p className='card-overview'>
              {data.overview}
            </p>
          </div>
        </div>
      )
    });
  }

  return (
    <Slider {...settings}>
      {sliders()}
    </Slider>
  );
}

export default Destaques