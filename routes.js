module.exports = function(req, res, next) {
  var formula = req.params.formula || 'calcium';

  res.render('pages/' + formula);
};