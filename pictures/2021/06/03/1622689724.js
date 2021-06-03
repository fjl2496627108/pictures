/* 自适应布局 */
window.onresize = function dpr() {
	var d = document;
    // psd 设计稿宽度
    var desWidth = 750;
    var _dpr = (1 / window.devicePixelRatio);
    _dpr = 1;
    // 414为iPhone6p的设备独立像素
    var _MaxWidth = 414 * window.devicePixelRatio;
    var userAgent = navigator.userAgent;
    // 设备宽度
    var widthStr = 'device-width';
    // 是否移动设备
    var isMobile = true;
    var iWidth = 0;
    var _html = d.getElementsByTagName('html')[0];
    // 非移动设备
    if (userAgent.toLowerCase().indexOf('iphone') == -1 && userAgent.toLowerCase().indexOf('android') == -1) {
        isMobile = false; //iWidth = _MaxWidth;
        widthStr = iWidth + 'px';
    }
    d.querySelector('[name="viewport"]').setAttribute('content', 'width=' + widthStr + ' , initial-scale=' + _dpr + ', maximum-scale=' + _dpr + ', minimum-scale=' + _dpr + ', user-scalable=no');
    iWidth = Math.min(d.documentElement.clientWidth, window.innerWidth);
    if (!isMobile) iWidth = _MaxWidth;
    _html.style.fontSize = (((100 * iWidth) / desWidth)) + 'px';
    _html.dataset.dpr = 1; // window.devicePixelRatio;
};
window.onresize();