(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{9697:function(e,t,s){Promise.resolve().then(s.t.bind(s,3222,23)),Promise.resolve().then(s.bind(s,1346)),Promise.resolve().then(s.bind(s,9493))},1295:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return c},unstable_getImgProps:function(){return i}});let r=s(1024),a=s(2301),l=s(7873),n=s(3222),o=r._(s(5033)),i=e=>{(0,l.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}},c=n.Image},1346:function(e,t,s){"use strict";s.r(t);var r=s(7437),a=s(2265),l=s(9493),n=s(1396),o=s.n(n),i=s(6691),c=s.n(i);t.default=()=>{let[e,t]=(0,a.useState)(!1),s=async e=>{e.preventDefault();let s={email:e.target.email.value,subject:e.target.subject.value,message:e.target.message.value},r=JSON.stringify(s),a=await fetch("/api/send",{method:"POST",headers:{"Content-Type":"application/json"},body:r});await a.json(),200===a.status&&(console.log("Message sent."),t(!0))};return(0,r.jsxs)("section",{id:"contact",className:"grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative",children:[(0,r.jsx)("div",{className:"bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"}),(0,r.jsxs)("div",{className:"z-10",children:[(0,r.jsx)("h5",{className:"text-xl font-bold text-white my-2",children:"Let`'s Connect"}),(0,r.jsxs)("p",{className:"text-[#ADB7BE] mb-4 max-w-md",children:[" ","I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"]}),(0,r.jsxs)("div",{className:"socials flex flex-row gap-2",children:[(0,r.jsx)(o(),{href:"github.com",children:(0,r.jsx)(c(),{src:l.default,alt:"Github Icon"})}),(0,r.jsx)(o(),{href:"linkedin.com",children:(0,r.jsx)(c(),{src:l.default,alt:"Linkedin Icon"})})]})]}),(0,r.jsx)("div",{children:e?(0,r.jsx)("p",{className:"text-green-500 text-sm mt-2",children:"Email sent successfully!"}):(0,r.jsxs)("form",{className:"flex flex-col",onSubmit:s,children:[(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsx)("label",{htmlFor:"email",className:"text-white block mb-2 text-sm font-medium",children:"Your email"}),(0,r.jsx)("input",{name:"email",type:"email",id:"email",required:!0,className:"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5",placeholder:"jacob@google.com"})]}),(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsx)("label",{htmlFor:"subject",className:"text-white block text-sm mb-2 font-medium",children:"Subject"}),(0,r.jsx)("input",{name:"subject",type:"text",id:"subject",required:!0,className:"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5",placeholder:"Just saying hi"})]}),(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsx)("label",{htmlFor:"message",className:"text-white block text-sm mb-2 font-medium",children:"Message"}),(0,r.jsx)("textarea",{name:"message",id:"message",className:"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5",placeholder:"Let's talk about..."})]}),(0,r.jsx)("button",{type:"submit",className:"bg-primary-500 hover:bg-primary-600 text-dark font-medium py-2.5 px-5 rounded-lg w-full",children:"Send Message"})]})})]})}},9493:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/contact-us.ed4bdf48.webp",height:540,width:960,blurDataURL:"data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAAAwAgCdASoIAAUAAkA4JZACdEcAAexvzesegAD+/D+wpZ8zkutjKYbB8vCn4VQDLcYcD3+VH3bKh1of6Nk3fU5LAAA=",blurWidth:8,blurHeight:5}},622:function(e,t,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=s(2265),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var r,l={},c=null,d=null;for(r in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)n.call(t,r)&&!i.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:d,props:l,_owner:o.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},7437:function(e,t,s){"use strict";e.exports=s(622)},6691:function(e,t,s){e.exports=s(1295)},1396:function(e,t,s){e.exports=s(6685)}},function(e){e.O(0,[685,222,971,596,744],function(){return e(e.s=9697)}),_N_E=e.O()}]);