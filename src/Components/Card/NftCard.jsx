import React from "react";
import "./Card.css";
import { Row, Col, Image, Button } from "react-bootstrap";
import { FaWallet } from "react-icons/fa";
import cover from '../../assets/bg-small.png'
import avatar from '../../assets/avatar10.jpg'

export default function NftCard() {

    return (
        <React.Fragment>
            <div>
                <div className="flex-selling">
                <span className="red"><FaWallet color="#6164FF" size={22} style={{marginLeft:12,marginTop:12}}/></span>
                <h5 className="wallet">Set up your wallet</h5>
                </div>
                <p className="detail-selling">Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.</p>
            </div>
        </React.Fragment>
    );
}

