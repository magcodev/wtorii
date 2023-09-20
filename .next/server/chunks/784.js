exports.id = 784;
exports.ids = [784];
exports.modules = {

/***/ 6732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3773);
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flowbite_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


// import Image from "next/image";
const BlogCard = ({ blog })=>{
    const { title, description, image, id } = blog;
    // console.log(blog);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
        imgAlt: "",
        imgSrc: image,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: "text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "font-normal text-gray-700 dark:text-gray-400",
                children: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: `/blogs/${id}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "btn hover:bg-indigo-700 hover:text-white",
                    children: "Read More"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCard);


/***/ }),

/***/ 2835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_BlogPage)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/utilities/loadAllBlogs.js
const loadAllBlogs = async ()=>{
    // const res = await fetch("http://localhost:5000/blogs", {
    //     cache: 'no-cache'
    // });
    // console.log(res, "Hello from");
    // return res.json();
    const resp = {
        "blogs": [
            {
                "id": 1,
                "title": "Breaking News: Earthquake Hits City",
                "categoryId": 1,
                "category": "Natural Disasters",
                "date": "2023-07-15",
                "description": "A powerful earthquake measuring 7.2 on the Richter scale struck the city today, causing significant damage to buildings and infrastructure. Rescue and relief operations are underway.",
                "source": "Example News Network",
                "image": "https://images.unsplash.com/photo-1638890816065-9019f9f49238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
                "id": 2,
                "title": "New Study Shows Benefits of Exercise",
                "categoryId": 2,
                "category": "Health",
                "date": "2023-07-14",
                "description": "A recent study published in a scientific journal reveals the numerous health benefits of regular exercise, including improved cardiovascular health, reduced risk of chronic diseases, and enhanced mental well-being.",
                "source": "Example Health Magazine",
                "image": "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            },
            {
                "id": 3,
                "title": "World Leaders Gather for Climate Summit",
                "categoryId": 3,
                "category": "Environment",
                "date": "2023-07-13",
                "description": "Global leaders from around the world convened in a major summit to discuss climate change and environmental sustainability. The summit aims to address pressing issues and develop strategies for mitigating the impact of climate change.",
                "source": "Example News Agency",
                "image": "https://images.unsplash.com/photo-1552799446-159ba9523315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
                "id": 4,
                "title": "Tech Company Unveils Revolutionary Product",
                "categoryId": 4,
                "category": "Technology",
                "date": "2023-07-12",
                "description": "A leading tech company announced the launch of a groundbreaking product that promises to revolutionize the industry. The product offers cutting-edge features and advanced functionality, setting a new standard for innovation.",
                "source": "Example Tech News",
                "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
                "id": 5,
                "title": "Election Results: New President Elected",
                "categoryId": 5,
                "category": "Politics",
                "date": "2023-07-11",
                "description": "The election results are in, and the country has elected a new president. The new leader is expected to bring about significant changes and address key issues facing the nation.",
                "source": "Example Politics Gazette",
                "image": "https://images.unsplash.com/photo-1592036160420-8e862f871b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
                "id": 6,
                "title": "Study Finds Link Between Diet and Heart Health",
                "categoryId": 2,
                "category": "Health",
                "date": "2023-07-10",
                "description": "A recent study conducted by experts in the field reveals a strong link between diet and heart health. The findings emphasize the importance of a balanced diet in maintaining cardiovascular well-being.",
                "source": "Example Health Institute",
                "image": "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            },
            {
                "id": 7,
                "title": "New Sports Stadium to be Constructed",
                "categoryId": 1,
                "category": "Sports",
                "date": "2023-07-09",
                "description": "The city council has announced plans to build a state-of-the-art sports stadium to host major sporting events. The new facility is expected to attract both local and international teams and boost the economy.",
                "source": "Example Sports Tribune",
                "image": "https://images.unsplash.com/photo-1590372447928-33080a2b401a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            },
            {
                "id": 8,
                "title": "Major Education Reforms Proposed",
                "categoryId": 1,
                "category": "Education",
                "date": "2023-07-08",
                "description": "The Ministry of Education has unveiled a comprehensive set of reforms aimed at improving the education system. The proposed changes include curriculum enhancements, teacher training programs, and increased funding for schools.",
                "source": "Example Education Journal",
                "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
                "id": 9,
                "title": "Company X Announces Record Profits",
                "categoryId": 1,
                "category": "Business",
                "date": "2023-07-07",
                "description": "Company X, a leading global corporation, has reported record-breaking profits for the fiscal year. The impressive financial performance is attributed to successful product launches, expanded market reach, and cost-saving measures.",
                "source": "Example Business Daily",
                "image": "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            }
        ]
    };
    return resp.blogs;
};
/* harmony default export */ const utilities_loadAllBlogs = (loadAllBlogs);

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/BlogCard.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\wtorii\src\components\BlogCard.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const BlogCard = (__default__);
;// CONCATENATED MODULE: ./src/components/BlogPage.jsx



const BlogPage = async ()=>{
    const blogs = await utilities_loadAllBlogs();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "my-24 px-5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-center text-5xl font-bold mb-10",
                children: "Popular Blogs"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-center md:w-2/3 mx-auto",
                children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, modi! Architecto cum excepturi non obcaecati qui laboriosam facilis a quisquam harum nulla reprehenderit ratione praesentium laborum corporis, unde ex vero!"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid md:grid-cols-3 gap-5 mt-20",
                children: blogs.slice(0, 6).map((blog)=>/*#__PURE__*/ jsx_runtime_.jsx(BlogCard, {
                        blog: blog
                    }, blog.id))
            })
        ]
    });
};
/* harmony default export */ const components_BlogPage = (BlogPage);


/***/ }),

/***/ 1440:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(954)


/***/ })

};
;