// src/components/TenantSwitcher/TenantSwitcher.jsx
import { useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { tenants, defaultTenantId, tenantGroups } from "../../config/tenants";
import "./TenantSwitcher.css";

const TenantSwitcher = () => {
  const navigate = useNavigate();
  const { tenantId } = useParams();
  const [currentId, setCurrentId] = useState(tenantId || defaultTenantId);

  const groupedTenants = useMemo(() => {
    const groups = {};
    Object.values(tenants).forEach((t) => {
      const groupKey = t.group || "Other";
      if (!groups[groupKey]) groups[groupKey] = [];
      groups[groupKey].push(t);
    });

    if (tenantGroups) {
      const ordered = {};
      Object.keys(tenantGroups).forEach((key) => {
        if (groups[key]) ordered[key] = groups[key];
      });
      Object.keys(groups).forEach((key) => {
        if (!ordered[key]) ordered[key] = groups[key];
      });
      return ordered;
    }

    return groups;
  }, []);

  useEffect(() => {
    if (tenantId && tenants[tenantId]) {
      setCurrentId(tenantId);
    } else {
      setCurrentId(defaultTenantId);
    }
  }, [tenantId]);

  const handleChange = (e) => {
    const newId = e.target.value;
    setCurrentId(newId);
    // go to the home page of the selected tenant
    navigate(`/${newId}`);
  };

  return (
    <div className="tenant-switcher">
      <span className="tenant-switcher-label">Preview:</span>
      <select
        value={currentId}
        onChange={handleChange}
        className="tenant-switcher-select"
      >
        {Object.entries(groupedTenants).map(([groupName, list]) => (
          <optgroup key={groupName} label={groupName}>
            {list.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
};

export default TenantSwitcher;
