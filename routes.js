module.exports = function(req, res, next) {
  var formula = req.params.formula || 'index';

  res.render('pages/' + formula);
};
