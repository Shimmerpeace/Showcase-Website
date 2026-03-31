 <h1>Shimmer Business Showcase Platform<hr/>
 <p>This app is a sleek, multi-tenant product showcase platform for small businesses — each tenant gets its own branded website, grouped by business type, with dedicated pages and a personalized header experience.</p>

---

## Table of Contents

- [About the Project](#about-the-project)
- [Core Features](#core-features)
- [How It Works](#how-it-works)
- [Tenant Structure](#tenant-structure)
- [Routes](#routes)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Roadmap](#roadmap)
- [License](#license)

---

## About the Project

Shimmer Business Showcase Platform is a frontend platform designed to generate personalized product showcase websites for small businesses. 
Instead of building a separate site from scratch for every business, each business is defined as a tenant in a single configuration file and instantly get a branded, route-based website for it.

The app is built to feel like a real product, not just a demo. 
It includes a sticky header, tenant switcher, grouped tenants, dynamic pages, responsive cards, and a clean visual hierarchy that works well for portfolios and client presentations.

---

## Core Features

- Multi-tenant architecture for multiple businesses in one app.
- Grouped tenants such as Food, Tech, other categories.
- Personalized branding per tenant, including colors, logo text, and hero content.
- Sticky top header with a tenant switcher.
- Dedicated router pages per tenant:
  - Home
  - Products
  - About
  - Contact
- Dynamic URL support using React Router.
- Responsive product/service showcase cards.
- Clean, modern, portfolio-ready UI.

---

## How It Works

Each business is stored as a tenant object inside `src/config/tenants.js`. 
A tenant includes its own brand colors, hero section, about text, products, contact details, and group name.

The app reads the active tenant from the URL, then renders the matching layout and pages for that business. 
The tenant switcher lets you jump between businesses, while the router handles each tenant’s internal pages like a standalone website.

This setup makes the app easy to scale because new businesses can be added by editing configuration instead of duplicating components.

---

## Tenant Structure

Each tenant follows a structure like this:

<code>
"zella-bakery": {
    id: "zella-bakery",
    name: "Zella Bakery",
    group: "Food",
    logoText: "...",
    brandColor: "#E27D60",
    accentColor: "#85DCB0",
    textColor: "#1F2933",
    backgroundColor: "#FFF9F5",
    hero: {
      heading: "Freshly Baked, Every Morning",
      subheading: "...",
      ctaLabel: "View Today’s Specials",
      imageUrl: "..."
    },
  about: {
    title: "About Zella Bakery",
    body: "..."
  },
  products: [...],
  contact: {...},
  social: {...}
}
</code>

The `group` field allows tenants to be organized into categories like:

- Food
- Tech
- Health Care
- Real Estate
- Transportation
- Fashion
- Beauty


---

## Routes

Each tenant has its own route-based website structure:

- `/:tenantId` → Home page
- `/:tenantId/products` → Products page
- `/:tenantId/about` → About page
- `/:tenantId/contact` → Contact page

### Example

- `/zella-bakery`
- `/zella-bakery/products`
- `/zee-digital`
- `/zee-digital/contact`

This makes each tenant feel like a separate branded website while still sharing the same codebase.

---

## Tech Stack

- React
- Vite
- React Router DOM
- Inline component-based styling
- JavaScript

Upgrades to be later added if possible:

- Tailwind CSS
- TypeScript
- Framer Motion
- Headless CMS
- Firebase or Supabase backend
- Admin dashboard for tenant management

---

## Project Structure

  📦src
 ┣ 📂assets
 ┃ ┣ 📜backery.jpg
 ┃ ┣ 📜consultation.jpg
 ┃ ┣ 📜croissant.jpg
 ┃ ┣ 📜customcake.jpg
 ┃ ┣ 📜delivery1.jpg
 ┃ ┣ 📜delivery2.jpg
 ┃ ┣ 📜delivery3.jpg
 ┃ ┣ 📜delivery4.jpg
 ┃ ┣ 📜dreamHouse.jpg
 ┃ ┣ 📜familyCare.jpg
 ┃ ┣ 📜gardenHome.jpg
 ┃ ┣ 📜healthScreen.jpg
 ┃ ┣ 📜IMG.jpg
 ┃ ┣ 📜mealPlan.jpg
 ┃ ┣ 📜salesFunnel.jpg
 ┃ ┣ 📜sourdough.jpg
 ┃ ┣ 📜starterPackage.jpg
 ┃ ┣ 📜studioCondo.jpg
 ┃ ┣ 📜twoBedroom.jpg
 ┃ ┣ 📜webBusiness.jpg
 ┃ ┗ 📜webCare.jpg
 ┣ 📂components
 ┃ ┣ 📂AboutSection
 ┃ ┃ ┣ 📜AboutSection.css
 ┃ ┃ ┗ 📜AboutSection.jsx
 ┃ ┣ 📂ContactSection
 ┃ ┃ ┣ 📜ContactSection.css
 ┃ ┃ ┗ 📜ContactSection.jsx
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜Footer.css
 ┃ ┃ ┗ 📜Footer.jsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.css
 ┃ ┃ ┗ 📜Header.jsx
 ┃ ┣ 📂HeroSection
 ┃ ┃ ┣ 📜HeroSection.css
 ┃ ┃ ┗ 📜HeroSection.jsx
 ┃ ┣ 📂ProductCard
 ┃ ┃ ┣ 📜ProductCard.css
 ┃ ┃ ┗ 📜ProductCard.jsx
 ┃ ┣ 📂ProductGrid
 ┃ ┃ ┣ 📜ProductGrid.css
 ┃ ┃ ┗ 📜ProductGrid.jsx
 ┃ ┗ 📂TenantSwitcher
 ┃ ┃ ┣ 📜TenantSwitcher.css
 ┃ ┃ ┗ 📜TenantSwitcher.jsx
 ┣ 📂config
 ┃ ┗ 📜tenants.js
 ┣ 📂pages
 ┃ ┣ 📜TenantAboutPage.jsx
 ┃ ┣ 📜TenantContactPage.jsx
 ┃ ┣ 📜TenantHomePage.jsx
 ┃ ┗ 📜TenantProductsPage.jsx
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┣ 📜Layout.css
 ┣ 📜Layout.jsx
 ┗ 📜main.jsx

---

## Getting Started

### 1. Clone the repository

<code>
git clone https://github.com/Shimmerpeace/Showcase-Website.git
cd frontend
</code>

### 2. Install dependencies

<code>
npm install
</code>

### 3. Run the development server

<code>
npm run dev
</code>

### 4. Open the app

<code>
http://localhost:5173
</code>

You can navigate directly to a tenant route such as:

<code>
http://localhost:5173/zella-bakery
http://localhost:5173/zee-digital
</code>

---

## Customization

### Add a new tenant

Open `src/config/tenants.js` and add a new tenant object:

<code>
"green-garden": {
  id: "green-garden",
  name: "Green Garden",
  group: "Food",
  brandColor: "#22C55E",
  accentColor: "#16A34A",
  textColor: "#0F172A",
  backgroundColor: "#F8FFF8",
  hero: {
    heading: "Fresh produce for healthy living",
    subheading: "..."
  },
  about: {
    title: "About Green Garden",
    body: "..."
  },
  products: [],
  contact: {},
  social: {}
}
</code>

### Change the tenant group order

Update the `tenantGroups` object in `tenants.js` if you want custom ordering in the switcher:

<code>
export const tenantGroups = {
  Food: "Food",
  Tech: "Tech",
  "Health Care": "Health Care",
  "Real Estate": "Real Estate",
  Transportation: "Transportation",
};
</code>

### Update branding

Each tenant can have its own:

- Colors
- Hero image
- Headline
- Product list
- Contact details
- Social links

---

## Roadmap

- Add editable admin dashboard for tenants.
- Allow tenants to upload their own logo and images.
- Add CMS integration for product and content management.
- Add search and filtering for products.
- Add animations and page transitions.
- Support custom domains for each business.
- Add authentication for business owners.

---

## Why This Project Stands Out

<p>This project is more than a UI demo. 
<br/>
It shows that you can build scalable frontend systems with reusable components, route-based layouts, and data-driven design.</p>

<p>It demonstrates:
<ul>
<li> Real-world multi-tenant thinking.</li>
<li> Clean component architecture.</li>
<li> Practical React Router usage.</li>
<li> A polished user experience.</li>
<li> Strong portfolio presentation.</li>
</ul>
</p>
---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Author

Built by Peace Efeh Ogbata 
Frontend developer focused on React, CSS and modern web experiences.