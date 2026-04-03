// src/pages/Admin/AdminEditTenantPage.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { tenants as initialTenants } from "../../config/tenants";
import "./AdminEditTenantPage.css";

const AdminEditTenantPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [tenant, setTenant] = useState(null);

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    const saved = localStorage.getItem("business-tenants");
    const allTenants = saved ? JSON.parse(saved) : initialTenants;

    if (allTenants[id]) {
      const tenantData = allTenants[id];
      setTenant(tenantData);

      Object.keys(tenantData).forEach((key) => {
        setValue(key, tenantData[key]);
      });
    }

    setLoading(false);
  }, [id, setValue]);

  const onSubmit = (data) => {
    const saved = localStorage.getItem("business-tenants");
    const allTenants = saved ? JSON.parse(saved) : initialTenants;

    allTenants[id] = data;
    localStorage.setItem("business-tenants", JSON.stringify(allTenants));

    alert("Tenant updated successfully!");
    navigate("/admin/tenants");
  };

  if (loading) return <div className="admin-page-state">Loading...</div>;
  if (!tenant) return <div className="admin-page-state">Tenant not found</div>;

  return (
    <div className="admin-edit-tenant-page">
      <div className="page-header">
        <button
          onClick={() => navigate("/admin/tenants")}
          className="back-button"
          type="button"
        >
          ← Return Back to Business List
        </button>
        <h1 className="page-title">Edit {tenant.name}</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="tenant-form">
        <div className="form-grid">
          <section className="form-section">
            <h3 className="section-title">Basic Information</h3>
            <div className="two-column-grid">
              <div className="field">
                <label className="field-label">Tenant ID *</label>
                <input {...register("id", { required: true })} className="field-input" readOnly />
              </div>

              <div className="field">
                <label className="field-label">Business Name *</label>
                <input {...register("name", { required: true })} className="field-input" />
              </div>
            </div>
          </section>

          <section className="form-section">
            <h3 className="section-title">Branding</h3>
            <div className="three-column-grid">
              <div className="field">
                <label className="field-label">Logo Text</label>
                <input {...register("logoText")} className="field-input" />
              </div>

              <div className="field">
                <label className="field-label">Brand Color</label>
                <input
                  type="color"
                  {...register("brandColor")}
                  className="color-input"
                  defaultValue="#3B82F6"
                />
              </div>

              <div className="field">
                <label className="field-label">Group</label>
                <select {...register("group")} className="field-input" defaultValue="">
                  <option value="Food">Food</option>
                  <option value="Tech">Tech</option>
                  <option value="Health Care">Health Care</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </section>

          <section className="form-section">
            <h3 className="section-title">Hero Section</h3>
            <div className="two-column-grid">
              <div className="field">
                <label className="field-label">Hero Heading</label>
                <input {...register("hero.heading")} className="field-input" />
              </div>

              <div className="field">
                <label className="field-label">Hero Subheading</label>
                <textarea
                  {...register("hero.subheading")}
                  className="field-textarea"
                />
              </div>
            </div>
          </section>

          <button type="submit" className="submit-button">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminEditTenantPage;