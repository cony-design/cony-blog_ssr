(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{295:function(e,t,n){"use strict";n.r(t);var r=n(12),o=(n(64),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,n.$get("https://blog.cony-design.com/wp-json/wp/v2/posts");case 3:return r=t.sent,t.abrupt("return",{posts:r});case 5:case"end":return t.stop()}}),t)})))()}}),c=n(46),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("ul",e._l(e.posts,(function(n){return t("li",{key:n.id},[e._v("\n        日付: "+e._s(n.date)),t("br"),e._v(" "),t("NuxtLink",{attrs:{to:"/archives/"+n.id+"/"}},[e._v("title: "+e._s(n.title.rendered))]),e._v("\n        "+e._s(n.excerpt.rendered)),t("br")],1)})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);