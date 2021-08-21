import React,{useEffect} from "react";
import "./Card.css";
import {  Image, Button } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineArrowRight } from "react-icons/ai";
import cover from '../../assets/cover5.jpg'
import avatar from '../../assets/avatar10.jpg'
import pic from '../../assets/cover1.jpg'

export default function Card(props) {
const [obj,setobj]= React.useState("")
// useEffect(() => {
//    setobj(props.data)
// }, [])
setTimeout(() => {
    setobj(props.data)
  }, 3000);
    return (
        <React.Fragment>
            <div className="card-auction">
                <Image src={obj?.primaryImageSrc?.imageSrc} className="image-radius" />
                {/* <Button className="button-absolute">an hour left</Button> */}
                <h5 className="title">{obj?.title?.substr(0,20)}</h5>
                <div className="image-flex">
                    <Image src={avatar} className="image-radius1" />
                    <p className="name">@ {obj?.vendorName}</p>
                </div>
                <hr />
                <p  >Current price</p>
                <div className="ETH-flex">
                <h5 className="title-ETH">1000 {obj?.currency}</h5>
                <p className="number"><AiOutlineHeart style={{marginTop:-4}}/>  {obj?.quantitySold}</p>

                </div>
            </div>
            
        </React.Fragment>
    );
}

