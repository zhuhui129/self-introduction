// JavaScript Document
function isCellValid(x,y){
	if(x>17||x<0||y>9||y<0){
		return false;
	}
	
	if(board[x][y]==1){
		return false;
	}
	return true;
}

function checkLeftBorder(){
	for(var i=0;i<activeBlock.length; i++){
		if(activeBlock[i].y==0){
			return false;
		}
		
		if(!isCellValid(activeBlock[i].x, activeBlock[i].y-1)){
			return false;
		}
	}
	return true;
}

function moveLeft(){
	if(checkLeftBorder()){
		erase();
		for(var i=0;i<4;i++){
			activeBlock[i].y = activeBlock[i].y-1;
		}
		paint();
	}
}

function checkRightBorder(){
	for(var i=0;i<activeBlock.length; i++){
		if(activeBlock[i].y==9){
			return false;
		}
		
		if(!isCellValid(activeBlock[i].x, activeBlock[i].y+1)){
			return false;
		}
	}
	return true;
}

function moveRight(){
	if(checkRightBorder()){
		erase();
		for(var i=0;i<4;i++){
			activeBlock[i].y=activeBlock[i].y+1;
		}
		paint();
	}
}

function checkBottomBorder(){
	for(var i=0;i<activeBlock.length; i++){
		if(activeBlock[i].x==17){
			return false;
		}
		
		if(!isCellValid(activeBlock[i].x+1, activeBlock[i].y)){
			return false;
		}
	}
	return true;
}

function moveDown(){
	if(checkBottomBorder()){
		erase();
		for(var i=0;i<4;i++){
			activeBlock[i].x=activeBlock[i].x+1;
		}
		paint();
	}
	else{
		clearInterval(timer);
		updateBoard();
		var lines = deleteLine();
		if(lines!=0){
			switch(lines){
				case 2:{lines=3;break;}
				case 3:{lines=6; break;}
				case 4:{lines=10; break;}
			}
			score += lines;
			document.getElementById("score").innerText=" "+score;
			
			eraseBoard();
			paintBoard();
		}
		erasePreview();
		if(!validateBlock(nextBlock)){
			alert("Game over!");
			status=2;
			document.getElementsByTagName("input")[0].disabled = false;
			return;
		}
		activeBlock = nextBlock;
		nextBlock=generateBlock();
		previewBlock = copyBlock(nextBlock);
		paint();
		applyPreview();
		paintPreview();
		timer = setInterval("moveDown()",1000);
	}
}


function updateBoard(){
	for(var i=0;i<4;i++){
		board[activeBlock[i].x][activeBlock[i].y]=1
	}
}

function validateBlock(block){
	if(!block){
		return false;
	}
	for(var i=0;i<4;i++){
		if(!isCellValid(block[i].x, block[i].y)){
			return false;
		}
	}
	return true;
}

	
function rotate(){
	var tmpBlock = copyBlock(activeBlock);
	var cx = Math.round((tmpBlock[0].x+tmpBlock[1].x+tmpBlock[2].x+tmpBlock[3].x)/4);
	var cy = Math.round((tmpBlock[0].y+tmpBlock[1].y+tmpBlock[2].y+tmpBlock[3].y)/4);
	for(var i=0;i<4;i++){
		tmpBlock[i].x=cx+cy-activeBlock[i].y;
		tmpBlock[i].y=cy-cx+activeBlock[i].x;
	}
	
	for(var i=0;i<4;i++){
		if(!isCellValid(tmpBlock[i].x,tmpBlock[i].y)){
			return;
		}
	}
	erase();
	activeBlock = copyBlock(tmpBlock);
	paint();
}

