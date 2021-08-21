import React from "react";
import "./Footer.css";
import { Row, Col, Image, Button } from "react-bootstrap";
import { AiFillFacebook, AiFillInstagram,AiFillTwitterCircle,AiFillMail} from "react-icons/ai";
import cover from '../../assets/cover5.jpg'
import avatar from '../../assets/avatar10.jpg'

export default function Footer() {

    return (
        <React.Fragment>
            <div className="footer-back">
                <Row className="margin-footer">
                    <Col md={4}>
                        <h2 className="unitok">Unefti</h2>
                        <p>Digital marketplace for crypto collectibles<br/>
                            and non-fungible tokens (NFTs).<br/>
                            Buy, sell, and discover exclusive digital assets.</p>
                            <Button className="english">English</Button>

                    </Col>
                    <Col md={2} >
                        <h4 className="ntf-footer">NTF Marketplace</h4>
                        <p className="explore-footer">Explore</p>
                        <p className="explore-footer">Activity</p>
                        <p className="explore-footer">Authors</p>
                        <p className="explore-footer">Privacy Policy</p>

                    </Col>
                    <Col md={2}>
                    <h4 className="ntf-footer">Explore</h4>
                        <p className="explore-footer">Art</p>
                        <p className="explore-footer">Photography</p>
                        <p className="explore-footer">Games</p>
                        <p className="explore-footer">Music</p>
                    </Col>
                    <Col md={2}>
                    <h4 className="ntf-footer"> </h4>
                        <p className="explore-footer">Domains</p>
                        <p className="explore-footer">DeFi</p>
                        <p className="explore-footer">Metaverses</p>
                        <p className="explore-footer">Memes</p>
                    </Col>
                    <Col md={2}>
                    <h4 className="ntf-footer">Community</h4>
                        <p className="explore-footer">Unitok</p>
                        <p className="explore-footer">Our Blog</p>
                        <p className="explore-footer">Help Center</p>
                        <p className="explore-footer">Contacts</p>
                    </Col>
                </Row>
                <div className="footer-icon">
                <p className="explore-footer1">© Unitok, 2021. Created by Dmitry Volkov.</p>
                <p className="explore-footer1"><AiFillFacebook size={22} style={{marginRight:20}}/>  <AiFillInstagram size={22} style={{marginRight:20}}/> <AiFillTwitterCircle size={22} style={{marginRight:20}}/>  <AiFillMail size={22} style={{marginRight:20}}/></p>
                </div>

            </div>
        </React.Fragment>
    );
}

