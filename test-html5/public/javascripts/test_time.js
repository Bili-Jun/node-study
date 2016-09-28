/**
 * Web worker计时器
 * Create by Jun
*/





if(typeof(Worker)!=='undefined'){
	if(typeof(worker)=='undefined'){
	var	worker=new Worker('/javascripts/test_worker/time.js');
	}
	worker.onmessage=function(event){
		document.getElementById("result").innerHTML=event.data;
	}
}else{
	document.getElementById("result").innerHTML="Sorry, your browser does not support Web Workers...";
}

/**
 *开始计时 
*/
function start(){
	worker.postMessage('start');
	document.getElementById("start").innerHTML="开始计时";
}

/**
 *清零 
*/
function restart(){
	worker.postMessage('restart');
}

/**
 * 暂停计时
*/
function pause(){
	worker.postMessage('pause');
	document.getElementById("start").innerHTML="继续计时";
}


/**
 * 停止计时
*/
function stop(){
	worker.postMessage('stop');
	worker.terminate();
	alert('线程终止！');
	document.getElementById('result').innerHTML='';
	document.getElementById("start").innerHTML="开始计时";
	document.getElementById("start").setAttribute('disabled','true');
    document.getElementById("stop").setAttribute('disabled','true');
	document.getElementById("pause").setAttribute('disabled','true');
} 