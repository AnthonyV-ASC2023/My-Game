var gdjs;(function(c){let d;(function(R){let C;(function(t){t.getTweensMap=e=>e._tweens||(e._tweens=new c.TweenRuntimeBehavior.TweenManager),c.registerRuntimeScenePreEventsCallback(function(e){c.evtTools.tween.getTweensMap(e).step()}),t.sceneTweenExists=(e,n)=>t.getTweensMap(e).exists(n),t.sceneTweenIsPlaying=(e,n)=>t.getTweensMap(e).isPlaying(n),t.sceneTweenHasFinished=(e,n)=>t.getTweensMap(e).hasFinished(n),t.resumeSceneTween=(e,n)=>{t.getTweensMap(e).resumeTween(n)},t.pauseSceneTween=(e,n)=>{t.getTweensMap(e).pauseTween(n)},t.stopSceneTween=(e,n,r)=>{t.getTweensMap(e).stopTween(n,r)},t.removeSceneTween=(e,n)=>{t.getTweensMap(e).removeTween(n)},t.getProgress=(e,n)=>t.getTweensMap(e).getProgress(n),t.getValue=(e,n)=>t.getTweensMap(e).getValue(n);const l=c.evtTools.common.lerp,b=c.evtTools.common.exponentialInterpolation;t.addLayoutValueTween=(e,n,r,o,a,s,i)=>{t.getTweensMap(e).addSimpleTween(n,e,s,a,i?b:l,r,o,g=>{})},t.addLayerValueTween=(e,n,r,o,a,s,i,g)=>{const u=e.getLayer(g);t.getTweensMap(e).addSimpleTween(n,u,s,a,i?b:l,r,o,p=>{})},t.tweenVariableNumber=(e,n,r,o,a,s,i)=>{t.getTweensMap(e).addSimpleTween(n,e,s/1e3,i,l,o,a,g=>r.setNumber(g))},t.tweenVariableNumber2=(e,n,r,o,a,s)=>{t.tweenVariableNumber3(e,n,r,o,s,a/1e3)},t.tweenVariableNumber3=(e,n,r,o,a,s)=>{r.getType()==="number"&&t.getTweensMap(e).addSimpleTween(n,e,s,a,l,r.getValue(),o,i=>r.setNumber(i))},t.tweenCamera=(e,n,r,o,a,s,i)=>{T(e,n,r,o,a,s/1e3,i,e)},t.tweenCamera2=(e,n,r,o,a,s,i)=>{const g=e.getLayer(a);T(e,n,r,o,a,i,s,g)};const T=(e,n,r,o,a,s,i,g)=>{const u=e.getLayer(a);t.getTweensMap(e).addMultiTween(n,g,s,i,l,[u.getCameraX(),u.getCameraY()],[r,o],([p,y])=>{u.setCameraX(p),u.setCameraY(y)})};t.tweenCameraZoom=(e,n,r,o,a,s)=>{x(e,n,r,o,a/1e3,s,e,l)},t.tweenCameraZoom2=(e,n,r,o,a,s)=>{const i=e.getLayer(o);x(e,n,r,o,s,a,i,b)};const x=(e,n,r,o,a,s,i,g)=>{const u=e.getLayer(o);t.getTweensMap(e).addSimpleTween(n,i,a,s,g,u.getCameraZoom(),r,p=>u.setCameraZoom(p))};t.tweenCameraRotation=(e,n,r,o,a,s)=>{S(e,n,r,o,a/1e3,s,e)},t.tweenCameraRotation2=(e,n,r,o,a,s)=>{const i=e.getLayer(o);S(e,n,r,o,s,a,i)};const S=(e,n,r,o,a,s,i)=>{const g=e.getLayer(o);t.getTweensMap(e).addSimpleTween(n,i,a,s,l,g.getCameraRotation(),r,u=>g.setCameraRotation(u))}})(C=R.tween||(R.tween={}))})(d=c.evtTools||(c.evtTools={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=tweentools.js.map
