    var weixin_config_appId, weixin_config_timestamp, weixin_config_nonceStr, weixin_config_signature;
    ajax_post2('common/weixin-js-sdk', {
        url: window.location.href
    }, function (res) {
        weixin_config_appId = res.appId;
        weixin_config_timestamp = res.timestamp;
        weixin_config_nonceStr = res.nonceStr;
        weixin_config_signature = res.signature;
    });


    //配置
    wx.config({
        debug: false, //开启调试模式
        appId: weixin_config_appId, //公众号的唯一标识
        timestamp: weixin_config_timestamp, //生成签名的时间戳
        nonceStr: weixin_config_nonceStr, //生成签名的随机串
        signature: weixin_config_signature, //签名
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] // 需要使用的JS接口列表
    });

    function weixinShare(share) {
        //分享到朋友圈
        wx.onMenuShareTimeline({
            title: share.title, // 分享标题
            link: share.linkurl, // 分享链接
            imgUrl: share.thumb, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });

        //分享给朋友
        wx.onMenuShareAppMessage({
            title: share.title, // 分享标题
            desc: share.describe, // 分享描述
            link: share.linkurl, // 分享链接
            imgUrl: share.thumb, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });

        //分享到QQ
        wx.onMenuShareQQ({
            title: share.title, // 分享标题
            desc: share.describe, // 分享描述
            link: share.linkurl, // 分享链接
            imgUrl: share.thumb, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });

        //分享到腾讯微博
        wx.onMenuShareWeibo({
            title: share.title, // 分享标题
            desc: share.describe, // 分享描述
            link: share.linkurl, // 分享链接
            imgUrl: share.thumb, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });

        //分享到QQ空间
        wx.onMenuShareQZone({
            title: share.title, // 分享标题
            desc: share.describe, // 分享描述
            link: share.linkurl, // 分享链接
            imgUrl: share.thumb, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
    }
