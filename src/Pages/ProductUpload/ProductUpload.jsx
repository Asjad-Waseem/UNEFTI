import React from "react";
import Navbar from "../../Components/NavBar/CustomNavbar";
import Footer from "../../Components/Footer/Footer";
import pic from "../../assets/bg.png";
import { Image, Row, Col } from "react-bootstrap";
import ProductForm from "../../Components/Product/ProductForm";

export default function ProductUpload() {
  return (
    <React.Fragment>
      <Navbar />
      <Image src={pic} className="pic-style" />

      <ProductForm />

      <Footer />
    </React.Fragment>
  );
}
