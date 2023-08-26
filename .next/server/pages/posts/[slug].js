"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 8731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Post),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(9653);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);
// EXTERNAL MODULE: ./components/Layout.js + 3 modules
var Layout = __webpack_require__(4917);
// EXTERNAL MODULE: ./public/dark8.png
var dark8 = __webpack_require__(9001);
;// CONCATENATED MODULE: ./public/telegram.png
/* harmony default export */ const telegram = ({"src":"/_next/static/media/telegram.1e9a8a8b.png","height":51,"width":190,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAR0lEQVR4nGPUXnLXloGBIZaRmeXKlUj5RWw6doq/rx399Z+BgQko/hukQB3IKGFkYj5wJUphNZueo8avywcZGBgZfwLF7wEAxB0VOjEN8k8AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./pages/posts/[slug].js











// The page for each post
function Post({ frontmatter , content , slug  }) {
    const { title , author , annotation , category , date , bannerImage , tags  } = frontmatter;
    const urlfilename = slug;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        id: "site-main",
        className: "site-main outer",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: annotation
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:locale",
                        content: "ru_RU"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "article"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: annotation
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "https://temniyecolog.ru/" + bannerImage
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image:width",
                        content: "512"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image:height",
                        content: "320"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: "https://temniyecolog.ru/posts/" + urlfilename
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "<Блог Тёмного Эколога>"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inner",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("article", {
                        className: "post-full post tag-getting-started featured",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                            className: "post-full-header",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                    className: "post-full-tags",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/tag/getting-started",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: tags
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "post-full-title",
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "post-full-custom-excerpt",
                                    children: annotation
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "post-full-byline",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                        className: "post-full-byline-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "author-list",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "author-list-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "author-avatar",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                            src: "https://temniyecolog.ru/_next/static/media/dark8.5416d8b1.png",
                                                            alt: "Экология Тёмного эколога",
                                                            layout: "responsive",
                                                            quality: "25",
                                                            width: "36",
                                                            height: "36"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                                className: "post-full-byline-meta",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: "author-name",
                                                        children: author
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "byline-meta-content",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("time", {
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
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "imgcontainer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "https://temniyecolog.ru/" + bannerImage
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "post-full-content",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "post-content load-external-scripts",
                                dangerouslySetInnerHTML: {
                                    __html: external_markdown_it_default()().render(content)
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "author-telegram",
                                    href: "https://t.me/darkecologist",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        src: "https://temniyecolog.ru/_next/static/media/telegram.1e9a8a8b.png",
                                        alt: "Экология Тёмного эколога",
                                        layout: "fixed",
                                        quality: "25",
                                        width: "190",
                                        height: "51"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
// Generating the paths for each post
async function getStaticPaths() {
    // Get list of all files from our posts directory
    const files = external_fs_default().readdirSync("posts");
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
    const fileName = external_fs_default().readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter , content  } = external_gray_matter_default()(fileName);
    return {
        props: {
            frontmatter,
            content,
            slug
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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,770,917], () => (__webpack_exec__(8731)));
module.exports = __webpack_exports__;

})();