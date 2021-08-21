import React from "react";
import "./Selling.css";
import { Row, Col } from "react-bootstrap";
import Card from '../Card/NftCard'
export default function Selling() {

    return (
        <React.Fragment>
            <div className="live-auction">
                <div className="live-auction-arrow">
                    <h6 className="live">Get started creating & selling your NFTs</h6>
                </div>
                <Row>
                    <Col md={3}>
                        <Card />
                    </Col>
                    <Col md={3}>
                        <Card />
                    </Col>
                    <Col md={3}>
                        <Card />
                    </Col>
                    <Col md={3}>
                        <Card />
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}

