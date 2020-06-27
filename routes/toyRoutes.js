const test = require('../services/toy');
module.exports = (app)=>{
    app.get('/toy', (req,res)=>{
        res.send({result:test.kid});
    })
};