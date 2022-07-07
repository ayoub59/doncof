import React from 'react'
import styled from "styled-components";
import { css } from "styled-components";
import "../index.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import whyhereimg from '../whyHere.png';
import sectionsDots from "../between-sections-dots.svg";
import whyhereimgMeeting from '../images/whyhere-meetings.png';
import whyhereimgWork from '../images/whyhere-work.png';
const links = {
  menu: "#menu",
  Spécialité: "#Spécialité",
  call: "tel:0537682093",
  contact: "#contact",
  insta: "#insta",
  facebook: "#facebook",
  InsatGallery: "#InsatGallery",
  whyher: "#whyher",
  location: "https://goo.gl/maps/wSrMjqN5Ub8vSw65A"
}
function MobileWhyhere() {

  function Frame9(props) {
    const { ellipse1, subtract1, subtract2, className } = props;

    return (
      <Frame91 className={`frame-9 ${className || ""}`}>
        <TextAndThings className="text-and-things">
          <Title className="title">
            la calme
          </Title>
          <Group1 className="group-1">
            <Frame4 />
            <Frame3 className="frame-3">
              <SomeLink href={links.location} className="some-link">
                localisation
              </SomeLink>
              <CircleWithTheArrow className="circle-with-the-arrow">
                <ChevronRightIcon />
              </CircleWithTheArrow>
            </Frame3>
          </Group1>
        </TextAndThings>
        <SubtractContainer className="subtract-container">
          <Subtract className="subtract" src={whyhereimgWork} />
          <Subtract1 className="subtract-1" src={whyhereimgWork} />
        </SubtractContainer>
      </Frame91>
    );
  }
  // this one for meetings
  function Frame921(props) {
    const { ellipse1, subtract1, subtract2, className } = props;

    return (
      <Frame91 className={`frame-9 ${className || ""}`}>
        <TextAndThings className="text-and-things">
          <Title className="title">
            avoir une conversation.
          </Title>
          <Group1 className="group-1">
            <Frame421 />
            <Frame3 className="frame-3">
              <SomeLink href={links.location} className="some-link">
                localisation
              </SomeLink>
              <CircleWithTheArrow className="circle-with-the-arrow">
                <ChevronRightIcon />
              </CircleWithTheArrow>
            </Frame3>
          </Group1>
        </TextAndThings>
        <SubtractContainer className="subtract-container">
          <Subtract className="subtract" src={whyhereimgMeeting} />
          <Subtract1 className="subtract-1" src={whyhereimgMeeting} />
        </SubtractContainer>
      </Frame91>
    );
  }



  // this one for calm
  function Frame4() {
    return (
      <Frame41>
        <LoremIpsumDolorSi>
          ne serait-il pas agréable d'avoir un endroit où aller où il est calme, un lieu de concentration où vous pouvez travailler sur vos projets sans aucune interaction, doncof est un endroit très calme par nature, c'est pourquoi beaucoup de nos clients l'aiment calme.
        </LoremIpsumDolorSi>
      </Frame41>
    );
  }
  // this one for meetings
  function Frame421() {
    return (
      <Frame41>
        <LoremIpsumDolorSi>
          bien que ce soit un endroit calme, doncof est également confortable, ce qui en fait l'endroit idéal pour une conversation agréable avec un ami ou un collège, déjeuner ou dîner avec un de vos amis et vous passerez un bon moment à discuter dans un environnement qui est tout calme et cosy
        </LoremIpsumDolorSi>
      </Frame41>
    );
  }

  return (
    <div>

      <WhatDoTheShopOffer>
        <Frame9 ellipse1="ellipse-1-9.png"
        // subtract1="subtract-6.png" 
        // subtract2="subtract-7.png" 
        />
        <Frame src={sectionsDots} />
        <Frame921
          ellipse1="ellipse-1-10.png"
          subtract1="subtract-8.png"
          subtract2="subtract-9.png"
          className="frame-8"
        />
      </WhatDoTheShopOffer>
    </div>
  )
}

export default MobileWhyhere

export const PhoneText = css`
  font-family: var(--font-family-capriola);
  font-size: var(--font-size-10px);
  letter-spacing: 0;
  font-weight: 400;
  font-style: normal;
`;

export const PhoneHeading = css`
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xl);
  letter-spacing: 0;
  font-weight: 700;
  font-style: normal;
`;

export const RobotoNormalCopper11px = css`
  color: var(--the-gray-for-content);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-l);
  font-weight: 400;
  font-style: normal;
`;
const WhatDoTheShopOffer = styled.div`
  /* width: 304px; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 999px;
  padding: 200px 0px;
  background-color: var(--background-color);
`;

const Frame = styled.img`
  width: 412px;
  height: 50px;
  margin-top: 10px;
  margin-right: 0.75px;
`;



const Frame91 = styled.div`
  width: 176px;
  height: 449px;
  display: flex;
  flex-direction: column;

  &.frame-9.frame-8 {
    margin-top: 10px;
  }
`;

const TextAndThings = styled.div`
  width: 176.22000122070312px;
  height: 257.47515869140625px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  ${PhoneHeading}
  height: 29px;
  font-weight: 700;
  color: var(--the-gray-for-content);
  line-height: 28.8px;
  white-space: nowrap;
`;

const Group1 = styled.div`
  width: 176.0179443359375px;
  height: 204.47515869140625px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

const Frame3 = styled.div`
  width: 92.98664855957031px;
  margin-top: 16px;
  display: flex;
`;

const SomeLink = styled.a`
  ${RobotoNormalCopper11px}
  margin-top: 1.7px;
  /* width: 49px; */
  height: 17px;
  letter-spacing: 0;
  line-height: 16.5px;
  white-space: nowrap;
`;

const CircleWithTheArrow = styled.div`
  height: 20.47516441345215px;
  /* margin-left: 8px; */
  display: flex;
  padding: 0 0px;
  justify-content: flex-end;
  align-items: flex-start;
  /* min-width: 35.98665237426758px; */
`;

const OverlapGroup = styled.div`
  width: 26px;
  height: 20px;
  position: relative;
  margin-top: -0.26px;
`;

const Ellipse1 = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 5px;
`;

const Vector = styled.img`
  position: absolute;
  width: 19px;
  height: 12px;
  top: 4px;
  left: 0;
`;

const SubtractContainer = styled.div`
  margin-left: 0.5px;
  width: 174.58019590377808px;
  height: 115.1831693649292px;
  position: relative;
  margin-top: 11.6px;
`;

const Subtract = styled.img`
  position: absolute;
  width: 169px;
  height: 110px;
  top: 5px;
  left: 5px;
`;

const Subtract1 = styled.img`
  position: absolute;
  width: 169px;
  height: 110px;
  top: 0;
  left: 0;
`;


const Frame41 = styled.div`
  width: 176.0179443359375px;
  display: flex;
`;

const LoremIpsumDolorSi = styled.p`
  ${PhoneText}
  width: 176.0179443359375px;
  height: 168px;
  font-weight: 400;
  color: var(--the-gray-for-content);
  line-height: 14px;
`;

