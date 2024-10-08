import React from 'react'
import Section from '../Section'
import Spacing from '../Spacing'
import './iconbox1.scss'

export default function IconBox1({children, title, subtitle, variant}) {
  return (
    <Section className={`cs-iconbox cs-style1 ${variant ? `${variant} ` : ''}cs-light_bg`}>
      <Section tag='h3' className="cs-iconbox_title cs-font_24 cs-font_16_sm cs-m0">{title}</Section>
      <Spacing lg='10' md='10'/>
      <Section className="cs-iconbox_subtitle">{subtitle}</Section>
    </Section>
  )
}
