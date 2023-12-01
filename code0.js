gdjs.Play_32gameCode = {};
gdjs.Play_32gameCode.forEachIndex3 = 0;

gdjs.Play_32gameCode.forEachObjects3 = [];

gdjs.Play_32gameCode.forEachTemporary3 = null;

gdjs.Play_32gameCode.forEachTotalCount3 = 0;

gdjs.Play_32gameCode.GDPlayerObjects1= [];
gdjs.Play_32gameCode.GDPlayerObjects2= [];
gdjs.Play_32gameCode.GDPlayerObjects3= [];
gdjs.Play_32gameCode.GDPlayerObjects4= [];
gdjs.Play_32gameCode.GDroomObjects1= [];
gdjs.Play_32gameCode.GDroomObjects2= [];
gdjs.Play_32gameCode.GDroomObjects3= [];
gdjs.Play_32gameCode.GDroomObjects4= [];
gdjs.Play_32gameCode.GDcollsionObjects1= [];
gdjs.Play_32gameCode.GDcollsionObjects2= [];
gdjs.Play_32gameCode.GDcollsionObjects3= [];
gdjs.Play_32gameCode.GDcollsionObjects4= [];
gdjs.Play_32gameCode.GDgunObjects1= [];
gdjs.Play_32gameCode.GDgunObjects2= [];
gdjs.Play_32gameCode.GDgunObjects3= [];
gdjs.Play_32gameCode.GDgunObjects4= [];
gdjs.Play_32gameCode.GDbulletObjects1= [];
gdjs.Play_32gameCode.GDbulletObjects2= [];
gdjs.Play_32gameCode.GDbulletObjects3= [];
gdjs.Play_32gameCode.GDbulletObjects4= [];
gdjs.Play_32gameCode.GDCursorObjects1= [];
gdjs.Play_32gameCode.GDCursorObjects2= [];
gdjs.Play_32gameCode.GDCursorObjects3= [];
gdjs.Play_32gameCode.GDCursorObjects4= [];
gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects1= [];
gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects2= [];
gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects3= [];
gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects4= [];
gdjs.Play_32gameCode.GDEnemyObjects1= [];
gdjs.Play_32gameCode.GDEnemyObjects2= [];
gdjs.Play_32gameCode.GDEnemyObjects3= [];
gdjs.Play_32gameCode.GDEnemyObjects4= [];
gdjs.Play_32gameCode.GDCenterObjects1= [];
gdjs.Play_32gameCode.GDCenterObjects2= [];
gdjs.Play_32gameCode.GDCenterObjects3= [];
gdjs.Play_32gameCode.GDCenterObjects4= [];
gdjs.Play_32gameCode.GDEnemyHealthObjects1= [];
gdjs.Play_32gameCode.GDEnemyHealthObjects2= [];
gdjs.Play_32gameCode.GDEnemyHealthObjects3= [];
gdjs.Play_32gameCode.GDEnemyHealthObjects4= [];


