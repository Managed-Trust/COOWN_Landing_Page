import React from 'react'
import { Parallax } from 'react-parallax';
import parse from 'html-react-parser';
import Button from '../Button';
import './hero.scss'
import Section from '../Section';
import Modal from '../Modal';
// import ParticleAnimation from '../particles';
export default function Hero({title, mintNumber, mintMax, mintPrice, mintDeathLine, bgUrl, heroImageUrl, animatedUrl, variant, bubble, overlay, bgOpacity}) {
  return (
    
      <Section tag='section' className={`cs-hero cs-style1 ${variant?variant:''}`} id="hero" >
        {overlay && <Section className="cs-dark_overlay" style={{opacity:overlay}} />}
        <Section className="cs-hero_bg" style={{opacity:bgOpacity}}>
          <Parallax bgImage={bgUrl} bgImageAlt="Hero" strength={120}></Parallax>
        </Section>
        {/* <ParticleAnimation/> */}
        <Section className="container">
          <Section className="cs-hero_text"> 
          <Section tag='h2' className="cs-hero_secondary_title cs-font_24 cs-font_18_sm">{mintNumber} / {mintMax}&nbsp; Minted</Section>
            <Section tag='h1' className="cs-hero_title cs-font_64 cs-font_36_sm cs-bold">{parse(title)}</Section>
            <Section className="cs-btn_group">
            <Button 
                btnLink='/' 
                btnText='Link to co-own.wallet' 
                variant='cs-color1'
              />
              <Modal modalType='mint' btnText='Join the Waitlist' />
              <Modal modalType='mint' btnText='Link to NFT Marketplace' />
              <Modal modalType='mint' btnText='Contact us' />
              {/* <Button 
                btnLink='/' 
                btnText='Join the Waitlist' 
                variant='cs-color1'
              /> */}
            </Section>
            <Section tag='h3' className="cs-hero_subtitle cs-font_18 cs-font_16_sm cs-body_line_height">Reserve your <Section tag='span' className="cs-accent_color">$TARS</Section> now, and join the wishlist for co-owned wallets! <br />
              The co-owned wallets of <Section tag='span' className="cs-accent_color">COOWN</Section>Implement Standard transaction rulesets $TARS as licenced <br /> Non fungible tokens (NFT's) To mutually benefit waller members and investors </Section>
          </Section>
          <Section className="cs-hero_img">
            <img src={heroImageUrl} alt="Hero" />
            <Section className="cs-hero_img_sm">
              <img src={animatedUrl} alt="Hero" />
            </Section>
          </Section>
        </Section>
        {bubble && (
          <Section id="background-wrap">
            <Section className="bubble x1"></Section>
            <Section className="bubble x2"></Section>
            <Section className="bubble x3"></Section>
            <Section className="bubble x4"></Section>
            <Section className="bubble x5"></Section>
            <Section className="bubble x6"></Section>
            <Section className="bubble x7"></Section>
            <Section className="bubble x8"></Section>
            <Section className="bubble x9"></Section>
            <Section className="bubble x10"></Section>
          </Section>
        )}
      </Section>
  )
}
