// src/product.js
// This file exports ONE object with product data that every component can import.
// We use a public folder path for the image, so no JS import is required.

const product = {
    name: "Noise-Cancelling Headphones",
    price: 199.99,
    description:
    "Over-ear wireless headphones with active noise cancellation, 30h battery, and fast charging.",
  image: "/assets/product.jpg" // place product.jpg inside public/assets
};

export default product;
