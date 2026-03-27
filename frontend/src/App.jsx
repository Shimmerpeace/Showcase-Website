// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import TenantSwitcher from "./components/TenantSwitcher/TenantSwitcher";
import TenantHomePage from "./pages/TenantHomePage";
import TenantProductsPage from "./pages/TenantProductsPage";
import TenantAboutPage from "./pages/TenantAboutPage";
import TenantContactPage from "./pages/TenantContactPage";
import { defaultTenantId } from "./config/tenants";

const App = () => {
  const HeaderRight = () => <TenantSwitcher />;

  return (
    <Routes>
      {/* redirect root to default tenant */}
      <Route
        path="/"
        element={<Navigate to={`/${defaultTenantId}`} replace />}
      />

      {/* tenant layout with nested pages */}
      <Route path="/:tenantId" element={<Layout HeaderRight={HeaderRight} />}>
        <Route index element={<TenantHomePage />} />
        <Route path="products" element={<TenantProductsPage />} />
        <Route path="about" element={<TenantAboutPage />} />
        <Route path="contact" element={<TenantContactPage />} />
      </Route>

      {/* catch-all */}
      <Route
        path="*"
        element={<Navigate to={`/${defaultTenantId}`} replace />}
      />
    </Routes>
  );
};

export default App;
