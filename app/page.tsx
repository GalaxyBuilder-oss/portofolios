"use client";
import { Button, Card } from "react-bootstrap";
import Layout from "../components/Layout";
import { Typewriter } from "react-simple-typewriter";
import PortfolioSlider from "../components/PortfolioSlider";

const page = () => {
  return (
    <Layout>
      {/* Hero Section hero bg-light text-center py-5 */}
      <section
        style={{
          minHeight: "40vh",
        }}
        className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center my-3"
      >
        <div className="align-shelf-center order-md-2">
          <h1 className="display-4">Selamat Datang di Portofolio Saya!</h1>
        </div>
        <div className="d-flex flex-column order-md-1">
          <p className="lead">
            Saya Seorang{" "}
            <span style={{ color: "#333" }}>
              <Typewriter
                words={[
                  "Full Stack Engineer",
                  "Back End Engineer",
                  "Front End Engineer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>
          <Button href="/portfolio" variant="dark" size="lg" className="w-auto mx-auto mx-0">
            Lihat Portofolio
          </Button>
        </div>
      </section>

      {/* Fitur Unggulan */}
      {/* <section className="features py-5">
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
      </section> */}

      {/* Call to Action */}
      <section className="cta bg-dark text-light text-center py-5 rounded-2">
        <h2 className="text-light">Siap Membangun Proyek?</h2>
        <p>Hubungi untuk memulai proyek Anda bersama saya.</p>
        <Button variant="light" size="lg" href="/contact">
          Hubungi Saya
        </Button>
      </section>

      <section>
        <PortfolioSlider />
      </section>
    </Layout>
  );
};

export default page;
