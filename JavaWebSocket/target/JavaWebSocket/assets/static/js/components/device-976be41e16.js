configvm=new Vue({el:"html",data:{info:"",firmware:"",isonline:!0,num:0,newversion:!1,updating:!1,electricitynum:""},computed:{canupdate:function(){return!!this.isonline&&!(this.electricitynum<50)}},ready:function(){getBoxInfo(),this.getinfo(),this.getlistnum(),this.getver()},methods:{getlistnum:function(){var i=this;$.ajax({url:juli.URL.getplaytracklist,type:"get",dataType:"json",cache:!1,data:{deviceId:utils.getdevice()}}).done(function(e){$.each(e,function(e,t){i.num+=t.downloadTrackCount})})},getver:function(){var i=this;$.ajax({url:juli.URL.getversion,type:"get",async:!1,cache:!1,data:{deviceId:utils.getdevice()}}).done(function(e){console.log(e),i.firmware=e,"1.1.10.170629"==i.info.firmwareVersion&&(i.newversion=!0,clientCreate(onConnectCallback))})},update:function(){var i=this;$.confirm("将升级机器人软件，请保证您在机器人旁边，升级过程中不要关机或断开网络。",function(){i.updatefun()},function(){return!1})},updatefun:function(){boxUpgrade(this.firmware[0],this.firmware[1]),this.newversion=!1,this.updating=!0},getinfo:function(){var i=this;utils.online()||("zhiban"==DEBUG?$.toptip("机器人不在线！",6e5,"warning"):"jinglin"==DEBUG?$.toptip("小七不在线！",6e5,"warning"):$.toptip("机器人不在线！",6e5,"warning"),i.isonline=!1),$.ajax({url:juli.URL.getinfo,type:"get",async:!1,cache:!1,data:{deviceId:utils.getdevice()}}).done(function(e){console.log(e),e.id=e.id.split("_")[0],e.cardAvailable=e.cardAvailable+"MB/",e.cardTotal=e.cardTotal+"MB",e.electricity>100?e.electricity="正在充电":(i.electricitynum=e.electricity,e.electricity=e.electricity+"%"),i.info=e})}}});