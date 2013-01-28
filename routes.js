require('./controllers');
require('./controllers/user');

module.exports = function(app) {
  app.get("/", MainController.index);
  app.get("/users", UserController.show);

}
