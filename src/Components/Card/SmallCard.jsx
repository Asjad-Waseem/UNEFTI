import React from "react";
import "./Card.css";
import { Row, Col, Image, Button } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineArrowRight } from "react-icons/ai";
import cover from '../../assets/bg-small.png'
import avatar from '../../assets/avatar10.jpg'

export default function SmallCard() {

    return (
        <React.Fragment>
            <div className="card-collection">
                <Image src={cover} className="image-radius-coll" />
                <Image src={avatar} className="avatar-image-col" />
                <h5 className="hasmask">Hashmasks</h5>
                <p className="erx">ERC-721</p>
            </div>
        </React.Fragment>
    );
}

