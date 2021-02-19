
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) {
    return [];
  }  
  matrix = matrix.map(function(elem, index) {
	if(index % 2 == 0){return elem}
   return elem.reverse()   
});
 return matrix = matrix.flat()   
}
