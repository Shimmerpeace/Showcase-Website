// src/pages/TenantProductsPage.jsx
import { useOutletContext } from "react-router-dom";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

const TenantProductsPage = () => {
  const { tenant } = useOutletContext();
  return <ProductGrid tenant={tenant} />;
};

export default TenantProductsPage;