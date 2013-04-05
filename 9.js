var a = [];
	for(numb1=1; numb1<1000; numb1++){
			a.push(numb1);
		};

var b = [];
	for(numb2=1; numb2<1000; numb2++){
			b.push(numb2);
		};

var c = [];
	for(numb3=1; numb3<1000; numb3++){
			c.push(numb3);
		};

var question = function(a, b, c){
	for(var i=0; i< a.length; i++){
		var aa = a[i];
	
		for(var j=0; j< b.length; j++){
		var bb = b[j];
	
			for(var k=0; k<c.length; k++){
				var cc = c[k];
				if((aa+bb+cc === 1000) && (aa*aa + bb*bb === cc*cc )){	
					return [aa, bb, cc];
				} 
			};
		};
	};
};

question(a, b, c);


