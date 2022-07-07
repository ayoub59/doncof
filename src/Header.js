import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import doncofLogo from "./doncof-logo.svg";
import "./index.css";

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
function Header() {
  console.log(doncofLogo);
  return (
    <Container>
      {/* <img src={doncofLogo} alt="doncof's logo" />
      <img src={process.env.PUBLIC_URL + doncofLogo} /> */}
      <DoncofLogo src={doncofLogo} />
      <Column>
        <Column1>
          <LinkOne href="#menu">Menu</LinkOne>
          <LinkOne href="#Spécialité">Spécialité</LinkOne>
          <LinkOne href="tel:0537682093">appel</LinkOne>
        </Column1>
        <Button>
          <Button1 target="_blank" href="https://goo.gl/maps/wSrMjqN5Ub8vSw65A">localisation</Button1>
        </Button>
      </Column>
    </Container>
  );
}

export default Header;

// desktop
const Container = styled.div`
  width: auto;
  height: 115px;
  display: flex;
  justify-content: space-between;
  padding: 8.1px 64px;
  align-items: center;
  background-color: var(--background-color);
  // media queries for tablet
  @media (max-width: 768px) {
    height: 82px;
    padding: 5.9px 45.5px;
  }
  // media queries for phone
  @media (max-width: 340px) {
    height: 41px;
    padding: 3.1px 22.5px;
  }
`;

const DoncofLogo = styled.img`
  width: 92px;
  height: 91px;
  align-self: flex-end;
  object-fit: contain;
  // media queries for tablet
  @media (max-width: 768px) {
    width: 65px;
    height: 65px;
    align-self: flex-end;
    object-fit: contain;
  }
  // media queries for phone
  @media (max-width: 340px) {
    width: 33px;
    height: 33px;
    align-self: flex-end;
    object-fit: contain;
  }
`;
// for the image
// object-fit: contain;

const Column = styled.div`
  width: 384px;
  /* margin-left: 805px; */
  margin-top: 8px;
  display: flex;
  justify-content: space-around;
  // media queries for tablet
  @media (max-width: 768px) {
    /* width: 274px; */
    height: 28px;
    margin-top: 5.69px;
    display: flex;
    overflow: hidden;
  }
  // media queries for phone
  @media (max-width: 340px) {
    /* width: 139px; */
    height: 15px;
    margin-top: 2.87px;
    display: flex;
  }
`;
export const RobotoNormalSpicyMix16px = css`
  color: var(--acssent);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-s);
  font-weight: 400;
  font-style: normal;
  // media queries for tablet
  @media (max-width: 768px) {
  }
  // media queries for phone
  @media (max-width: 340px) {
    font-size: var(--font-size-m);
  }
`;

export const RobotoNormalAlto16px = css`
  color: var(--acssent2);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-s);
  font-weight: 400;
  font-style: normal;
  // media queries for tablet
  @media (max-width: 768px) {
    font-weight: 350;
  }
  // media queries for phone
  @media (max-width: 340px) {
    font-weight: 300;
  }
`;
const Column1 = styled.div`
  ${RobotoNormalSpicyMix16px}
  /* margin-top: 8px; */
  align-items: center;
  width: 264px;
  display: flex;
  justify-content: space-evenly;
  // media queries for tablet
  @media (max-width: 768px) {
    width: 188.53741455078125px;
  }
  // media queries for phone
  @media (max-width: 340px) {
    width: 95.98237609863281px;
  }
`;

const LinkOne = styled.a`
  /* width: 62px; */
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
  // media queries for tablet
  cursor: pointer;

  /* :hover{
    
  } */
  @media (max-width: 768px) {
    width: 188.53741455078125px;
    margin-right: 10px;
  }
  // media queries for phone
  @media (max-width: 340px) {
    width: 95.98237609863281px;
    margin-right: 10px;
  }
`;

// const LinkTwo = styled.div`
//   width: 64px;
//   height: 24px;
//   margin-left: 32px;
//   letter-spacing: 0;
//   line-height: 24px;
//   white-space: nowrap;
// `;

// const LinkThree = styled.div`
//   width: 74px;
//   height: 24px;
//   margin-left: 32px;
//   letter-spacing: 0;
//   line-height: 24px;
//   white-space: nowrap;
// `;

const Button = styled.div`
  /* width: 88p x; */
  
  /* height: 40px; */
  /* margin-left: 32px; */
  padding: 8px 16px;

  display: flex;
  background-color: var(--acssent);
  align-items: center;
  // media queries for phone
  /* @media (max-width: 340px) {
    height: 50px;
  } */
`;

