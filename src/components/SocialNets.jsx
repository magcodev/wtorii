"use client";

import Image from "next/image";
import React from "react";
import youtube from "@/assets/img/youtube.png";
import instagram from "@/assets/img/instagram.png";
import whatsapp from "@/assets/img/whatsapp.png";
import facebook from "@/assets/img/facebook.png";

const SocialNets = async () => {
  const handleClickInst = () => {
    window.open("https://instagram.com/torii.ec", "_blank");
  };

  const handleClickWhat = () => {
    window.open(
      "https://api.whatsapp.com/message/VXMZKNL3ULSXC1?autoload=1&app_absent=0",
      "_blank"
    );
  };
  const handleClickFace = () => {
    window.open("https://www.facebook.com/torii.ec", "_blank");
  };
  const handleClickYout = () => {
    window.open(
      "https://api.whatsapp.com/message/VXMZKNL3ULSXC1?autoload=1&app_absent=0",
      "_blank"
    );
  };

  return (
    <div className="px-1 my-1 " style={{ marginLeft: "4rem" }}>
      <div className="flex space-x-4 ">
        {/* Ejemplo de un icono con una imagen */}
        <div className="cursor-pointer">
          <Image
            src={instagram}
            width={80}
            height={80}
            alt="Instagram"
            onClick={handleClickInst}
          />
        </div>
        <div className="cursor-pointer">
          <Image
            src={whatsapp}
            width={80}
            height={80}
            alt="Whatsapp"
            onClick={handleClickWhat}
          />
        </div>
        <div className="cursor-pointer">
          <Image
            src={facebook}
            width={80}
            height={80}
            alt="Facebook"
            onClick={handleClickFace}
          />
        </div>
        <div className="cursor-pointer">
          <Image
            src={youtube}
            width={80}
            height={80}
            alt="Youtube"
            onClick={handleClickYout}
          />
        </div>

        {/* Ejemplo de un icono con fondo de imagen */}
        <div
          className="w-8 h-8 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: "url(/assets/icono2.png)" }}
        ></div>

        {/* Puedes continuar agregando más iconos */}
      </div>
    </div>
  );
};

export default SocialNets;
