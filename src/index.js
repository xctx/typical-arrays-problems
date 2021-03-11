
exports.min = function min (array) {
  
  let arr = Array.of(array).flat(); 
  if (arr.length == 0 || array === undefined) {
    return 0;
  }
  return Math.min( ...arr );
  
}

exports.max = function max (array) {
  
  let arr = Array.of(array).flat(); 

  if (arr.length == 0 || array === undefined) {
    return 0;
  }

  return Math.max( ...arr );
}

exports.avg = function avg (array) {
  return 0;
}
