/*===============
ゲームスタート
===============*/
function start() {
firstfield();
}	//start() END

/*===============
フィールド設定
===============*/

//基本マスpx数
var pv=40;

//チップ作成時のピクセルサイズ
var dot=1;

//マップ宣言
function RandomMapColsRows() {
        mapColsRows=20+Math.floor(Math.random()*40);
}

//マップ座標

// 視覚プレイヤー位置座標(固定)
var psX=5;
var psY=4;

//プレイヤー現在位置座標(可変)
var pX;
var pY;

/*=====================
フィールド画面
=====================*/
function firstfield() {
EnemyNumber=0;
RandomMapColsRows();
RandomMapData();
PlayerPointCreate();
mapcreate();	//マップ生成
player();		//プレイヤー生成
EnemyCreate();
PrintNavi("あなたはこの世界に降り立った…");
PrintHelp("b： 壁を掘る<br>c： 壁を作る<br>方向キー： 移動");
control();		//プレイヤーコントロール
}