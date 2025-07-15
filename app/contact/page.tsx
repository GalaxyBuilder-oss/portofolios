"use client";
import { useState } from "react";
import {Card, Col, Container, Row} from "react-bootstrap";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Your message has been sent!");
    // Reset form
    setForm({ name: "", email: "", message: "" });
  };

  return (
      <Container className="my-5">
        {/* <h2 className="text-center mb-4">Reach Me</h2> */}

        {/* Contact form disabled, can be enabled later */}
        {/*
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="w-100">
          Send Message
        </Button>
      </Form>
      */}

        <Card className="mt-5 shadow-sm border-0">
          <Card.Body>
            <Card.Title className="text-center mb-4">Connect via Social Media</Card.Title>
            <Row className="text-center g-4">
              <Col md={4}>
                <i className="bi bi-linkedin fs-2 text-primary"></i>
                <p className="mt-2">
                  <a
                      href="https://www.linkedin.com/in/salim-hidayat-049b35293"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Salim Hidayat
                  </a>
                </p>
              </Col>
              <Col md={4}>
                <i className="bi bi-github fs-2 text-dark"></i>
                <p className="mt-2">
                  <a
                      href="https://github.com/GalaxyBuilder-Oss"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    GalaxyBuilder-Oss
                  </a>
                </p>
              </Col>
              <Col md={4}>
                <i className="bi bi-instagram fs-2 text-danger"></i>
                <p className="mt-2">
                  <a
                      href="https://instagram.com/salim_fund.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    @salim_fund.dev
                  </a>
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
  );
};

export default Contact;
