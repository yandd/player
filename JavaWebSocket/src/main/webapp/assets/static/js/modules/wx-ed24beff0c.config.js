!function(e,o,n){function i(o,n){e.ajax({url:juli.URL.getSign,type:"POST",dataType:"json",data:{code:o,url:n}}).done(function(e){console.log(e),"0"===e.error?window.location.href=r:wx.config({beta:!0,debug:!1,appId:e.appid,timestamp:Number(e.timestamp),nonceStr:e.nonceStr,signature:e.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","translateVoice","startRecord","stopRecord","onVoiceRecordEnd","playVoice","onVoicePlayEnd","pauseVoice","stopVoice","uploadVoice","downloadVoice","chooseImage","previewImage","uploadImage","downloadImage","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","closeWindow","scanQRCode","chooseWXPay","openProductSpecificView","addCard","chooseCard","openCard","configWXDeviceWiFi"]})}).fail(function(){console.log("error")})}var t={parse:function(e){var o=/[\?&]([^\?&=]+)=([^&]+)/g,n=null,i={};for(e=e||window.location.search;null!=(n=o.exec(e));)i[n[1]]=decodeURIComponent(n[2]);return i},get:function(e,o){var n=this.parse(o);return n[e]?n[e]:""},check:function(e){var o=/^https?:\/\/[a-z]+\.fenqile\.com\//i,n=!0;return/^https?/.test(e)&&(n=o.test(e)),n}},a=window.location.href,c=(t.parse(a),location.href.split("#")[0]),r=(encodeURIComponent(c),"https://open.weixin.qq.com/connect/oauth2/authorize?appid="+window.juli.appid+"&redirect_uri="+c+"&response_type=code&scope=snsapi_base#wechat_redirect"),s=t.get("code",a);i(s,c)}(jQuery,window);