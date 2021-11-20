"use strict";
(() => {
var exports = {};
exports.id = 380;
exports.ids = [380];
exports.modules = {

/***/ 5866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const nodemailer = __webpack_require__(8123);

async function handler(req, res) {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: 'highdefinitionwebsite@outlook.com',
        pass: 'ftc18225WEBSITE!'
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });
    const output = `
            <div style="padding: 20px; background-color: #faedff; border-radius: 10px; font-family: 'Roboto';">
                <h1>High Definition Website Contact Request</h1>
                <h4>Contact Details:</h4>
                <ul> 
                    <li>Name: ${req.body.name}</li>
                    <li>Email: ${req.body.email}</li>
                    <li>Subject: ${req.body.subject}</li>
                </ul>

                <h4>Message</h4>
                <p>${req.body.message}</p>
            </div>
        `;
    await transporter.sendMail({
      from: 'highdefinitionwebsite@outlook.com',
      to: "ftc18225@gmail.com",
      subject: req.body.subject,
      html: output
    });
    return res.status(200).send(JSON.stringify({
      error: false
    }));
  } catch (e) {
    return res.status(400).send(JSON.stringify({
      error: true
    }));
  }
}

/***/ }),

/***/ 8123:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5866));
module.exports = __webpack_exports__;

})();