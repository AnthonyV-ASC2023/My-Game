gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDTitleObjects1= [];
gdjs.Main_32MenuCode.GDTitleObjects2= [];
gdjs.Main_32MenuCode.GDPlayObjects1= [];
gdjs.Main_32MenuCode.GDPlayObjects2= [];
gdjs.Main_32MenuCode.GDSettingsObjects1= [];
gdjs.Main_32MenuCode.GDSettingsObjects2= [];
gdjs.Main_32MenuCode.GDQuitObjects1= [];
gdjs.Main_32MenuCode.GDQuitObjects2= [];
gdjs.Main_32MenuCode.GDBackObjects1= [];
gdjs.Main_32MenuCode.GDBackObjects2= [];
gdjs.Main_32MenuCode.GDMainMenu_9595MarkerObjects1= [];
gdjs.Main_32MenuCode.GDMainMenu_9595MarkerObjects2= [];
gdjs.Main_32MenuCode.GDSoundObjects1= [];
gdjs.Main_32MenuCode.GDSoundObjects2= [];
gdjs.Main_32MenuCode.GDMusicObjects1= [];
gdjs.Main_32MenuCode.GDMusicObjects2= [];
gdjs.Main_32MenuCode.GDSound_9595SliderObjects1= [];
gdjs.Main_32MenuCode.GDSound_9595SliderObjects2= [];
gdjs.Main_32MenuCode.GDMusic_9595SliderObjects1= [];
gdjs.Main_32MenuCode.GDMusic_9595SliderObjects2= [];
gdjs.Main_32MenuCode.GDSettings_9595MarkerObjects1= [];
gdjs.Main_32MenuCode.GDSettings_9595MarkerObjects2= [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MainMenu_Marker"), gdjs.Main_32MenuCode.GDMainMenu_9595MarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Settings_Marker"), gdjs.Main_32MenuCode.GDSettings_9595MarkerObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenu_9595MarkerObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenu_9595MarkerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSettings_9595MarkerObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSettings_9595MarkerObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Main_32MenuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDPlayObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDPlayObjects1[k] = gdjs.Main_32MenuCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Play game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.Main_32MenuCode.GDSettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDSettingsObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDSettingsObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDSettingsObjects1[k] = gdjs.Main_32MenuCode.GDSettingsObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDSettingsObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Settings_Marker"), gdjs.Main_32MenuCode.GDSettings_9595MarkerObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "Camera Move", (( gdjs.Main_32MenuCode.GDSettings_9595MarkerObjects1.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDSettings_9595MarkerObjects1[0].getPointX("")), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "easeInOutQuad", 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Main_32MenuCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDBackObjects1[k] = gdjs.Main_32MenuCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainMenu_Marker"), gdjs.Main_32MenuCode.GDMainMenu_9595MarkerObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "Camera Move", (( gdjs.Main_32MenuCode.GDMainMenu_9595MarkerObjects1.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDMainMenu_9595MarkerObjects1[0].getPointX("")), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "easeInOutQuad", 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDQuitObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDQuitObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDQuitObjects1[k] = gdjs.Main_32MenuCode.GDQuitObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDQuitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound_Slider"), gdjs.Main_32MenuCode.GDSound_9595SliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDSound_9595SliderObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDSound_9595SliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDSound_9595SliderObjects1[k] = gdjs.Main_32MenuCode.GDSound_9595SliderObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDSound_9595SliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDSound_9595SliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound Effect Volume").setNumber((( gdjs.Main_32MenuCode.GDSound_9595SliderObjects1.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDSound_9595SliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Music_Slider"), gdjs.Main_32MenuCode.GDMusic_9595SliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMusic_9595SliderObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMusic_9595SliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDMusic_9595SliderObjects1[k] = gdjs.Main_32MenuCode.GDMusic_9595SliderObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMusic_9595SliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDMusic_9595SliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music Volume").setNumber((( gdjs.Main_32MenuCode.GDMusic_9595SliderObjects1.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDMusic_9595SliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayObjects2.length = 0;
gdjs.Main_32MenuCode.GDSettingsObjects1.length = 0;
gdjs.Main_32MenuCode.GDSettingsObjects2.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects1.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackObjects2.length = 0;
gdjs.Main_32MenuCode.GDMainMenu_9595MarkerObjects1.length = 0;
gdjs.Main_32MenuCode.GDMainMenu_9595MarkerObjects2.length = 0;
gdjs.Main_32MenuCode.GDSoundObjects1.length = 0;
gdjs.Main_32MenuCode.GDSoundObjects2.length = 0;
gdjs.Main_32MenuCode.GDMusicObjects1.length = 0;
gdjs.Main_32MenuCode.GDMusicObjects2.length = 0;
gdjs.Main_32MenuCode.GDSound_9595SliderObjects1.length = 0;
gdjs.Main_32MenuCode.GDSound_9595SliderObjects2.length = 0;
gdjs.Main_32MenuCode.GDMusic_9595SliderObjects1.length = 0;
gdjs.Main_32MenuCode.GDMusic_9595SliderObjects2.length = 0;
gdjs.Main_32MenuCode.GDSettings_9595MarkerObjects1.length = 0;
gdjs.Main_32MenuCode.GDSettings_9595MarkerObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
