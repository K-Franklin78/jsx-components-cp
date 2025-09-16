// Root component: composes the small components into a Bootstrap Card.
// Also shows a greeting with conditional image.

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

// Change this to your name to see the avatar appear.
const firstName = "K-Franklin"; // e.g., "Hassan"

export default function App() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          {/* Semantic Card composition */}
          <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
            {/* Semantic image piece */}
            <Image />

            {/* Semantic body */}
            <Card.Body>
              {/* Semantic title + price aligned */}
              <Card.Title className="d-flex justify-content-between align-items-center">
                <strong><Name /></strong>
                <span className="text-primary fw-bold">
                  <Price />
                </span>
              </Card.Title>

              {/* Semantic text */}
              <Card.Text>
                <Description />
              </Card.Text>

              <div className="d-flex gap-2">
                <Button variant="primary">Add to Cart</Button>
                <Button variant="outline-secondary">Details</Button>
              </div>
            </Card.Body>
          </Card>

          {/* Greeting below the card */}
          <div className="text-center mt-4">
            <h4>Hello, {firstName ? firstName : "there"}!</h4>

            {/* Show an avatar only if firstName is provided */}
            {firstName && (
              <img
                src="/assets/avatar.png"      // put avatar.png in public/assets
                alt={`${firstName} avatar`}
                style={{ width: 80, height: 80, borderRadius: "50%", marginTop: 8 }}
              />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
