var listdetailvm=new Vue({el:"#listvue",ready:function(){utils.getfav(this),this.getlist(),this.initselectdata()},data:{pagenum:1,imghost:"http://dwn.roo.bo/appimg/",listdata:"",downloaddata:"",playtracklist:"",favlist:""},computed:{babateng:function(){return"babateng"==DEBUG||"dev"==DEBUG},haspage:function(){return this.listdata.categories.length<this.listdata.total}},methods:{initselectdata:function(){var t=this,a=utils.gettrackList();console.log(a),a.length&&$.each(a,function(t,a){a.title=a.name,a.value=a.id}),t.playtracklist=a},getlist:function(){var t=this,a={appId:window.juli.appRooboId,token:window.juli.appRooboToken,clientId:utils.getClientId(),moduleId:utils.getparam("id"),page:t.pagenum,count:utils.pagesize},i=juli.URL.cate+"?inter=/cms/categories";$.ajax({url:i,type:"post",contentType:"application/json",data:JSON.stringify(a)}).done(function(a){t.loading=!1,console.log(JSON.parse(a).data),t.listdata=JSON.parse(a).data;var i={name:t.listdata.name,imgSmall:"",imgLarge:""};limgtemp=utils.setImgSmallLarge(i),t.listdata.imgSmall=i.imgSmall,t.listdata.imgLarge=i.imgLarge,utils.settitle(t.listdata.name)})},nextpage:function(){var t=this;t.pagenum=t.pagenum+1;var t=this,a={appId:window.juli.appRooboId,token:window.juli.appRooboToken,clientId:utils.getClientId(),moduleId:utils.getparam("id"),page:t.pagenum,count:utils.pagesize},i=juli.URL.cate+"?inter=/cms/categories";$.ajax({url:i,type:"post",contentType:"application/json",data:JSON.stringify(a)}).done(function(a){console.log(a);var i=JSON.parse(a).data;$.each(i.categories,function(a,i){i.isplay=!1,t.listdata.categories.push(i)})})}}});