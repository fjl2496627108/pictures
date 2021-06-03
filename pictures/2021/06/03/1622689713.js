var ERR_OK = '0000'
var BASE_URL_DEV = 'https://apitest.zyh365.com/api/web'
var BASE_URL_PRD = 'https://appapi.zyh365.com'
var BASE_URL_LOCAL = 'http://localhost/zyhweb_china/api/web'

function initUrl(uri) {
  var url = window.location.href
  var newUrl =
    url.indexOf('appapi.zyh365.com') != -1
      ? BASE_URL_PRD
      : url.indexOf('localhost/zyhweb_china') != -1
      ? BASE_URL_LOCAL
      : url.indexOf('apitest.zyh365.com') != -1
      ? BASE_URL_DEV
      : ''
  return newUrl + uri + '?app_id=h5'
}

function initUrl2(uri) {
  var url = window.location.href
  var newUrl =
    url.indexOf(BASE_URL_PRD) != -1
      ? BASE_URL_PRD
      : url.indexOf(BASE_URL_LOCAL) != -1
      ? BASE_URL_LOCAL
      : url.indexOf(BASE_URL_DEV) != -1
      ? BASE_URL_DEV
      : ''
  return newUrl + '/' + uri + '?app_id=h5'
}

function _ajaxPost(url, data, successfn, errorfn) {
  $.ajax({
    url: initUrl(url),
    data: data,
    type: 'post',
    dataType: 'json',
    success: function(res) {
      successfn && successfn(res)
    },
    error: function(e) {
      errorfn && errorfn(e)
    }
  })
}

function ajax_post2(url, data, successfn, errorfn) {
  $.ajax({
    url: initUrl2(url),
    data: data,
    type: 'post',
    async: false,
    dataType: 'json',
    success: function(res) {
      successfn && successfn(res)
    },
    error: function(e) {
      errorfn && errorfn(e)
    }
  })
}

function _ajaxGet(url, data, successfn, errorfn) {
  $.ajax({
    url: url,
    data: data,
    type: 'get',
    dataType: 'json',
    success: function(data) {
      successfn && successfn(data)
    },
    error: function(e) {
      errorfn && errorfn(e)
    }
  })
}
