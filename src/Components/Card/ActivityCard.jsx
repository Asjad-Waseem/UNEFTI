import React from "react";
import "./Card.css";
import {  Image, Row,Col } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineArrowRight } from "react-icons/ai";
import pic from '../../assets/cover2.jpg'
export default function ActivityCard() {

    return (
        <React.Fragment>
            <div className="card-activity"><Row>
                <Col md={5}>
                <Image src={pic} className="small-image-activity" />
                </Col>
                <Col md ={7}>
               <h6 className="walking-on-air">Walking On Air</h6>
               <h6 className="walking-on-list">Listed by @Nickname</h6>
                <h6 className="walking-on-air">For 0.449 ETH</h6>
                <p className="walking-on-list">4 minutes ago</p>
                </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}

