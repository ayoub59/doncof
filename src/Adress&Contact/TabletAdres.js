import React from 'react'
import styled from 'styled-components';
import { css } from 'styled-components';
import whyhereimg from '../don-cof-map.png';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../index.css";
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
function TabletAdres() {
  function Button3(props) {
    const { chevronDown } = props;

    return (
      <Button>
        <GetDirections href={links.location} target="_blank">Obtenir les directions</GetDirections>
        <ChevronDown src={chevronDown} />
      </Button>
    );
  }

  return (
    <div>

      <ContactSections>
        <Content>
          <Title>adresse  &amp; Contact</Title>
          {/* <LoremIpsumDolorSi>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</LoremIpsumDolorSi> */}
        </Content>
        <Frame40>
          <Row>
            <Content1>
              <ContactInfo>
                <Adress>Adresse</Adress>
                <Address>Magazin 4, Immb 32 Av. Al Abtal, Rabat </Address>
                <Button3 chevronDown="chevron-down.png" />
              </ContactInfo>
            </Content1>
            <Content2>
              <ContactInfo1>
                <Adress>Heures d'ouverture</Adress>
                <Address>
                  <span className="roboto-normal-copper-16px">lun - sam </span>
                  <span className="roboto-medium-copper-16px">07:00 – 22:00</span>
                </Address>
                <Address>
                  <span className="roboto-normal-copper-16px">dim: </span>
                  <span className="roboto-medium-copper-16px">Fermé</span>
                </Address>
              </ContactInfo1>
            </Content2>
            <Content2>
              <ContactInfo2>
                <Adress>Contactez</Adress>
                <Text1 href={links.call}>0537682093</Text1>
                {/* <Address>randomemail@gmail.com</Address> */}
                <Address href={links.insta} target="_blank">Instagram</Address>
                <Address href={links.facebook} target="_blank">Facebook</Address>
              </ContactInfo2>
            </Content2>
          </Row>
          <Frame41>
            <OverlapGroup>
              {/* <Frame411 src="frame-41.png" /> */}
              <PlaceholderImage src={whyhereimg} />
            </OverlapGroup>
          </Frame41>
        </Frame40>
      </ContactSections>
    </div>
  )
}

export default TabletAdres
// import React from "react";
// import styled from "styled-components";

// import { RobotoBoldBigFootFeet48px, RobotoNormalCopper16px, RobotoBoldCopper20px, RobotoNormalCopper18px } from "./styledMixins";

// function App() {
//   return (

//   );
// }

// export default App;
export const RobotoNormalCopper16px = css`
  color: var(--the-gray-for-content);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-s);
  font-weight: 400;
  font-style: normal;
`;

export const RobotoBoldCopper20px = css`
  color: var(--the-gray-for-content);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-l2);
  font-weight: 700;
  font-style: normal;
`;

export const RobotoMediumCopper16px = css`
  color: var(--the-gray-for-content);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-s);
  font-weight: 500;
  font-style: normal;
`;

export const RobotoBoldBigFootFeet48px = css`
  color: var(--head-sections-color);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xxl);
  font-weight: 700;
  font-style: normal;
`;

export const RobotoNormalCopper18px = css`
  color: var(--the-gray-for-content);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-m2);
  font-weight: 400;
  font-style: normal;
`;
const ContactSections = styled.div`
  /* width: 728px; */
  height: 873px;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  align-items: center;

`;

const Content = styled.div`
  margin-left: 64px;
  width: 600px;
  height: 109px;
  margin-top: 112px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  ${RobotoBoldBigFootFeet48px}
  width: 536px;
  height: 58px;
  letter-spacing: 0;
  line-height: 57.6px;
  white-space: nowrap;
`;

// const LoremIpsumDolorSi = styled.div`
//   ${RobotoNormalCopper18px}
//   width: 536px;
//   height: 27px;
//   margin-top: 24px;
//   letter-spacing: 0;
//   line-height: 27px;
//   white-space: nowrap;
// `;

const Frame40 = styled.div`
  margin-left: 64px;
  width: 600px;
  margin-top: 80px;
  display: flex;
`;

const Row = styled.div`
  width: 199px;
  height: 460px;
  display: flex;
  flex-direction: column;
`;

const Content1 = styled.div`
  width: 199px;
  display: flex;
`;

const ContactInfo = styled.div`
  width: 199px;
  height: 132px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Adress = styled.div`
  ${RobotoBoldCopper20px}
  height: 28px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const Address = styled.a`
  ${RobotoNormalCopper16px}
  height: 48px;
  margin-top: 8px;
  letter-spacing: 0;
  line-height: 24px;
`;

const Content2 = styled.div`
  width: 199px;
  margin-top: 40px;
  display: flex;
`;

const ContactInfo1 = styled.div`
  width: 199px;
  height: 92px;
  display: flex;
  flex-direction: column;
`;

const MonFri10001900 = styled.p`
  ${RobotoNormalCopper16px}
  height: 24px;
  margin-top: 8px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const ContactInfo2 = styled.div`
  width: 199px;
  height: 156px;
  display: flex;
  flex-direction: column;
`;

const Text1 = styled.a`
  ${RobotoNormalCopper16px}
  height: 24px;
  margin-top: 8px;
  letter-spacing: 0;
  line-height: 24px;
  text-decoration: underline;
  white-space: nowrap;
`;

const Frame41 = styled.div`
  height: 242.49517822265625px;
  margin-left: 10px;
  display: flex;
  align-items: flex-start;
  min-width: 391px;
`;

const OverlapGroup = styled.div`
  width: 600px;
  height: 243px;
  position: relative;
  margin-top: -0.25px;
`;

const Frame411 = styled.img`
  position: absolute;
  width: 391px;
  height: 242px;
  top: 0;
  left: 209px;
  object-fit: cover;
`;

const PlaceholderImage = styled.img`
  position: absolute;
  width: 391px;
  height: 242px;
  top: 0;
  left: 0;
  object-fit: cover;
`;


const Button = styled.div`
  width: 121px;
  height: 40px;
  margin-top: 8px;
  display: flex;
`;

const GetDirections = styled.a`
  ${RobotoNormalCopper16px}
  margin-top: 8px;
  width: 101px;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const ChevronDown = styled.img`
  margin-top: 11.8px;
  width: 16px;
  height: 16px;
  margin-left: 4px;
`;

