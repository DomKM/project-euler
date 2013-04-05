// var Fibo = [1,1];
// var x = 0;
// for(i=1; i<= 40; i++){
// 	// x means 0
// 	x = (0[1-1] + 0[1-2]);
// 	Fibo.push(x);
// };

// {lily: 25}["lily"] // 25

// [1,2,25][2] // 25

var fibo = [1, 2];
while (fibo[fibo.length-1] <= 4000000) {
	var lastNum = fibo[fibo.length-1];
	var secondToLastNum = fibo[fibo.length-2];
	fibo.push(lastNum + secondToLastNum);
}
// fibo;
var sum = 0;
for(i=0; i <= fibo.length-2; i++){
	if(fibo[i] % 2 === 0){
		sum += fibo[i];
	}
};



// FOR loop
var sum = 0;
for(i=0; i < fibo.length-2; i++){
	if(fibo[i] % 2 === 0){
		sum += fibo[i];
	}
};
//

// WHILE loop
var sum = 0
var i = 0
while(fibo[i] < fibo.length-2) {
	i += 1
	if(fibo[i] % 2 === 0){
		sum += fibo[i];
	}
}
//