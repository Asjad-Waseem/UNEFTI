import React from "react";
import "./HotCollection.css";
import { Row, Col } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import SmallCard from '../Card/SmallCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

export default function HotCollection() {

    var settings = {
        dots: false,
        infinite: true,
        arrows: true,
        autoplay: false,
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
                    slidesToScroll: 1
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
    const Products = useSelector(state => state.changeState.getHotcollection)
    const AllProducts = useSelector(state => state.changeState.getproducts)

    return (
        <React.Fragment>
            <div className="live-auction">
                <div className="live-auction-arrow">
                    <h6 className="live">Hot collections</h6>
                    {/* <p>  <AiOutlineArrowLeft />  <AiOutlineArrowRight /></p> */}
                </div>
                {Products.length === 0 ?
                   <Row>
                   <Slider {...settings}>
             

                       {AllProducts.map((x) =>
                           <Col md={3}>
                               <SmallCard
                                   data={x} />
                           </Col>
                       )}
                   </Slider>
               </Row>
                    :
                    <Row>
                        <Slider {...settings}>

                            {Products.map((x) =>
                                <Col md={3}>
                                    <SmallCard
                                        data={x} />
                                </Col>
                            )}
                        </Slider>
                    </Row>
                }
            </div>
        </React.Fragment>
    );
}

