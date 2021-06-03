/* 
 * 自定义标题的 confirm
 */
function showConfirm(title, content, confirmfn, cancelfn) {
  $(document).dialog({
    type: 'confirm',
    closeBtnShow: false,
    style: 'ios',
    title: title,
    content: content,
    onClickConfirmBtn: function () {
      confirmfn()
    },
    onClickCancelBtn: function () {
      cancelfn && cancelfn()
    }
  });
}

/* 
 * 自定义 按钮 confirm
 */
function showBtnConfirm(content, cancelbtn, confirmbtn, confirmfn, cancelfn) {
  $(document).dialog({
    type: 'confirm',
    closeBtnShow: false,
    style: 'ios',
    titleShow: false,
    content: content,
    buttonTextConfirm: confirmbtn,
    buttonTextCancel: cancelbtn,
    onClickConfirmBtn: function () {
      confirmfn()
    },
    onClickCancelBtn: function () {
      cancelfn && cancelfn()
    }
  });
}

/* 
 * 点击遮罩层关闭 dialog
 */
function showDialog(title, content, confirmfn) {
  $(document).dialog({
    overlayClose: true,
    title: title,
    content: content,
    onClickConfirmBtn: function () {
      confirmfn()
    },
  });
}

/* 
 * notice 类型的 toast
 */
function showToast(info) {
  $(document).dialog({
    type: 'notice',
    infoText: info,
    autoClose: 1000,
    position: 'center',  // center: 居中; bottom: 底部
  });
}

/* 
 * alert 无标题
 */

function showAlert(info, fn) {
  $(document).dialog({
    titleShow: false,
    style: 'ios',
    content: info,
    onClickConfirmBtn: function() {
      fn && fn()
    }
  })
}

/* 
 * alert 无标题 自定义按钮
 */

function showBtnAlert(info, btnname) {
  $(document).dialog({
    titleShow: false,
    style: 'ios',
    content: info,
    buttonTextConfirm: btnname
  })
}

/* 
 * 获取查询字符串参数
 */
function getQueryStringArgs() {
  var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
    args = {},
    items = qs.length ? qs.split('&') : [],
    item = null,
    name = null,
    value = null,
    len = items.length;

  for (var i = 0; i < len; i++) {
    item = items[i].split('=');
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);

    if (name.length) {
      args[name] = value;
    }
  }
  return args;
}

/* 
 * 操作cookie
 */
var CookieUtil = {
  // 设置cookie
  set: function (name, value, expires, domain, path, secure) {
    var cookieText = "";
    cookieText += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    if (expires instanceof Date) {
      cookieText += "; expires=" + expires.toGMTString();
    }
    if (path) {
      cookieText += "; path=" + path;
    }
    if (domain) {
      cookieText += "; domain=" + domain;
    }
    if (secure) {
      cookieText += "; secure";
    }
    document.cookie = cookieText;
  },
  // name=value; expires=expiration_time; path=domain_path; domain=domain_name; secure
  // 获取cookie
  get: function (name) {
    var cookieName = encodeURIComponent(name) + "=",
      cookieStart = document.cookie.indexOf(cookieName),
      cookieValue = "";
    if (cookieStart > -1) {
      var cookieEnd = document.cookie.indexOf(";", cookieStart);
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length;
      }
      cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
  },
  // 删除cookie
  unset: function (name, domain, path, secure) {
    this.set(name, "", Date(0), domain, path, secure);
  }
};


/* 
 * 手机号校验
 */
function testMobile(tel) {
  var myreg = /^[1][3,4,5,6,7,8][0-9]{9}$/;
  if (!myreg.test(tel)) {
    return false
  } else {
    return true
  }
}

/* 
 * 6-18位包含数字和字母密码校验
 */
function testPassword(pass) {
  // var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,18}$/
  var reg = /^(?![0-9]+$)(?![a-zA-Z]+$).{8,18}$/ // 不限制字符但是必须包括字符和数字
  if(!reg.test(pass)) {
    return false
  } else {
    return true
  }
}


/**
 * Convert a base64 string in a Blob according to the data and contentType.
 *
 * @param b64Data {String} Pure base64 string without contentType
 * @param contentType {String} the content type of the file i.e (image/jpeg - image/png - text/plain)
 * @param sliceSize {Int} SliceSize to process the byteCharacters
 * @see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
 * @return Blob
 */
function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
  }

  var blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

// base64 对象转File 对象 （中间必须要先转为blob对象）

function b64ToFile (imgUrl) {
  var block = imgUrl.split(';');
  var contentType = block[0].split(':')[1];

  var realData = block[1].split(',')[1];
  // 
  var blobObj = b64toBlob(realData, contentType);

  var fileObj = new File([blobObj], 'avatar.jpeg');
  
  return fileObj;
}
