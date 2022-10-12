"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 1663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9653);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4917);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var _public_dark_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1568);








// The page for each post
function Post({ frontmatter , content  }) {
    console.log("данные", frontmatter);
    const { title , author , annotation , category , date , bannerImage , tags  } = frontmatter;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        id: "site-main",
        className: "site-main outer",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "inner",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                    className: "post-full post tag-getting-started featured",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: "post-full-header",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: "post-full-tags",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    href: "/tag/getting-started",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: tags
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "post-full-title",
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "post-full-custom-excerpt",
                                children: annotation
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "post-full-byline",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                    className: "post-full-byline-content",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "author-list",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "author-list-item",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "author-avatar",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                        src: _public_dark_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                                        alt: "fggfgf",
                                                        layout: "responsive",
                                                        quality: "1",
                                                        width: "36",
                                                        height: "36"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                            className: "post-full-byline-meta",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "author-name",
                                                    children: author
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "byline-meta-content",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                        className: "byline-meta-date",
                                                        children: date
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "imgcontainer",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "http://localhost:3000/" + bannerImage
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: "post-full-content",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "post-content load-external-scripts",
                        dangerouslySetInnerHTML: {
                            __html: markdown_it__WEBPACK_IMPORTED_MODULE_3___default()().render(content)
                        }
                    })
                })
            ]
        })
    }));
};
// Generating the paths for each post
async function getStaticPaths() {
    // Get list of all files from our posts directory
    const files = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync("posts");
    // Generate a path for each one
    const paths = files.map((fileName)=>({
            params: {
                slug: fileName.replace(".md", "")
            }
        })
    );
    // return list of paths
    return {
        paths,
        fallback: false
    };
}
// Generate the static props for the page
async function getStaticProps({ params: { slug  }  }) {
    const fileName = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileName);
    return {
        props: {
            frontmatter,
            content
        }
    };
}


/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 9653:
/***/ ((module) => {

module.exports = require("markdown-it");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,673,917], () => (__webpack_exec__(1663)));
module.exports = __webpack_exports__;

})();