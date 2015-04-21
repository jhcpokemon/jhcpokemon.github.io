function onClick(){
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var c = document.getElementById('c').value;
	if(isNaN(a)||isNaN(b)||isNaN(c)){
		document.getElementById('a').value = '';
		document.getElementById('b').value = '';
		document.getElementById('c').value = '';
		document.getElementById('x1').value = '';
		document.getElementById('x2').value = '';
		JAlert('计算结果',alert('请输入数字：'));
	}else{
		if(a != 0){
	document.getElementById('x1').value = (-b-Math.sqrt(b*b-4*a*c))/(2*a);
	document.getElementById('x2').value = (-b+Math.sqrt(b*b-4*a*c))/(2*a);
				}else{
					if(b != 0 ){
					document.getElementById('x1').value = -c/b;
					}else{	if(c == 0){
							alert('恒等式！')
									}else{
										alert('非法！')
									}
						}
				}
		}
	var x1 = document.getElementById('x1').value;
		if (isNaN(x1))
		{	
			document.getElementById('x1').value = '';
			document.getElementById('x2').value = '';
			alert('无解！');
		};
}
document.getElementById('x1').disabled = true;
document.getElementById('x2').disabled = true;