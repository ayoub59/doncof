import React from 'react'
import styled from "styled-components";
import { css } from "styled-components";
import heroPic from "./hero-pic.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./index.css";
// import specialityimage from "./speciality-image.png";
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
function MobileSpeciality() {

  function Frame2(props) {
    const { ellipse1, union1, union2, className } = props;

    return (
      <Frame21 className={`frame-2 ${className || ""}`}>
        <TextAndThings className="text-and-things">
          <Title className="title">
            Et les gâteau
          </Title>
          <Group1 className="group-1">
            {/* the solution that i am thinking of is adding this component (the frame) not as compact as in frame 4 */}
            {/* basicly frame 4 but just the things inside */}
            {/* <div>

            </div> */}
            <Frame411 />
            <Frame3 className="frame-3">
              <SomeLink href={links.menu} className="some-link">
                menu
              </SomeLink>
              <ChevronRightIcon />
            </Frame3>
          </Group1>
        </TextAndThings>
        <CoffeeImage className="coffee-image">
          <Union className="union" src={union1} />
        </CoffeeImage>
      </Frame21>
    );
  }
  function Frame212(props) {
    const { ellipse1, union1, union2, className } = props;

    return (
      <Frame21 className={`frame-2 ${className || ""}`}>
        <TextAndThings className="text-and-things">
          <Title className="title">
            Café
          </Title>
          <Group1 className="group-1">
            {/* the solution that i am thinking of is adding this component (the frame) not as compact as in frame 4 */}
            {/* basicly frame 4 but just the things inside */}
            {/* <div>

            </div> */}
            <Frame4 />
            <Frame3 className="frame-3">
              <SomeLink href={links.menu} className="some-link">
                menu
              </SomeLink>
              <ChevronRightIcon />
            </Frame3>
          </Group1>
        </TextAndThings>
        <CoffeeImage className="coffee-image">
          <Union className="union" src={union1} />
        </CoffeeImage>
      </Frame21>
    );
  }
  // cake
  function Frame4() {
    return (
      <Frame41>
        <LoremIpsumDolorSi>
          un verre de café ne peut pas trouver meilleur compagnon qu'un morceau de gâteau bien fait, et nous ne saurions trop recommander nos gâteaux, tout dans notre menu est bien ajusté pour qu'il puisse compléter l'autre élément, mais pour notre gâteau, nous lui avons donné beaucoup plus d'importance, vous ne regretterez pas un gâteau de notre boutique avec une tasse de café
        </LoremIpsumDolorSi>
      </Frame41>
    );
  }
  // coffee
  function Frame411() {
    return (
      <Frame41>
        <LoremIpsumDolorSi>
          chez doncof, nous accordons la priorité à la préparation du café, et nous avons centré notre menu pour être un excellent complément à une bonne tasse de café, nous avons donc compilé les cafés les plus populaires dans le monde tout en préservant sa qualité, essayez de prendre du temps pour visitez notre boutique et jugez par vous-même.
        </LoremIpsumDolorSi>
      </Frame41>
    );
  }
  return (
    <div>
      <SpecialitiesSections>
        <Frame212
          ellipse1="ellipse-1-8.png"
          union1={specialityimageCoffee}
          className="frame-3-1"
        />
        <Frame2 ellipse1="ellipse-1-7.png" union1={specialityimagecake}
        />

      </SpecialitiesSections>
    </div>
  )
}
// margin-left
export default MobileSpeciality
export const PhoneText = css`
  font-family: var(--font-family-capriola);
  font-size: var(--font-size-10px);
  letter-spacing: 0;
  font-weight: 400;
  font-style: normal;
`;

export const PhoneLink = css`
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-l2);
  letter-spacing: 0;
  font-weight: 400;
  font-style: normal;
`;

export const RobotoBoldCopper32px = css`
  color: var(--the-gray-for-content);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xl);
  font-weight: 700;
  font-style: normal;
`;


const SpecialitiesSections = styled.div`
  width: auto;
  height: 1140px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color);
`;



const Frame21 = styled.div`
  /* margin-left: 64px; */
  width: 176.22000122070312px;
  height: 490.9673767089844px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  &.frame-2.frame-3-1 {
    margin-top: 94px;
  }
`;

const TextAndThings = styled.div`
  height: 258px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  ${RobotoBoldCopper32px}
  width: 176.22000122070312px;
  height: 38px;
  letter-spacing: 0;
  line-height: 38.4px;
  white-space: nowrap;
`;

const Group1 = styled.div`
  width: 176.22000122070312px;
  height: 214px;
  position: relative;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
`;

const Frame3 = styled.div`
  width: 134.9866485595703px;
  margin-top: 16px;
  display: flex;
`;

const SomeLink = styled.a`
  ${PhoneLink}
  width: 88px;
  height: 30px;
  font-weight: 400;
  color: var(--the-gray-for-content);
  line-height: 30px;
  white-space: nowrap;
`;

const CircleWithTheArrow = styled.div`
  margin-top: 3.9px;
  height: 22.18206214904785px;
  margin-left: 8px;
  display: flex;
  padding: 0 0.2px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 38.98665237426758px;
`;

const OverlapGroup = styled.div`
  width: 28px;
  height: 22px;
  position: relative;
  margin-top: -0.41px;
`;

const Ellipse1 = styled.img`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 0;
  left: 6px;
`;

const Vector = styled.img`
  position: absolute;
  width: 21px;
  height: 13px;
  top: 4px;
  left: 0;
`;

const CoffeeImage = styled.div`
  margin-left: -16.4px;
  height: 224.96737670898438px;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 209px;
`;

const OverlapGroup1 = styled.div`
  width: 222px;
  height: 230px;
  position: relative;
  margin-bottom: -8.45px;
`;

const CoffeeImage1 = styled.div`
  position: absolute;
  width: 216px;
  height: 225px;
  top: 5px;
  left: 7px;
  display: flex;
  justify-content: flex-end;
`;

const Union = styled.img`
  margin-top: 0;
  width: 208.47265625px;
  height: 217.92431640625px;
  margin-right: 3.3px;
`;

const Union1 = styled.img`
  position: absolute;
  width: 208px;
  height: 218px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Union2 = styled.img`
  .frame-2.frame-3-1 & {
    margin-top: -0.3px;
  }
`;



const Frame41 = styled.div`
  width: 176.22000122070312px;
  display: flex;
`;

const LoremIpsumDolorSi = styled.p`
  ${PhoneText}
  width: 176.22000122070312px;
  height: 168px;
  font-weight: 400;
  color: var(--the-gray-for-content);
  line-height: 14px;
`;

