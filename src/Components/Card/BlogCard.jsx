import React from "react";
import "./Card.css";
import {  Image, Button } from "react-bootstrap";
import { AiOutlineClockCircle, AiOutlineMessage } from "react-icons/ai";
import cover from '../../assets/cover5.jpg'
import avatar from '../../assets/avatar10.jpg'
import pic from '../../assets/3.jpeg'
export default function Card() {

    return (
        <React.Fragment>
            <div className="card-blog">
                <Image src={pic} className="image-blog" />
                <h5 className="title-blog">The Ultimate Beginners Guide to digital art NFTs</h5>

                <div className="blog-flex">
                <p className="number"><AiOutlineClockCircle />  April 22, 2021</p>
                <p className="number"><AiOutlineMessage/>  54</p>

                </div>
            </div>
        </React.Fragment>
    );
}

