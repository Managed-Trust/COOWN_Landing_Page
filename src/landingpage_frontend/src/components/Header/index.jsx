import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'
import Modal from '../Modal';
import ModeSwitch from '../ModeSwitch';
import Section from '../Section';
import DropDown from './DropDown';
import './header.scss'

export default function Header() {
  const [mobileToggle, setMobileToggle] = useState(false)
  return (
    <>
       <Section tag='header' className="cs-site_header cs-style1 cs-sticky-header cs-primary_color">
        <Section className="cs-main_header">
          <Section className="container">
            <Section className="cs-main_header_in">
              <Section className="cs-main_header_left">
                <Link to='/' className="cs-site_branding cs-accent_color">
                  {/* <img src="/images/COOWN_Logo_black.png" width="50px" height="50px" alt="Logo" className="cs-hide_dark" /> */}
                  <img src="/images/COOWN_Logo.png" alt="Logo" />
                </Link>
              </Section>
              <Section className="cs-main_header_center">
                <Section className="cs-nav">
                  <ul className="cs-nav_list" style={{display:`${mobileToggle?'block':'none'}`}}>
                    <li className="nav_font"><ScrollLink to="hero" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>setMobileToggle(false)}>Home</ScrollLink>
                    {/* <DropDown>
                      
                        <li><Link to="/">Default Home</Link></li>
                        <li><Link to="/home2">Home Version-2</Link></li>
                        <li><Link to="/home3">Home Version-3</Link></li>
                      
                    </DropDown> */}
                    </li>
                    <li className="nav_font"><ScrollLink to="about" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>setMobileToggle(false)}>About</ScrollLink></li>
                    <li className="nav_font"><ScrollLink to="roadmap" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>setMobileToggle(false)}>Roadmap</ScrollLink></li>
                    <li className="nav_font"><ScrollLink to="team" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>setMobileToggle(false)}>Team</ScrollLink></li>
                    <li className="nav_font"><ScrollLink to="faq" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>setMobileToggle(false)}>FAQ</ScrollLink></li>
                    <li className="nav_font"><ScrollLink to="contact" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>setMobileToggle(false)}>Contact</ScrollLink></li>
                  </ul>
                  <span className={mobileToggle?"cs-munu_toggle cs-toggle_active":"cs-munu_toggle"} onClick={()=>setMobileToggle(!mobileToggle)}><span></span></span>
                </Section>
              </Section>
              <Section className="cs-main_header_right">
                <Section className="cs-toolbox">
                  <ModeSwitch />
                  <Modal modalType='connect' btnText='Connect' btnIcon />
                </Section>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section> 
    </>
  )
}