const Button1 = styled.a`
  ${RobotoNormalAlto16px}
  /* margin-top: 8px; */
  /* width: 48px; */
  height: 24px;
  /* margin-left: 20px; */
  letter-spacing: 0;
  color: white;
  line-height: 24px;
  white-space: nowrap;
`;

// tablet

// const Container = styled.div`
//   width: 728px;
//   height: 82px;
//   display: flex;
//   padding: 5.9px 45.5px;
//   align-items: center;
//   background-color: var(--background-color);
// `;

// const DoncofLogo = styled.img`
//   width: 65px;
//   height: 65px;
//   align-self: flex-end;
// `;

// const Column = styled.div`
//   width: 274px;
//   height: 28px;
//   margin-left: 298px;
//   margin-top: 5.69px;
//   display: flex;
//   overflow: hidden;
// `;

// const Column1 = styled.div`
//   ${RobotoNormalSpicyMix114px}
//   margin-top: 5.7px;
//   width: 188.53741455078125px;
//   display: flex;
// `;

// const LinkOne = styled.div`
//   width: 44px;
//   height: 17px;
//   letter-spacing: 0;
//   line-height: 17.1px;
//   white-space: nowrap;
// `;

// const LinkTwo = styled.div`
//   width: 46px;
//   height: 17px;
//   margin-left: 22.8px;
//   letter-spacing: 0;
//   line-height: 17.1px;
//   white-space: nowrap;
// `;

// const LinkThree = styled.div`
//   width: 53px;
//   height: 17px;
//   margin-left: 22.8px;
//   letter-spacing: 0;
//   line-height: 17.1px;
//   white-space: nowrap;
// `;

// const Button = styled.div`
//   width: 62.46088409423828px;
//   height: 28.384353637695312px;
//   margin-left: 22.8px;
//   display: flex;
//   background-color: var(--acssent);
// `;

// const Button1 = styled.div`
//   margin-top: 5.7px;
//   width: 34px;
//   height: 17px;
//   margin-left: 14.2px;
//   font-family: var(--font-family-roboto);
//   font-weight: 400;
//   color: var(--acssent2);
//   font-size: var(--font-size-m);
//   letter-spacing: 0;
//   line-height: 17.1px;
//   white-space: nowrap;
// `;

// export const RobotoNormalSpicyMix114px = css`
//   color: var(--acssent);
//   font-family: var(--font-family-roboto);
//   font-size: var(--font-size-m);
//   font-weight: 400;
//   font-style: normal;
// `;

// phone

//   const Container = styled.div`
//     width: 304px;
//     height: 41px;
//     display: flex;
//     padding: 3.1px 22.5px;
//     align-items: center;
//     background-color: var(--background-color);
//   `;

//   const DoncofLogo = styled.img`
//     width: 33px;
//     height: 33px;
//     align-self: flex-end;
//   `;

//   const Column = styled.div`
// width: 139px;
// height: 15px;
// margin-left: 87px;
// margin-top: 2.87px;
// display: flex;
//   `;

//   const Column1 = styled.div`
//     ${RobotoNormalSpicyMix57px}
//     margin-top: 2.9px;
// width: 95.98237609863281px;
//     display: flex;
//   `;

//   const LinkOne = styled.div`
//     width: 23px;
//     height: 9px;
//     letter-spacing: 0;
//     line-height: 8.6px;
//     white-space: nowrap;
//   `;

//   const LinkTwo = styled.div`
//     width: 23px;
//     height: 9px;
//     margin-left: 11.5px;
//     letter-spacing: 0;
//     line-height: 8.6px;
//     white-space: nowrap;
//   `;

//   const LinkThree = styled.div`
//     width: 27px;
//     height: 9px;
//     margin-left: 11.5px;
//     letter-spacing: 0;
//     line-height: 8.6px;
//     white-space: nowrap;
//   `;

//   const Button = styled.div`
//     width: 31.36398696899414px;
//     height: 14.745594024658203px;
//     margin-left: 11.5px;
//     display: flex;
//     background-color: var(--acssent);
//   `;

//   const Button1 = styled.div`
//     margin-top: 2.9px;
//     width: 17px;
//     height: 9px;
//     margin-left: 7.2px;
//     font-family: var(--font-family-roboto);
//     font-weight: 400;
//     color: var(--acssent2);
//     font-size: var(--font-size-m);
//     letter-spacing: 0;
//     line-height: 8.6px;
//     white-space: nowrap;
//   `;

//   export const RobotoNormalSpicyMix57px = css`
//     color: var(--acssent);
//     font-family: var(--font-family-roboto);
// font-size: var(--font-size-m);
//     font-weight: 400;
//     font-style: normal;
//   `;
