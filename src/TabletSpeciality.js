import React from 'react'
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
function TabletSpeciality() {
  return (
    <div>
      <SpecialitiesSections>
        <Frame1>
          <TextAndThings>
            <Title>café</Title>
            <Group12 frame3Props={group121Data.frame3Props} />
          </TextAndThings>
          <CoffeeImage src={specialityimageCoffee} />
        </Frame1>
        <Frame2>
          <CoffeeImage src={specialityimagecake} />
          <TextAndThings1>
            <Title>les gâteau</Title>
            <Group121 frame3Props={group122Data.frame3Props} />
          </TextAndThings1>
        </Frame2>
      </SpecialitiesSections>
    </div>
  )
}
const CoffeeImage = styled.img`
    width: 252px;
    height: 264px;

    object-fit: cover;
`
// for coffee
// at doncof we give our priority to coffee making, and we have centered our menu to be a great complement to a great cup of coffee, thus we have compiled the most popular coffees around the world while preserving it's quality, try to make some time to visit our shop and judge by your self.
// for cake
// a cup of coffee can't find a better companion than a well made piece of cake, and we can't recommend our cakes enough, everything in our menu is well adjusted so that it can complement the other item, but for our cake, we gave it much more importance, you won't regret a cake from our shop with a cup of coffee
function Group12(props) {
  const { frame3Props } = props;

  return (
    <Group1>
      <Frame4>
        <LoremIpsumDolorSi>
          chez doncof, nous accordons la priorité à la préparation du café, et nous avons centré notre menu pour être un excellent complément à une bonne tasse de café, nous avons donc compilé les cafés les plus populaires dans le monde tout en préservant sa qualité, essayez de prendre du temps pour visitez notre boutique et jugez par vous-même.
        </LoremIpsumDolorSi>
      </Frame4>

      <Frame3 />
    </Group1>
  );
}
// the cake one
function Group121(props) {
  const { frame3Props } = props;

  return (
    <Group1>
      <Frame4>
        <LoremIpsumDolorSi>
          un verre de café ne peut pas trouver meilleur compagnon qu'un morceau de gâteau bien fait, et nous ne saurions trop recommander nos gâteaux, tout dans notre menu est bien ajusté pour qu'il puisse compléter l'autre élément, mais pour notre gâteau, nous lui avons donné beaucoup plus d'importance, vous ne regretterez pas un gâteau de notre boutique avec une tasse de café
        </LoremIpsumDolorSi>
      </Frame4>

      <Frame3 />
    </Group1>
  );
}
function Frame3(props) {
  const { circleWithTheArrowProps } = props;

  return (
    <Frame31>
      <SomeLink href={links.menu}>menu</SomeLink>
      <ChevronRightIcon />
    </Frame31>
  );
}
export default TabletSpeciality
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

const SpecialitiesSections = styled.div`
    width: auto;
    height: 958px;
    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: var(--background-color);
  `;

const Frame1 = styled.div`
    margin-left: 64px;
    width: 600px;
    position: relative;
    margin-top: 128px;
    display: flex;
    justify-content: space-between;
  `;

const TextAndThings = styled.div`
    width: 253.00054931640625px;
    height: 304.16583251953125px;
    position: relative;
    display: flex;
    flex-direction: column;
  `;

const Title = styled.h1`
    ${TabletBodyHeading}
    height: 43px;
    font-weight: 700;
    color: var(--the-gray-for-content);
    line-height: 43.2px;
    white-space: nowrap;
  `;

const Frame2 = styled.div`
    margin-left: 22.2px;
    width: 683.55859375px;
    position: relative;
    margin-top: 94px;
    display: flex;
  `;

const TextAndThings1 = styled.div`
    width: 336.55914306640625px;
    height: 304.16583251953125px;
    position: relative;
    margin-left: 94px;
    display: flex;
    flex-direction: column;
  `;



const Group1 = styled.div`
    width: 336.55914306640625px;
    height: 237.16583251953125px;
    position: relative;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
  `;

const Frame4 = styled.div`
    width: 336.55914306640625px;
    display: flex;
  `;

const LoremIpsumDolorSi = styled.p`
    ${TabletText}
    width: 336.55914306640625px;
    height: 162px;
    font-weight: 400;
    color: var(--the-gray-for-content);
    line-height: 18px;
  `;



const Frame31 = styled.div` 
    /* width: 164.9866485595703px; */
    height: 43px;
    position: relative;
    margin-top: 32px;
    display: flex;
    align-items: center;
  `;

const SomeLink = styled.a`
    ${TabletLinks}
    /* width: 105px; */
    height: 36px;
    margin-left: 0;
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
    margin-top: -0.21px;
  `;



const Vector = styled.img`
    position: absolute;
    width: 27px;
    height: 18px;
    top: 6px;
    left: 0;
  `;



const CoffeeImage1 = styled.div`
    margin-top: 15.9px;
    height: 272.32830810546875px;
    margin-left: 94px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    min-width: 252.99945068359375px;
  
    &.coffee-image.coffee-image-2 {
      margin-left: unset;
    }
  `;

const OverlapGroup1 = styled.div`
    width: 269px;
    height: 279px;
    position: relative;
    margin-bottom: -10.23px;
  `;

const CoffeeImage2 = styled.div`
    position: absolute;
    width: 261px;
    height: 272px;
    top: 6px;
    left: 8px;
    display: flex;
    justify-content: flex-end;
  `;

const Union = styled.img`
    margin-top: -0.3px;
    width: 252.359375px;
    height: 263.802734375px;
    margin-right: 3.9px;
  `;

const Union1 = styled.img`
    position: absolute;
    width: 252px;
    height: 264px;
    top: 0;
    left: 0;
    object-fit: cover;
  `;


const circleWithTheArrow1Data = {
  ellipse1: "ellipse-1-4.png",
};

const frame31Data = {
  circleWithTheArrowProps: circleWithTheArrow1Data,
};

const group121Data = {
  frame3Props: frame31Data,
};

const circleWithTheArrow2Data = {
  ellipse1: "ellipse-1-5.png",
};

const frame32Data = {
  circleWithTheArrowProps: circleWithTheArrow2Data,
};

const group122Data = {
  frame3Props: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
};