gdjs.Play_32gameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Play_32gameCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Play_32gameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("gun"), gdjs.Play_32gameCode.GDgunObjects1);
{for(var i = 0, len = gdjs.Play_32gameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDPlayerObjects1[i].setZOrder((gdjs.Play_32gameCode.GDPlayerObjects1[i].getPointY("")));
}
for(var i = 0, len = gdjs.Play_32gameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDEnemyObjects1[i].setZOrder((gdjs.Play_32gameCode.GDEnemyObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.Play_32gameCode.GDgunObjects1.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDgunObjects1[i].setZOrder((( gdjs.Play_32gameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Play_32gameCode.GDPlayerObjects1[0].getZOrder()) + 1);
}
}}

}


};gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDcollsionObjects2Objects = Hashtable.newFrom({"collsion": gdjs.Play_32gameCode.GDcollsionObjects2});
gdjs.Play_32gameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Play_32gameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("collsion"), gdjs.Play_32gameCode.GDcollsionObjects2);
{for(var i = 0, len = gdjs.Play_32gameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDPlayerObjects2[i].separateFromObjectsList(gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDcollsionObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Play_32gameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Play_32gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Play_32gameCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Play_32gameCode.GDPlayerObjects2[k] = gdjs.Play_32gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Play_32gameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Play_32gameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Play_32gameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("run");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Play_32gameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Play_32gameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Play_32gameCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Play_32gameCode.GDPlayerObjects1[k] = gdjs.Play_32gameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Play_32gameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Play_32gameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Play_32gameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


};gdjs.Play_32gameCode.eventsList2 = function(runtimeScene) {

{


gdjs.Play_32gameCode.eventsList1(runtimeScene);
}


};gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDbulletObjects2Objects = Hashtable.newFrom({"bullet": gdjs.Play_32gameCode.GDbulletObjects2});
gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDCursorObjects2Objects = Hashtable.newFrom({"Cursor": gdjs.Play_32gameCode.GDCursorObjects2});
gdjs.Play_32gameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Play_32gameCode.GDCursorObjects2);
gdjs.copyArray(runtimeScene.getObjects("gun"), gdjs.Play_32gameCode.GDgunObjects2);
gdjs.Play_32gameCode.GDbulletObjects2.length = 0;

{for(var i = 0, len = gdjs.Play_32gameCode.GDgunObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDgunObjects2[i].getBehavior("FireBullet").FireTowardObject((gdjs.Play_32gameCode.GDgunObjects2[i].getPointX("fire")), (gdjs.Play_32gameCode.GDgunObjects2[i].getPointY("fire")), gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDbulletObjects2Objects, gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDCursorObjects2Objects, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Play_32gameCode.GDgunObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDgunObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.1, 1.125, 1.125, 1, 0.05, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gun"), gdjs.Play_32gameCode.GDgunObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Play_32gameCode.GDgunObjects1.length;i<l;++i) {
    if ( gdjs.Play_32gameCode.GDgunObjects1[i].getBehavior("FireBullet").HasJustFired((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Play_32gameCode.GDgunObjects1[k] = gdjs.Play_32gameCode.GDgunObjects1[i];
        ++k;
    }
}
gdjs.Play_32gameCode.GDgunObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "laser3.wav", false, 15, gdjs.randomFloatInRange(0.6, 1));
}}

}


};gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.Play_32gameCode.GDbulletObjects1});
gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Play_32gameCode.GDPlayerObjects1});
gdjs.Play_32gameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Play_32gameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("gun"), gdjs.Play_32gameCode.GDgunObjects2);
{for(var i = 0, len = gdjs.Play_32gameCode.GDgunObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDgunObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.Play_32gameCode.GDgunObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDgunObjects2[i].setPosition((( gdjs.Play_32gameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Play_32gameCode.GDPlayerObjects2[0].getPointX("Gun")),(( gdjs.Play_32gameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Play_32gameCode.GDPlayerObjects2[0].getPointY("Gun")));
}
}{for(var i = 0, len = gdjs.Play_32gameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Play_32gameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Play_32gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Play_32gameCode.GDPlayerObjects2[i].getX() > gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.Play_32gameCode.GDPlayerObjects2[k] = gdjs.Play_32gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Play_32gameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Play_32gameCode.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("gun"), gdjs.Play_32gameCode.GDgunObjects2);
{for(var i = 0, len = gdjs.Play_32gameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.Play_32gameCode.GDgunObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDgunObjects2[i].getBehavior("Flippable").flipY(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Play_32gameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Play_32gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Play_32gameCode.GDPlayerObjects2[i].getX() < gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.Play_32gameCode.GDPlayerObjects2[k] = gdjs.Play_32gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Play_32gameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Play_32gameCode.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("gun"), gdjs.Play_32gameCode.GDgunObjects2);
{for(var i = 0, len = gdjs.Play_32gameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.Play_32gameCode.GDgunObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDgunObjects2[i].getBehavior("Flippable").flipY(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Play_32gameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.Play_32gameCode.GDbulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDbulletObjects1Objects, gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDPlayerObjects1Objects, 200, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Play_32gameCode.GDbulletObjects1 */
{for(var i = 0, len = gdjs.Play_32gameCode.GDbulletObjects1.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDbulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDEnemy_95959595SpawnObjects2Objects = Hashtable.newFrom({"Enemy_Spawn": gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects2});
gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Play_32gameCode.GDEnemyObjects2});
gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDEnemyHealthObjects2Objects = Hashtable.newFrom({"EnemyHealth": gdjs.Play_32gameCode.GDEnemyHealthObjects2});
gdjs.Play_32gameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Center"), gdjs.Play_32gameCode.GDCenterObjects3);
gdjs.copyArray(gdjs.Play_32gameCode.GDEnemyObjects2, gdjs.Play_32gameCode.GDEnemyObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Play_32gameCode.GDEnemyObjects3.length;i<l;++i) {
    if ( gdjs.Play_32gameCode.GDEnemyObjects3[i].getX() >= (( gdjs.Play_32gameCode.GDCenterObjects3.length === 0 ) ? 0 :gdjs.Play_32gameCode.GDCenterObjects3[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Play_32gameCode.GDEnemyObjects3[k] = gdjs.Play_32gameCode.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.Play_32gameCode.GDEnemyObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Play_32gameCode.GDEnemyObjects3 */
{for(var i = 0, len = gdjs.Play_32gameCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDEnemyObjects3[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Center"), gdjs.Play_32gameCode.GDCenterObjects2);
/* Reuse gdjs.Play_32gameCode.GDEnemyObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Play_32gameCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Play_32gameCode.GDEnemyObjects2[i].getX() <= (( gdjs.Play_32gameCode.GDCenterObjects2.length === 0 ) ? 0 :gdjs.Play_32gameCode.GDCenterObjects2[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Play_32gameCode.GDEnemyObjects2[k] = gdjs.Play_32gameCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Play_32gameCode.GDEnemyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Play_32gameCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Play_32gameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDEnemyObjects2[i].getBehavior("Flippable").flipX(false);
}
}}

}


};gdjs.Play_32gameCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDEnemy_95959595SpawnObjects2Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects2 */
gdjs.Play_32gameCode.GDEnemyObjects2.length = 0;

gdjs.Play_32gameCode.GDEnemyHealthObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDEnemyObjects2Objects, (( gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects2.length === 0 ) ? 0 :gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects2[0].getPointX("Origin")), (( gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects2.length === 0 ) ? 0 :gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects2[0].getPointY("Origin")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDEnemyHealthObjects2Objects, (( gdjs.Play_32gameCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.Play_32gameCode.GDEnemyObjects2[0].getPointX("")), (( gdjs.Play_32gameCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.Play_32gameCode.GDEnemyObjects2[0].getPointY("")), "");
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.Play_32gameCode.GDEnemyHealthObjects2.length !== 0 ? gdjs.Play_32gameCode.GDEnemyHealthObjects2[0] : null), (gdjs.Play_32gameCode.GDEnemyObjects2.length !== 0 ? gdjs.Play_32gameCode.GDEnemyObjects2[0] : null));
}
{ //Subevents
gdjs.Play_32gameCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDEnemyHealthObjects3Objects = Hashtable.newFrom({"EnemyHealth": gdjs.Play_32gameCode.GDEnemyHealthObjects3});
gdjs.Play_32gameCode.eventsList7 = function(runtimeScene) {

};gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Play_32gameCode.GDEnemyObjects2});
gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Play_32gameCode.GDEnemyObjects2});
gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDbulletObjects2Objects = Hashtable.newFrom({"bullet": gdjs.Play_32gameCode.GDbulletObjects2});
gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDEnemyHealthObjects2Objects = Hashtable.newFrom({"EnemyHealth": gdjs.Play_32gameCode.GDEnemyHealthObjects2});
gdjs.Play_32gameCode.eventsList8 = function(runtimeScene) {

{

/* Reuse gdjs.Play_32gameCode.GDEnemyObjects2 */
gdjs.copyArray(runtimeScene.getObjects("EnemyHealth"), gdjs.Play_32gameCode.GDEnemyHealthObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDEnemyHealthObjects2Objects, (gdjs.Play_32gameCode.GDEnemyObjects2.length !== 0 ? gdjs.Play_32gameCode.GDEnemyObjects2[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.Play_32gameCode.GDEnemyObjects2 */
/* Reuse gdjs.Play_32gameCode.GDEnemyHealthObjects2 */
{for(var i = 0, len = gdjs.Play_32gameCode.GDEnemyHealthObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDEnemyHealthObjects2[i].getBehavior("Resizable").setWidth(((( gdjs.Play_32gameCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.Play_32gameCode.GDEnemyObjects2[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / (( gdjs.Play_32gameCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.Play_32gameCode.GDEnemyObjects2[0].getBehavior("Health").MaxHealth((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) * 12);
}
}}

}


};gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Play_32gameCode.GDEnemyObjects2});
gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDbulletObjects2Objects = Hashtable.newFrom({"bullet": gdjs.Play_32gameCode.GDbulletObjects2});
gdjs.Play_32gameCode.eventsList9 = function(runtimeScene) {

{

/* Reuse gdjs.Play_32gameCode.GDEnemyObjects2 */
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.Play_32gameCode.GDbulletObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDEnemyObjects2Objects, gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDbulletObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Play_32gameCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Play_32gameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDEnemyObjects2[i].getBehavior("Animation").setAnimationName("idle/move");
}
}}

}


};gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDEnemyHealthObjects2Objects = Hashtable.newFrom({"EnemyHealth": gdjs.Play_32gameCode.GDEnemyHealthObjects2});
gdjs.Play_32gameCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Play_32gameCode.GDEnemyObjects1, gdjs.Play_32gameCode.GDEnemyObjects2);

gdjs.copyArray(runtimeScene.getObjects("EnemyHealth"), gdjs.Play_32gameCode.GDEnemyHealthObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDEnemyHealthObjects2Objects, (gdjs.Play_32gameCode.GDEnemyObjects2.length !== 0 ? gdjs.Play_32gameCode.GDEnemyObjects2[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.Play_32gameCode.GDEnemyHealthObjects2 */
{for(var i = 0, len = gdjs.Play_32gameCode.GDEnemyHealthObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDEnemyHealthObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.Play_32gameCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Play_32gameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Play_32gameCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy_Spawn"), gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects2.length;i<l;++i) {
    if ( gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects2[i].getTimerElapsedTimeInSecondsOrNaN("Enemy_Spawn") > 1 ) {
        isConditionTrue_0 = true;
        gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects2[k] = gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects2[i];
        ++k;
    }
}
gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects2 */
{for(var i = 0, len = gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects2[i].resetTimer("Enemy_Spawn");
}
}
{ //Subevents
gdjs.Play_32gameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Play_32gameCode.GDEnemyObjects2);

for (gdjs.Play_32gameCode.forEachIndex3 = 0;gdjs.Play_32gameCode.forEachIndex3 < gdjs.Play_32gameCode.GDEnemyObjects2.length;++gdjs.Play_32gameCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("EnemyHealth"), gdjs.Play_32gameCode.GDEnemyHealthObjects3);
gdjs.Play_32gameCode.GDEnemyObjects3.length = 0;


gdjs.Play_32gameCode.forEachTemporary3 = gdjs.Play_32gameCode.GDEnemyObjects2[gdjs.Play_32gameCode.forEachIndex3];
gdjs.Play_32gameCode.GDEnemyObjects3.push(gdjs.Play_32gameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDEnemyHealthObjects3Objects, (gdjs.Play_32gameCode.GDEnemyObjects3.length !== 0 ? gdjs.Play_32gameCode.GDEnemyObjects3[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Play_32gameCode.GDEnemyHealthObjects3.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDEnemyHealthObjects3[i].setPosition((( gdjs.Play_32gameCode.GDEnemyObjects3.length === 0 ) ? 0 :gdjs.Play_32gameCode.GDEnemyObjects3[0].getPointX("bar")),(( gdjs.Play_32gameCode.GDEnemyObjects3.length === 0 ) ? 0 :gdjs.Play_32gameCode.GDEnemyObjects3[0].getPointY("bar")));
}
}{for(var i = 0, len = gdjs.Play_32gameCode.GDEnemyHealthObjects3.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDEnemyHealthObjects3[i].setZOrder((( gdjs.Play_32gameCode.GDEnemyObjects3.length === 0 ) ? 0 :gdjs.Play_32gameCode.GDEnemyObjects3[0].getZOrder()) + 5);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Play_32gameCode.GDEnemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Play_32gameCode.GDEnemyObjects2.length;i<l;++i) {
    if ( !(gdjs.Play_32gameCode.GDEnemyObjects2[i].getBehavior("Animation").getAnimationName() == "hurt") ) {
        isConditionTrue_0 = true;
        gdjs.Play_32gameCode.GDEnemyObjects2[k] = gdjs.Play_32gameCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Play_32gameCode.GDEnemyObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Center"), gdjs.Play_32gameCode.GDCenterObjects2);
/* Reuse gdjs.Play_32gameCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Play_32gameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDEnemyObjects2[i].addForceTowardObject((gdjs.Play_32gameCode.GDCenterObjects2.length !== 0 ? gdjs.Play_32gameCode.GDCenterObjects2[0] : null), 10, 0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Play_32gameCode.GDEnemyObjects2);
{for(var i = 0, len = gdjs.Play_32gameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDEnemyObjects2[i].separateFromObjectsList(gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDEnemyObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Play_32gameCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.Play_32gameCode.GDbulletObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDEnemyObjects2Objects, gdjs.Play_32gameCode.mapOfGDgdjs_9546Play_959532gameCode_9546GDbulletObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Play_32gameCode.GDEnemyObjects2 */
/* Reuse gdjs.Play_32gameCode.GDbulletObjects2 */
{for(var i = 0, len = gdjs.Play_32gameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDEnemyObjects2[i].getBehavior("Health").Hit(1, false, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Play_32gameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDbulletObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Play_32gameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDEnemyObjects2[i].getBehavior("Animation").setAnimationName("hurt");
}
}
{ //Subevents
gdjs.Play_32gameCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Play_32gameCode.GDEnemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Play_32gameCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Play_32gameCode.GDEnemyObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Play_32gameCode.GDEnemyObjects2[k] = gdjs.Play_32gameCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Play_32gameCode.GDEnemyObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Play_32gameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Play_32gameCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Play_32gameCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Play_32gameCode.GDEnemyObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Play_32gameCode.GDEnemyObjects1[k] = gdjs.Play_32gameCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Play_32gameCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Play_32gameCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.Play_32gameCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy_Spawn"), gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects1);
gdjs.copyArray(runtimeScene.getObjects("collsion"), gdjs.Play_32gameCode.GDcollsionObjects1);
gdjs.copyArray(runtimeScene.getObjects("room"), gdjs.Play_32gameCode.GDroomObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Play_32gameCode.GDroomObjects1.length !== 0 ? gdjs.Play_32gameCode.GDroomObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.Play_32gameCode.GDcollsionObjects1.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDcollsionObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects1.length ;i < len;++i) {
    gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects1[i].resetTimer("Enemy_Spawn");
}
}}

}


{


gdjs.Play_32gameCode.eventsList0(runtimeScene);
}


{


gdjs.Play_32gameCode.eventsList2(runtimeScene);
}


{


gdjs.Play_32gameCode.eventsList3(runtimeScene);
}


{


gdjs.Play_32gameCode.eventsList4(runtimeScene);
}


{


gdjs.Play_32gameCode.eventsList11(runtimeScene);
}


};

gdjs.Play_32gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Play_32gameCode.GDPlayerObjects1.length = 0;
gdjs.Play_32gameCode.GDPlayerObjects2.length = 0;
gdjs.Play_32gameCode.GDPlayerObjects3.length = 0;
gdjs.Play_32gameCode.GDPlayerObjects4.length = 0;
gdjs.Play_32gameCode.GDroomObjects1.length = 0;
gdjs.Play_32gameCode.GDroomObjects2.length = 0;
gdjs.Play_32gameCode.GDroomObjects3.length = 0;
gdjs.Play_32gameCode.GDroomObjects4.length = 0;
gdjs.Play_32gameCode.GDcollsionObjects1.length = 0;
gdjs.Play_32gameCode.GDcollsionObjects2.length = 0;
gdjs.Play_32gameCode.GDcollsionObjects3.length = 0;
gdjs.Play_32gameCode.GDcollsionObjects4.length = 0;
gdjs.Play_32gameCode.GDgunObjects1.length = 0;
gdjs.Play_32gameCode.GDgunObjects2.length = 0;
gdjs.Play_32gameCode.GDgunObjects3.length = 0;
gdjs.Play_32gameCode.GDgunObjects4.length = 0;
gdjs.Play_32gameCode.GDbulletObjects1.length = 0;
gdjs.Play_32gameCode.GDbulletObjects2.length = 0;
gdjs.Play_32gameCode.GDbulletObjects3.length = 0;
gdjs.Play_32gameCode.GDbulletObjects4.length = 0;
gdjs.Play_32gameCode.GDCursorObjects1.length = 0;
gdjs.Play_32gameCode.GDCursorObjects2.length = 0;
gdjs.Play_32gameCode.GDCursorObjects3.length = 0;
gdjs.Play_32gameCode.GDCursorObjects4.length = 0;
gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects1.length = 0;
gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects2.length = 0;
gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects3.length = 0;
gdjs.Play_32gameCode.GDEnemy_9595SpawnObjects4.length = 0;
gdjs.Play_32gameCode.GDEnemyObjects1.length = 0;
gdjs.Play_32gameCode.GDEnemyObjects2.length = 0;
gdjs.Play_32gameCode.GDEnemyObjects3.length = 0;
gdjs.Play_32gameCode.GDEnemyObjects4.length = 0;
gdjs.Play_32gameCode.GDCenterObjects1.length = 0;
gdjs.Play_32gameCode.GDCenterObjects2.length = 0;
gdjs.Play_32gameCode.GDCenterObjects3.length = 0;
gdjs.Play_32gameCode.GDCenterObjects4.length = 0;
gdjs.Play_32gameCode.GDEnemyHealthObjects1.length = 0;
gdjs.Play_32gameCode.GDEnemyHealthObjects2.length = 0;
gdjs.Play_32gameCode.GDEnemyHealthObjects3.length = 0;
gdjs.Play_32gameCode.GDEnemyHealthObjects4.length = 0;

gdjs.Play_32gameCode.eventsList12(runtimeScene);

return;

}

gdjs['Play_32gameCode'] = gdjs.Play_32gameCode;
