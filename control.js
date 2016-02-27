function control() {
  var help=document.getElementById("help");
  var view = document.getElementById('view');
	var worldcvs = document.getElementById('world');
	var worldctx = worldcvs.getContext('2d');
	document.body.onkeydown = keydown;
	function keydown(event) {
		EnemyMove(1);
		switch(event.keyCode) {

		case 37:	//左へ移動(マップを右へ動かす)
		pX--;
		if(mapdata[pY][pX][0]==5||mapdata[pY][pX][0]==6||mapdata[pY][pX][1]!=0) {
    pX++;
		}
		break;

		case 38:	//上へ移動(マップを下へ動かす)
		pY--;
    if(mapdata[pY][pX][0]==5||mapdata[pY][pX][0]==6||mapdata[pY][pX][1]!=0){
    pY++;
    }
    break;

		case 39:	//右へ移動(マップを左へ動かす)
		pX++;
		if(mapdata[pY][pX][0]==5||mapdata[pY][pX][0]==6||mapdata[pY][pX][1]!=0) {
		pX--;
		}
		break;

		case 40:	//下へ移動(マップを上へ動かす)
		pY++;
		if(mapdata[pY][pX][0]==5||mapdata[pY][pX][0]==6||mapdata[pY][pX][1]!=0) {
		pY--;
		}
		break;

    case 13:  //Enterキーを押されたとき
      switch(mapdata[pY][pX][0]) {
      
        case 1:
          control();
        break;

        case 2:
          firstfield();
        break;　
      
        default:
        break;
      }
    break;

    case 66:  //採掘(b)
      PrintHelp("方向キーで掘る方向を選択<br>b： キャンセル");
      PrintNavi("どの方向を掘る？");
      Cursor(5,1,66);  //(変化前,変化後,キーコード);
    break;
    
    case 67:  //壁生成(c)
      PrintHelp("方向キーで壁を作る方向を選択<br>c： キャンセル");
      PrintNavi("どの方向に作る？");
      Cursor(1,5,67);  //(変化前,変化後,キーコード);
    break;

    case 68:  //自分の首を絞める(d)
      PrintNavi("あなたは自分の首を絞めた…");
      var DamageValue=1;
      PlayerDamage(DamageValue)
    break;
    
		}     //switch(event.keyCode) END
		
		view.style.top=-(pv*(pY-psY))+"px";
		view.style.left=-(pv*(pX-psX))+"px";
	} //function keydown(event) END
} //function control() END

function Cursor(c_target,c_result,KeyCodeNumber) {
	  document.body.onkeydown = keydown;
	  function keydown(event) {
    		switch(event.keyCode){
    		case 37:	//右
    		if(mapdata[pY][pX-1][0]==c_target&&mapdata[pY][pX-1][1]==0) {
             mapdata[pY][pX-1][0]=c_result;
             OnePointCreate(pY,pX-1);
   			PrintHelp("方向キー： 移動<br>b： 壁を掘る<br>c： 壁を作る");
			  PrintNavi("あなたは少し満足げな顔をした。");
			  control();
    		} else {
    		PrintHelp("方向キー： 移動<br>b： 壁を掘る<br>c： 壁を作る");
    		PrintNavi("ムリ。");
    		control();
    		}
    		break;

    		case 38:	//下
        if(mapdata[pY-1][pX][0]==c_target&&mapdata[pY-1][pX][1]==0){
             mapdata[pY-1][pX][0]=c_result;
             OnePointCreate(pY-1,pX);
   			PrintHelp("方向キー： 移動<br>b： 壁を掘る<br>c： 壁を作る");
			  PrintNavi("あなたは少し満足げな顔をした。");
			  control();
        } else {
        PrintHelp("方向キー： 移動<br>b： 壁を掘る<br>c： 壁を作る");
        PrintNavi("ムリ。");
        control();
        }
        break;

    		case 39:	//左
    		if(mapdata[pY][pX+1][0]==c_target&&mapdata[pY][pX+1][1]==0) {
             mapdata[pY][pX+1][0]=c_result;
             OnePointCreate(pY,pX+1);
   			PrintHelp("方向キー： 移動<br>b： 壁を掘る<br>c： 壁を作る");
			  PrintNavi("あなたは少し満足げな顔をした。");
			  control();
    		} else {
    		PrintHelp("方向キー： 移動<br>b： 壁を掘る<br>c： 壁を作る");
        PrintNavi("ムリ。");
        control();
        }
        break;

    		case 40:	//上
    		if(mapdata[pY+1][pX][0]==c_target&&mapdata[pY+1][pX][1]==0) {
             mapdata[pY+1][pX][0]=c_result;
             OnePointCreate(pY+1,pX);
   			PrintHelp("方向キー： 移動<br>b： 壁を掘る<br>c： 壁を作る");
			  PrintNavi("あなたは少し満足げな顔をした。");
			  control();
    		} else {
    		PrintHelp("方向キー： 移動<br>b： 壁を掘る<br>c： 壁を作る");
        PrintNavi("ムリ。");
        control();
        }
        break;

        case KeyCodeNumber:
    		PrintHelp("方向キー： 移動<br>b： 壁を掘る<br>c： 壁を作る");
    		PrintNavi("やっぱりやめた。");
    		control();
    		break;
    		}
		}
}

function PlayerDamage(Damage) {
      PlayerStatus[0]=PlayerStatus[0]-(Damage);
      PrintPlayerStatus("HP： "+PlayerStatus[0]);
      if(PlayerStatus[0]<=0){
      GameOver();
      }
}

function GameOver() {
document.write("あなたは死んだ。");
}