import React from "react";
import "./ProfileSidebar.css";
import { FormControl, Image, Button, Row, Col, InputGroup } from "react-bootstrap";
import { BiWorld } from "react-icons/bi";
import { FaTwitter, FaMediumM, FaInstagram } from "react-icons/fa";
import { AiOutlineCopy } from "react-icons/ai";
import Tab from '../TabProfile/TabProfile'
import profilepic from '../../assets/profilepic.jpg'
import { connect } from "react-redux";
import  {Link,useHistory} from 'react-router-dom'

 function ProfileSidebar({ authedUser }) {
  const history = useHistory();

    const user = authedUser?.data?.name?.split(" ")
    const handleExplore = () => {
        history.push('/product')
        
      }
    return (
        <div className="card-profile-style-padding" >
            <Row>
                
                <Col md={3}>
                    <div className="card-profile">
                        {/* <Image src={profilepic} className="profile-pic" /> */}
                        <h1 className="profile-pic">{user?user[0]?.substr(0,1)+user[1].substr(0,1):''}</h1>
                        <h4 className="title-profile">{user?user[0]+ ' '+user[1]:''}</h4>
                        <h4 className="title-profile-l1roze">@l1roze</h4>
                        <h6 className="text-profile">
                            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary
                        </h6>
                        <div className="copied-input" >
                            <p>FTGVYBHUJNKMVGBHNJHBGVF...</p>
                            <span><AiOutlineCopy color="white" style={{cursor:'pointer'}}/></span>
                        </div>
                        <p className="for-hover"> <BiWorld color="blue" />  https://Unefti.template</p>
                        <p> <FaInstagram /> <FaTwitter className="margin-icon-profile" /> <FaMediumM /></p>
                        <hr />
                        <div className="flex-profile">
                            <h4 className="title-profile-nymber">3829<br /> Followers</h4>
                            <Button className="follow-button">Follow</Button>
                        </div>


                    </div>
                </Col>
                <Col md={9}>
                    <Row>
                    <Col md={12}>
                    <div style={{float:'right',display:'flex'}}>
                    <Button className="Portfolio-create" onClick={handleExplore}>Create Product</Button>

                    </div>
                    </Col>
                    <Col  md={12}>

                    <Tab/>
                    </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
function mapStateToProps({ authedUser }) {
    return {
      authedUser,
    };
  }
  
  export default connect(mapStateToProps)(ProfileSidebar);

