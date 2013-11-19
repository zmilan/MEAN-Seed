
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

exports.partialsSub = function (req, res) {
    var name = req.params.name;
    var dir = req.params.dir;
    res.render('partials/' + dir + '/' + name);
};