import React from 'react'
import styled from "styled-components";
import { css } from "styled-components";
import "../index.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import whyhereimgMeeting from '../images/whyhere-meetings.png';
import whyhereimgWork from '../images/whyhere-work.png';
import sectionsDots from "../between-sections-dots.svg"

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
function desktopWhyhere() {

  // function App() {
  //     return (

  //     );
  // }
  // this one for a quit place
  function TextAndThings(props) {
    const { className, group1Props } = props;

    return (
      <TextAndThings1 className={`text-and-things ${className || ""}`}>
        <Title className="title">
          la calme
        </Title>
        <Group1 circleWithTheArrowProps={group1Props.circleWithTheArrowProps} />
      </TextAndThings1>
    );
  }
  // this one for meetings
  function TextAndThings2(props) {
    const { className, group1Props } = props;

    return (
      <TextAndThings1 className={`text-and-things ${className || ""}`}>
        <Title className="title">
          avoir une conversation.
        </Title>
        <Group121
        // circleWithTheArrowProps={group1Props.circleWithTheArrowProps}
        />
      </TextAndThings1>
    );
  }
  // this one for meeetings
  function Group121(props) {
    return (
      <Group11>
        <Frame4>
          <LoremIpsumDolorSi>
            {/* meetings */}
            bien que ce soit un endroit calme, doncof est également confortable, ce qui en fait l'endroit idéal pour une conversation agréable avec un ami ou un collège, déjeuner ou dîner avec un de vos amis et vous passerez un bon moment à discuter dans un environnement qui est tout calme et cosy.
          </LoremIpsumDolorSi>
        </Frame4>
        <Frame3>
          <SomeLink href={links.location}>localisation</SomeLink>
          <ChevronRightIcon />

          {/* <CircleWithTheArrow ellipse1={circleWithTheArrowProps.ellipse1} /> */}
        </Frame3>
      </Group11>
    );
  }

  // this one for a quit place
  function Group1(props) {
    return (
      <Group11>
        <Frame4>
          <LoremIpsumDolorSi>
            {/* quit */}

            ne serait-il pas agréable d'avoir un endroit où aller où il est calme, un lieu de concentration où vous pouvez travailler sur vos projets sans aucune interaction, doncof est un endroit très calme par nature, c'est pourquoi beaucoup de nos clients l'aiment calme.
          </LoremIpsumDolorSi>
        </Frame4>
        <Frame3>
          <SomeLink href={links.location} target="_blank">localisation.</SomeLink>
          <ChevronRightIcon />

          {/* <CircleWithTheArrow ellipse1={circleWithTheArrowProps.ellipse1} /> */}
        </Frame3>
      </Group11>
    );
  }
  // function CircleWithTheArrow(props) {
  //     const { ellipse1 } = props;

  //     return (
  //         <CircleWithTheArrow1>
  //             <OverlapGroup>
  //                 <Ellipse1 src={ellipse1} />
  //                 <Vector src="vector-2.png" />
  //             </OverlapGroup>
  //         </CircleWithTheArrow1>
  //     );
  // }
  return (
    <div>
      <WhatDoTheShopOffer>
        <Frame33>
          <TextAndThings group1Props={textAndThings1Data.group1Props} />
          <SubtractContainer>
            <Subtract src={whyhereimgMeeting} />
            {/* <Subtract1 src="subtract-1.png" /> */}
          </SubtractContainer>
        </Frame33>
        <Frame src={sectionsDots} />
        <Frame5>
          <SubtractContainer1>
            {/* <Subtract src="subtract-2.png" /> */}
            <Subtract src={whyhereimgWork} />

            {/* <Subtract1 src="subtract-3.png" /> */}
          </SubtractContainer1>
          <TextAndThings2 className="text-and-things-1"
          // group1Props={textAndThings2Data.group1Props} 
          />
        </Frame5>
      </WhatDoTheShopOffer>
    </div>
  )
}

export default desktopWhyhere

export const PhoneLink = css`
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-l2);
  letter-spacing: 0;
  font-weight: 400;
  font-style: normal;
`;

export const RobotoBoldCopper48px = css`
  color: var(--the-gray-for-content);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xxl);
  font-weight: 700;
  font-style: normal;
`;

export const RobotoNormalCopper18px = css`
  color: var(--the-gray-for-content);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
`;
const WhatDoTheShopOffer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 128px 0;
  align-items: center;
  min-height: 1255px;
  background-color: var(--background-color);
`;

const Frame3 = styled.div`
  /* height: 432px; */
  position: relative;
  display: flex;
  align-items: center;
`;

const SubtractContainer = styled.div`
  margin-top: 31.5px;
  width: 570.4998512268066px;
  height: 367.99755859375px;
  position: relative;
  margin-left: 93.8px;
`;

const Subtract = styled.img`
  position: absolute;
  width: 555px;
  height: 352px;
  top: 16px;
  left: 16px;
`;

const Subtract1 = styled.img`
  position: absolute;
  width: 555px;
  height: 352px;
  top: 0;
  left: 0;
`;

const Frame = styled.img`
  width: 953px;
  height: 115px;
  margin-top: 10px;
`;

const Frame5 = styled.div`
  width: 1281px;
  height: 432px;
  position: relative;
  margin-top: 10px;
  display: flex;
`;

const SubtractContainer1 = styled.div`
  margin-top: 31.5px;
  width: 570.4966106414795px;
  height: 367.99755859375px;
  position: relative;
  margin-left: -0.2px; 
`;



const TextAndThings1 = styled.div`
  margin-top: 73px;
  width: 616px;
  height: 286px;
  position: relative;
  display: flex;
  flex-direction: column;

  &.text-and-things.text-and-things-1 {
    margin-left: 94.7px;
  }
`;

const Title = styled.h1`
  ${RobotoBoldCopper48px}
  height: 58px;
  letter-spacing: 0;
  line-height: 57.6px;
  white-space: nowrap;
`;



const Group11 = styled.div`
  width: 616px;
  height: 204px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

const Frame4 = styled.div`
  width: 616px;
  display: flex;
`;

const LoremIpsumDolorSi = styled.div`
  ${RobotoNormalCopper18px}
  width: 616px;
  height: 135px;
  letter-spacing: 0;
  line-height: 27px;
`;

const Frame33 = styled.div`
  position: relative;
  margin-top: 39px;
  display: flex;
`;

const SomeLink = styled.a`
  ${PhoneLink}
  /* width: 88px; */
  height: 30px;
  font-weight: 400;
  color: var(--the-gray-for-content);
  line-height: 30px;
  white-space: nowrap;
`;



const CircleWithTheArrow1 = styled.div`
  height: 29.57861328125px;
  margin-left: 8px;
  display: flex;
  padding: 0 0.2px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 51.98665237426758px;
`;

const OverlapGroup = styled.div`
  width: 37px;
  height: 30px;
  position: relative;
  margin-top: -0.21px;
`;

const Ellipse1 = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0;
  left: 7px;
`;

const Vector = styled.img`
  position: absolute;
  width: 27px;
  height: 18px;
  top: 6px;
  left: 0;
`;


const circleWithTheArrow1Data = {
  ellipse1: "ellipse-1-2.png",
};

const group11Data = {
  circleWithTheArrowProps: circleWithTheArrow1Data,
};

const textAndThings1Data = {
  group1Props: group11Data,
};

const circleWithTheArrow2Data = {
  ellipse1: "ellipse-1-3.png",
};

const group12Data = {
  circleWithTheArrowProps: circleWithTheArrow2Data,
};

const textAndThings2Data = {
  group1Props: group12Data,
};