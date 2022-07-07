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

function TabletInstaGallery() {
  function Column3(props) {
    const { placeholderImage1, placeholderImage2, className } = props;

    return (
      <Columnn className={`column ${className || ""}`}>
        <PlaceholderImageContainerr className="placeholder-image-container">
          <PlaceholderImagee className="placeholder-image" src={placeholderImage1} />
          <PlaceholderImage11 className="placeholder-image-1" src={placeholderImage2} />
        </PlaceholderImageContainerr>
      </Columnn>
    );
  }
  function Content(props) {
    const { menu, loremIpsumDolorSi } = props;

    return (
      <SectionTitle>
        <Title>{menu}</Title>
        <LoremIpsumDolorSi>{loremIpsumDolorSi}</LoremIpsumDolorSi>
      </SectionTitle>
    );
  }
  return (
    <div>

      <ImageGallery>
        <Content
          menu="Image Gallery"
          loremIpsumDolorSi=""
        />
        <Contentt>
          <Column3
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
          <Column3
            placeholderImage1={image6}
            placeholderImage2={image7}
            className="column-1"
          />
        </Contentt>
      </ImageGallery>
    </div>
  )
}

export default TabletInstaGallery

// import React from "react";
// import styled from "styled-components";

// function App() {
//   return (

//   );
// }

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
const ImageGallery = styled.div`
padding: 100px 0px;
   /* width: 728px; */
  height: 748px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  align-items: center;
`;

const Contentt = styled.div`
  /* margin-left: 71.4px; */
  width: 585.25px;
  position: relative;
  margin-top: 64px;
  display: flex;
`;

const Column = styled.div`
  height: 422.8787841796875px;
  margin-left: 14.3px;
  display: flex;
  align-items: flex-start;
  min-width: 185.56707763671875px;
`;

const PlaceholderImageContainer = styled.div`
  width: 230px;
  height: 468px;
  position: relative;
  margin-left: -23px;
  margin-top: -20.77px;
`;

const PlaceholderImage = styled.img`
  position: absolute;
  width: 230px;
  height: 149px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const PlaceholderImage1 = styled.img`
  position: absolute;
  width: 230px;
  height: 149px;
  top: 119px;
  left: 0;
  object-fit: cover;
`;

const PlaceholderImage2 = styled.img`
  position: absolute;
  width: 230px;
  height: 230px;
  top: 237px;
  left: 0;
  object-fit: cover;
`;



const SectionTitle = styled.div`
  margin-left: -20px;
  /* width: 768px; */
  height: 109px;
  margin-top: 76px;
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


const Columnn = styled.div`
  height: 385.4085388183594px;
  display: flex;
  align-items: flex-start;
  min-width: 185.56707763671875px;

  &.column.column-1 {
    margin-left: 14.3px;
  }
`;

const PlaceholderImageContainerr = styled.div`
  width: 230px;
  height: 430px;
  position: relative;
  margin-left: -22px;
  margin-top: -20.93px;
`;

const PlaceholderImagee = styled.img`
  position: absolute;
  width: 230px;
  height: 230px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const PlaceholderImage11 = styled.img`
  position: absolute;
  width: 230px;
  height: 230px;
  top: 200px;
  left: 0;
  object-fit: cover;
`;

