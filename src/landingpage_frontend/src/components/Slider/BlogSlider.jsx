import { Icon } from '@iconify/react';
import React from 'react'
import Slider from "react-slick";
import Post from '../Post';
import Section from '../Section';

export default function BlogSlider({sliderItemBg, sliderItemVariant}) {
  const data = [
    {
      href:'/blog/blog-details',
      src:'/images/blog1.svg',
      title:'COOWN Token Ecosystem', 
      subtitle:'COOWNs ecosystem, leveraging a dual token model, introduces a revolutionary approach to asset management. Integrating $COOWN and COOWN NFT, offers distinct roles for enhanced utility and governance.',
    },
    {
      href:'/blog/blog-details',
      src:'/images/blog2.svg',
      title:'$COOWN ICO', 
      subtitle:'COOWN is set to reshape the landscape of digital finance with its Initial Coin Offering (ICO), promising a new era of group-centric crypto wallet functionality. This unique venture aims to bridge significant gaps in the digital asset management domain and introduces a meticulously structured ICO to foster early adoption and widespread participation.',
    },
    {
      href:'/blog/blog-details',
      src:'/images/blog3.svg',
      title:'COOWN NFT', 
      subtitle:'In the blockchain world, COOWN is carving out a unique niche with its innovative approach to NFTs (Non-Fungible Tokens) and the $TARS system. This blog post delves into how COOWN is redefining asset representation and transaction regulation, setting a new standard for ownership and governance in the digital age.',
    },
    // {
    //   href:'/blog/blog-details',
    //   src:'/images/blog4.jpeg',
    //   title:'Benefit of Minting an NFT', 
    //   subtitle:'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat.',
    // },
    // {
    //   href:'/blog/blog-details',
    //   src:'/images/blog1.jpeg',
    //   title:'How to mint an NFT?', 
    //   subtitle:'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat.',
    // },
    // {
    //   href:'/blog/blog-details',
    //   src:'/images/blog2.jpeg',
    //   title:'What is NFTs minting?', 
    //   subtitle:'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat.',
    // },
    // {
    //   href:'/blog/blog-details',
    //   src:'/images/blog3.jpeg',
    //   title:'How can I obtain NFTs?', 
    //   subtitle:'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat.',
    // },
    // {
    //   href:'/blog/blog-details',
    //   src:'/images/blog4.jpeg',
    //   title:'Benefit of Minting an NFT', 
    //   subtitle:'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat.',
    // },
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
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1199,
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
        breakpoint: 470,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings} className='cs-gap-24 cs-awwow_style_1'>
      {data.map((item, index)=> (
        <Section key={index}>
          <Post 
            href={item.href} 
            src={item.src} 
            title={item.title} 
            subtitle={item.subtitle}
          />
        </Section>
      ))}
    </Slider>
  )
}
