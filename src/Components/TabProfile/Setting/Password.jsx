import React from "react";
import {  Form, Row,Col ,Button} from "react-bootstrap";
import { AiOutlineHeart, AiOutlineArrowRight } from "react-icons/ai";
import '../TabProfile.css'
export default function Personal() {

    return (
        <React.Fragment>
            <div className="card-personal">
            <h6 className="Profile-Detail">Change Password</h6>

            <Form>
  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label className="label-color">Old Password</Form.Label>
      <Form.Control type="password"  className="input-back"/>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label className="label-color">New Password</Form.Label>
      <Form.Control type="password"  className="input-back" />
    </Form.Group>

    


  </Row>

  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label className="label-color">Confirm New Password</Form.Label>
      <Form.Control type="password"  className="input-back"/>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridText">
      <Form.Label className="label-color">Select</Form.Label>
      <Form.Control type="text" className="input-back"/>
    </Form.Group>

    


  </Row>



  <Button variant="primary" type="submit" className="save-personal">
    Save
  </Button>
</Form>
            </div>
        </React.Fragment>
    );
}

