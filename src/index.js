
exports.min = function min (array) {
  
  let arr = Array.of(array).flat(); 

  if (arr.length == 0 || array === undefined) {
    return 0;
  }

  return Math.min( ...arr );
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
