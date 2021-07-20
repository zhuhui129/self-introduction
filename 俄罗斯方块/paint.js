// JavaScript Document

function generateBlock(){
	var block=new Array(4);
	var t = (Math.floor(Math.random()*20)+1)%7;
	switch(t){
		case 0:{
			block[0] = {x:0, y:4};
			block[1] = {x:1, y:4};
			block[2] = {x:0, y:5};
			block[3] = {x:1, y:5};

			break;
		}
		case 1:{
			block[0] = {x:0, y:3};
			block[1] = {x:0, y:4};
			block[2] = {x:0, y:5};
			block[3] = {x:0, y:6};

			break;
		}
		case 2:{
			block[0] = {x:0, y:5};
			block[1] = {x:1, y:4};
			block[2] = {x:1, y:5};
			block[3] = {x:2, y:4};

			break;
		}
		case 3:{
			block[0] = {x:0, y:4};
			block[1] = {x:1, y:4};
			block[2] = {x:1, y:5};
			block[3] = {x:2, y:5};

			break;
		}
		case 4:{
			block[0] = {x:0, y:4};
			block[1] = {x:1, y:4};
			block[2] = {x:1, y:5};
			block[3] = {x:1, y:6};
			break;
		}
		case 5:{
			block[0] = {x:0, y:4};
			block[1] = {x:1, y:4};
			block[2] = {x:2, y:4};
			block[3] = {x:2, y:5};

			break;
		}
		case 6:{
			block[0] = {x:0, y:5};
			block[1] = {x:1, y:4};
			block[2] = {x:1, y:5};
			block[3] = {x:1, y:6};
			break;
		}
			
	}
	return block;
}
var color;
function paint(){

	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			var co_lor =Math.floor(Math.random()*4);
			if(co_lor==0){
				color = "#336633";
			}
			else if(co_lor==1){
				color = "#990033"
			}
			else if(co_lor==3){
				color = "#FFCC99"
			}
		}
		tbl.rows[activeBlock[i].x].cells[activeBlock[i].y].style.backgroundColor=color;
	}
}

function erase(){
	for(var i=0;i<4;i++){
		tbl.rows[activeBlock[i].x].cells[activeBlock[i].y].style.backgroundColor="white";
	}
}

function copyBlock(old){
	var o = new Array(4);
	for(var i=0;i<4;i++){
		o[i] = {x:0, y:0};
	}
	for(var i=0;i<4;i++){
		o[i].x = old[i].x;
		o[i].y = old[i].y;
	}
	return o;
}

function applyPreview(){
	var t = 100;
	for(var i=0;i<4;i++){
		if(previewBlock[i].y<t){
			t = previewBlock[i].y
		}
	}
	
	for(var i=0;i<4;i++){
		previewBlock[i].y -= t;
	}
}

function paintPreview(){
	for(var i=0;i<4;i++){
		preTbl.rows[previewBlock[i].x].cells[previewBlock[i].y].style.backgroundColor=color;
	}
}

function erasePreview(){
	for(var i=0;i<4;i++){
		preTbl.rows[previewBlock[i].x].cells[previewBlock[i].y].style.backgroundColor="white";
	}
}

function generateBlankLine(){
	var line=new Array(10);
	for(var i=0;i<10;i++){
		line[i]=0;
	}
	return line;
}

function deleteLine(){
	var lines = 0;
	for(var i=0;i<18;i++){
		for(var j=0;j<10;j++){
			if(board[i][j]==0) break;
		}
		
		if(j==10){
			lines++;
			if(i!=0){
				for(var k=i-1;k>=0;k--){
					board[k+1]=board[k];
				}
			}	board[0]=generateBlankLine();
		}
	}
	return lines;
}

function eraseBoard(){
	for(var i=0;i<18;i++){
		for(var j=0;j<10;j++){
			tbl.rows[i].cells[j].style.backgroundColor = "white"
		}
	}
}

function paintBoard(){
	for(var i=0;i<18;i++){
		for(var j=0;j<10;j++){
			if(board[i][j]==1){
				tbl.rows[i].cells[j].style.backgroundColor = "#0A2F51"
			}
				
		}
	}
}


	