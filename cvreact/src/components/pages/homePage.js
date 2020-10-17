import React from 'react';
import '../../App.css'
import Cards from '../cardComponents/Cards';
import HeroSection from '../heroSection/HeroSection'
import Footer from '../footerComponent/Footer'

export default function Homepage() {
    return (
        <>
            <HeroSection />
            <Cards/>
            <Footer/>
        </>
    );

}
