import React, {useEffect} from "react";
import "./LiveAuctions.css";
import {Row,Col } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import Card from '../Card/Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {shallowEqual, useSelector, useDispatch  } from "react-redux";

export default function LiveAuctions() {

    var settings = {
        dots: false,
        infinite: true,
        arrows:true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: "linear",
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
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
      const Products = useSelector(state => state.changeState.getproducts)
      // const [arrayData,setArrayData] = React.useState([])
      // setTimeout(() => {
      //     setArrayData(Products)
      //   }, 2000);
      //   console.log(arrayData,"hjhfarray")
  return (
    <React.Fragment>
   <div className="live-auction">
       <div className="live-auction-arrow">
           <h6 className="live">Live auctions</h6>
           {/* <p>  <AiOutlineArrowLeft/>  <AiOutlineArrowRight/></p> */}
       </div>
        <Row>
        <Slider {...settings}>
        {Products.map((x) => 

            <Col  md={3}>
            <Card
            data={x}/>
            </Col>
            )}
            {/* <Col  md={3}>
            <Card/>
            </Col> 
            <Col  md={3}>
            <Card/>
            </Col>
            <Col  md={3}>
            <Card/>
            </Col>
            <Col  md={3}>
            <Card/>
            </Col>
            <Col  md={3}>
            <Card/>
            </Col>
            <Col  md={3}>
            <Card/>
            </Col>
            <Col  md={3}>
            <Card/>
            </Col> */}
            </Slider>
        </Row>
       </div>
    </React.Fragment>
  );
}

