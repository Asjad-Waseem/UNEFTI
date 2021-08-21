import React from "react";
import "./MainSection.css";
import {Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  {Link,useHistory} from 'react-router-dom'
import { connect } from "react-redux";

 function MainSection({ dispatch, authedUser }) {
  var settings = {
    dots: false,
    infinite: true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
  const history = useHistory();
  const handleCreate = () => {
    {authedUser !== null && authedUser.status === "success"?
    history.push('/product')
    :
    history.push('/signin')
  }

  }
  const handleExplore = () => {
    {authedUser !== null && authedUser.status === "success"?
    history.push('/profile')
    :
    history.push('/signin')
  }
  }
  return (
    <React.Fragment>
      <div style={{marginLeft:'8%',marginRight:'8%'}}>
        <Slider {...settings}>
        <div className="main-back">
        <h1>The largest NFT marketplace</h1>
        <p className="marketplace">Digital marketplace for crypto collectibles and non-fungible tokens.</p>
        <p className="marketplace">Buy, sell, and discover exclusive digital assets.</p>
        <div className="button-flex">
        <Button className="explore" onClick={handleExplore}> {authedUser !== null && authedUser.status === "success"?'My Portfolio':'Explore'}</Button>
        <Button className="create" onClick={handleCreate}>Create</Button>
        </div>
        </div>

        <div className="main-back1">
        <h1>The largest NFT marketplace</h1>
        <p className="marketplace">Digital marketplace for crypto collectibles and non-fungible tokens.</p>
        <p className="marketplace">Buy, sell, and discover exclusive digital assets.</p>
        <div className="button-flex">
        <Button className="explore" onClick={handleExplore}> {authedUser !== null && authedUser.status === "success"?'My Portfolio':'Explore'}</Button>
        <Button className="create" onClick={handleCreate}>Create</Button>
        </div>
        </div>


        <div className="main-back2">
        <h1>The largest NFT marketplace</h1>
        <p className="marketplace">Digital marketplace for crypto collectibles and non-fungible tokens.</p>
        <p className="marketplace">Buy, sell, and discover exclusive digital assets.</p>
        <div className="button-flex">
        <Button className="explore" onClick={handleExplore}> {authedUser !== null && authedUser.status === "success"?'My Portfolio':'Explore'}</Button>
        <Button className="create" onClick={handleCreate}>Create</Button>
        </div>
        </div>
        </Slider>
        </div>
    </React.Fragment>
  );
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(MainSection);

