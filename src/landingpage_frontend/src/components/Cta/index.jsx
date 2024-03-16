import { Icon } from '@iconify/react'
import React from 'react'
import Button from '../Button'
import Section from '../Section'
import './cta.scss'

export default function Cta() {
  return (
    <Section className="cs-cta cs-style1 cs-accent_bg text-center">
      <Section tag='h2' className="cs-cta_title cs-white_color cs-font_64 cs-font_36_sm cs-m0">Powerd By</Section>
      <Section className="cs-height_10 cs-height_lg_10" />
      {/* <Section className="cs-cta_subtitle cs-white_color">There are many variations of passages of Lorem Ipsum available, but the <br />majority have suffered alteration in some form.</Section> */}
      {/* <Section className="cs-height_30 cs-height_lg_30" /> */}
      {/* <Section className="cs-cta_btns cs-center">
        <Button 
          btnLink='/' 
          btnText='Join Our Community' 
          variant='cs-btn_filed cs-white_btn_2'
        >
          <Icon icon="fluent:people-community-add-28-regular" />
        </Button>
        <Button 
          btnLink='/' 
          btnText='Join The Waitlist' 
          variant='cs-btn_filed cs-white_btn'
        >
          <Icon icon="material-symbols:add-reaction-outline" />
        </Button>
      </Section> */}
      <Section className='cs-center custome_style'>
        <img src='/images/icp.png' width="60px" height="60px"/>
        <img src="/images/logo_footer.svg" alt="logo" className="cs-hide_dark" />
        <img src="/images/logo_footer_white.svg" alt="logo" className="cs-hide_white" />
        <img src="/images/funded.png" alt="logo" width="120px" height="120px"/>
        <img src="/images/manage_trust.jpg" alt="logo" width="50px" height="50px" className='manage_trust'/>
        <img src="/images/ic_lighthouse_logo_white.svg" alt="logo" width="60px" height="60px" className='cs-hide_dark'/>
        <img src="/images/iclighthouse.svg" alt="logo" width="60px" height="60px" className='cs-hide_white'/>
      </Section>
    </Section>
  )
}
