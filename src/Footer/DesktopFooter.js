import React from 'react'
import styled from 'styled-components';
import { css } from 'styled-components';
import logo from "../doncof-logo.svg"
import whyhereimg from '../whyHere.png';
import "../index.css";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

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
function DesktopFooter() {
  // const somelink = "https://www.facebook.com/Doncof-131738906887214"
  return (
    <div>
      <DesktopFooterr>
        <Content>
          <Logo src={logo} />
          <Navbar>
            <NavbarLinkAboutDoncof href={links.Spécialité}>à propos de doncof</NavbarLinkAboutDoncof>
            <NavbarLinkMenu href={links.menu}>Menu</NavbarLinkMenu>
            <NavbarLinkSpeciality href={links.Spécialité}>Speciality</NavbarLinkSpeciality>
            {/* <NavbarLinkFAQ >FAQ</NavbarLinkFAQ> */}
            <NavbarLinkContactLocation href={links.contact}>Contact &amp; location</NavbarLinkContactLocation>
          </Navbar>
          {/* the contaniner of the social media contnainer */}
          <SocialMediaCon>
            <a href={links.facebook}>
              <FacebookIcon className='socialmedia-iconColor' />
            </a>
            <a href={links.insta}>
              <InstagramIcon className='socialmedia-iconColor' />
            </a>
            <a href={links.location}>
              <AddLocationAltIcon className='socialmedia-iconColor' />
            </a>
          </SocialMediaCon>
          {/* <SocialLinks src="social-links.png" /> */}
        </Content>
        <Credits>
          <Divider></Divider>
          <Row>
            <Address href="https://www.instagram.com/ayoub.wb.dsgnr/">2021 ayoub zen. All right reserved.</Address>
            {/* <FooterLinks>
              <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
              <TermsOfService>Terms of Service</TermsOfService>
              <CookiesSettings>Cookies Settings</CookiesSettings>
            </FooterLinks> */}
          </Row>
        </Credits>
      </DesktopFooterr></div>
  )
}

export default DesktopFooter

// function App() {
//     return (

//     );
//   }
export const RobotoSemiBoldCopper16px = css`
  color: var(--the-gray-for-content);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-s);
  font-weight: 600;
  font-style: normal;
`;

export const RobotoNormalCopper14px = css`
  color: var(--the-gray-for-content);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xs);
  font-weight: 400;
  font-style: normal;
`;
const SocialMediaCon = styled.div`
    margin-top: 33.1px;
    height: 24px;
    margin-left: 32px;
    width: 168.5px;
    height: 24px;
    margin-left: 32px;
    display: flex;
    justify-content: space-around;
`

const DesktopFooterr = styled.div`
    /* width: 1409px; */
    height: 397px;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
  `;

const Content = styled.div`
    margin-left: 48.5px;
    width: 1312px;
    height: 90.73452758789062px;
    margin-top: 94px;
    display: flex;
  `;

const Logo = styled.img`
    margin-top: -0.4px;
    width: 373.5px;
    height: 90.734375px;
  `;

const Navbar = styled.div`
    ${RobotoSemiBoldCopper16px}
    margin-top: 33.4px;
    width: 501px;
    margin-left: 32px;
    display: flex;
  `;

const NavbarLinkAboutDoncof = styled.a`
    /* width: 99px; */
    height: 24px;
    letter-spacing: 0;
    line-height: 24px;
    white-space: nowrap;
  `;

const NavbarLinkMenu = styled.a`
    width: 41px;
    height: 24px;
    margin-left: 32px;
    letter-spacing: 0;
    line-height: 24px;
    white-space: nowrap;
  `;

const NavbarLinkSpeciality = styled.a`
    width: 71px;
    height: 24px;
    margin-left: 32px;
    letter-spacing: 0;
    line-height: 24px;
    white-space: nowrap;
  `;

// const NavbarLinkFAQ = styled.a`
//     width: 29px;
//     height: 24px;
//     margin-left: 32px;
//     letter-spacing: 0;
//     line-height: 24px;
//     white-space: nowrap;
//   `;

const NavbarLinkContactLocation = styled.a`
    width: 133px;
    height: 24px;
    margin-left: 32px;
    letter-spacing: 0;
    line-height: 24px;
    white-space: nowrap;
  `;

const SocialLinks = styled.img`
    margin-top: 33.1px;
    width: 373.5px;
    height: 24px;
    margin-left: 32px;
  `;

const Credits = styled.div`
    /* margin-left: 44.5px;
    width: 1320px; */
    height: 54px;
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

const Divider = styled.div`
    height: 1px;
    background-color: var(--the-gray-for-content);
    width: 80%;
  `;

const Row = styled.div`
    ${RobotoNormalCopper14px}
    /* width: 1320px; */
    margin-top: 32px;
    display: flex;
    justify-content:center ;
  `;

const Address = styled.a`
    /* width: 214px; */
    height: 21px;
    /* margin-left: 321.5px; */
    letter-spacing: 0;
    line-height: 21px;
    white-space: nowrap;
  `;

// const FooterLinks = styled.div`
//     width: 439px;
//     margin-left: 24px;
//     display: flex;
//   `;

// const PrivacyPolicy = styled.div`
//     width: 124.5px;
//     height: 21px;
//     letter-spacing: 0;
//     line-height: 21px;
//     text-decoration: underline;
//     white-space: nowrap;
//   `;

// const TermsOfService = styled.div`
//     width: 124.5px;
//     height: 21px;
//     margin-left: 24px;
//     letter-spacing: 0;
//     line-height: 21px;
//     text-decoration: underline;
//     white-space: nowrap;
//   `;

// const CookiesSettings = styled.div`
//     width: 142px;
//     height: 21px;
//     margin-left: 24px;
//     letter-spacing: 0;
//     line-height: 21px;
//     text-decoration: underline;
//     white-space: nowrap;
//   `;

