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
function TabletFooter() {
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
          {/* <SocialLinks src="social-links-1.png" /> */}
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

export default TabletFooter
export const RobotoSemiBoldCopper88px = css`
    color: var(--the-gray-for-content);
    font-family: var(--font-family-roboto);
    font-size: var(--font-size-l);
    font-weight: 600;
    font-style: normal;
  `;

export const RobotoNormalCopper77px = css`
    color: var(--the-gray-for-content);
    font-family: var(--font-family-roboto);
    font-size: var(--font-size-m);
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

const DesktopFooter = styled.div`
    /* width: 728px; */
    height: 208px;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
    align-items: center;
  `;

const Content = styled.div`
    margin-left: 3.8px;
    /* width: 720.5px;
    height: 49.827919006347656px; */
    margin-top: 32px;
    display: flex;
    align-items: center;
    align-items: flex-end;
  `;

const Logo = styled.img`
    margin-top: -0.3px;
    width: 204.53125px;
    height: 49.828125px;
    margin-left: -0.2px;
  `;

const Navbar = styled.div`
    ${RobotoSemiBoldCopper88px}
    margin-top: 18.4px;
    /* width: 276.29266357421875px; */
    margin-left: 17.8px;
    display: flex;
  `;

const NavbarLinkAboutDoncof = styled.a`
    /* width: 55px; */
    height: 13px;
    letter-spacing: 0;
    line-height: 13.2px;
    white-space: nowrap;
    font-size: 15px;
  `;

const NavbarLinkMenu = styled.a`
    /* width: 23px; */
    height: 13px;
    margin-left: 17.6px;
    letter-spacing: 0;
    line-height: 13.2px;
    white-space: nowrap;
    font-size: 15px;
  `;

const NavbarLinkSpeciality = styled.a`
    /* width: 39px; */
    height: 13px;
    margin-left: 17.6px;
    letter-spacing: 0;
    line-height: 13.2px;
    white-space: nowrap;
    font-size: 15px;
  `;

const NavbarLinkFAQ = styled.a`
    /* width: 16px; */
    height: 13px;
    margin-left: 17.6px;
    letter-spacing: 0;
    line-height: 13.2px;
    white-space: nowrap;
    font-size: 15px;
  `;

const NavbarLinkContactLocation = styled.a`
    /* width: 73px; */
    height: 13px;
    margin-left: 17.6px;
    letter-spacing: 0;
    line-height: 13.2px;
    white-space: nowrap;
    font-size: 15px;
  `;

const SocialLinks = styled.img`
    margin-top: 18.2px;
    width: 204.53125px;
    height: 13.1796875px;
    margin-left: 17.3px;
  `;

const Credits = styled.div`
    margin-left: 64px;
    width: 600px;
    height: 30.09754180908203px;
    margin-top: 64px;
    display: flex;
    flex-direction: column;
  `;

const Divider = styled.div`
    height: 1px;
    background-color: var(--the-gray-for-content);
  `;

const Row = styled.div`
    ${RobotoNormalCopper77px}
    /* width: 600px; */
    margin-top: 17.1px;
    display: flex;
    justify-content: center;
  `;

const Address = styled.a`
    /* width: 118px; */
    height: 12px;
    /* margin-left: 114px; */
    letter-spacing: 0;
    line-height: 11.5px;
    white-space: nowrap;
  `;

// const FooterLinks = styled.div`
//     /* width: 240.7521514892578px; */
//     margin-left: 13.2px;
//     display: flex;
//   `;

// const PrivacyPolicy = styled.div`
//     /* width: 68.27709197998047px; */
//     height: 12px;
//     letter-spacing: 0;
//     line-height: 11.5px;
//     text-decoration: underline;
//     white-space: nowrap;
//   `;

// const TermsOfService = styled.div`
//     /* width: 68.27709197998047px; */
//     height: 12px;
//     margin-left: 13.2px;
//     letter-spacing: 0;
//     line-height: 11.5px;
//     text-decoration: underline;
//     white-space: nowrap;
//   `;

// const CookiesSettings = styled.div`
//     /* width: 77.87427520751953px; */
//     height: 12px;
//     margin-left: 13.2px;
//     letter-spacing: 0;
//     line-height: 11.5px;
//     text-decoration: underline;
//     white-space: nowrap;
//   `;

