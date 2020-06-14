const test = require('../services/test');
module.exports = (app) => {
    app.get('/test', (req, res) => {
        res.send({ x: test.test });
    });
};