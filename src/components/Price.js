// src/components/Price.js
// Renders the product price (formatted)
import product from "../product";

// Renders a formatted price
export default function Price() {
    const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(product.price);
    return <span>{formatted}</span>;
}
