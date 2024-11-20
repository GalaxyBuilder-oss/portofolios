import React from "react";
import Link from "next/link";
import { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Header: React.FC = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const token: string = Cookies.get("token");
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const handleLogout = () => {
    // Menghapus token dari cookies
    Cookies.remove("token");
    sessionStorage.removeItem("portofolios");
    sessionStorage.removeItem("portofolio");
    sessionStorage.removeItem("profile");

    // Redirect ke halaman login atau homepage
    router.push("/auth/login"); // Ganti dengan halaman yang diinginkan
  };

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      expanded={expanded}
      className="px-2"
    >
      <Navbar.Brand href="#">
        <span className="bold">GalaxyBuilder-Oss</span>
      </Navbar.Brand>
      <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />
      <Navbar.Collapse id="nav-collapse" className="justify-content-between">
        <Nav className="mr-auto">
          <Link href="/" passHref>
            <Nav.Link
              onClick={() => setExpanded(false)}
              disabled={isActive("/")}
            >
              Home
            </Nav.Link>
          </Link>
          <Link href="/portofolio" passHref>
            <Nav.Link
              onClick={() => setExpanded(false)}
              disabled={isActive("/portofolio")}
            >
              Portofolio
            </Nav.Link>
          </Link>
          <Link href="/about" passHref>
            <Nav.Link
              onClick={() => setExpanded(false)}
              disabled={isActive("/about")}
            >
              Tentang
            </Nav.Link>
          </Link>
          <Link href="/contact" passHref>
            <Nav.Link
              onClick={() => setExpanded(false)}
              disabled={isActive("/contact")}
            >
              Kontak
            </Nav.Link>
          </Link>
        </Nav>
        <div className="d-flex gap-2">
          <Form className="d-flex">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light" type="submit">
              Search
            </Button>
          </Form>
          <NavDropdown
            title={
              <img
                src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=1480&auto=format&fit=crop"
                alt="Avatar"
                style={{ width: "30px", borderRadius: "50%" }}
              />
            }
            className="custom-dropdown"
            id="nav-dropdown"
          >
            {token ? (
              <>
                <Link href="/profile" passHref>
                  <NavDropdown.Item onClick={() => setExpanded(false)}>
                    Profile
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Item
                  href="#"
                  onClick={() => {
                    setExpanded(false);
                    handleLogout();
                  }}
                >
                  Sign Out
                </NavDropdown.Item>
              </>
            ) : (
              <>
                <Link href="/auth/login" passHref>
                  <NavDropdown.Item onClick={() => setExpanded(false)}>
                    Masuk
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Item
                  href="/auth/register"
                  onClick={() => {
                    setExpanded(false);
                  }}
                >
                  Daftar
                </NavDropdown.Item>
              </>
            )}
          </NavDropdown>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
