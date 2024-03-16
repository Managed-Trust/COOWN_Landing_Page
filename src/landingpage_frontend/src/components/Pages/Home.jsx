import React, { useEffect } from "react";
import { Icon } from '@iconify/react'
import { pageTitle } from "../../helper";
import Accordion from "../Accordion";
import Button from "../Button";
import Card from "../Card";
import CardStype3 from '../Card/CardStype3'

import ContactForm from "../ContactForm";
import ContactInfo from "../ContactInfo";
import FunFact from "../FunFact";
import Hero from "../Hero";
import IconBox from "../IconBox";
import IconBox1 from "../IconBox1";
import Modal from "../Modal";
import Section from "../Section";
import SectionHeading from "../SectionHeading";
import ImageBoxSlider from "../Slider/ImageBoxSlider";
import RoadmapSlider from "../Slider/RoadmapSlider";
import Spacing from "../Spacing";
import Team from "../Team";
import BlogSlider from "../Slider/BlogSlider";
import PercentBar from "../PercentBar";
export default function Home() {
  pageTitle("Home");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const accordionData1 = [
    {
      question: "How does COOWN ensure the security of my digital assets?",
      answer:
        "Through the robust Internet Computer Protocol (ICP), ensuring unparalleled security and sovereignty over your digital assets.",
    },
    {
      question: "Can COOWN accommodate various digital currencies?",
      answer:
        "Absolutely, with advanced support for a wide array of digital currencies, including cryptocurrencies, stablecoins, and NFT licenses.",
    },
    {
      question: "What sets COOWN apart in digital asset management?",
      answer:
        "Our unique blend of group-centric wallets, customizable access, and a commitment to privacy and compliance sets us apart.",
    },
  ];
  const accordionData2 = [
    {
      question: "Who can benefit from COOWN?",
      answer:
        "From corporations to families, COOWN is designed for any group needing efficient, secure digital asset management.",
    },
    {
      question: "How can I engage with COOWN?",
      answer:
        "Join our ICO, explore our marketplace, or apply for a grant. There are numerous ways to engage with and benefit from COOWN.",
    }

  ];

  return (
    <>
      <Hero
        title="Co-own wallet for <br />Groups"
        mintNumber="220"
        mintMax="∞"
        mintPrice="0.02"
        mintDeathLine="22 July"
        bgUrl="/images/hero_bg.jpeg"
        heroImageUrl="/images/hero_img.svg"
        animatedUrl="/images/hero_img_sm.png"
        overlay="0.3"
        bgOpacity="0.4"
      />
      <Section tag="section" id="about">
        <Spacing lg="100" md="70" />
        <Section className="container">
          <Section className="row align-content-center">
            <Section className="col-lg-6 col-sm-12">
              <Section className="cs-right_space_40">
                <SectionHeading title="Empowering Group-Centric Finance with COOWN" subtitle="Revolutionizing Digital Asset Management" />
                <Spacing lg="20" md="20" />
                <Section tag="p">
                  Want to share digital assets with others? COOWN Wallets combine individual control with teamwork.
                  Our platform is secure and cost-effective. Simplify your digital asset management with a solution that
                  guarantees flexibility, compliance, and seamless cooperation for both individuals and groups.
                </Section>
                <Spacing lg="25" md="15" />
                <Section className="cs-btn_group">
                  {/* <Modal modalType="mint" btnText="Connect" />
                  <Button
                    variant="cs-btn cs-color1"
                    btnLink="/"
                    btnText="Whitelist Now"
                  /> */}
                </Section>
              </Section>
              <Spacing lg="0" md="40" />
            </Section>
            <Section className="col-lg-6 col-sm-12">
              <img src="/images/empowering_img.jpg" className="img_style" alt="Empowering_img" />
            </Section>
          </Section>
        </Section>
        <Spacing lg="100" md="70" />
      </Section>

      <Section className="container">
        <SectionHeading
          title='Performance Metrics'
          subtitle='Proven Success'
        />
        <Spacing lg='50' md='30' />
        <Section className="row">
          <Section className="col-xl-3 col-md-6">
            <CardStype3
              head='$COOWN in circulation '
              title='22.5m / 100m'
            />
            <Section className="cs-height_25 cs-height_lg_25"></Section>
          </Section>
          <Section className="col-xl-3 col-md-6">
            <CardStype3
              head='NFTs as digital assets'
              title='0 / ∞'
            />
            <Section className="cs-height_25 cs-height_lg_25"></Section>
          </Section>
          <Section className="col-xl-3 col-md-6">
            <CardStype3
              head='Co-own wallet users'
              title='72'
            />
            <Section className="cs-height_25 cs-height_lg_25"></Section>
          </Section>
          <Section className="col-xl-3 col-md-6">
            <CardStype3
              head='Marketcap'
              title='0.1m $'
            />
            <Section className="cs-height_25 cs-height_lg_25"></Section>
          </Section>
        </Section>
      </Section>
      <Spacing lg="65" md="35" />
      <PercentBar />
      <Spacing lg="100" md="70" />
      <Section className="container flex-property">
        <SectionHeading title="Innovative Features for Enhanced Collaboration" subtitle="Unveiling COOWN's Core Features" />
        <Section className="row">
          <Section className="col-lg-4">
            <IconBox
              variant="cs-type1 text-center"
              title="Group-Centric Wallets"
              subtitle="Experience unparalleled flexibility in managing collective financial goals with wallets designed for every group type."
            >
              <img src='./images/wallet.svg' />

            </IconBox>
            <Spacing lg="25" md="25" />
          </Section>
          <Section className="col-lg-4">
            <IconBox
              variant="cs-type1 text-center"
              title="Flexible Permissions"
              subtitle="Precisely assign roles, from owners and admins to members, ensuring secure and streamlined operations."
            >
              <img src='./images/CustomizeAccess.svg' />
            </IconBox>
            <Spacing lg="25" md="25" />
          </Section>
          <Section className="col-lg-4">
            <IconBox
              variant="cs-type1 text-center"
              title="Currency Support"
              subtitle="Embrace diverse digital currencies, including cryptocurrencies, stablecoins, and NFT licenses, for the future."
            >
              <img src='./images/CryptoCurrency.svg' />
            </IconBox>
            <Spacing lg="25" md="25" />
          </Section>
          <Section className="col-lg-4">
            <IconBox
              variant="cs-type1 text-center"
              title="Automated Operations"
              subtitle="Boost efficiency through automation in financial transactions, including split payments and multi-signature security."
            >
              <img src='/images/Automate.svg' />
            </IconBox>
            <Spacing lg="25" md="25" />
          </Section>
          <Section className="col-lg-4">
            <IconBox
              variant="cs-type1 text-center"
              title="Data Sovereignty"
              subtitle="Ensure privacy and compliance through jurisdiction-specific subnets, protecting your digital assets across borders."
            >
              <img src='/images/DataSovereignty.svg' />
            </IconBox>
            {/* <Spacing lg="25" md="25" /> */}
          </Section>
        </Section>
      </Section>

      {/* <Spacing lg="70" md="45" />
      <ImageBoxSlider /> */}
      <Spacing lg="90" md="65" />
      {/* <Section className="container">
        <Section className="row">
          <Section className="col-lg-3 col-6">
            <FunFact number="365" title="Total Items" />
            <Spacing lg="25" md="25" />
          </Section>
          <Section className="col-lg-3 col-6">
            <FunFact number="1125" title="Total Owners" />
            <Spacing lg="25" md="25" />
          </Section>
          <Section className="col-lg-3 col-6">
            <FunFact number="1.72" title="Floor Price" />
            <Spacing lg="25" md="25" />
          </Section>
          <Section className="col-lg-3 col-6">
            <FunFact number="42.2" title="Volume Traded" />
            <Spacing lg="25" md="25" />
          </Section>
        </Section>
      </Section> */}
      <Section tag="section" id="about">
        {/* <Spacing lg="75" md="45" /> */}
        <Section className="container">
          <Section className="row align-items-center flex-column-lg">
            <Section className="col-lg-7">
              <Spacing lg="0" md="40" />
              <Section className="cs-right_space_150">
                <SectionHeading
                  title="Empowering Various User Groups"
                  subtitle="Diverse Use Cases and Target Groups"
                />
                <Spacing lg="20" md="20" />
                <Section tag="p">
                  <b>Corporate Asset Allocation:</b> Tailor digital equity financing to your corporate structure.
                </Section>
                <Section tag="p">
                  <b>Business Partner Transactions:</b> Secure and automate operations for SMBs, enhancing efficiency and trust.
                </Section>
                <Section tag="p">
                  <b>Community Funds:</b> Manage community finances with equitable and transparent tools.
                </Section>
                <Section tag="p">
                  <b>Family Wealth Management</b> Easily access shared funds and streamline estate planning for family harmony
                </Section>
                {/* <Spacing lg="25" md="15" /> */}
                {/* <Button
                  variant="cs-btn_filed cs-accent_btn"
                  btnLink="https://opensea.io/"
                  btnText="COLLECT NFTs"
                >
                  <Icon icon="ic:outline-library-add" />
                </Button> */}
              </Section>
            </Section>
            <Section className="col-lg-5">
              <img src="/images/userGroups.jpg" alt="user_groups" className="img_style" />
            </Section>
          </Section>
        </Section>
        <Spacing lg="100" md="70" />
      </Section>
      {/* <Section className="container">
        <SectionHeading title="Minting Techniques" subtitle="Simple Steps" />
        <Spacing lg="50" md="30" />
        <Section className="row">
          <Section className="col-xl-3 col-md-6">
            <Card title="Connect Wallet" emoji="👋" />
            <Spacing lg="25" md="25" />
          </Section>
          <Section className="col-xl-3 col-md-6">
            <Card title="Select Your Quantity" emoji="👉" />
            <Spacing lg="25" md="25" />
          </Section>
          <Section className="col-xl-3 col-md-6">
            <Card title="Transection Confirm" emoji="👍" />
            <Spacing lg="25" md="25" />
          </Section>
          <Section className="col-xl-3 col-md-6">
            <Card title="Recive Your NFTs" emoji="🙂" />
            <Spacing lg="25" md="25" />
          </Section>
        </Section>
      </Section> */}


      <Section className="container flex-property">
        <SectionHeading title="How It Works" subtitle="Quick Start Guide" />
        <Section className="row">
          <Section className="col-lg-4">
            <IconBox
              title="Get an ICP ID"
              subtitle="Get a free ICP ID at internetcomputer.org for secure and affordable access to a variety of web3 services."
            >
              01
            </IconBox>
            <Spacing lg="25" md="25" />
          </Section>
          <Section className="col-lg-4">
            <IconBox
              title="Create a COOWN Wallet"
              subtitle="Launch your group wallet on COOWN. It's your hub for managing digital assets together."
            >
              02
            </IconBox>
            <Spacing lg="25" md="25" />
          </Section>
          <Section className="col-lg-4">
            <IconBox
              iconNumber="02"
              title="Invite Your Team"
              subtitle="Add users as administrators, members, or viewers, customizing access to fit the group's needs."
            >
              03
            </IconBox>
            <Spacing lg="25" md="25" />
          </Section>
          <Section className="col-lg-4">
            <IconBox
              title="Set Automations"
              subtitle="Customize your wallet's capabilities and boost efficiency and security with integrated task automation bots."
            >
              04
            </IconBox>
            <Spacing lg="25" md="25" />
          </Section>
          <Section className="col-lg-4">
            <IconBox
              title="Handle Transactions"
              subtitle="Pay transaction fees only when needed, maximizing functionality while keeping costs low."
            >
              05
            </IconBox>
            <Spacing lg="25" md="25" />
          </Section>
          <Section className="col-lg-4">
            <IconBox
              title="Mint Digital Assets"
              subtitle="Create digital assets by converting real-world items into custom NFT series for trading within your community or publicly."
            >
              06
            </IconBox>
            <Spacing lg="25" md="25" />
          </Section>
        </Section>
      </Section>
      <Section id="team">
        <Spacing lg="70" md="40" />
        <Section className="container">
          <SectionHeading title="Meet the Team Shaping the Future" subtitle="The Visionaries Behind COOWN" />
          <Spacing lg="25" md="25" />
          <Section tag="p">
            Based on experience from the cybersecurity departments of Swiss banks, our founders are deeply passionate about creating a digital asset management platform that blends innovation, security, and user-friendliness. We are dedicated to empowering groups across the globe with the necessary tools for efficient and cooperative financial management.
          </Section>
          <Section className="row">
            <Section className="col-lg-3 col-sm-6">
              <Team
                src="/images/member1.svg"
                name="Simon Kaiser"
                designation="Funder, CEO"
                facebookHref="/"
                linkedinHref="/"
                whatsappHref="/"
              />
              <Spacing lg="25" md="25" />
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team
                src="/images/member2.svg"
                name="M. Ab."
                designation="Head of Engineering"
                facebookHref="/"
                linkedinHref="/"
                whatsappHref="/"
              />
              <Spacing lg="25" md="25" />
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team
                src="/images/member3.svg"
                name="N. Re."
                designation="Front-End Developer"
                facebookHref="/"
                linkedinHref="/"
                whatsappHref="/"
              />
              <Spacing lg="25" md="25" />
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team
                src="/images/member4.svg"
                name="V. De."
                designation="Tokenomics"
                facebookHref="/"
                linkedinHref="/"
                whatsappHref="/"
              />
              <Spacing lg="25" md="25" />
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team
                src="/images/member2.svg"
                name="L. Le."
                designation="Digital Marketing"
                facebookHref="/"
                linkedinHref="/"
                whatsappHref="/"
              />
              <Spacing lg="25" md="25" />
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team
                src="/images/member3.svg"
                name="H. An."
                designation="UI Designer"
                facebookHref="/"
                linkedinHref="/"
                whatsappHref="/"
              />
              <Spacing lg="25" md="25" />
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team
                src="/images/member4.svg"
                name="L.K."
                designation="Trainee"
                facebookHref="/"
                linkedinHref="/"
                whatsappHref="/"
              />
              <Spacing lg="25" md="25" />
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team
                src="/images/member7.svg"
                name="A.B. Ha."
                designation="Assistant"
                facebookHref="/"
                linkedinHref="/"
                whatsappHref="/"
              />
              <Spacing lg="25" md="25" />
            </Section>
          </Section>
        </Section>
      </Section>
      <Section tag="section" id="roadmap">
        <Spacing lg="70" md="40" />
        <Section className="container">
          <SectionHeading title="Roadmap" subtitle="Our Goals" />
          <Spacing lg="75" md="30" />
          <Section className="cs-accent_seperator_1 cs-accent_color"></Section>
          <RoadmapSlider />
        </Section>
      </Section>
      <Section tag="section" id="about">
        <Spacing lg="75" md="45" />
        <Section className="container">
          <Section className="row align-items-center flex-column-lg">
            <Section className="col-lg-7">
              <Spacing lg="0" md="40" />
              <Section className="cs-right_space_150">
                <SectionHeading
                  title="Join us"
                  subtitle="Transparent and Secure Governance"
                />
                <Spacing lg="20" md="20" />
                <Section tag="p">
                  <b>ICO Participation: </b>Buy $COOWN tokens. Engage in DAO to shape COOWN's direction and enjoy the currency's growth.
                </Section>
                <Section tag="p">
                  <b>Venture Capital: </b>Explore our investor information. Learn about digital asset management investment opportunities.
                </Section>
                <Section tag="p">
                  <b>Early Access: </b>Join our exclusive waitlist for early access to groundbreaking features, including NFT minting for real-world asset digitalization.
                </Section>
                <Section tag="p">
                  <b>Careers: </b>Apply as a developer, consultant, or ambassador. Play a key role in COOWN's development and market presence.
                </Section>
                <Spacing lg="25" md="15" />
                {/* <Button
                  variant="cs-btn_filed cs-accent_btn"
                  btnLink="https://opensea.io/"
                  btnText="COLLECT NFTs"
                >
                  <Icon icon="ic:outline-library-add" />
                </Button> */}
              </Section>
            </Section>
            <Section className="col-lg-5">
              <img src="/images/Decentralized_Asset.jpg" alt="decentralized_asset" className="img_style" />
            </Section>
          </Section>
        </Section>
      </Section>
      <Section tag="section" id="faq">
        <Spacing lg="95" md="70" />
        <Section className="container">
          <SectionHeading title="Frequently Asked Questions" subtitle="FAQ" />
          <Spacing lg="50" md="30" />
          <Section className="row">
            <Section className="col-lg-6">
              <Accordion
                variant=""
                data={accordionData1}
                openPosition={0}
                questionNumberStarter={1}
              />
            </Section>
            <Section className="col-lg-6">
              <Accordion
                variant=""
                data={accordionData2}
                openPosition={false}
                questionNumberStarter={5}
              />
            </Section>
          </Section>
        </Section>
      </Section>
      <Spacing lg="50" md="30" />
      <Section className="container" id="blog_field">
        <SectionHeading title="Recent Post" subtitle="BLOG" />
        <Spacing lg="50" md="30" />
        <BlogSlider />
      </Section>
      <Section id="contact">
        <Spacing lg="95" md="70" />
        <Section className="container">
          <SectionHeading title="Get in touch" subtitle="Contact us" />
          <Spacing lg="50" md="30" />
          <Section className="row">
            <Section className="col-lg-6">
              <ContactForm />
            </Section>
            <Section className="col-lg-5 offset-lg-1">
              <Spacing lg="30" md="40" />
              <ContactInfo />
            </Section>
          </Section>
        </Section>
      </Section>
      <Spacing lg="95" md="70" />
    </>
  );
}
