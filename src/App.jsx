import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Stats from "./components/Stats";
import Form from "./components/Form";
import Testimonials from "./components/Testimonials";
import ProjectComponent from "./components/Project";
import ServicesComponent from "./components/Services";
import ProductsComponent from "./components/Products";
import OurVision from "./components/OurVision";
import OurMission from "./components/OurMission";
import Gallery from "./pages/Gallery"; // ✅ Use the correct Gallery component
import TeamMembers from "./components/TeamMembers";
import OurClients from "./components/OurClients";
import OfficeLocations from "./components/OfficeLocations";
import IndiaMap from "./components/Indiamap";
import ConstructionInfo from "./components/ConstructionInfo";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutUs />
              <OurVision />
              <OurMission />
              <ConstructionInfo />
              <ProjectComponent />
              <ServicesComponent />
              <ProductsComponent />
              <TeamMembers />
              <Testimonials />
              <OurClients />
              <Stats />
              <Form />
              <IndiaMap />
              <OfficeLocations />
            </>
          }
        />

        {/* Gallery Page */}
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
