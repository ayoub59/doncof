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
  /* width: 728px; */
  height: 431px;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
padding: 100px 0px;

  /*  */
  align-items: center;
`;

const Contentt = styled.div`
  /* margin-left: 15.3px; */
  width: 273.6015625px;
  position: relative;
  margin-top: 64px;
  display: flex;
`;

const Column = styled.div`
  height: 197.6938018798828px;
  margin-left: 6.7px;
  display: flex;
  align-items: flex-start;
  min-width: 86.75171661376953px;
`;

const PlaceholderImageContainer = styled.div`
  width: 108px;
  height: 201px;
  position: relative;
  margin-left: -11px;
  margin-top: -9.79px;
`;

const PlaceholderImage = styled.img`
  position: absolute;
  width: 108px;
  height: 108px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const PlaceholderImage1 = styled.img`
  position: absolute;
  width: 108px;
  height: 108px;
  top: 119px;
  left: 0;
  object-fit: cover;
`;
// top: 119px;

const PlaceholderImage2 = styled.img`
  position: absolute;
  width: 108px;
  height: 108px;
  top: 237;
  left: 0;
  object-fit: cover;
`;

// 237

const SectionTitle = styled.div`
  margin-left: 16.7px;
  /* width: 270.890625px; */
  height: 65.46533203125px;
    display: flex;
  flex-direction: column;
  padding-bottom: 20px;
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
  height: 180.17662048339844px;
  display: flex;
  align-items: flex-start;
  min-width: 86.75171661376953px;

  &.column.column-1 {
    margin-left: 6.7px;
  }
`;

const PlaceholderImageContainerr = styled.div`
  width: 108px;
  height: 201px;
  position: relative;
  margin-left: -11px;
  margin-top: -9.79px;
`;

const PlaceholderImagee = styled.img`
  position: absolute;
  width: 108px;
  height: 108px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const PlaceholderImage11 = styled.img`
  position: absolute;
  width: 108px;
  height: 108px;
  top: 93px;
  left: 0;
  object-fit: cover;
`;



// import React from 'react'
// import styled from "styled-components";
// import { css } from "styled-components";
// import "../index.css";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import imageGallery from '../imageGallery.png';


// function MobileInstaGallery() {
//     function Column(props) {
//         const { placeholderImage1, placeholderImage2, className } = props;

//         return (
//             <Column1 className={`column ${className || ""}`}>
//                 <PlaceholderImageContainerr className="placeholder-image-container">
//                     <PlaceholderImagee className="placeholder-image" src={placeholderImage1} />
//                     <PlaceholderImage11 className="placeholder-image-1" src={placeholderImage2} />
//                 </PlaceholderImageContainerr>
//             </Column1>
//         );
//     }
//     return (
//         <div>MobileInstaGallery

//             <ImageGallery>
//                 <SectionTitle>
//                     <ImageGallery1>Image Gallery</ImageGallery1>
//                     <LoremIpsumDolorSi>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</LoremIpsumDolorSi>
//                 </SectionTitle>
//                 <Content>
//                     <Column
//                         placeholderImage1={imageGallery}
//                         placeholderImage2={imageGallery}
//                     />
//                     <Column>
//                         <PlaceholderImageContainer>
//                             <PlaceholderImage src={imageGallery} />
//                             <PlaceholderImage1 src={imageGallery} />
//                             <PlaceholderImage2 src={imageGallery} />
//                         </PlaceholderImageContainer>
//                     </Column>
//                     <Column
//                         placeholderImage1={imageGallery}
//                         placeholderImage2={imageGallery}
//                         className="column-1"
//                     />
//                 </Content>
//             </ImageGallery>
//         </div>
//     )
// }

// export default MobileInstaGallery

// // import React from "react";
// // import styled from "styled-components";

// // function App() {
// //   return (

// //   );
// // }
// const ImageGallery = styled.div`
//   /* width: 304px; */
//   height: 332px;
//   display: flex;
//   flex-direction: column;
//   background-color: var(--background-color);
//   /*  */
//   align-items: center;
// `;

// const SectionTitle = styled.div`
//   margin-left: 16.7px;
//   /* width: 270.890625px; */
//   height: 38.46533203125px;
//   display: flex;
//   flex-direction: column;
// `;

// const ImageGallery1 = styled.div`
//   height: 20px;
//   font-family: var(--font-family-roboto);
//   font-weight: 700;
//   color: var(--head-sections-color);
//   font-size: var(--font-size-l);
//   text-align: center;
//   letter-spacing: 0;
//   line-height: 20.3px;
//   white-space: nowrap;
// `;

// const LoremIpsumDolorSi = styled.p`
//   height: 10px;
//   margin-top: 8.5px;
//   font-family: var(--font-family-roboto);
//   font-weight: 400;
//   color: var(--head-sections-color);
//   font-size: var(--font-size-m);
//   text-align: center;
//   letter-spacing: 0;
//   line-height: 9.5px;
//   white-space: nowrap;
// `;

// const Content = styled.div`
//   /* margin-left: 15.3px; */
//   width: 273.6015625px;
//   position: relative;
//   margin-top: 64px;
//   display: flex;
// `;

// const Column = styled.div`
//   height: 197.6938018798828px;
//   margin-left: 6.7px;
//   display: flex;
//   align-items: flex-start;
//   min-width: 86.75171661376953px;
// `;

// const PlaceholderImageContainer = styled.div`
//   width: 108px;
//   height: 218px;
//   position: relative;
//   margin-left: -11px;
//   margin-top: -9.77px;
// `;

// const PlaceholderImage = styled.img`
//   position: absolute;
//   width: 108px;
//   height: 70px;
//   top: 0;
//   left: 0;
//   object-fit: cover;
// `;

// const PlaceholderImage1 = styled.img`
//   position: absolute;
//   width: 108px;
//   height: 70px;
//   top: 55px;
//   left: 0;
//   object-fit: cover;
// `;

// const PlaceholderImage2 = styled.img`
//   position: absolute;
//   width: 108px;
//   height: 108px;
//   top: 111px;
//   left: 0;
//   object-fit: cover;
// `;


// const Column1 = styled.div`
//   height: 180.17662048339844px;
//   display: flex;
//   align-items: flex-start;
//   min-width: 86.75171661376953px;

//   &.column.column-1 {
//     margin-left: 6.7px;
//   }
// `;

// const PlaceholderImageContainerr = styled.div`
//   width: 108px;
//   height: 201px;
//   position: relative;
//   margin-left: -11px;
//   margin-top: -9.79px;
// `;

// const PlaceholderImagee = styled.img`
//   position: absolute;
//   width: 108px;
//   height: 108px;
//   top: 0;
//   left: 0;
//   object-fit: cover;
// `;

// const PlaceholderImage11 = styled.img`
//   position: absolute;
//   width: 108px;
//   height: 108px;
//   top: 93px;
//   left: 0;
//   object-fit: cover;
// `;