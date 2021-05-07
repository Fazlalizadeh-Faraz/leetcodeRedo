/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i= 0
    let val = 0
    while (val < x){
    	val = i * i
    	if(val < x)i++; 
    }
    return val ===x?i:i-1
};
