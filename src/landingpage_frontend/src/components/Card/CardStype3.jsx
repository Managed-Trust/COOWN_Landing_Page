import React from 'react'
import Section from '../Section'

export default function CardStype3({head, title}) {
  return (
    <Section className="cs-card cs-style3 text-center cs-light_bg">
      <Section className="cs-card_in cs-seciton_heading cs-style1">
        <Section tag='h3' className="cs-section_title cs-font_16 cs-font_14_sm cs-gradient_color text-uppercase">{head}</Section>
        <Section tag='h4' className="cs-section_subtitle cs-m0 cs-font_36 cs-font_24_sm">{title}</Section>
      </Section>
    </Section>
  )
}
