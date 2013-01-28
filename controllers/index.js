
/*
 * GET home page.
 */

global.MainController = {};

MainController.index = function(req, res){
  res.render('index', { title: 'Express' });
};

module.exports.MainController = MainController;
