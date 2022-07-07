import React from 'react'
import styled from 'styled-components';
import { css } from 'styled-components';
import whyhereimg from '../whyHere.png';
import "../index.css";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from "../doncof-logo.svg"
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
function MobileFooter() {
  return (
    <div>
      <DesktopFooter>
        <Content>
          <Logo src={logo} />
          <Navbar>
            <NavbarLinkAboutDoncof href={links.Spécialité}>à propos de doncof</NavbarLinkAboutDoncof>
            <NavbarLinkMenu href={links.menu}>Menu</NavbarLinkMenu>
            <NavbarLinkSpeciality href={links.Spécialité}>Speciality</NavbarLinkSpeciality>
            {/* <NavbarLinkFAQ >FAQ</NavbarLinkFAQ> */}
            <NavbarLinkContactLocation href={links.contact}>Contact &amp; location</NavbarLinkContactLocation>
          </Navbar>
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
          {/* <SocialLinks src="social-links-2.png" /> */}
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
      </DesktopFooter>
    </div>
  )
}

export default MobileFooter


//   export default App;
export const RobotoSemiBoldCopper33px = css`
color: var(--the-gray-for-content);
font-family: var(--font-family-roboto);
font-size: var(--font-size-s);
font-weight: 600;
font-style: normal;
`;

export const RobotoNormalCopper45px = css`
color: var(--the-gray-for-content);
font-family: var(--font-family-roboto);
font-size: var(--font-size-m);
font-weight: 400;
font-style: normal;
`;
const SocialMediaCon = styled.div`
    /* margin-top: 33.1px; */
    height: 24px;
    margin-left: 32px;
    width: 168.5px;
    height: 24px;
    /* margin-left: 32px; */
    display: flex;
    justify-content: space-around;
`
const DesktopFooter = styled.div`
    /* width: 304px; */
    height: 115px;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
    align-items: center;
  `;

const Content = styled.div`
    /* margin-left: 14.9px; */
    width: 274.390625px;
    height: 18.976146697998047px;
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

const Logo = styled.img`
    margin-top: -0.3px;
    width: 77.1171875px;
    height: 18.9765625px;
    margin-left: -0.4px;
  `;

const Navbar = styled.div`
    ${RobotoSemiBoldCopper33px}
    margin-top: 14.0px;
    /* width: 106.76982116699219px; */
    margin-left: 7.1px;
    display: flex;
  `;

const NavbarLinkAboutDoncof = styled.a`
    /* width: 21px; */
    height: 5px;
    letter-spacing: 0;
    line-height: 5px;
    white-space: nowrap;
    font-size: 13px;
  `;

const NavbarLinkMenu = styled.a`
    /* width: 9px; */
    height: 5px;
    margin-left: 6.7px;
    letter-spacing: 0;
    line-height: 5px;
    white-space: nowrap;
    font-size: 13px;
  `;

const NavbarLinkSpeciality = styled.a`
    /* width: 15px; */
    height: 5px;
    margin-left: 6.7px;
    letter-spacing: 0;
    line-height: 5px;
    white-space: nowrap;
    font-size: 13px;
  `;

// const NavbarLinkFAQ = styled.div`
//     /* width: 7px; */
//     height: 5px;
//     margin-left: 6.7px;
//     letter-spacing: 0;
//     line-height: 5px;
//     white-space: nowrap;
//     font-size: 13px;
//   `;

const NavbarLinkContactLocation = styled.a`
    /* width: 28px; */
    height: 5px;
    margin-left: 6.7px;
    letter-spacing: 0;
    line-height: 5px;
    white-space: nowrap;
    font-size: 13px;
  `;

const SocialLinks = styled.img`
    margin-top: 13.7px;
    width: 77.1171875px;
    height: 5.01953125px;
    margin-left: 6.5px;
  `;

const Credits = styled.div`
    /* margin-left: 43.9px; */
    /* width: 216.39682006835938px; */
    height: 16.147247314453125px;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

const Divider = styled.div`
    height: 1px;
    background-color: var(--the-gray-for-content);
  `;

const Row = styled.div`
    ${RobotoNormalCopper45px}
    /* width: 216.39682006835938px; */
    margin-top: 5.3px;
    display: flex;
  `;

const Address = styled.a`
    /* width: 69px; */
    height: 7px;
    letter-spacing: 0;
    line-height: 6.7px;
    white-space: nowrap;
    font-size: 13px;
  `;

// const FooterLinks = styled.div`
//     /* width: 139.75637817382812px; */
//     /* margin-left: 7.6px; */
//     display: flex;
//     font-size: 13px;
//   `;

// const PrivacyPolicy = styled.div`
//     /* width: 39.63478088378906px; */
//     height: 7px;
//     letter-spacing: 0;
//     line-height: 6.7px;
//     text-decoration: underline;
//     white-space: nowrap;
//     font-size: 13px;
//   `;

// const TermsOfService = styled.div`
//     /* width: 39.63478088378906px; */
//     height: 7px;
//     margin-left: 7.6px;
//     letter-spacing: 0;
//     line-height: 6.7px;
//     text-decoration: underline;
//     white-space: nowrap;
//     font-size: 13px;
//   `;

// const CookiesSettings = styled.div`
//     /* width: 45.205936431884766px; */
//     height: 7px;
//     margin-left: 7.6px;
//     letter-spacing: 0;
//     line-height: 6.7px;
//     text-decoration: underline;
//     white-space: nowrap;
//     font-size: 13px;
//   `;

