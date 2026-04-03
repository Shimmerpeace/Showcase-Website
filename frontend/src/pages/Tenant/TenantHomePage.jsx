// src/pages/TenantHomePage.jsx
import { useOutletContext } from "react-router-dom";
import HeroSection from "../../components/HeroSection/HeroSection";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import AboutSection from "../../components/AboutSection/AboutSection";
import ContactSection from "../../components/ContactSection/ContactSection";

const TenantHomePage = () => {
  const { tenant } = useOutletContext();
  return (
    <>
      <HeroSection tenant={tenant} />
      <ProductGrid tenant={tenant} />
      <AboutSection tenant={tenant} />
      <ContactSection tenant={tenant} />
    </>
  );
};

export default TenantHomePage;