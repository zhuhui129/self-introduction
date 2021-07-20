
var tbl;
var preTbl;
var status = 0;
var timer;
var score=0;
var board = new Array(18);
for(var i=0;i<18;i++){
	board[i] = new Array(10);
}
var activeBlock;
var nextBlock;
var previewBlock;
function begin(obj){
	obj.disabled = true;
	status=1;
	tbl = document.getElementById("board");
	preTbl = document.getElementById("preBoard");
	eraseBoard();
	for(var i=0;i<18;i++){
		for(var j=0;j<10;j++){
			board[i][j] = 0;
		}
	}
	activeBlock = generateBlock();
	nextBlock = generateBlock();
	previewBlock = copyBlock(nextBlock);
	paint();
	applyPreview();
	paintPreview();
	timer = setInterval("moveDown()",1000);
}

document.onkeydown = function(){
	if(status!=1){
		return;
	}
	var code=event.keyCode;
	switch(code){
		case 37:{
			moveLeft();
			break;
		}	
		case 38:{
			rotate();
			break;
		}
		case 39:{
			moveRight();
			break;
		}
		case 40:{
			moveDown();
			break;
		}
	}
}


