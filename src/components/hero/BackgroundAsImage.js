import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import kuruivikaranImage from '../../images/kuruvikaran.png';
import sampleVideo from '../../images/video.mp4'; // Import your video file here

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  min-height: 100vh; /* Ensure it takes up the full height of the viewport */
  background-image: url(${kuruivikaranImage});
`;

const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row flex-grow h-full`; 
// Added h-full to ensure it stretches full height

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const StyledVideo = styled.video`
  ${tw`rounded bg-black shadow-xl w-full`} // Ensure the video has a full width and is styled similarly to the original iframe
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">
        About
      </NavLink>
      <NavLink href="#">
        Team
      </NavLink>
      <NavLink href="#">
        Projects
      </NavLink>
      <NavLink href="#">
        Machineries
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/#">
        Hire Us
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Notification>Where Vision Meets Craftsmanship</Notification>
            <Heading>
              <span>Shaping the Future of </span>
              <br />
              <SlantedBackground>Infrastructure.</SlantedBackground>
            </Heading>
            <PrimaryAction>Read Customer Stories</PrimaryAction>
          </LeftColumn>
          <RightColumn>
            {/* Replace the Vimeo embed with the local video */}
            <StyledVideo controls autoPlay muted loop>
              <source src={sampleVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </StyledVideo>
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
