class Metcha {

  static convertStyle(object) {
    let style = '';

    for (const a in object) {
      if (object.hasOwnProperty(a)) {
          style += (`${a}:${object[a]};`);
        }
    }

    return style;
  }
}

String.prototype.isEmpty = function () {
  let flag = true;
  if (this.replace(/(^\s*)|(\s*$)/g, '').length > 0) {
    flag = false;
  }
  return flag;
};
String.prototype.isNotEmpty = function (flag = false) {
  flag = this.toString().isEmpty();
  return !flag;
};


(function (window) {
  'use script';

  const [
        waves,
        event,
        el,
        isWindow,
        getWindow,
        disableRightButton
    ] = [
            // waves:初始化waves
            {},

            // event:wave基本事件
      {
        duration: 750
      },

            // 通过绑定document,获取document内的元素
      document.querySelectorAll.bind(document),

            // 判断对象是否是window对象
      obj => obj !== null && obj === obj.window,

            // 获取window对象
      element => isWindow(element) ? element : (element.nodeType === 9 && element.defaultView),

            // 禁用鼠标右键点击事件
      e => e.button && e.button === 2 ? false : true
    ];

  const touchEvent = {
    touches: 0,
    allowEvent(e) {
      let flag = true;

      if (e.type === 'touchstart') {
          touchEvent.touches += 1; // push
        } else if (e.type === 'touchend' || e.type === 'touchcancel') {
            setTimeout(() => {
                if (touchEvent.touches > 0) {
                  touchEvent.touches -= 1; // pop after 500ms
                }
              }, 500);
          } else if (e.type === 'mousedown' && touchEvent.touches > 0) {
              flag = false;
            }

      return flag;
    },
    touchup(e) {
      touchEvent.allowEvent(e);
    }
  };

    /* 获取className 含有'waves'的元素*/
  function getWavesEventElement(e) {
    let [element, target] = [null, null];
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

    // Object to css string
  function convertStyle(obj) {
    let style = '';

    for (const a in obj) {
      if (obj.hasOwnProperty(a)) {
          style += (`${a}:${obj[a]};`);
        }
    }

    return style;
  }



    // waves 基本事件:显示ripple
  event.show = function (e, element) {

        // 禁用鼠标右键点击触发
    if (e.button && e.button === 2) {
      return false;
    }

    let [
            ripple,
            waveElem,
            basePos,
            baseDoc,
            docElem,
            win,
            rippleStyle,
            scale,
            relativeY,
            relativeX
        ] = [
                // 创建riiple div
          document.createElement('div'),

                // 初始化class 含有'waves'的元素
                (element || this),

                // 初始化元素相对位置
          {
            top: 0,
            left: 0
          },

                // 初始化document元素
          new Object(),

                // 初始化documentElement
          new Object(),

                // 初始化window对象
          new Object(),

                // 初始化riiple 样式
                {},

                // css scale属性
          null,

                // 鼠标实时点击元素的相对位置:Y轴
          0,

                // 鼠标实时点击元素的相对位置:X轴
          0,
        ];

        // 设置ripple className属性
    ripple.className = 'waves-ripple';

        // 将riiple插入waves element
    waveElem.appendChild(ripple);

        // 设置document 对象
    baseDoc = waveElem && waveElem.ownerDocument;

        // 设置documentElement
    docElem = baseDoc.documentElement;

        // 获取并设置window对象
    win = getWindow(baseDoc);

        // 绑定鼠标实时点击 clientRect
    if (typeof waveElem.getBoundingClientRect !== undefined) {
      basePos = waveElem.getBoundingClientRect();
    }

        // 设置鼠标实时点击元素的相对位置:Y轴
    relativeY = (('touches'in e) ? e.touches[0].pageY : e.pageY) - (basePos.top + win.pageYOffset - docElem.clientTop);

        // 设置鼠标实时点击元素的相对位置:X轴
    relativeX = (('touches'in e) ? e.touches[0].pageX : e.pageX) - (basePos.left + win.pageXOffset - docElem.clientLeft);

    scale = `scale(${(waveElem.clientWidth / 100) * 10})`;

    rippleStyle = {
      top: `${relativeY}px`,
      left: `${relativeX}px`
    };

        // 设置ripple 动态css样式
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

    rippleStyle['-webkit-transition-duration'] = `${750}ms`;
    rippleStyle['-moz-transition-duration'] = `${750}ms`;
    rippleStyle['-o-transition-duration'] = `${750}ms`;
    rippleStyle['transition-duration'] = `${750}ms`;

    rippleStyle['-webkit-transition-timing-function'] = 'ease-in-out(0.250, 0.460, 0.450, 0.940)';
    rippleStyle['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
    rippleStyle['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
    rippleStyle['transition-timing-function'] = 'ease-in-out(0.250, 0.460, 0.450, 0.940)';

    ripple.setAttribute('style', convertStyle(rippleStyle));
  };



  event.hide = function (e) {

    touchEvent.touchup(e);

        // 当前指针
    const $this = this;

    let [
            ripple,
            ripples,
            waveElem,
            delay,
            relativeX,
            relativeY,
            scale
        ] = [
          new Object(),
                // 获取ripples元素
          $this.getElementsByClassName('waves-ripple'),

                // 获取waves 元素
          getWavesEventElement(e),

                // ripple 延迟消失时间初始化
          0,

                // 设置鼠标实时点击元素的相对位置:Y轴
          0,

                // 设置鼠标实时点击元素的相对位置:X轴
          0,
        ];
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

    setTimeout(() => {
      const rippleStyle = {
          top: `${relativeY}px`,
          left: `${relativeX}px`,
          opacity: '0',

                // Duration
          '-webkit-transition-duration': `${event.duration}ms`,
          '-moz-transition-duration': `${event.duration}ms`,
          '-o-transition-duration': `${event.duration}ms`,
          'transition-duration': `${event.duration}ms`,
          '-webkit-transform': scale,
          '-moz-transform': scale,
          '-ms-transform': scale,
          '-o-transform': scale,
          transform: scale,
        };

      ripple.setAttribute('style', convertStyle(rippleStyle));

      setTimeout(() => {
          try {
              $this.removeChild(ripple);
            } catch (e) {
                return false;
              }
        }, event.duration);
    }, delay);
  };

  waves.effect = function (e) {
    const temp = document.createElement('div');
    temp.className = 'temp';
    document.body.appendChild(temp);
    temp.innerHTML = e.type;
    const element = getWavesEventElement(e);
    if (element != null) {
      event.show(e, element);

      if ('ontouchstart' in window) {
          element.addEventListener('touchend', event.hide, false);
          element.addEventListener('touchcancel', event.hide, false);
        }

      element.addEventListener('mouseup', event.hide, false);
      element.addEventListener('mouseleave', event.hide, false);
    }
  };

  waves.run = function () {
    if ('ontouchstart' in window) {
      document.body.addEventListener('touchstart', waves.effect, false);
    }

    document.body.addEventListener('mousedown', waves.effect, false);

  };

  window.waves = waves;

  document.addEventListener('DOMContentLoaded', () => {
    waves.run();

  }, false);

}(window));
