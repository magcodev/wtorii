"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";

const NavbarWithDropdown = () => {
  return (
    <Navbar fluid rounded style={{ backgroundColor: "#e5e7e9" }}>
      <Navbar.Brand href="/">
        <Image
          width={130}
          height={100}
          style={{ paddingLeft: "1.5rem" }}
          alt="Flowbite React Logo"
          src="/images/logo.png"
        />
      </Navbar.Brand>
      <div className="">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="/"
          className="float-right"
          style={{ fontSize: 25 }}
        >
          <p>Inicio</p>
        </Navbar.Link>
        <Navbar.Link
          href="blogs"
          className="float-right"
          style={{ fontSize: 25 }}
        >
          Inmuebles
        </Navbar.Link>
        <Navbar.Link
          href="about"
          className="float-right"
          style={{ fontSize: 25 }}
        >
          Equipo
        </Navbar.Link>
        <Navbar.Link
          href="contact"
          className="float-right"
          style={{ fontSize: 25 }}
        >
          Contacto
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarWithDropdown;
