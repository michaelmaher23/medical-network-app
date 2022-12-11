import React from 'react'
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

function A() {
  return (
    <div>
   <Header/>
   <Outlet/>
   <ScrollToTop/>
   <Footer />

    </div>
  )
}

export default A