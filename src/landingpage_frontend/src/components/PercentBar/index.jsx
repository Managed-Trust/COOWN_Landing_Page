import React from "react";
import Section from "../Section";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
function PercentBar() {
    const containerStyles = {
        width: '100%',
        backgroundColor: '#1c1d34',
        borderRadius: '5px',
        overflow: 'hidden',
        padding: '7px',
        borderRadius: '20px',
    };

    const fillerStyles = {
        height: '100%',
        width: `47%`,
        background: 'linear-gradient(286deg, rgb(75 68 160) 0%, rgb(9 20 55) 47.6%, rgb(1, 3, 20) 98.23%)',
        transition: 'width 0.5s ease-in-out',
        padding: '10px',
        borderRadius: '20px',
    };

    return (
        <>
            <Section tag="section" id="percent_section">
                <div className="section_container container">
                    <SectionHeading title="Ongoing token distribution" subtitle="Initial Coin Offering" />
                    <Spacing lg="20" md="20" />
                    <div className="bar_section">
                        <div className="price_bar">
                            <Section tag='h3' className="cs-section_title cs-font_16 cs-font_14_sm">5m Ꮬ</Section>
                            <Section tag='h3'  className="cs-section_title cs-font_16 cs-font_14_sm">+5m Ꮬ</Section>
                            <Section tag='h3' className="cs-section_title cs-font_16 cs-font_14_sm">+5m Ꮬ</Section>
                            <Section tag='h3' className="cs-section_title cs-font_16 cs-font_14_sm">+20m Ꮬ</Section>
                        </div>
                        <div className="bar_head">
                            <Section tag='h3' className="cs-section_title cs-font_16 cs-font_14_sm">Crowdfunding</Section>
                            <span>|</span>
                            <Section tag='h3' className="cs-section_title cs-font_16 cs-font_14_sm">Presale</Section>
                            <span>|</span>
                            <Section tag='h3' className="cs-section_title cs-font_16 cs-font_14_sm">Sale & Swap</Section>
                            <span>|</span>
                            <Section tag='h3' className="cs-section_title cs-font_16 cs-font_14_sm">DAO Launch</Section>
                        </div>
                        <div style={containerStyles}>
                            <div style={fillerStyles}></div>
                        </div>
                        <div className="bar_footer">
                            <Section tag='h3' className="cs-section_title cs-font_16 cs-font_14_sm">1 $COOWN = 0.1 SDR &#8773; 0.13 USD &#8773; 0.01 IPC</Section>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

export default PercentBar;

