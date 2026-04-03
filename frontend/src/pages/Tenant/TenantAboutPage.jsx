// src/pages/TenantAboutPage.jsx
import { useOutletContext } from "react-router-dom";
import AboutSection from "../../components/AboutSection/AboutSection";

const TenantAboutPage = () => {
  const { tenant } = useOutletContext();
  return <AboutSection tenant={tenant} />;
};

export default TenantAboutPage;