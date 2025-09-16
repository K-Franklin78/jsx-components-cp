import { Card } from "react-bootstrap";
import product from "../product";

// Renders the product image using the semantic Card.Img (variant="top")
export default function Image() {
    return (
        <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        style={{ objectFit: "cover", maxHeight: 260 }}
        />
    );
}
