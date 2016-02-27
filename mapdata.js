/*==============================
プレイヤー座標
==============================*/
var playerpoint=[];

function PlayerPointCreate() {
         var y;
         var x;
         for(y=0; y<mapColsRows; y++){
                 playerpoint[y]=[];
                 for(x=0; x<mapColsRows; x++){
                        playerpoint[y][x]=[];
                        playerpoint[y][x][0]=x;
                        playerpoint[y][x][1]=y;
                 }
         }
}

/*================
マップデータ
==================
[0]透明
[1]床
[2]下への階段
[3]上への階段
[4]側面つき壁
[5]壁
[6]採掘不可壁
================*/

/*===============================
ランダムマップ
===============================*/
/*
mapdata[y][x][○]
[0] マップデータ
[1] 敵キャラ位置
*/

var mapdata=[];

function RandomMapData() {
         for(var y=0; y<mapColsRows; y++){
                 mapdata[y]=[];
                 for(var x=0; x<mapColsRows; x++){
                        mapdata[y][x]=[];
                        var z=1+Math.floor(Math.random()*2);
                        //1～2が出る
                        if(z==1){
                            z=5;
                        }else{
                            z=1;
                        }
                        mapdata[y][x][0]=z;
                        if(y==0||y==mapColsRows-1||x==0||x==mapColsRows-1){
                        z=6;
                        mapdata[y][x][0]=z;
                        }
                        mapdata[y][x][1]=0;
                 }
         }
         var stair_y=1+Math.floor(Math.random()*(mapColsRows-2));
         var stair_x=1+Math.floor(Math.random()*(mapColsRows-2));
         mapdata[stair_y][stair_x][0]=2;
}