(function(doc, win) {
    var docEl = doc.documentElement;
    var    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var    recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            //把document的fontSize大小设置成跟窗口成一定比例的大小，从而实现响应式效果
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);