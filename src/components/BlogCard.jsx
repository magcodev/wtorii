"use client";

import { Card } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
// import Image from "next/image";

const BlogCard = ({ blog }) => {
  const {
    title,
    direccion,
    image,
    id,
    type,
    value,
    mes,
    rooms,
    baths,
    floors,
    metters,
    garage,
  } = blog;
  // console.log(blog);
  return (
    <Card imgAlt="" imgSrc={image}>
      <div className="relative">
        {" "}
        {/* Agrega la clase "relative" al contenedor principal */}
        <span
          className="absolute left-0 z-10 ml-1 inline-flex select-none  px-3 py-2 text-sm font-medium text-white"
          style={{
            left: -28,
            top: -60,
            backgroundColor: "#2cad61",
            opacity: 0.9,
          }}
        >
          {type}
        </span>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>{title}</p>
        </h5>
        <h5 className="mt-5 tracking-tight text-gray-600 dark:text-white">
          <p>{direccion}</p>
        </h5>
        <h5 className="mt-1 tracking-tight font-bold text-gray-900 dark:text-white">
          <p>
            $ {value}
            {mes}
          </p>
        </h5>
        <hr className="ml-6 mr-6 mt-3" height="1" />
        <p className="flex mt-5 font-normal text-gray-700 dark:text-gray-400 ">
          <div className="w-1/5 items-center text-center">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 640 512"
              >
                <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
              </svg>
            </div>
            <div className="" style={{fontSize:'0.5rem'}}>dormitorio</div>
            <div className="text-center">{rooms}</div>
          </div>
          <div className="w-1/5 items-center text-center">
            <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z"/></svg>
            </div>
            <div className="" style={{fontSize:'0.5rem'}}>baños</div>
            <div className="text-center">{baths}</div>
          </div>
          <div className="w-1/5 items-center text-center">
            <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24H568c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32V488c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm488 24l-336 0c-13.3 0-24-10.7-24-24V432H512l0 56c0 13.3-10.7 24-24 24zM128 400V336H512v64H128zm0-96V224H512l0 80H128z"/></svg>
            </div>
            <div className="" style={{fontSize:'0.5rem'}}>pisos</div>
            <div className="text-center">{floors}</div>
          </div>
          <div className="w-1/5 items-center text-center">
            <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M.2 468.9C2.7 493.1 23.1 512 48 512l96 0 320 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-48c0-26.5-21.5-48-48-48L48 0C21.5 0 0 21.5 0 48L0 368l0 96c0 1.7 .1 3.3 .2 4.9z"/></svg>
            </div>
            <div className="" style={{fontSize:'0.5rem'}}>mt2</div>
            <div className="text-center">{metters}</div>
          </div>
          <div className="w-1/5 items-center text-center">
            <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
            </div>
            <div className="" style={{fontSize:'0.5rem'}}>garage</div>
            <div className="text-center">{garage}</div>
          </div>
        </p>
        {/* <Link href={`/blogs/${id}`}>
          <button className="btn hover:bg-indigo-700 hover:text-white">
            Read More
          </button>
        </Link> */}
      </div>
    </Card>
  );
};

export default BlogCard;
