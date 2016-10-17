/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Metcha = function () {
	    function Metcha() {
	        _classCallCheck(this, Metcha);
	    }

	    _createClass(Metcha, null, [{
	        key: 'convertStyle',
	        value: function convertStyle(object) {
	            var style = '';

	            for (var a in object) {
	                if (object.hasOwnProperty(a)) {
	                    style += a + ':' + object[a] + ';';
	                }
	            }

	            return style;
	        }
	    }]);

	    return Metcha;
	}();

	String.prototype.isEmpty = function () {
	    var flag = true;
	    if (this.replace(/(^\s*)|(\s*$)/g, "").length > 0) {
	        flag = false;
	    }
	    return flag;
	};
	String.prototype.isNotEmpty = function () {
	    var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    flag = this.toString().isEmpty();
	    return !flag;
	};

	(function (window) {
	    'use script';

	    var _ref = [
	    //waves:初始化waves
	    {},

	    //event:wave基本事件
	    {
	        duration: 750
	    },

	    //通过绑定document,获取document内的元素
	    document.querySelectorAll.bind(document),

	    //判断对象是否是window对象
	    function (obj) {
	        return obj !== null && obj === obj.window;
	    },

	    //获取window对象
	    function (element) {
	        return isWindow(element) ? element : element.nodeType === 9 && element.defaultView;
	    },

	    //禁用鼠标右键点击事件
	    function (e) {
	        return e.button && e.button === 2 ? false : true;
	    }];
	    var waves = _ref[0];
	    var event = _ref[1];
	    var el = _ref[2];
	    var isWindow = _ref[3];
	    var getWindow = _ref[4];
	    var disableRightButton = _ref[5];


	    var touchEvent = {
	        touches: 0,
	        allowEvent: function allowEvent(e) {
	            var flag = true;

	            if (e.type === 'touchstart') {
	                touchEvent.touches += 1; //push
	            } else if (e.type === 'touchend' || e.type === 'touchcancel') {
	                setTimeout(function () {
	                    if (touchEvent.touches > 0) {
	                        touchEvent.touches -= 1; //pop after 500ms
	                    }
	                }, 500);
	            } else if (e.type === 'mousedown' && touchEvent.touches > 0) {
	                flag = false;
	            }

	            return flag;
	        },
	        touchup: function touchup(e) {
	            touchEvent.allowEvent(e);
	        }
	    };

	    /*获取className 含有'waves'的元素*/
	    function getWavesEventElement(e) {
	        var element = null;
	        var target = null;

	        if (e != undefined) {

	            if (touchEvent.allowEvent(e) === false) {
	                return null;
	            }

	            target = e.target || e.srcElement;
	            while (target.parentElement != null) {
	                if (target.className.indexOf('waves') !== -1) {
	                    element = target;
	                    break;
	                } else if (target.classList.contains('waves')) {
	                    element = target;
	                    break;
	                }
	                target = target.parentElement;
	            }
	        }

	        return element;
	    }

	    //Object to css string
	    function convertStyle(obj) {
	        var style = '';

	        for (var a in obj) {
	            if (obj.hasOwnProperty(a)) {
	                style += a + ':' + obj[a] + ';';
	            }
	        }

	        return style;
	    }

	    //waves 基本事件:显示ripple
	    event.show = function (e, element) {

	        //禁用鼠标右键点击触发
	        if (e.button && e.button === 2) {
	            return false;
	        }

	        var _ref2 = [
	        //创建riiple div
	        document.createElement('div'),

	        //初始化class 含有'waves'的元素
	        element || this,

	        //初始化元素相对位置
	        {
	            top: 0,
	            left: 0
	        },

	        //初始化document元素
	        new Object(),

	        //初始化documentElement
	        new Object(),

	        //初始化window对象
	        new Object(),

	        //初始化riiple 样式
	        {},

	        //css scale属性
	        null,

	        //鼠标实时点击元素的相对位置:Y轴
	        0,

	        //鼠标实时点击元素的相对位置:X轴
	        0];
	        var ripple = _ref2[0];
	        var waveElem = _ref2[1];
	        var basePos = _ref2[2];
	        var baseDoc = _ref2[3];
	        var docElem = _ref2[4];
	        var win = _ref2[5];
	        var rippleStyle = _ref2[6];
	        var scale = _ref2[7];
	        var relativeY = _ref2[8];
	        var relativeX = _ref2[9];

	        //设置ripple className属性    

	        ripple.className = "waves-ripple";

	        //将riiple插入waves element
	        waveElem.appendChild(ripple);

	        //设置document 对象
	        baseDoc = waveElem && waveElem.ownerDocument;

	        //设置documentElement
	        docElem = baseDoc.documentElement;

	        //获取并设置window对象
	        win = getWindow(baseDoc);

	        //绑定鼠标实时点击 clientRect
	        if (_typeof(waveElem.getBoundingClientRect) !== undefined) {
	            basePos = waveElem.getBoundingClientRect();
	        }

	        //设置鼠标实时点击元素的相对位置:Y轴
	        relativeY = ('touches' in e ? e.touches[0].pageY : e.pageY) - (basePos.top + win.pageYOffset - docElem.clientTop);

	        //设置鼠标实时点击元素的相对位置:X轴
	        relativeX = ('touches' in e ? e.touches[0].pageX : e.pageX) - (basePos.left + win.pageXOffset - docElem.clientLeft);

	        scale = 'scale(' + waveElem.clientWidth / 100 * 10 + ')';

	        rippleStyle = {
	            'top': relativeY + 'px',
	            'left': relativeX + 'px'
	        };

	        //设置ripple 动态css样式
	        ripple.setAttribute('style', convertStyle(rippleStyle));

	        ripple.setAttribute('data-start', Date.now());
	        ripple.setAttribute('data-scale', scale);
	        ripple.setAttribute('data-x', relativeX);
	        ripple.setAttribute('data-y', relativeY);

	        rippleStyle['-webkit-transform'] = scale;
	        rippleStyle['-moz-transform'] = scale;
	        rippleStyle['-ms-transform'] = scale;
	        rippleStyle['-o-transform'] = scale;
	        rippleStyle.transform = scale;
	        rippleStyle.opacity = '1';

	        rippleStyle['-webkit-transition-duration'] = 750 + 'ms';
	        rippleStyle['-moz-transition-duration'] = 750 + 'ms';
	        rippleStyle['-o-transition-duration'] = 750 + 'ms';
	        rippleStyle['transition-duration'] = 750 + 'ms';

	        rippleStyle['-webkit-transition-timing-function'] = 'ease-in-out(0.250, 0.460, 0.450, 0.940)';
	        rippleStyle['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
	        rippleStyle['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
	        rippleStyle['transition-timing-function'] = 'ease-in-out(0.250, 0.460, 0.450, 0.940)';

	        ripple.setAttribute('style', convertStyle(rippleStyle));
	    };

	    event.hide = function (e) {

	        touchEvent.touchup(e);

	        //当前指针
	        var $this = this;

	        var _ref3 = [new Object(),
	        //获取ripples元素
	        $this.getElementsByClassName('waves-ripple'),

	        //获取waves 元素
	        getWavesEventElement(e),

	        //ripple 延迟消失时间初始化
	        0,

	        //设置鼠标实时点击元素的相对位置:Y轴
	        0,

	        //设置鼠标实时点击元素的相对位置:X轴
	        0];
	        var ripple = _ref3[0];
	        var ripples = _ref3[1];
	        var waveElem = _ref3[2];
	        var delay = _ref3[3];
	        var relativeX = _ref3[4];
	        var relativeY = _ref3[5];
	        var scale = _ref3[6];

	        if (ripples.length > 0) {
	            ripple = ripples[ripples.length - 1];
	        } else {
	            return false;
	        }

	        relativeY = ripple.getAttribute('data-y');
	        relativeX = ripple.getAttribute('data-x');
	        scale = ripple.getAttribute('data-scale');

	        delay = 350 - (Date.now() - Number(ripple.getAttribute('data-start')));

	        if (delay < 0) {
	            delay = 0;
	        }

	        setTimeout(function () {
	            var rippleStyle = {
	                'top': relativeY + 'px',
	                'left': relativeX + 'px',
	                'opacity': '0',

	                // Duration
	                '-webkit-transition-duration': event.duration + 'ms',
	                '-moz-transition-duration': event.duration + 'ms',
	                '-o-transition-duration': event.duration + 'ms',
	                'transition-duration': event.duration + 'ms',
	                '-webkit-transform': scale,
	                '-moz-transform': scale,
	                '-ms-transform': scale,
	                '-o-transform': scale,
	                'transform': scale
	            };

	            ripple.setAttribute('style', convertStyle(rippleStyle));

	            setTimeout(function () {
	                try {
	                    $this.removeChild(ripple);
	                } catch (e) {
	                    return false;
	                }
	            }, event.duration);
	        }, delay);
	    };

	    waves.effect = function (e) {
	        var temp = document.createElement('div');
	        temp.className = 'temp';
	        document.body.appendChild(temp);
	        temp.innerHTML = e.type;
	        var element = getWavesEventElement(e);
	        if (element != null) {
	            event.show(e, element);

	            if ('ontouchstart' in window) {
	                element.addEventListener('touchend', event.hide, false);
	                element.addEventListener('touchcancel', event.hide, false);
	            }

	            element.addEventListener("mouseup", event.hide, false);
	            element.addEventListener("mouseleave", event.hide, false);
	        }
	    };

	    waves.run = function () {
	        if ('ontouchstart' in window) {
	            document.body.addEventListener('touchstart', waves.effect, false);
	        }

	        document.body.addEventListener("mousedown", waves.effect, false);
	    };

	    window.waves = waves;

	    document.addEventListener('DOMContentLoaded', function () {
	        waves.run();
	    }, false);
	})(window);

/***/ }
/******/ ]);