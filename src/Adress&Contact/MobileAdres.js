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
function MobileAdres() {
  return (
    <div>
      <ContactSections>
        <Content>
          <Title>adress &amp; Contact</Title>
          {/* <LoremIpsumDolorSi>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</LoremIpsumDolorSi> */}
        </Content>
        <Frame40>
          <Frame41>
            <PlaceholderImage src={whyhereimg} />
          </Frame41>
          <Row>
            <Content1>
              <ContactInfo>
                <Adress>Adresse</Adress>
                <Address>Magazin 4, Immb 32 Av. Al Abtal, Rabat</Address>
                <Button>
                  <GetDirections href={links.location} target="_blank">obtenir des directions</GetDirections>
                  {/* <ChevronDown src={whyhereimg} /> */}
                </Button>
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
        </Frame40>
      </ContactSections>
    </div>
  )
}

export default MobileAdres

// function App() {
//     return (

//     );
//   }

//   export default App;

export const TabletBodyHeading = css`
font-family: var(--font-family-roboto);
font-size: var(--font-size-36px);
letter-spacing: 0;
font-weight: 700;
font-style: normal;
`;

export const PhoneText = css`
font-family: var(--font-family-capriola);
font-size: var(--font-size-10px);
letter-spacing: 0;
font-weight: 400;
font-style: normal;
`;

export const RobotoNormalCopper55px = css`
color: var(--the-gray-for-content);
font-family: var(--font-family-roboto);
font-size: var(--font-size-m);
font-weight: 400;
font-style: normal;
`;

export const RobotoBoldCopper69px = css`
color: var(--the-gray-for-content);
font-family: var(--font-family-roboto);
font-size: var(--font-size-l);
font-weight: 700;
font-style: normal;
`;

export const RobotoMediumCopper55px = css`
color: var(--the-gray-for-content);
font-family: var(--font-family-roboto);
font-size: var(--font-size-m);
font-weight: 500;
font-style: normal;
`;
const ContactSections = styled.div`
    /* width: 304px; */
    /* height: 558px; */
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
    align-items: center;
    padding-top: 100px;
  `;

const Content = styled.div`
    /* margin-left: 64px; */
    /* width: 176.22000122070312px; */
    /* height: 138px; */
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

const Title = styled.h1`
    ${TabletBodyHeading}
    width: 176px;
    height: 86px;
    font-weight: 700;
    color: var(--head-sections-color);
    text-align: center;
    line-height: 43.2px;
  `;

// const LoremIpsumDolorSi = styled.p`
//     ${PhoneText}
//     height: 28px;
//     margin-top: 24px;
//     font-weight: 400;
//     color: var(--the-gray-for-content);
//     text-align: center;
//     line-height: 14px;
//   `;

const Frame40 = styled.div`
    /* margin-left: 64px; */
    /* width: 176.22000122070312px;
    height: 275.52032470703125px; */
    /* margin-top: 80px; */
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

const Frame41 = styled.div`
    margin-left: -0.7px;
    width: 177.58203125px;
    display: flex;
    background-image: url(frame-41-1.png);
    background-size: cover;
    background-position: 50% 50%;
  `;

const PlaceholderImage = styled.img`
    margin-top: -0.2px;
    width: 177.58203125px;
    height: 110.134765625px;
    margin-left: -0.2px;
    object-fit: cover;
  `;

const Row = styled.div`
    /* margin-left: 11.4px; */
    /* width: 153.37356567382812px; */
    /* height: 225px; */
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10px;
  `;

const Content1 = styled.div`
    /* width: 153.37356567382812px; */
    display: flex;
    justify-content: center;
  `;

const ContactInfo = styled.div`
    /* width: 153.37356567382812px; */
    /* height: 37.077064514160156px; */
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    height: 67px;
    justify-content: space-around;
  `;

const Adress = styled.div`
    ${RobotoBoldCopper69px}
    height: 10px;
    text-align: center;
    letter-spacing: 0;
    line-height: 9.7px;
    white-space: nowrap;
  `;

const Address = styled.a`
    ${RobotoNormalCopper55px}
    height: 8px;
    margin-top: 2.8px;
    text-align: center;
    letter-spacing: 0;
    line-height: 8.3px;
    white-space: nowrap;
  `;

const Button = styled.div`
    /* width: 153.37356567382812px; */
    height: 13.538531303405762px;
    margin-top: 2.8px;
    display: flex;
    justify-content: center;
  `;

const GetDirections = styled.a`
    ${RobotoNormalCopper55px}
    margin-top: 2.8px;
    /* width: 35px; */
    height: 8px;
    /* margin-left: 55.7px; */
    letter-spacing: 0;
    line-height: 8.3px;
    white-space: nowrap;
  `;

const ChevronDown = styled.img`
    margin-top: 3.5px;
    width: 5.5390625px;
    height: 5.5380859375px;
    margin-left: 1.2px;
  `;

const Content2 = styled.div`
    /* width: 153.37356567382812px; */
    margin-top: 13.8px;
    display: flex;
    justify-content: center;
  `;

const ContactInfo1 = styled.div`
    /* width: 153.37356567382812px; */
    /* height: 31.538532257080078px; */
    display: flex;
    flex-direction: column;
    height: 67px;
    justify-content: space-around;
    justify-content: space-between;
  `;

const ContactInfo2 = styled.div`
    /* width: 153.37356567382812px; */
    /* height: 53.077064514160156px; */
    display: flex;
    flex-direction: column;
    height: 112px;
    justify-content: space-around;
    justify-content: space-between;
  `;

const Text1 = styled.a`
    ${RobotoNormalCopper55px}
    height: 8px;
    margin-top: 2.8px;
    text-align: center;
    letter-spacing: 0;
    line-height: 8.3px;
    text-decoration: underline;
    white-space: nowrap;
  `;
