import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "./helpers/AnimationRevealPage";
import RestaurantLandingPage from "./main/main";
import ProjectPage from "./components/projects/project";
import RestaurantLandingPageImageSrc from "./images/demo/RestaurantLandingPage.jpeg";

export const components = {
  landingPages: {
    RestaurantLandingPage: {
      component: RestaurantLandingPage,
      imageSrc: RestaurantLandingPageImageSrc,
      url: "/",
    },
  }
};

export default () => {
  const { type, subtype, name } = useParams();

  try {
    let Component = null;

    // Check for the base URL and load the RestaurantLandingPage
    if (!type && !subtype && !name) {
      Component = components.landingPages.RestaurantLandingPage.component;
    } 
    // Check if we are on the /project route
    else if (type === "projectPages" && name === "ProjectPage") {
      Component = components.projectPages.ProjectPage.component;
    } 
    // Check for blocks or other components
    else if (type === "blocks" && subtype) {
      Component = components[type][subtype]["elements"][name]?.component;
    } else {
      Component = components[type][name]?.component;
    }

    if (Component) {
      return (
        <AnimationRevealPage disabled>
          <Component />
        </AnimationRevealPage>
      );
    }

    throw new Error("Component Not Found");
  } catch (e) {
    console.log(e);
    return <div>Error: Component Not Found</div>;
  }
};
