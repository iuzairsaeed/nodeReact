const passport = require("passport");

module.exports = (app) => {

    app.get(
        "/auth/google",
        passport.authenticate("google", {
            scope: ["profile", "email"],
        })
    );

    app.get(
        "/auth/google/callback",
        passport.authenticate("google"),
        (req,res) => {
            res.redirect('http://localhost:3000/surveys');
        }
     );

    app.get("/api/logout", (req, res) => {
        req.logout(); //kills cookie about users
        res.redirect('/')
    });

    app.get("/api/current_user", (req, res) => {
        res.send(req.user);
    });
    
};