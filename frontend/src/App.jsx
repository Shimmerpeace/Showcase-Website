// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import TenantSwitcher from "./components/TenantSwitcher/TenantSwitcher";
import TenantHomePage from "./pages/Tenant/TenantHomePage";
import TenantProductsPage from "./pages/Tenant/TenantProductsPage";
import TenantAboutPage from "./pages/Tenant/TenantAboutPage";
import TenantContactPage from "./pages/Tenant/TenantContactPage";
import { defaultTenantId } from "./config/tenants";
import AdminLayout from "./components/AdminLayout/AdminLayout";
import AdminTenantsPage from "./pages/Admin/AdminTenantsPage";
import AdminNewTenantPage from "./pages/Admin/AdminNewTenantPage";
import AdminEditTenantPage from "./pages/Admin/AdminEditTenantPage";

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

      {/* Admin Dashboard - admin is parent route */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminTenantsPage />} />
        <Route path="tenants" element={<AdminTenantsPage />} />
        <Route path="new-tenant" element={<AdminNewTenantPage />} />
        <Route path="edit/:id" element={<AdminEditTenantPage />} />
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
