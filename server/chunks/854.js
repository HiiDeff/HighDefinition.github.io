exports.id = 854;
exports.ids = [854];
exports.modules = {

/***/ 1911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




function Footer() {
  //Not having a footerPt1 right now
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "Footer",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "footerPt1"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "footerPt2",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h4", {
          children: "\xA9 High Definition 2021 | All Rights Reserved | Designed by High Definition"
        })
      })]
    })
  });
}
;

/***/ }),

/***/ 4013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function Header({
  title,
  description
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "Header",
      style: {
        backgroundImage: `url(${"https://ftc18225.everstem.org" + '/images/TeamPicture.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "headerborder",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
          children: title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          children: description
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "overlay"
      })]
    })
  });
}
;

/***/ }),

/***/ 864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NavBar)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/image/public/logo.9b501cce84bdcd781e8008bc556bcb09.png","height":660,"width":656,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+0lEQVR42g3JPy8DYRzA8e9z91zvokL1Un9mXS4Sk4lEIl0kJoPJYhAvwygxFok3wGYjCIOcSI5EYjmlSK5JWyk1kByizd1P189HAfiTWzlENpSp5iSVRAknhmGuA7/KnygXlKV8TOXJV4JhG4gJInI7Ozxd0r3cljj1kpfOnz0/aMWfMbVms5tY6dTxfVDW6U9a0uM27loxYxdd6geXvF23M0+jLfZa5ws6O5NP3EWPxmuDcP+I6mmF+lCb4D3EQZu6Ej0f1naC1Y+zqHNH1boyI/imC9gG6gKgH7gZyxWEPqSHkiUjCh6BEQBWlpYdYHMAJwQegF0gD/APzAZe+4ZuGHQAAAAASUVORK5CYII="});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/navbar.js








function NavBar({
  name
}) {
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)('none');
  const {
    0: width,
    1: setWidth
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setWidth(window.innerWidth);

    if (window.innerWidth >= 768) {
      setOpen('flex');
    }

    ;

    try {
      document.getElementById(name + "").classList.add("this-page");
    } catch (e) {}
  };

  function onClickToggle() {
    if (open == 'flex') {
      setOpen('none');
    } else {
      setOpen('flex');
    }
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "Tabs",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: "tabs",
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "logo",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: logo.src,
              width: "45px",
              height: "45px"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        style: {
          display: open
        },
        className: "tab",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          as: "https://ftc18225.everstem.org" + '/',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            id: "Home",
            className: "tab-label",
            children: "Home"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        style: {
          display: open
        },
        className: "tab",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/about",
          as: "https://ftc18225.everstem.org" + '/about',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            id: "About",
            className: "tab-label",
            children: "About"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        style: {
          display: open
        },
        className: "tab",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/events",
          as: "https://ftc18225.everstem.org" + '/events',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            id: "Events",
            className: "tab-label",
            children: "Events"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        style: {
          display: open
        },
        className: "tab",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/accomplishments",
          as: "https://ftc18225.everstem.org" + '/accomplishments',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            id: "Accomplishments",
            className: "tab-label",
            children: "Accomplishments"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        style: {
          display: open
        },
        className: "tab",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/resources",
          as: "https://ftc18225.everstem.org" + '/resources',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            id: "Resources",
            className: "tab-label",
            children: "Resources"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        style: {
          display: open
        },
        className: "tab",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/contact",
          as: "https://ftc18225.everstem.org" + '/contact',
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            id: "Contact",
            className: "tab-label",
            children: "Contact"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: onClickToggle,
        className: "toggle",
        style: {
          padding: 5,
          paddingBottom: 10,
          marginRight: 10
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "bars",
          children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
            icon: free_solid_svg_icons_.faBars,
            width: "26",
            height: "26",
            style: {
              color: 'white'
            }
          })
        })
      })]
    })
  });
}

/***/ }),

/***/ 2453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Top)
/* harmony export */ });
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8689);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function Top({
  name
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("title", {
      children: ["High Definition | ", name]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
      name: "description",
      content: "FIRST Tech Challenge Team 18225, High Definition, is a team of 14 enthusiastic students with a passion for STEAM and robotics. Our goal is to inspire students to participate in FIRST competitions to kickstart their STEM journies."
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, minimum-scale=1"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
      rel: "preconnect",
      href: "https://fonts.gstatic.com"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500&display=swap",
      rel: "stylesheet"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap",
      rel: "stylesheet"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap",
      rel: "stylesheet"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
      rel: "stylesheet"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap",
      rel: "stylesheet"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
      href: "_next/static/css/e4cfe3ce51bce3c03248.css",
      rel: "stylesheet",
      type: "text/css"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("script", {
      dangerouslySetInnerHTML: {
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TXFMZ4S');`
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
      rel: "icon",
      href: "/logo.png"
    })]
  });
}

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;