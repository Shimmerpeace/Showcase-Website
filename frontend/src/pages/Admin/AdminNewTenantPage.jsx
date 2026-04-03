// src/pages/Admin/AdminNewTenantPage.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./AdminNewTenantPage.css";

const AdminNewTenantPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const saved = localStorage.getItem("business-tenants") || "{}";
    const allTenants = JSON.parse(saved);

    const id = data.name.toLowerCase().replace(/[^a-z0-9]/g, "-");

    allTenants[id] = {
      id,
      name: data.name,
      logoText: data.name.slice(0, 2).toUpperCase(),
      group: data.group,
      brandColor: data.brandColor || "#3B82F6",
      accentColor: data.accentColor || "#10B981",
      textColor: "#1F2937",
      backgroundColor: "#F9FAFB",
      hero: {
        heading: `${data.name} - Welcome`,
        subheading: "Your personalized showcase starts here.",
        ctaLabel: "Get Started",
      },
      about: {
        title: `About ${data.name}`,
        body: "Edit this section to tell your story.",
      },
      products: [],
      contact: {
        address: "",
        phone: "",
        email: "",
      },
    };

    localStorage.setItem("business-tenants", JSON.stringify(allTenants));
    alert("New tenant created!");
    navigate(`/admin/edit/${id}`);
  };

  return (
    <div className="admin-new-tenant-page">
      <div className="page-header">
        <button
          onClick={() => navigate("/admin/tenants")}
          className="back-button"
          type="button"
        >
          ← Return Back to Business Admin Page
        </button>
        <h1 className="page-title">Create New Tenant</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="tenant-form">
        <div className="form-grid">
          <div className="field">
            <label className="field-label">Business Name *</label>
            <input
              {...register("name", { required: true })}
              className="field-input"
              placeholder="Enter business name"
            />
          </div>

          <div className="two-column-grid">
            <div className="field">
              <label className="field-label">Group *</label>
              <select
                {...register("group", { required: true })}
                className="field-input"
                defaultValue=""
              >
                <option value="">Select Group</option>
                <option value="Food">Food</option>
                <option value="Tech">Tech</option>
                <option value="Health Care">Health Care</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Transportation">Transportation</option>
              </select>
            </div>

            <div className="field">
              <label className="field-label">Brand Color</label>
              <input
                type="color"
                {...register("brandColor")}
                defaultValue="#3B82F6"
                className="color-input"
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            Create Tenant
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminNewTenantPage;
