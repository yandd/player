!function(o,e,n){"use strict";wx.ready(function(){wx.hideOptionMenu(),wx.getLocation({type:"wgs84",success:function(e){var n=e.latitude,t=e.longitude,i=e.speed,c=e.accuracy,l=window.juli.host+window.juli.dir+"/location/insertLocation.do";console.log("latitude:"+n),console.log("longitude:"+t),console.log("speed:"+i),console.log("accuracy:"+c);var s=window.sessionStorage.getItem(juli.openIdkey);console.log("openId:"+s),console.log("url:"+l),o.ajax({type:"GET",url:l,contentType:"application/json",async:!1,timeout:5e3,data:{openid:s,longitude:t,latitude:n},success:function(){console.log("insert OK")},error:function(o){}})}})}),wx.error(function(o){JSON.stringify(o),alert(o.errMsg)})}(jQuery,window);