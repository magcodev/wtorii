"use client";
import React, { useState } from "react";
import GithubIcon from "@/assets/contact-us.webp";
import LinkedinIcon from "@/assets/contact-us.webp";
import Link from "next/link";
import Image from "next/image";
import AboutImg from "@/assets/about.avif";

const AboutPage = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <div className="px-5" style={{width:'70rem'}}>
      <div className="relative pt-10">
        <div className="flex justify-center">
          <span
            className="absolute z-10 inline-flex select-none px-4 py-7 text-3xl text-white uppercase"
            style={{
              top: -5,
              backgroundColor: "#001F3F",
              opacity: 0.9,
              letterSpacing: "1rem",
            }}
          >
            Contáctanos
          </span>
        </div>
        <div
          style={{
            backgroundColor: "#E5E7E9",
            opacity: 0.9,
          }}
        >
          <p className="text-center md:w-2/3 mx-auto pt-14">
            !La casa de tus sueños a un paso
          </p>
          {/* About container */}
          <div className="grid md:grid-cols-1 my-16 md:w-4/5 mx-auto gap-8">
            <div>
              {emailSubmitted ? (
                <p className="text-green-500 text-sm mt-2">
                  Email sent successfully!
                </p>
              ) : (
                <form className="flex flex-col" onSubmit={handleSubmit}>
                  <div class="flex flex-wrap -mx-4">
                    <div class="w-1/2 px-4 mb-4">
                      <input
                        name="name"
                        type="name"
                        id="name"
                        required
                        className="bg-[#ffffff] border border-[#b0ecca] placeholder-[#b0ecca] text-sm rounded-lg block w-full p-2.5 m-4"
                        placeholder="Marlon Brando"
                      />

                      <input
                        name="email"
                        type="email"
                        id="email"
                        required
                        className="bg-[#ffffff] border border-[#b0ecca] placeholder-[#b0ecca] text-sm rounded-lg block w-full p-2.5 m-4"
                        placeholder="jacob@google.com"
                      />

                      <input
                        name="telefono"
                        type="telefono"
                        id="telefono"
                        required
                        className="bg-[#ffffff] border border-[#b0ecca] placeholder-[#b0ecca] text-sm rounded-lg block w-full p-2.5 m-4"
                        placeholder="0997654321"
                      />

                      <label
                        htmlFor="email"
                        className="text-black block m-4 text-sm font-medium"
                      >
                        Me interesa:
                        <div className="radiogroup">
                          <input
                            type="radio"
                            id="comprar"
                            className="radio border-[#b0ecca] mr-1"
                            name="opcion"
                            value="comprar"
                          />
                          <label htmlFor="comprar" className="radio-label">
                            comprar
                          </label>

                          <input
                            type="radio"
                            id="rentar"
                            className="radio border-[#b0ecca] ml-5 mr-1"
                            name="opcion"
                            value="rentar"
                          />
                          <label htmlFor="rentar" className="radio-label">
                            rentar
                          </label>

                          <input
                            type="radio"
                            id="vender"
                            className="radio border-[#b0ecca] ml-5 mr-1"
                            name="opcion"
                            value="vender"
                          />
                          <label htmlFor="vender" className="radio-label">
                            vender
                          </label>
                        </div>
                      </label>
                    </div>
                    <div class="w-1/2 px-4 mb-4">
                      <textarea
                        name="message"
                        id="message"
                        className="bg-[#ffffff] border border-[#b0ecca] placeholder-[#b0ecca] text-sm rounded-lg block w-full p-2.5 m-4"
                        placeholder="Let's talk about..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#d84535] bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 m-4 rounded-lg w-full"
                  >
                    Enviar
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
