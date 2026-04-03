// src/pages/TenantContactPage.jsx
import { useOutletContext } from "react-router-dom";
import ContactSection from "../../components/ContactSection/ContactSection";

const TenantContactPage = () => {
  const { tenant } = useOutletContext();
  return <ContactSection tenant={tenant} />;
};

export default TenantContactPage;