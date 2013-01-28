
/*
 * GET users listing.
 */

global.UserController = {};

UserController.show = function(req, res){
  res.send("respond with a resource");
};

module.exports.UserController = UserController;

