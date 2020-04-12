if (process.env.NODE_ENV === "production") {
    module.exports = require("./prod");
} else {
    module.exports = require("./dev");
}
// module.exports = {
//     googleClientID: "597254048394-noj88v10eleas6mn27mjg2nv1gfur2vi.apps.googleusercontent.com",
//     googleClientSecret: "n4yymmJFKH1riOzPaA378mF2",
//     mongoURI: "mongodb+srv://uzair:password47@node-dev-iv1xz.mongodb.net/test?retryWrites=true&w=majority",
//     cookieKey: "kdsjfkdhjhjkshglsfhshjgdhk",
// };