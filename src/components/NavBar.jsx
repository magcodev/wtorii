"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";

export default function NavbarWithDropdown() {
  
  return (
    <Navbar fluid rounded style={{backgroundColor:"#e5e7e9"}}>
      <Navbar.Brand href="/">
        <Image
          width={130}
          height={100}
          style={{ paddingLeft: "1.5rem" }}
          alt="Flowbite React Logo"
          // className="mr-3 h-6 sm:h-9"
          src="/images/logo.png"
        />
      </Navbar.Brand>
      <div className="">
        {/* <Dropdown
          inline
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Bonnie Green
            </span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            Earnings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="/" className="float-right" style={{fontSize:25}}>
          <p>Inicio</p>
        </Navbar.Link>
        <Navbar.Link href="blogs" className="float-right" style={{fontSize:25}}>
          Inmuebles
        </Navbar.Link>
        <Navbar.Link href="about" className="float-right" style={{fontSize:25}}>
          Equipo
        </Navbar.Link>
        <Navbar.Link href="contact" className="float-right" style={{fontSize:25}}>
          Contacto
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
