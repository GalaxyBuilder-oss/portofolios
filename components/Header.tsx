"use client";
import Cookies from "js-cookie";
import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();
  const token = Cookies.get("token");
  const [expanded, setExpanded] = useState(false);
  const urlPath = usePathname();
  const isActive: (pathname: string) => boolean = (pathname) =>
    urlPath === pathname;

  const handleLogout = () => {
    // Menghapus token dari cookies
    Cookies.remove("token");
    sessionStorage.removeItem("portofolios");
    sessionStorage.removeItem("portofolio");
    sessionStorage.removeItem("profile");

    // Redirect ke halaman login atau homepage
    router?.push("/auth/login"); // Ganti dengan halaman yang diinginkan
  };

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      expanded={expanded}
      className="px-2 text-light normal"
    >
      <Navbar.Brand href="/">
        <span className="fw-bold font-monospace px-4 px-sm-2">@GalaxyBuilder-Oss</span>
      </Navbar.Brand>
      <Navbar.Toggle onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse
        id="nav-collapse"
        className="justify-content-between align-items-center"
      >
        <Nav className="mr-auto px-4 px-sm-2">
          <Nav.Link
            href="/"
            onClick={() => setExpanded(false)}
            active={isActive("/")}
            className={`text-light text-decoration-none ${isActive("/") && "border-bottom border-white border-2 rounded"}`}
          >
            Home
          </Nav.Link>
          {/* <Nav.Link
            href="/portfolio"
            onClick={() => setExpanded(false)}
            active={isActive("/portfolio")}
            className={`text-light text-decoration-none ${isActive("/portfolio") && "border-bottom border-white border-2 rounded"}`}
          >
            Portfolio
          </Nav.Link> */}
          <Nav.Link
            href="/about"
            onClick={() => setExpanded(false)}
            active={isActive("/about")}
            className={`text-light text-decoration-none ${isActive("/about") && "border-bottom border-white border-2 rounded"}`}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="/cv"
            onClick={() => setExpanded(false)}
            active={isActive("/cv")}
            className={`text-light text-decoration-none ${isActive("/cv") && "border-bottom border-white border-2 rounded"}`}
          >
            CV / Resume
          </Nav.Link>
          <Nav.Link
            href="/contact"
            onClick={() => setExpanded(false)}
            active={isActive("/contact")}
            className={`text-light text-decoration-none ${isActive("/contact") && "border-bottom border-white border-2 rounded"}`}
          >
            Contact
          </Nav.Link>
        </Nav>
        <div className="d-none gap-2">
          <Form className="d-flex gap-2">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light" type="submit">
              Search
            </Button>
          </Form>
          {/* <NavDropdown
            title={
              <img
                src="https://portofolio2024.s3.ap-southeast-1.amazonaws.com/default_profile_photo.jpg"
                alt="Avatar"
                style={{ width: "38px", borderRadius: "50%" }}
              />
            }
            className="custom-dropdown"
            id="nav-dropdown"
            align="end"
          >
            {token ? (
              <>
                <NavDropdown.Item
                  href="/profile"
                  onClick={() => setExpanded(false)}
                  className="text-light text-decoration-none"
                >
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  // href="#"
                  onClick={() => {
                    setExpanded(false);
                    handleLogout();
                  }}
                  className="text-light text-decoration-none"
                >
                  Sign Out
                </NavDropdown.Item>
              </>
            ) : (
              <>
                <NavDropdown.Item
                  href="/auth/login"
                  onClick={() => setExpanded(false)}
                  className="text-light text-decoration-none"
                >
                  Login
                </NavDropdown.Item>
              </>
            )}
          </NavDropdown> */}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
