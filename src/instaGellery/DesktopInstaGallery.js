import React from 'react'
import styled from "styled-components";
import { css } from "styled-components";
import "../index.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import imageGallery from '../imageGallery.png';
import image1 from "../images/image1.jpeg"
import image2 from "../images/image2.jpeg"
import image3 from "../images/image3.jpeg"
import image4 from "../images/image4.jpeg"
import image5 from "../images/image5.jpeg"
import image6 from "../images/image6.jpeg"
import image7 from "../images/image7.jpeg"


function DesktopInstaGallery() {
  return (
    <div>
      <Conatiner>

        <HeadContent
          menu="Image Gallery"
          loremIpsumDolorSi=""
        />
        <ImageGallery>
          <Content>
            <Column2
              placeholderImage1={image1}
              placeholderImage2={image2}
            />
            <Column>
              <PlaceholderImageContainer>
                <PlaceholderImage src={image3} />
                <PlaceholderImage1 src={image4} />
                {/* <PlaceholderImage2 src={image5} /> */}
              </PlaceholderImageContainer>
            </Column>
            <Column2
              placeholderImage1={image6}
              placeholderImage2={image7}
              className="column-1"
            />
          </Content>
        </ImageGallery>
      </Conatiner>
    </div>
  )
}
// top
export default DesktopInstaGallery

export const RobotoBoldBigFootFeet48px = css`
  color: var(--head-sections-color);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xxl);
  font-weight: 700;
  font-style: normal;
`;

export const RobotoNormalBigFootFeet18px = css`
  color: var(--head-sections-color);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
`;

// function App() {
//   return (

//   );
// }

function HeadContent(props) {
  const { menu, loremIpsumDolorSi } = props;

  return (
    <SectionTitle>
      <Title>{menu}</Title>
      <LoremIpsumDolorSi>{loremIpsumDolorSi}</LoremIpsumDolorSi>
    </SectionTitle>
  );
}
const Conatiner = styled.div`
display: flex;
background-color: var(--background-color);
justify-content: center;
padding: 100px 0px;
flex-direction: column;
`

const SectionTitle = styled.div`
  /* width: 768px; */
  height: 109px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  ${RobotoBoldBigFootFeet48px}
  height: 58px;
  text-align: center;
  letter-spacing: 0;
  line-height: 57.6px;
  white-space: nowrap;
`;

const LoremIpsumDolorSi = styled.div`
  ${RobotoNormalBigFootFeet18px}
  height: 27px;
  margin-top: 24px;
  text-align: center;
  letter-spacing: 0;
  line-height: 27px;
  white-space: nowrap;
`;


const ImageGallery = styled.div`
  /* width: 1409px; */
  height: 1168px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  align-items: center;
`;

const Content = styled.div`
  /* margin-left: 121px; */
  width: 1167px;
  position: relative;
  margin-top: 64px;
  display: flex;
`;

const Column = styled.div`
  height: 843.2286376953125px;
  margin-left: 28.5px;
  display: flex;
  align-items: flex-start;
  min-width: 370.0243835449219px;
`;

// const PlaceholderImage2 = styled.img`
//   position: absolute;
//   width: 459px;
//   height: 459px;
//   top: 473px;
//   left: 0;
//   object-fit: cover;
// `;


function Column2(props) {
  const { placeholderImage1, placeholderImage2, className } = props;

  return (
    <Columnn className={`column ${className || ""}`}>
      <PlaceholderImageContainer className="placeholder-image-container">
        <PlaceholderImage className="placeholder-image" src={placeholderImage1} />
        <PlaceholderImage1 className="placeholder-image-1" src={placeholderImage2} />
      </PlaceholderImageContainer>
    </Columnn>
  );
}

const Columnn = styled.div`
  height: 768.51220703125px;
  display: flex;
  align-items: flex-start;
  min-width: 370.0243835449219px;

  &.column.column-1 {
    margin-left: 28.5px;
  }
`;

const PlaceholderImageContainer = styled.div`
  width: 459px;
  height: 857px;
  position: relative;
  margin-left: -44px;
  margin-top: -41.18px;
`;

const PlaceholderImage = styled.img`
  position: absolute;
  width: 459px;
  height: 459px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const PlaceholderImage1 = styled.img`
  position: absolute;
  width: 459px;
  height: 459px;
  top: 470px;
  left: 0;
  object-fit: cover;
  padding: 0px 34px;
`;

