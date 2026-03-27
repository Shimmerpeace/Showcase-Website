// src/components/ProductCard/ProductCard.jsx
import "./ProductCard.css";

const ProductCard = ({ product, accentColor }) => {
  return (
    <article className="product-card">
      {product.imageUrl && (
        <div className="product-card-image-wrapper">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-card-image"
          />
        </div>
      )}

      <div className="product-card-body">
        <div className="product-card-header">
          <div>
            {product.category && (
              <span className="product-card-category">
                {product.category}
              </span>
            )}
            <h3 className="product-card-title">{product.name}</h3>
          </div>

          {product.badge && (
            <span
              className="product-card-badge"
              style={{
                backgroundColor: `${accentColor}1A`,
                color: accentColor
              }}
            >
              {product.badge}
            </span>
          )}
        </div>

        {product.description && (
          <p className="product-card-description">
            {product.description}
          </p>
        )}

        {product.tags && product.tags.length > 0 && (
          <div className="product-card-tags">
            {product.tags.map((tag) => (
              <span key={tag} className="product-card-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="product-card-footer">
          {product.priceLabel && (
            <span className="product-card-price">
              {product.priceLabel}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;