import React from 'react'
import styled from "styled-components";
import { css } from "styled-components";
import "../index.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import whyhereimg from '../whyHere.png';
import sectionsDots from "../between-sections-dots.svg"
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
function TabletWhyhere() {
  function Frame3(props) {
    const { circleWithTheArrowProps } = props;

    return (
      <Frame31>
        <SomeLink href={links.location}>localisation.</SomeLink>
        <ChevronRightIcon />
        {/* <CircleWithTheArrow ellipse1={circleWithTheArrowProps.ellipse1} /> */}
      </Frame31>
    );
  }

  // function CircleWithTheArrow(props) {
  //     const { ellipse1 } = props;

  //     return (
  //         <CircleWithTheArrow1>
  //             <OverlapGroup>
  //                 <Ellipse1 src={ellipse1} />
  //                 <Vector src="vector-6.png" />
  //             </OverlapGroup>
  //         </CircleWithTheArrow1>
  //     );
  // }
  return (
    <div>
      <WhatDoTheShopOffer>
        <Frame6>
          <TextAndThings>
            <Title>la calme</Title>
            <Group1>
              <Frame4>
                <LoremIpsumDolorSi>
                  ne serait-il pas agréable d'avoir un endroit où aller où il est calme, un lieu de concentration où vous pouvez travailler sur vos projets sans aucune interaction, doncof est un endroit très calme par nature, c'est pourquoi beaucoup de nos clients l'aiment calme.
                </LoremIpsumDolorSi>
              </Frame4>
              <Frame3 circleWithTheArrowProps={frame3Data.circleWithTheArrowProps} />
            </Group1>
          </TextAndThings>
          <SubtractContainer>
            <Subtract src={whyhereimgWork} />
            {/* <Subtract1 src="subtract-5.png" /> */}
          </SubtractContainer>
        </Frame6>
        <Frame src={sectionsDots} />
      </WhatDoTheShopOffer>
      {/* second half */}
      <WhatDoTheShopOffer>
        <Frame66>
          <TextAndThings>
            <Title>avoir une conversation.</Title>
            <Group1>
              <Frame4>
                <LoremIpsumDolorSi>
                  bien que ce soit un endroit calme, doncof est également confortable, ce qui en fait l'endroit idéal pour une conversation agréable avec un ami ou un collège, déjeuner ou dîner avec un de vos amis et vous passerez un bon moment à discuter dans un environnement qui est tout calme et cosy.
                </LoremIpsumDolorSi>
              </Frame4>
              <Frame3 circleWithTheArrowProps={frame3Data.circleWithTheArrowProps} />
            </Group1>
          </TextAndThings>
          <SubtractContainerr>
            <Subtract src={whyhereimgMeeting} />
            {/* <Subtract1 src="subtract-5.png" /> */}
          </SubtractContainerr>
        </Frame66>
        {/* <Frame src={sectionsDots} /> */}
      </WhatDoTheShopOffer>
    </div>
  )
}

export default TabletWhyhere

export const TabletText = css`
  font-family: var(--font-family-capriola);
  font-size: var(--font-size-15px);
  letter-spacing: 0;
  font-weight: 400;
  font-style: normal;
`;

export const TabletLinks = css`
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xl2);
  letter-spacing: 0;
  font-weight: 400;
  font-style: normal;
`;

export const TabletBodyHeading = css`
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-36px);
  letter-spacing: 0;
  font-weight: 700;
  font-style: normal;
`;
const WhatDoTheShopOffer = styled.div`
  /* width: 728px; */
  display: flex;
  flex-direction: column;
  /* padding: 128px 0; */
  align-items: center;
  /* min-height: 718px; */
  background-color: var(--background-color);
`;

const Frame6 = styled.div`
  /* width: 600px; */
  height: 361px;
  display: flex;
`;
const Frame66 = styled.div`
/* width: 600px; */
/* height: 361px; */
display: flex;
flex-direction: row-reverse;
`;

const TextAndThings = styled.div`
  margin-top: 32px;
  /* width: 245.00228881835938px; */
  height: 297px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  ${TabletBodyHeading}
  width: 187px;
  height: 43px;
  font-weight: 700;
  color: var(--the-gray-for-content);
  line-height: 43.2px;
  white-space: nowrap;
`;

const Group1 = styled.div`
  width: 339.388671875px;
  height: 230px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

const Frame4 = styled.div`
  margin-left: 0.4px;
  /* width: 339px; */
  display: flex;
`;

const LoremIpsumDolorSi = styled.p`
  ${TabletText}
  width: 339px;
  height: 162px;
  font-weight: 400;
  color: var(--the-gray-for-content);
  line-height: 18px;
`;

const SubtractContainer = styled.div`
  margin-top: 95.6px;
  width: 260.9944734573364px;
  height: 169.23744773864746px;
  position: relative;
  margin-left: 94px;
`;
const SubtractContainerr = styled.div`
margin-top: 95.6px;
width: 260.9944734573364px;
height: 169.23744773864746px;
position: relative;
/* margin-left: 94px; */
margin-right: 100px;
`;

const Subtract = styled.img`
  position: absolute;
  width: 253px;
  height: 162px;
  top: 7px;
  left: 8px;
`;

const Subtract1 = styled.img`
  position: absolute;
  width: 253px;
  height: 162px;
  top: 0;
  left: 0;
`;

const Frame = styled.img`
  width: 750px;
  height: 91px;
  margin-top: 9px;
  margin-right: 1.5px;
`;



const Frame31 = styled.div`
  width: 164.9866485595703px;
  position: relative;
  margin-top: 32px;
  display: flex;
  align-items: center;
`;

const SomeLink = styled.a`
  ${TabletLinks}
  width: 105px;
  height: 36px;
  font-weight: 400;
  color: var(--the-gray-for-content);
  line-height: 36px;
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
  margin-top: -0.46px;
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


const circleWithTheArrowData = {
  ellipse1: "ellipse-1-6.png",
};

const frame3Data = {
  circleWithTheArrowProps: circleWithTheArrowData,
};