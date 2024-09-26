import React from "react";
import GlobalStyles from './styles/GlobalStyles';

import './index.css'; // Import your global CSS file
import Restaurant from "../src/main/main"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
 
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          
          <Route path="/" element={< Restaurant/>} />
          
        </Routes>
      </Router>
    </>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
