// src/Layout.jsx

import { Link, Outlet, useParams } from "react-router-dom";
import { useState } from "react";
import { tenants } from "./config/tenants";
import "./Layout.css";

const Layout = ({ HeaderRight }) => {
  const { tenantId } = useParams();
  const tenant = tenants[tenantId];

  const [isOpen, setIsOpen] = useState(false);

  if (!tenant) {
    return <div className="layout-tenant-not-found">Tenant not found.</div>;
  }

  const { brandColor, backgroundColor, textColor, name, logoText } = tenant;

  return (
    <div
      className="layout-root"
      style={{
        // tenant-dependent styles stay inline
        backgroundColor: backgroundColor || "#F3F4F6",
        color: textColor || "#111827",
      }}
    >
      <header className="layout-header">
        <div className="layout-header-inner">
          <div className="layout-logo-wrapper">
            <div
              className="layout-logo-circle"
              style={{ background: brandColor }}
            >
              {logoText?.[0] || name?.[0] || "B"}
            </div>
            <span className="layout-logo-text">{logoText || name}</span>
          </div>

          <nav className={`layout-nav ${isOpen ? "is-open" : ""}`}>
            <div className="layout-nav-inner">
              <Link
                to={`/${tenantId}`}
                className="layout-nav-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to={`/${tenantId}/products`}
                className="layout-nav-link"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to={`/${tenantId}/about`}
                className="layout-nav-link"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to={`/${tenantId}/contact`}
                className="layout-nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/admin/tenants"
                style={{
                  padding: "0.5rem 1rem",
                  background: "#6B7280",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                Admin
              </Link>
            </div>
          </nav>

          {/* Right: HeaderRight + mobile toggle button */}
          <div className="layout-header-right">
            {HeaderRight && <HeaderRight />}
            <button
              type="button"
              className="layout-nav-toggle"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              {/* Simple burger / X icon using lines or text; swap as you like */}
              <span className={`burger ${isOpen ? "open" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      <main>
        <Outlet context={{ tenant }} />
      </main>

      <footer className="layout-footer">
        <div className="layout-footer-inner">
          <span>
            © {new Date().getFullYear()} {name}. All rights reserved.
          </span>
          <span>Powered by Shimmer Business Showcase Platform</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

/**
 // src/Layout.jsx

import { Link, Outlet, useParams } from "react-router-dom";
import { tenants } from "./config/tenants";
import "./Layout.css"; // <-- new CSS file

const Layout = ({ HeaderRight }) => {
  const { tenantId } = useParams();
  const tenant = tenants[tenantId];

  if (!tenant) {
    return <div className="layout-tenant-not-found">Tenant not found.</div>;
  }

  const { brandColor, backgroundColor, textColor, name, logoText } = tenant;

  return (
    <div
      className="layout-root"
      style={{
        // tenant-dependent styles stay inline
        backgroundColor: backgroundColor || "#F3F4F6",
        color: textColor || "#111827",
      }}
    >
      <header className="layout-header">
        <div className="layout-header-inner">
          <div className="layout-logo-wrapper">
            <div
              className="layout-logo-circle"
              style={{ background: brandColor }}
            >
              {logoText?.[0] || name?.[0] || "B"}
            </div>
            <span className="layout-logo-text">{logoText || name}</span>
          </div>
          {/* right side content (TenantSwitcher) *
          {HeaderRight && <HeaderRight />}
        </div>

        <nav className="layout-nav">
          <div className="layout-nav-inner">
            <Link to={`/${tenantId}`} className="layout-nav-link">
              Home
            </Link>
            <Link to={`/${tenantId}/products`} className="layout-nav-link">
              Products
            </Link>
            <Link to={`/${tenantId}/about`} className="layout-nav-link">
              About
            </Link>
            <Link to={`/${tenantId}/contact`} className="layout-nav-link">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <Outlet context={{ tenant }} />
      </main>

      <footer className="layout-footer">
        <div className="layout-footer-inner">
          <span>
            © {new Date().getFullYear()} {name}. All rights reserved.
          </span>
          <span>Powered by Your Product Showcase Platform</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
 */
