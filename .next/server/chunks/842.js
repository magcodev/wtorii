"use strict";
exports.id = 842;
exports.ids = [842];
exports.modules = {

/***/ 13483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_AboutPage)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/assets/contact-us.webp
var contact_us = __webpack_require__(48100);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
;// CONCATENATED MODULE: ./src/assets/about.avif
/* harmony default export */ const about = ({"src":"/_next/static/media/about.192533ed.avif","height":780,"width":1170,"blurDataURL":"data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAADIAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAgAAAAFAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAADptZGF0EgAKCBgIvGiBAQNCMiQXwAAASXAAAjPGBwXF85CwmIe899BoChgXCc/LlTUFrJIBGmY=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/components/AboutPage.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const AboutPage = ()=>{
    const [emailSubmitted, setEmailSubmitted] = (0,react_.useState)(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: "POST",
            // Tell the server we're sending JSON.
            headers: {
                "Content-Type": "application/json"
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata
        };
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "px-5",
        style: {
            width: "70rem"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative pt-10",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "absolute z-10 inline-flex select-none px-4 py-7 text-3xl text-white uppercase",
                        style: {
                            top: -5,
                            backgroundColor: "#001F3F",
                            opacity: 0.9,
                            letterSpacing: "1rem"
                        },
                        children: "Cont\xe1ctanos"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        backgroundColor: "#E5E7E9",
                        opacity: 0.9
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-center md:w-2/3 mx-auto pt-14",
                            children: "!La casa de tus sue\xf1os a un paso"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "grid md:grid-cols-1 my-16 md:w-4/5 mx-auto gap-8",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: emailSubmitted ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-green-500 text-sm mt-2",
                                    children: "Email sent successfully!"
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    className: "flex flex-col",
                                    onSubmit: handleSubmit,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "flex flex-wrap -mx-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    class: "w-1/2 px-4 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            name: "name",
                                                            type: "name",
                                                            id: "name",
                                                            required: true,
                                                            className: "bg-[#ffffff] border border-[#b0ecca] placeholder-[#b0ecca] text-sm rounded-lg block w-full p-2.5 m-4",
                                                            placeholder: "Marlon Brando"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            name: "email",
                                                            type: "email",
                                                            id: "email",
                                                            required: true,
                                                            className: "bg-[#ffffff] border border-[#b0ecca] placeholder-[#b0ecca] text-sm rounded-lg block w-full p-2.5 m-4",
                                                            placeholder: "jacob@google.com"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            name: "telefono",
                                                            type: "telefono",
                                                            id: "telefono",
                                                            required: true,
                                                            className: "bg-[#ffffff] border border-[#b0ecca] placeholder-[#b0ecca] text-sm rounded-lg block w-full p-2.5 m-4",
                                                            placeholder: "0997654321"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                            htmlFor: "email",
                                                            className: "text-black block m-4 text-sm font-medium",
                                                            children: [
                                                                "Me interesa:",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "radiogroup",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                            type: "radio",
                                                                            id: "comprar",
                                                                            className: "radio border-[#b0ecca] mr-1",
                                                                            name: "opcion",
                                                                            value: "comprar"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                            htmlFor: "comprar",
                                                                            className: "radio-label",
                                                                            children: "comprar"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                            type: "radio",
                                                                            id: "rentar",
                                                                            className: "radio border-[#b0ecca] ml-5 mr-1",
                                                                            name: "opcion",
                                                                            value: "rentar"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                            htmlFor: "rentar",
                                                                            className: "radio-label",
                                                                            children: "rentar"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                            type: "radio",
                                                                            id: "vender",
                                                                            className: "radio border-[#b0ecca] ml-5 mr-1",
                                                                            name: "opcion",
                                                                            value: "vender"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                            htmlFor: "vender",
                                                                            className: "radio-label",
                                                                            children: "vender"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    class: "w-1/2 px-4 mb-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                        name: "message",
                                                        id: "message",
                                                        className: "bg-[#ffffff] border border-[#b0ecca] placeholder-[#b0ecca] text-sm rounded-lg block w-full p-2.5 m-4",
                                                        placeholder: "Let's talk about..."
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            className: "bg-[#d84535] bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 m-4 rounded-lg w-full",
                                            children: "Enviar"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_AboutPage = (AboutPage);


/***/ }),

/***/ 57203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\wtorii\src\components\AboutPage.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 48100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/contact-us.ed4bdf48.webp","height":540,"width":960,"blurDataURL":"data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAAAwAgCdASoIAAUAAkA4JZACdEcAAexvzesegAD+/D+wpZ8zkutjKYbB8vCn4VQDLcYcD3+VH3bKh1of6Nk3fU5LAAA=","blurWidth":8,"blurHeight":5});

/***/ })

};
;