"use strict";(self["webpackChunkaurora_blog"]=self["webpackChunkaurora_blog"]||[]).push([[967],{47919:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(73396),s=t(87139);const a={class:"breadcrumbs flex flex-row gap-6 text-white"};function l(e,n,t,l,o,c){return(0,r.wg)(),(0,r.iD)("ul",a,[(0,r._)("li",null,(0,s.zw)(e.t("menu.home")),1),(0,r._)("li",null,(0,s.zw)(e.current),1)])}var o=t(35213),c=(0,r.aZ)({name:"Breadcrumb",props:["current"],setup(){const{t:e}=(0,o.QT)();return{t:e}}}),i=t(40089);const d=(0,i.Z)(c,[["render",l],["__scopeId","data-v-64013c38"]]);var u=d},72372:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var r=t(73396),s=t(87139);const a=e=>((0,r.dD)("data-v-ce938e62"),e=e(),(0,r.Cn)(),e),l={class:"flex flex-col"},o={class:"post-header"},c={class:"post-title text-white uppercase"},i={class:"main-grid"},d={class:"relative space-y-5"},u={class:"bg-ob-deep-800 p-4 lg:p-14 rounded-2xl shadow-xl mb-8 lg:mb-0"},m={class:"block"},p={class:"info"},v=["href"],f={class:"link-name font-semibold"},h={class:"link-intro truncate"},_=a((()=>(0,r._)("div",{class:"post-html",innerHTML:"需要交换友链的可在下方留言💖<br><br>友链信息展示需要，你的信息格式要包含：名称、头像、链接、介绍"},null,-1))),b={class:"col-span-1"};function w(e,n,t,a,w,k){const g=(0,r.up)("Breadcrumb"),Z=(0,r.up)("el-avatar"),x=(0,r.up)("el-card"),z=(0,r.up)("el-col"),C=(0,r.up)("el-row"),L=(0,r.up)("Comment"),M=(0,r.up)("Profile"),W=(0,r.up)("Sidebar");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(g,{current:e.t("menu.friends")},null,8,["current"]),(0,r._)("div",l,[(0,r._)("div",o,[(0,r._)("h1",c,(0,s.zw)(e.t("titles.friends")),1)]),(0,r._)("div",i,[(0,r._)("div",d,[(0,r._)("div",u,[(0,r.Wm)(C,{gutter:36},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.links,(e=>((0,r.wg)(),(0,r.j4)(z,{key:e.id,span:8,xs:{span:20,offset:2},class:"mb-3"},{default:(0,r.w5)((()=>[(0,r.Wm)(x,{shadow:"never",class:"shadow-md"},{default:(0,r.w5)((()=>[(0,r._)("div",m,[(0,r.Wm)(Z,{size:60,src:e.linkAvatar},null,8,["src"])]),(0,r._)("div",p,[(0,r._)("a",{href:e.linkAddress,target:"_blank"},[(0,r._)("div",f,(0,s.zw)(e.linkName),1)],8,v),(0,r._)("div",h,(0,s.zw)(e.linkIntro),1)])])),_:2},1024)])),_:2},1024)))),128))])),_:1})]),_,(0,r.Wm)(L)]),(0,r._)("div",b,[(0,r.Wm)(W,null,{default:(0,r.w5)((()=>[(0,r.Wm)(M)])),_:1})])])])])}var k=t(44870),g=t(35213),Z=t(92506),x=t(47919),z=t(41715),C=t(17437),L=t(13184),M=t(73286),W=(0,r.aZ)({name:"FriendLink",components:{Sidebar:Z.YE,Profile:Z.NZ,Breadcrumb:x.Z,Comment:z.s},setup(){const{t:e}=(0,g.QT)(),n=(0,C.j)(),t=(0,k.qj)({links:"",comments:[],haveMore:!1,isReload:!1}),s=(0,k.qj)({current:1,size:7});n.type=4,(0,r.bv)((()=>{a(),l()})),(0,r.JJ)("comments",(0,r.Fl)((()=>t.comments))),(0,r.JJ)("haveMore",(0,r.Fl)((()=>t.haveMore))),L.Z.on("friendLinkFetchComment",(()=>{s.current=1,t.isReload=!0,l()})),L.Z.on("friendLinkFetchReplies",(e=>{o(e)})),L.Z.on("friendLinkLoadMore",(()=>{l()}));const a=()=>{M.Z.getFriendLink().then((({data:e})=>{t.links=e.data}))},l=()=>{const e={type:4,topicId:null,current:s.current,size:s.size};M.Z.getComments(e).then((({data:e})=>{t.isReload?(t.comments=e.data.records,t.isReload=!1):t.comments.push(...e.data.records),e.data.count<=t.comments.length?t.haveMore=!1:t.haveMore=!0,s.current++}))},o=e=>{M.Z.getRepliesByCommentId(t.comments[e].id).then((({data:n})=>{t.comments[e].replyDTOs=n.data}))};return{...(0,k.BK)(t),t:e}}}),y=t(40089);const F=(0,y.Z)(W,[["render",w],["__scopeId","data-v-ce938e62"]]);var R=F}}]);