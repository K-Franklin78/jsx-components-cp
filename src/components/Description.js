// src/components/Description.js
// Renders the product description
import product from "../product";

export default function Description() {
    return <p className="mb-0">{product.description}</p>;
}
