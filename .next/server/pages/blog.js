"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 5705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blog),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);





// The Blog Page Content
function Blog({ posts  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        children: posts.map((post)=>{
            //extract slug and frontmatter
            const { slug , frontmatter  } = post;
            //extract frontmatter properties
            const { title , annotation , category , date , bannerImage , tags  } = frontmatter;
            //JSX for individual blog listing
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        href: `/posts/${slug}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: annotation
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: date
                    })
                ]
            }, title));
        })
    }));
};
//Generating the Static Props for the Blog Page
async function getStaticProps() {
    // get list of files from the posts folder
    const files = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync('posts');
    // get frontmatter & slug from each post
    const posts = files.map((fileName)=>{
        const slug = fileName.replace('.md', '');
        const readFile = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(`posts/${fileName}`, 'utf-8');
        const { data: frontmatter  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(readFile);
        return {
            slug,
            frontmatter
        };
    });
    // Return the pages static props
    return {
        props: {
            posts
        }
    };
}


/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61], () => (__webpack_exec__(5705)));
module.exports = __webpack_exports__;

})();