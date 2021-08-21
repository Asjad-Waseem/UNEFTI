import React from "react";
import "./Blog.css";
import {Row,Col } from "react-bootstrap";
import BlogCard from '../Card/BlogCard'
export default function Blog() {
  return (
    <React.Fragment>
   <div className="live-auction">
       <div className="live-auction-arrow">
           <h6 className="live">Blog Section</h6>
       </div>
        <Row>
            <Col  md={4}>
            <BlogCard/>
            </Col>
            <Col  md={4}>
            <BlogCard/>
            </Col>            <Col  md={4}>
            <BlogCard/>
            </Col>

        </Row>
       </div>
    </React.Fragment>
  );
}

