import { linkClasses } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import heroPic from "./hero-pic.png";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

// function Inrto() {

//   });
const links = {
  menu: "#menu",
  Spécialité: "#Spécialité",
  call: "tel:0537682093",
  contact: "#contact",
  insta: "https://www.instagram.com/doncof_coffee/?hl=en",
  facebook: "https://www.facebook.com/Doncof-131738906887214",
  InsatGallery: "#InsatGallery",
  whyher: "#whyher",
  location: "https://goo.gl/maps/wSrMjqN5Ub8vSw65A"
}
function Hero() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    // <div>Hero</div>
    <Component data-aos="fade-down"
      data-aos-duration="900">
      <Frame8>
        <Frame7>
          <Title>DonCof où le bon café rencontre les bons gâteaux</Title>
          <LoremIpsumDolorSi>
            nous sommes un café à rabat et nous nous spécialisons dans la fabrication des meilleurs gâteaux et cafés que l'argent peut acheter, essayez notre meilleur menu et jugez par vous-même.
          </LoremIpsumDolorSi>
        </Frame7>
        <Frame6>
          <SomeLink href={links.contact}>Contact</SomeLink>
          <Text1>&gt;</Text1>
        </Frame6>
      </Frame8>
      <Group3>
        <OverlapGroup>
          {/* <Rectangle2></Rectangle2> */}
          <PlaceholderImage src={heroPic} />
        </OverlapGroup>
      </Group3>
    </Component>
  );
}

export default Hero;

export const BodyCopyText = css`
  font-family: var(--font-family-capriola);
  font-size: var(--font-size-m);
  letter-spacing: 0;
  font-weight: 400;
  font-style: normal;
`;

export const Heading = css`
  font-family: var(--font-family-candal);
  font-size: var(--font-size-xxxl);
  letter-spacing: 0;
  font-weight: 400;
  font-style: normal;
`;

export const RobotoNormalCopper307px = css`
  color: var(--the-gray-for-content);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-l);
  font-weight: 400;
  font-style: normal;
`;

const Component = styled.div`
  width: auto;
  /* height: 815px; */
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: var(--background-color);
  @media (max-width: 768px) {
    /* height: 495px; */
  }
  // media queries for phone
  @media (max-width: 340px) {
    /* height: 689px; */
    /* flex-direction: column; */
  }
`;

const Frame8 = styled.div`
  /* margin-top: 157.5px; */
  width: 640.5px;
  height: 404px;
  /* margin-left: 32px; */
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 32px;
    width: 358px;
    height: 335px;
    /* margin-left: 40px; */
  }
  // media queries for phone
  @media (max-width: 340px) {
    margin-left: 32px;
    width: 240.22000122070312px;
    height: 324px;
    margin-top: 32px;
  }
`;

const Frame7 = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
  }
  // media queries for phone
  @media (max-width: 340px) {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  ${Heading}
  /* height: 201px; */
    font-weight: 300;
  color: var(--the-gray-for-content);
  line-height: 67.2px;
  // media queries for tablet
  @media (max-width: 768px) {
    line-height: 43.2px;
    font-size: 40px;
  }
  // media queries for phone
  @media (max-width: 340px) {
    width: 240.22000122070312px;
    height: 172px;
    font-weight: 400;
    color: var(--the-gray-for-content);
    line-height: 43.2px;
  }
`;

const LoremIpsumDolorSi = styled.div`
  ${BodyCopyText}
  /* height: 109px; */
  margin-top: 16px;
  font-weight: 400;
  color: var(--the-gray-for-content);
  line-height: 21.6px;
  // media queries for tablet
  @media (max-width: 768px) {
    width: 358px;
    height: auto;
    line-height: 18px;
    font-size: 15px;
  }
  // media queries for phone
  @media (max-width: 340px) {
    width: 240.22000122070312px;
    height: 98px;
    margin-top: 16px;
    font-weight: 400;
    color: var(--the-gray-for-content);
    line-height: 14px;
  }
`;

const Frame6 = styled.div`
  ${RobotoNormalCopper307px}
  width: 640.5px;
  /* margin-top: 32px; */
  display: flex;
  // media queries for tablet
  @media (max-width: 768px) {
    width: 358px;
    margin-top: 28px;
  }
  // media queries for phone
  @media (max-width: 340px) {
    width: 240.22000122070312px;
    margin-top: 8px;
    display: flex;
  }
`;

const SomeLink = styled.a`
  /* width: 132px; */
  height: 46px;
  letter-spacing: 0;
  line-height: 46px;
  white-space: nowrap;
  // media queries for tablet
  @media (max-width: 768px) {
    width: 103px;
    height: 36px;
  }
  // media queries for phone
  @media (max-width: 340px) {
    width: 86px;
    height: 30px;
    font-weight: 400;
    color: var(--the-gray-for-content);
    line-height: 30px;
    white-space: nowrap;
  }
`;

const Text1 = styled.div`
  width: 17px;
  height: 46px;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: 46px;
  white-space: nowrap;
  // media queries for tablet
  @media (max-width: 768px) {
    line-height: 36px;
    width: 13px;
    height: 36px;
    margin-left: 6.6px;
  }
  // media queries for phone
  @media (max-width: 340px) {
    width: 11px;
    height: 30px;
    margin-left: 6.6px;
    font-weight: 400;
    color: var(--the-gray-for-content);
    line-height: 30px;
    white-space: nowrap;
  }
`;

const Group3 = styled.div`
  margin-top: 32px;
  height: 655px;
  margin-left: 64px;
  display: flex;
  align-items: flex-start;
  min-width: 640.5px;
  // media queries for tablet
  @media (max-width: 768px) {
    height: 263.8392028808594px;
    margin-left: 32px;
    min-width: 257.9994812011719px;
  }
  // media queries for phone
  @media (max-width: 340px) {
    margin-left: 20.4px;
    height: 269.35284423828125px;
    margin-top: 32px;
    display: flex;
    align-items: flex-start;
    min-width: 263.390625px;
  }
`;

const OverlapGroup = styled.div`
  width: 641px;
  height: 656px;
  position: relative;
  margin-top: -0.5px;
  // media queries for tablet
  @media (max-width: 768px) {
    width: 258px;
    height: 264px;
    margin-top: -0.1px;
  }
  // media queries for phone
  @media (max-width: 340px) {
    width: 264px;
    height: 270px;
    position: relative;
    margin-top: -0.16px;
  }
`;

// const Rectangle2 = styled.div`
//   position: absolute;
//   width: 621px;
//   height: 634px;
//   top: 22px;
//   left: 20px;
//   background-color: var(--acssent);
//   // media queries for tablet
//   @media (max-width: 768px) {
//     width: 250px;
//     height: 255px;
//     top: 9px;
//     left: 8px;
//   }
//   // media queries for phone
//   @media (max-width: 340px) {
//     position: absolute;
//     width: 255px;
//     height: 261px;
//     top: 9px;
//     left: 8px;
//     background-color: var(--acssent);
//   }
// `;

const PlaceholderImage = styled.img`
  position: absolute;
  width: 625px;
  height: 640px;
  top: 0;
  left: 0;
  object-fit: cover;
  // media queries for tablet
  @media (max-width: 768px) {
    width: 252px;
    height: 258px;
  }
  // media queries for phone
  @media (max-width: 340px) {
    position: absolute;
    width: 257px;
    height: 263px;
    top: 0;
    left: 0;
    object-fit: cover;
  }
`;
