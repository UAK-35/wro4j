(function() {
  var countdown, num;

  countdown = (function() {
    var _i, _results;
    _results = [];
    for (num = _i = 10; _i >= 1; num = --_i) {
      _results.push(num);
    }
    return _results;
  })();

}).call(this);