"use client";
import { Button, Card } from "react-bootstrap";
import Layout from "../components/Layout";

const page = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero bg-light text-center py-5">
        <h1 className="display-4">Selamat Datang di Portofolio Saya!</h1>
        <p className="lead">
          Saya menyediakan layanan terbaik untuk kebutuhan digital Anda.
        </p>
        <Button href="/portfolio" variant="dark" size="lg">
          Lihat Portofolio
        </Button>
      </section>

      {/* Fitur Unggulan */}
      <section className="features py-5">
        <div className="container">
          <h2 className="text-center mb-4">Fitur Unggulan</h2>
          <div className="row gap-4 gap-xl-0">
            <div className="col-md-4">
              <Card className="text-center pt-2">
                <Card.Title>Desain Responsif</Card.Title>
                <Card.Body>
                  <i
                    className="bi bi-tablet-landscape"
                    style={{ fontSize: "4rem" }}
                  ></i>
                  <p>
                    Desain yang responsif dan dapat diakses di berbagai
                    perangkat.
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="text-center pt-2">
                <Card.Title>Keamanan Terjamin</Card.Title>
                <Card.Body>
                  <i
                    className="bi bi-shield-lock"
                    style={{ fontSize: "4rem" }}
                  ></i>
                  <p>
                    Keamanan data dan informasi Anda menjadi prioritas utama
                    kami.
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="text-center pt-2">
                <Card.Title>Mudah Digunakan</Card.Title>
                <Card.Body>
                  <i className="bi bi-gear" style={{ fontSize: "4rem" }}></i>
                  <p>Antarmuka yang mudah digunakan untuk kenyamanan Anda.</p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta bg-dark text-light text-center py-5 rounded-2">
        <h2 className="text-light">Siap Membangun Proyek Anda?</h2>
        <p>Hubungi saya sekarang untuk memulai proyek Anda bersama saya.</p>
        <Button variant="light" size="lg" href="/contact">
          Hubungi Saya
        </Button>
      </section>
    </Layout>
  );
};

export default page;
