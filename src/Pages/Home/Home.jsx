import React, {useEffect} from "react";
import "./Home.css";
import Navbar from '../../Components/NavBar/CustomNavbar'
import MainSection from '../../Components/MainSection/MainSection'
import LiveAuctions from '../../Components/LiveAuctions/LiveAuctions'
import TopSellers from '../../Components/TopSellers/TopSellers'
import Explore from '../../Components/Explore/Explore'
import HotCollection from '../../Components/HotCollection/HotCollection'
import Blog from '../../Components/BlogSection/Blog'

import Selling from '../../Components/Selling/Selling'
import Footer from '../../Components/Footer/Footer'
import {shallowEqual, useSelector, useDispatch  } from "react-redux";
import { getProducts ,getVendors,hotCollection,explore} from "../../store/actions/otherActions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getVendors());
    dispatch(hotCollection());
    dispatch(explore());

  }, [])
  return (
    <React.Fragment>
      <Navbar />
      <MainSection/>
      <LiveAuctions/>
      <TopSellers/>
      <Explore/>
      <HotCollection/>
      <Blog/>
      <Selling/>
      <Footer/>
    </React.Fragment>
  );
}

