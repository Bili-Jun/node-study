/**
 * 计时器Worker
 * Create by Jun
 */

var i=0;
var timer=null;
var flag=true;

function timedCount(){
	i=i+1;
	postMessage(i);
	timer=setTimeout("timedCount()",500);
}

function stopTimedCount(){
	clearTimeout(timer);
}

onmessage=function(event){
	if(event.data=='start'){
		timedCount();
	}else if(event.data=='pause'){
		stopTimedCount();
	}else if(event.data=='stop'){
		flag=true;
		postMessage('Stop'+flag);
	}else{
		flag=false;
		postMessage(flag)
	}
}

