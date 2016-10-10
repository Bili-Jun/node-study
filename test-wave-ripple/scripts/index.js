window.onload = function() {
    console.log("test");
}

;
(function(window) {
    "use script" 

    var waves = waves || {},
        el = document.querySelectorAll.bind(document);

    

    waves.startEvent = function() {
        document.body.addEventListener("mousedown", function(e) {
            //console.log(e.clientX, e.clientY /*this.documentElement .clientTop, this.documentElement.clientLeft*/ );
            var ripple = document.createElement("div"),
                elem = getWaveElement(e);
            ripple.className = "waves-ripple";
            
            elem.appendChild(ripple);

            var docElem, win,
            box = {top: 0, left: 0},
            doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        var pos={
                top: box.top + win.pageYOffset - docElem.clientTop,
                left: box.left + win.pageXOffset - docElem.clientLeft
            }
            
            console.log(e,pos.top);
            ripple.setAttribute("style","top:"+(e.pageY-pos.top)
            +"px;left:"+(e.pageX-pos.left)+"px;");
        })
        
    }
    function getWaveElement(e){
        var element = null;
        element = e.target || e.srcElement;
        return element;
    }
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    document.addEventListener("DOMContentLoaded", function() {
        //var ele=el("div");
        waves.startEvent();
    }, false);
})(window);