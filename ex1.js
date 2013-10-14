function adder(){
	var args = Array.prototype.slice.call(arguments);
	var res = 0;
	return function(v){
      	args.forEach(function(val, i){
			res += val(v);
		});
		return res;
   }
}

function mult(v){
  return function(e){
    return v*e;
  }
}

function sub(a){
	return function(e){
		return a-e;
	}
}

/*console.log(
sub(0)(0) + " = 0\n" +// 0
sub(2)(1) + " = 1\n" + // 1
sub(2)(2) + " = 0\n" + // 0
sub(2)(4) + " = -2\n"); // -2*/

console.log(adder(mult(2), mult(4))(2));

console.log(
adder()(0) + " = 0\n" +  // 0
adder()(1) + " = 0\n" + // 0
adder(mult(2))(1) + " = 2\n" + // 2
adder(mult(2), mult(2))(1) + " = 4\n" + // 4
adder(mult(2), mult(2), mult(2))(1) + " = 6\n" + // 6
adder(mult(2), sub(2), mult(2))(1) + " = 6\n"); // 6