// src/pages/Admin/AdminTenantsPage.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { tenants as initialTenants } from "../../config/tenants";
import "./AdminTenantsPage.css";

const AdminTenantsPage = () => {
  const [tenants, setTenants] = useState(initialTenants);

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem("business-tenants");
    if (saved) {
      setTenants(JSON.parse(saved));
    }
  }, []);

  const deleteTenant = (id) => {
    const newTenants = { ...tenants };
    delete newTenants[id];
    setTenants(newTenants);
    localStorage.setItem("business-tenants", JSON.stringify(newTenants));
  };

  const groupedTenants = Object.entries(tenants).reduce((acc, [id, tenant]) => {
    const group = tenant.group || "Other";
    if (!acc[group]) acc[group] = [];
    acc[group].push({ id, ...tenant });
    return acc;
  }, {});

  return (
    <div className="admin-tenants-page">
      <div className="admin-tenants-page__header">
        <h1 className="admin-tenants-page__title">
          Manage Tenants ({Object.keys(tenants).length})
        </h1>
      </div>

      <div className="admin-tenants-page__groups">
        {Object.entries(groupedTenants).map(([groupName, groupTenants]) => (
          <div key={groupName} className="admin-tenants-page__group">
            <h2 className="admin-tenants-page__group-title">
              {groupName} ({groupTenants.length})
            </h2>

            <div className="admin-tenants-page__grid">
              {groupTenants.map((tenant) => (
                <div key={tenant.id} className="admin-tenants-page__card">
                  <div className="admin-tenants-page__tenant-info">
                    <div
                      className="admin-tenants-page__avatar"
                      style={{ background: tenant.brandColor }}
                    >
                      {tenant.logoText?.[0] || tenant.name?.[0]}
                    </div>

                    <div className="admin-tenants-page__tenant-meta">
                      <h3 className="admin-tenants-page__tenant-name">
                        {tenant.name}
                      </h3>
                      <p className="admin-tenants-page__tenant-id">
                        {tenant.id}
                      </p>
                    </div>
                  </div>

                  <div className="admin-tenants-page__actions">
                    <Link
                      to={`/admin/edit/${tenant.id}`}
                      className="admin-tenants-page__edit-btn"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => deleteTenant(tenant.id)}
                      className="admin-tenants-page__delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTenantsPage;
