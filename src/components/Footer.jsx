"use client";
import Image from "next/image";
import { Footer } from "flowbite-react";
import icon from "@/assets/img/Logo_icon.png";
import logo from "@/assets/img/Logo_Verde_gris_sinfondo.png";

const DefaultFooter = () => {
  return (
    <Footer
      container
      className="text-slate-800"
      style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}
    >
      <div class="footer-container">
      <div
          class="footer-top"
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingBottom: "13rem",
            backgroundColor: "#001f3f",
            height: "12rem",
          }}
        >
          <div className="left">
            <Image src={logo} width={200} height={200} alt="Icon" />
          </div>
          <div className="right" style={{color:"white",display:"grid",height:"100%"}}>
            <Footer.LinkGroup className="" style={{display:"grid",height:"13rem",marginTop:"1rem",color:"white"}}>
            <Footer.Link href="#" className="flex" >
              Inicio
            </Footer.Link>
            <Footer.Link href="about" className="flex">
              Contacto
            </Footer.Link>
            <Footer.Link href="contact" className="flex">
              Equipo
            </Footer.Link>
            <Footer.Link href="blogs" className="flex">
              Inmuebles
            </Footer.Link>
          </Footer.LinkGroup>
          </div>

        </div>

        <div
          className="footer-bottom"
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            backgroundColor: "#e5e7e9",
          }}
        >
          <div
            className="left flex"
            style={{
              justifyContent: "center",
              alignItems: "center",
              color: "gray",
              fontStyle: "oblique",
            }}
          >
            Powered by <Image src={icon} width={60} height={60} alt="Icon" />
          </div>
          <div
            className="right flex"
            style={{
              justifyContent: "center",
              alignItems: "center",
              color: "gray",
              fontStyle: "oblique",
              height: "3.5rem",
              fontSize: "0.8rem",
            }}
          >
            {" "}
            copyright © 2023 Icon Estudio Creativo. Todos los derechos
            reservados
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default DefaultFooter;
