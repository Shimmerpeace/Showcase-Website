// src/components/ProductGrid/ProductGrid.jsx
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

const ProductGrid = ({ tenant }) => {
  const { products = [], accentColor } = tenant;

  if (!products.length) return null;

  return (
    <section className="product-grid">
      <div className="product-grid-inner">
        <div className="product-grid-header">
          <div>
            <h2 className="product-grid-title">
              Featured Products & Services
            </h2>
            <p className="product-grid-subtitle">
              Browse the key offerings from this business.
            </p>
          </div>
        </div>

        <div className="product-grid-list">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              accentColor={accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;