import { Icon } from '@iconify/react';
import React from 'react'
import Slider from "react-slick";
import Section from '../Section';
import CardStype2 from '../Card/CardStype2'

export default function RoadmapSlider() {
  const data = [
    {
      phase:'Phase 1', 
      title:'Focus on Financing',
      subtitle:'Launch a Crowdfunding Campaign, conduct an Initial Coin Offering (ICO), and seek approval as an SNS DAO (optional, yet desired).',
    },{
      phase:'Phase 2', 
      title:'Focus on Basic Features',
      subtitle:'Launching Minimum Viable Product: CE Wallet for user-groups and recruiting Advisory Board members.',
    },{
      phase:'Phase 3', 
      title:'Focus on Pro Features',
      subtitle:'Develop Pro Features for transaction regulation, establish member disposition settings, and recruit Ambassadors.',
    },{
      phase:'Phase 4', 
      title:'Focus on Enterprise Features',
      subtitle:'Launch Enterprise Edition wallet, adjusted to jurisdictions, Launch the NFT marketplace, and enable custom NFT series.',
    },{
      phase:'Phase 5', 
      title:'Focus on Mass Adoption',
      subtitle:'Enable stablecoins, initiate $TARS licenses, Onboard B2B clients using the UTOPIA subnets, Focus on Sustainability.',
    }
  ]
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="material-symbols:chevron-left-rounded" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="material-symbols:chevron-right-rounded" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1285,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings} className='cs-gap-24 cs-awwow_style_1 cs-type1'>
      {data.map((item, index)=> (
        <Section key={index}>
          <CardStype2 
            cardNumber={index+1}
            phase={item.phase}
            title={item.title}
            subtitle={item.subtitle}
          />
        </Section>
      ))}
    </Slider>
  )
}
