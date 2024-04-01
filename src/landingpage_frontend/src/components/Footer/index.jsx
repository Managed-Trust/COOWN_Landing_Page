import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Cta from '../Cta'
import Section from '../Section'
import './footer.scss'

export default function Footer() {
  return (
    <Section tag='footer' className="cs-footer_wrap cs-bg" style={{backgroundImage:'url(/images/footer_bg_1.png)'}}>
      <Section className="container">
        <Cta/>
      </Section>
      <Section tag='footer' className="cs-footer text-center">
        <Section className="container">
          <Section className="cs-height_100 cs-height_lg_70" />
          <Section className="cs-footer_logo">
            {/* <img src="/images/logo_footer.svg" alt="logo" className="cs-hide_dark" />
            <img src="/images/logo_footer_white.svg" alt="logo" className="cs-hide_white" /> */}
            {/* <img src="/images/COOWN_Logo_black.png" width="50px" height="50px" className="cs-hide_dark" /> */}
            <img src='/images/COOWN_Logo.png' width="50px" height="50px" />
          </Section>
          <Section className="cs-height_25 cs-height_lg_25" />
          <Section className="cs-social_btns cs-center">
            <Link to="https://discord.com/invite/nAVuzBJzW8" target="_blank" className="cs-center cs-primary_color cs-accent_bg_hover cs-light_bg cs-white_color_hover">
              <Icon icon="fa6-brands:discord" />
            </Link>
            <Link to="https://t.me/+1hFUCL-Pg4gyMjZk" target="_blank" className="cs-center cs-primary_color cs-accent_bg_hover cs-light_bg cs-white_color_hover">
              <Icon icon="fa6-brands:telegram" />            
            </Link>
            <Link to="https://www.reddit.com/user/COOWN/" target="_blank" className="cs-center cs-primary_color cs-accent_bg_hover cs-light_bg cs-white_color_hover">
              <Icon icon="fa6-brands:reddit" />
            </Link>
            <Link to="https://www.youtube.com/@coown" target="_blank" className="cs-center cs-primary_color cs-accent_bg_hover cs-light_bg cs-white_color_hover">
              <Icon icon="fa6-brands:youtube" />
            </Link>
            <Link to="https://www.linkedin.com/company/co-own-io/" target="_blank" className="cs-center cs-primary_color cs-accent_bg_hover cs-light_bg cs-white_color_hover">
              <Icon icon="fa6-brands:linkedin-in" />              
            </Link>
            <Link to="https://www.facebook.com/people/COOWN/61557016146014/" target="_blank" className="cs-center cs-primary_color cs-accent_bg_hover cs-light_bg cs-white_color_hover">
              <Icon icon="fa6-brands:facebook" />              
            </Link>
            <Link to="https://www.instagram.com/co_own_io_wallet/" target="_blank" className="cs-center cs-primary_color cs-accent_bg_hover cs-light_bg cs-white_color_hover">
              <Icon icon="fa6-brands:instagram" />              
            </Link>
          </Section>
        </Section>
        <Section className="cs-height_45 cs-height_lg_25" />
        <Section className="container">
          {/* <Section className="cs-copyright text-center">Copyright © 2022. All Rights Reserved by <span className="cs-primary_font cs-primary_color">AENFT</span></Section> */}
          <Section className="cs-copyright text-center">Copyright © 2024 Managed-Trust.com LTD, Zurich.</Section> 
          <Section className="cs-copyright text-center">Web3 technology, cookie-free.</Section> 
        </Section>
        <Section className="cs-height_25 cs-height_lg_25" />
      </Section>
    </Section>
  )
}
