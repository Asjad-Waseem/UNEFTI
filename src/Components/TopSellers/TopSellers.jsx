import React from "react";
import "./TopSellers.css";
import {Row,Col,Image } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import avatar from '../../assets/avatar10.jpg'
import {shallowEqual, useSelector, useDispatch  } from "react-redux";

export default function TopSellers() {
  // const [number , setNumber] = React.useState(0)
  const Vendors = useSelector(state => state.changeState.getvendors)

  return (
    <React.Fragment>
        <div  className="live-auction">
        <div className="live-auction-arrow">
           <h6 className="live">Top Sellers</h6>
           <p>  View All  <AiOutlineArrowRight/></p>
       </div>
    <Row>
      {Vendors.map((x,index) =>
      <Col md={2} style={{display:'flex' ,marginBottom:40}}>
        <p style={{fontSize:20,paddingTop:10,marginRight:10}}>{index+1}</p>
        <Image src={x.logo? x.logo :avatar} className="seller-image"/>
        <p style={{paddingTop:5}}>@ {x?.name.substr(0,15)}<br/></p>


      </Col>
)}
    </Row>
        </div>
    </React.Fragment>
  );
}

