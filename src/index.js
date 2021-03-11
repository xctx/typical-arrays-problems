
exports.min = function min (array) {
  
  const arr = Array.of(array).flat(); 
  
  if (arr.length == 0 || array === undefined) {
    return 0;
  }
  return Math.min( ...arr );

}

exports.max = function max (array) {
  
  const arr = Array.of(array).flat(); 
  
  if (arr.length == 0 || array === undefined) {
    return 0;
  }

  return Math.max( ...arr );
}

exports.avg = function avg (array) {

  const arr = Array.of(array).flat(); 

  if (arr.length == 0 || array === undefined) {
    return 0;
  }

  const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
  return average(arr);
  
}
