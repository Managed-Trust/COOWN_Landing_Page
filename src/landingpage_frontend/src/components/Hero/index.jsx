import React, { useState, useEffect } from 'react'
import { Parallax } from 'react-parallax';
import parse from 'html-react-parser';
import Button from '../Button';
import './hero.scss'
import Section from '../Section';
import Modal from '../Modal';
import SectionHeading from "../SectionHeading";
// import ParticleAnimation from '../particles';
export default function Hero({ title, mintNumber, mintMax, mintPrice, mintDeathLine, bgUrl, heroImageUrl, animatedUrl, variant, bubble, overlay, bgOpacity }) {

  const calculateTimeLeft = () => {
    const difference = +new Date('2024-07-09T23:59:59') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = value => {
    return value < 10 ? `0${value}` : value;
  };

  const handleEmailButtonClick = () => {
    // Construct the mailto link with the recipient email address
    const emailAddress = 'info@co-own.io';
    const subject = encodeURIComponent('Whitelist Inquiry');
    const body = encodeURIComponent('Please whitelist me for your service.');

    // Combine the parts into the mailto link
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    // Open the mail client when the button is clicked
    window.location.href = mailtoLink;
  };


  return (

    <Section tag='section' className={`cs-hero cs-style1 ${variant ? variant : ''}`} id="hero" >
      {overlay && <Section className="cs-dark_overlay" style={{ opacity: overlay }} />}
      <Section className="cs-hero_bg" style={{ opacity: bgOpacity }}>
        <Parallax bgImage={bgUrl} bgImageAlt="Hero" strength={120}></Parallax>
      </Section>
      {/* <ParticleAnimation/> */}
      <Section className="container">
        <Section className="cs-hero_text">
          <SectionHeading subtitle="COOWN" className="margin-0" />
          <Section tag='h1' className="cs-hero_title">{parse(title)}</Section>
          <Section className="cs-btn_group">
            {/* <Button
              btnLink='/'
              btnText='Investment Opportunities'
              variant='cs-color1'
            /> */}
            <a href="/whitepaper/COOWN_Whitepaper.pdf" target='_blank' className='cs-accent_btn cs-color1 cs-btn'>Whitepaper</a>
            <button onClick={handleEmailButtonClick} className='cs-accent_btn cs-btn cs-color1'>Get Involved</button>
            {/* <Modal modalType='mint' btnText='Join the Waitlist' /> */}
            {/* <Button 
                btnLink='/' 
                btnText='Join the Waitlist' 
                variant='cs-color1'
              /> */}
          </Section>
          <Section tag='h3' className="cs-hero_subtitle cs-font_18 cs-font_16_sm cs-body_line_height">
            Simplifying Team-Based Asset Management
          </Section>
        </Section>
        <Section className="cs-hero_img">
          <img src={heroImageUrl} alt="Hero" />
          <Section className="cs-hero_img_sm">
            <img src={animatedUrl} alt="Hero" />
          </Section>
        </Section>
        <Section tag='h2' className="counter_head">
          Next Token-Sale-Phase Start:
        </Section>
        <Section className="counter_container">
          <span className='counter_card'><span className='counter_first_child'>{addLeadingZero(timeLeft.days)}</span> <span className='counter_second_child'>days{' '}</span></span>
          <span className='counter_dots'><span className='dot_class'></span><span className='dot_class'></span></span>
          <span className='counter_card'><span className='counter_first_child'>{addLeadingZero(timeLeft.hours)}</span> <span className='counter_second_child'>hours{' '}</span></span>
          <span className='counter_dots'><span className='dot_class'></span><span className='dot_class'></span></span>
          <span className='counter_card'><span className='counter_first_child'>{addLeadingZero(timeLeft.minutes)}</span> <span className='counter_second_child'>minutes{' '}</span></span>
          <span className='counter_dots'><span className='dot_class'></span><span className='dot_class'></span></span>
          <span className='counter_card'><span className='counter_first_child'>{addLeadingZero(timeLeft.seconds)}</span> <span className='counter_second_child'>seconds</span></span>
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
