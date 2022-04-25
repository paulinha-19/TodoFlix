import React, { useContext, useState } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import { Modal } from "react-bootstrap";
import DefaultDetail from '../../DefaultDetail';

//css
import '../../styles/Destaques.css';
import '../../styles/ModalDetail.css';
//slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
//icon
import IconLike from '../../assets/icon/icon-like.png'
import IconHeart from '../../assets/icon/icon-heart.png';
import { FaHeart } from 'react-icons/fa';


const Destaques = () => {
  const { destaques, favoriteList, setFavoriteList, isFavorite, setIsFavorite, handleFavClick, handlerIcon } = useContext(MoviesContext);
  const [showStatus, setShowStatus] = useState(false);
  const handleShow = () => setShowStatus(true);
  const handleClose = () => setShowStatus(false);
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
        <div>
          <div className='container-card' key={data.id}>
            <div className='card-img'>
              <img alt={data.title} src={data.poster} onClick={handleShow} />
              <i onClick={handlerIcon}>
                {isFavorite ?
                  <FaHeart className='heartIcon' style={{ color: 'red' }} /> : <FaHeart className='heartIcon' style={{ color: '#BABABA' }} />
                }
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
        
            <Modal show={showStatus} onHide={handleClose} backdrop="static" centered >
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body >
                <DefaultDetail id={data.id} poster={data.poster} overview={data.overview} title={data.title} />
              </Modal.Body>
            </Modal>
    
        </div>
      );
    });
  }

  return (
    <Slider {...settings}>
      {sliders()}
    </Slider>
  );
}

export default Destaques