
// src/components/AdminLayout/AdminLayout.jsx
import { Link, useNavigate, Outlet } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-title">Business Admin</div>

        <nav className="admin-sidebar-nav">
          <Link to="/admin/tenants" className="admin-sidebar-link">
            Manage Tenants
          </Link>

          <Link to="/admin/new-tenant" className="admin-sidebar-link">
            Add New Tenant
          </Link>
        </nav>

        <button
          onClick={() => navigate("/")}
          className="admin-sidebar-back"
        >
          ← Return Back to Business Page
        </button>
      </aside>

      {/* Main content */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;