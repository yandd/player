function getCookie(i){if(document.cookie.length>0){var a=document.cookie.indexOf(i+"=");if(a!=-1){var a=a+i.length+1,e=document.cookie.indexOf(";",a);return e==-1&&(e=document.cookie.length),unescape(document.cookie.substring(a,e))}}return""}var _opId="";_opId=""===sessionStorage.getItem(juli.openIdkey)||null===sessionStorage.getItem(juli.openIdkey)?getCookie(juli.openIdkey):sessionStorage.getItem(juli.openIdkey),console.log(_opId);var utils={pagesize:10,openid:_opId,tracklist:"播放列表",getfav:function(i){if(!LOCAL_TEST){var a=i;$.ajax({url:juli.URL.getlike,type:"get",dataType:"json",cache:!1,async:!1,data:{openId:utils.openid}}).done(function(i){console.log(i),a.favlist=i})}},gettrackList:function(){var i;return $.ajax({url:juli.URL.getplaytracklist,type:"get",async:!1,cache:!1,data:{deviceId:utils.getdevice()}}).done(function(a){console.log(a),i=a}),i},trackListId:function(){var i;return $.ajax({url:juli.URL.gettracklist,type:"get",async:!1,cache:!1,data:{deviceId:utils.getdevice()}}).done(function(a){console.log(a),i=a[0].id,console.log(i)}),i},createtrackList:function(){var i={id:0,deviceId:utils.getdevice(),name:"默认列表",coverSmallUrl:""};console.log(i),$.ajax({url:juli.URL.addlist,type:"post",contentType:"application/json",data:JSON.stringify(i)}).done(function(i){console.log(i)})},getdevice:function(){var i;utils.openid;return $.ajax({url:juli.URL.getdevice,type:"get",async:!1,cache:!1,data:{openId:utils.openid}}).done(function(a){console.log(a),i=a,window.deviceId=a}),i},showOfflineToast:function(){"zhiban"==DEBUG||"taizhi"==DEBUG?$.toast("机器人不在线","text"):"orange"==DEBUG?$.toast("小桔灯不在线","text"):"bear"==DEBUG?$.toast("吉特熊不在线","text"):"yuandao"==DEBUG?$.toast("早教机不在线","text"):"jinglin"==DEBUG?$.toast("小七不在线","text"):$.toast("故事机不在线","text")},demand:function(i,a){if(!utils.getdevice())return $.alert("您还没有绑定设备，请去绑定设备！","",function(){}),!1;if(!utils.online())return utils.showOfflineToast(),!1;var e={openId:utils.openid,trackId:i,url:a};$.ajax({url:juli.URL.demand+"?mediaId=",type:"POST",contentType:"application/json",async:!1,timeout:4e3,data:JSON.stringify(e),success:function(i){"0"==i?$.toast("点播成功！","text"):$.toast("点播失败","text")}})},play:function(i){var a={openId:utils.openid,trackId:i};console.log(JSON.stringify(a)),$.ajax({url:juli.URL.play+"?mediaId=",type:"POST",contentType:"application/json",cache:!1,data:JSON.stringify(a)}).done(function(i){console.log(i)})},getparam:function(i){i=i.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var a="[\\?&]"+i+"=([^&#]*)",e=new RegExp(a),g=e.exec(window.location.search);return null==g?"":decodeURIComponent(g[1].replace(/\+/g," "))},formatSeconds:function(i){var a=parseInt(i),e=0,g=0;a>60&&(e=parseInt(a/60),a=parseInt(a%60),e>60&&(g=parseInt(e/60),e=parseInt(e%60)));var t=""+parseInt(a)+"秒";return e>0&&(t=""+parseInt(e)+"分"+t),g>0&&(t=""+parseInt(g)+"小时"+t),t},online:function(){var i;return $.ajax({url:juli.URL.getinfo,type:"get",async:!1,cache:!1,data:{deviceId:utils.getdevice()}}).done(function(a){i=a.online}),i},settitle:function(i){console.log(i);var a=$("body");document.title=i;var e=$("<iframe style='display:none;' src='/favicon.ico'></iframe>");e.on("load",function(){setTimeout(function(){e.off("load").remove()},0)}).appendTo(a)},clearselect:function(){$("#select").val(""),$("#select").data("values","")},clearselectall:function(){$("#selectall").val(""),$("#selectall").data("values","")},setImgSmallLarge:function(i){switch(i.name){case"子鱼讲故事":i.imgLarge="static/img/rooboimg/imgLarge/ziyu.jpg",i.imgSmall="static/img/rooboimg/imgSmall/ziyu.png";break;case"晓月讲故事":i.imgLarge="static/img/rooboimg/imgLarge/xiaoyue.jpg",i.imgSmall="static/img/rooboimg/imgSmall/xiaoyue.png";break;case"儿歌童谣":i.imgLarge="static/img/rooboimg/imgLarge/ertong.png",i.imgSmall="static/img/rooboimg/imgSmall/ertong.png";break;case"故事精选":i.imgLarge="static/img/rooboimg/imgLarge/jingxuan.png",i.imgSmall="static/img/rooboimg/imgSmall/jingxuan.png";break;case"动画故事":i.imgLarge="static/img/rooboimg/imgLarge/donghua.jpg",i.imgSmall="static/img/rooboimg/imgSmall/donghua.png";break;case"安全常识":i.imgLarge="static/img/rooboimg/imgLarge/anquan.jpg",i.imgSmall="static/img/rooboimg/imgSmall/anquan.png";break;case"社会交往":i.imgLarge="static/img/rooboimg/imgLarge/jiaowang.png",i.imgSmall="static/img/rooboimg/imgSmall/jiaowang.png";break;case"性格培养":i.imgLarge="static/img/rooboimg/imgLarge/xingge.png",i.imgSmall="static/img/rooboimg/imgSmall/xingge.png";break;case"精品绘本":i.imgLarge="static/img/rooboimg/imgLarge/huiben.png",i.imgSmall="static/img/rooboimg/imgSmall/huiben.png";break;case"英语启蒙":i.imgLarge="static/img/rooboimg/imgLarge/qimeng.png",i.imgSmall="static/img/rooboimg/imgSmall/qimeng.png";break;case"晚安故事":i.imgLarge="static/img/rooboimg/imgLarge/wanan.png",i.imgSmall="static/img/rooboimg/imgSmall/wanan.png";break;case"热门专辑":i.imgLarge="static/img/rooboimg/imgLarge/zhuanji.png",i.imgSmall="static/img/rooboimg/imgSmall/zhuanji.png";break;case"科普益智":i.imgLarge="static/img/rooboimg/imgLarge/yizhi.png",i.imgSmall="static/img/rooboimg/imgSmall/yizhi.png";break;case"国学历史":i.imgLarge="static/img/rooboimg/imgLarge/lishi.png",i.imgSmall="static/img/rooboimg/imgSmall/lishi.png";break;case"走进艺术":i.imgLarge="static/img/rooboimg/imgLarge/yishu.png",i.imgSmall="static/img/rooboimg/imgSmall/yishu.png";break;case"家长专区":i.imgLarge="static/img/rooboimg/imgLarge/jiazhang.png",i.imgSmall="static/img/rooboimg/imgSmall/jiazhang.png";break;case"小学学科":i.imgLarge="static/img/rooboimg/imgLarge/xueke.png",i.imgSmall="static/img/rooboimg/imgSmall/xueke.png";break;case"儿歌":i.imgLarge="static/img/rooboimg/imgLarge/ertong.png",i.imgSmall="static/img/rooboimg/imgSmall/xueke.png";break;case"故事":i.imgLarge="static/img/rooboimg/imgLarge/jingxuan.png",i.imgSmall="static/img/rooboimg/imgSmall/xueke.png";break;case"国学":i.imgLarge="static/img/rooboimg/imgLarge/jiazhang.png",i.imgSmall="static/img/rooboimg/imgSmall/xueke.png";break;case"英语":i.imgLarge="static/img/rooboimg/imgLarge/yishu.png",i.imgSmall="static/img/rooboimg/imgSmall/xueke.png"}return i},getClientId:function(){var i=window.juli.clientId,a=utils.getdevice();return null!=a&&""!=a&&a.indexOf("test")==-1&&(i=a.split("_")[0]),i}};