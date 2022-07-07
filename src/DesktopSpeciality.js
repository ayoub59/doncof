import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import specialityimage from "./speciality-image.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./index.css";
import specialityimageCoffee from "./images/specialityimageCoffeeImage.png";
import specialityimagecake from "./images/specialityimage-cakeImage.png";
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
function DesktopSpeciality() {
  return (
    <SpecialitiesSections>
      <Frame1>
        <TextAndThings>
          <Title>Café</Title>
          <Group1>
            <LoremIpsumDolorSi>
              chez doncof, nous accordons la priorité à la préparation du café, et nous avons centré notre menu pour être un excellent complément à une bonne tasse de café, nous avons donc compilé les cafés les plus populaires dans le monde tout en préservant sa qualité, essayez de prendre du temps pour visitez notre boutique et jugez par vous-même.
            </LoremIpsumDolorSi>
            <Frame5>
              <SomeLink href={links.menu}>menu</SomeLink>
              <ChevronRightIcon />
            </Frame5>
          </Group1>
          <Group1
            circleWithTheArrowProps={group1Data.circleWithTheArrowProps}
          />
        </TextAndThings>
        <CoffeeImage>
          <Union src={specialityimageCoffee} />
        </CoffeeImage>
      </Frame1>
      <Frame3>
        <CoffeeImage2>
          <Union src={specialityimagecake} />
        </CoffeeImage2>
        <TextAndThings1>
          <AndCake>Et les gâteau</AndCake>
          <Group1>
            <LoremIpsumDolorSi>
              un verre de café ne peut pas trouver meilleur compagnon qu'un morceau de gâteau bien fait, et nous ne saurions trop recommander nos gâteaux, tout dans notre menu est bien ajusté pour qu'il puisse compléter l'autre élément, mais pour notre gâteau, nous lui avons donné beaucoup plus d'importance, vous ne regretterez pas un gâteau de notre boutique avec une tasse de café
            </LoremIpsumDolorSi>
            <Frame5>
              <SomeLink href={links.menu}>menu</SomeLink>
              <ChevronRightIcon />
            </Frame5>
          </Group1>
        </TextAndThings1>
      </Frame3>
    </SpecialitiesSections>
  );
}

export default DesktopSpeciality;

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

const SpecialitiesSections = styled.div`
  width: auto;
  height: 1628px;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
`;

const Frame1 = styled.div`
  /* margin-left: 64px; */
  /* width: 1281px; */
  margin-top: 128px;
  display: flex;
  justify-content: center;
`;

const TextAndThings = styled.div`
  margin-top: 176.4px;
  width: 593.5px;
  height: 286px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  ${RobotoBoldCopper48px}
  width: 616px;
  height: 58px;
  letter-spacing: 0;
  line-height: 57.6px;
  white-space: nowrap;
`;

const CoffeeImage = styled.div`
  height: 638.8427124023438px;
  margin-left: 94px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 593.5px;
`;

const OverlapGroup1 = styled.div`
  width: 630px;
  /* height: 653px; */
  position: relative;
  margin-bottom: -24px;
`;

const CoffeeImage1 = styled.div`
  position: absolute;
  width: 612px;
  height: 639px;
  top: 15px;
  left: 18px;
  display: flex;
  justify-content: flex-end;
`;

const Union = styled.img`
  margin-top: -0.6px;
  width: 592px;
  height: 618.8427734375px;
  margin-right: 9.5px;
`;

const Union1 = styled.img`
  position: absolute;
  width: 592px;
  height: 619px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Frame3 = styled.div`
  /* margin-left: 64px; */
  width: auto;
  margin-top: 94px;
  display: flex;
`;

const CoffeeImage2 = styled.div`
  height: 638.8427124023438px;
  display: flex;
  align-items: flex-end;
  min-width: 593.5px;
`;

const UnionContainer = styled.div`
  width: 616px;
  height: 641px;
  position: relative;
  margin-left: -14px;
  margin-bottom: -11.42px;
`;

const Union2 = styled.img`
  position: absolute;
  width: 592px;
  height: 619px;
  top: 22px;
  left: 0;
`;

const Union3 = styled.img`
  position: absolute;
  width: 592px;
  height: 619px;
  top: 0;
  left: 24px;
`;

const TextAndThings1 = styled.div`
  margin-top: 176.4px;
  width: 593.5px;
  height: 286px;
  margin-left: 94px;
  display: flex;
  flex-direction: column;
`;

const AndCake = styled.div`
  ${RobotoBoldCopper48px}
  margin-left: -22.5px;
  width: 616px;
  height: 58px;
  margin-top: 9.5px;
  letter-spacing: 0;
  line-height: 57.6px;
  white-space: nowrap;
`;

const Group1 = styled.div`
  width: 595.5px;
  height: 184.99853515625px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

const LoremIpsumDolorSi = styled.div`
  ${RobotoNormalCopper18px}
  width: 593.5px;
  /* height: 142px; */
  letter-spacing: 0;
  line-height: 27px;
`;

const Frame5 = styled.div`
  /* width: 142.58126831054688px; */
  position: relative;
  margin-top: 13px;
  display: flex;
  align-items: center;
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

// const OverlapGroup1 = styled.div`
//   .circle-with-the-arrow.circle-with-the-arrow-1 & {
//     margin-top: -0.46px;
//   }
// `;

const circleWithTheArrow1Data = {
  ellipse1: "ellipse-1.png",
};

const group1Data = {
  circleWithTheArrowProps: circleWithTheArrow1Data,
};
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
