import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; // eslint-disable-line no-restricted-imports
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Hero from "../components/hero/BackgroundAsImage.js";
import Features from "../components/features/ThreeColSimple.js";
import MainFeature from "../components/features/TwoColWithButton.js";
import MainFeature2 from "../components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "../components/cards/TabCardGrid.js";
import Testimonial from "../components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "../components/cta/DownloadApp.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";


export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
     <Hero/>

   
   <MainFeature
        subheading={<Subheading>Established Since 2014</Subheading>}
        heading={
          <>
            We've been serving for
            <wbr /> <HighlightedText>over 25 years.</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      /> 
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Our <HighlightedText>Projects.</HighlightedText>
          </>
        }
      />
      <Features
        heading={
          <>
           Elite <HighlightedText>Engineering Solutions</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: "https://www.shutterstock.com/image-vector/road-leading-cablestayed-bridge-transportation-260nw-309423797.jpg",
            title: "Precision Engineering & Expertise",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            
          },
          {
            imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEozKmA0f89nsNJlVNV_ZPiHwsylElorNgPA&s",
            title: "Timely Project Delivery",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
           
          },
          {
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwt78iYfDyMhnb423wLopurVBAjyaqBqph2A&s",
            title: "Sustainable & Innovative Solutions",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={<>Our <HighlightedText>Equipments</HighlightedText></>}
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+"
          },
          {
            key: "Chefs",
            value: "1500+"
          }
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <Testimonial
        subheading=""
        heading={<>Our <HighlightedText>Technical Team</HighlightedText></>}
      />
     
      <Footer />
    </AnimationRevealPage>
  );
}
