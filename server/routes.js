const controller = require('./controller');

module.exports = app => {

    app.get('/ninja/:pin', controller.login);
    app.post('/seed', controller.seed);
    app.get('/d', controller.display);
};