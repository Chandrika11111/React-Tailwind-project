import React from 'react'
import NavBar from '../Components/NavBar'
import HeroSection from '../Components/HeroSection'
import ContentSection from '../Components/ContentSection'
import GallerySection from '../Components/GallerySection'
import HoverSection from '../Components/HoverSection'
import FeatureSection from '../Components/FeatureSection'
import PricingSection from '../Components/PricingSection'
import TeamSection from '../Components/TeamSection'
import TestimonialSection from '../Components/TestimonialSection'
import ContactSection from '../Components/ContactSection'
import FooterSection from '../Components/FooterSection'

const LandingPage = ({change}) => {
  return (
    <div>
        <NavBar change={change}/>
        <HeroSection/>
        <ContentSection/>
        <GallerySection/>
        <HoverSection/>
        <FeatureSection/>
        <PricingSection/>
        <TeamSection/>
        <TestimonialSection/>
        <ContactSection/>
        <FooterSection/>
    </div>
  )
}

export default LandingPage