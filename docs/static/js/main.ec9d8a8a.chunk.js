(this["webpackJsonpcv-website"]=this["webpackJsonpcv-website"]||[]).push([[0],{13:function(e,t,n){e.exports=n(31)},18:function(e,t,n){},19:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),i=n.n(c),o=(n(18),n(6)),l=n(1),s=n(12),u=n(11),m=(n(19),n(7)),h=n.n(m),f=function(e){var t=function(t){t.stopPropagation(),e.onClick(t.target.innerHTML)};return r.a.createElement("ul",{className:h.a.navbar},["About me","Publications"].map((function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:t},e))})))},v=n(8),d=n.n(v),p=n(9),b=n.n(p),E=n(10),g=n.n(E),w=function(e){return r.a.createElement("div",{className:d.a.article},r.a.createElement("h2",null,e.article.title),r.a.createElement("div",{id:"banner"},r.a.createElement("img",{src:"https://picsum.photos/200/200",alt:""})),r.a.createElement("div",{id:"text"},g()(b()(e.article.article))))},k=function(e){var t=this,n=e.toLocaleLowerCase().replace(/ /g,"-")+".md";fetch(n,{cache:"reload"}).then((function(e){return e.text()})).then((function(n){t.setState({article:n}),t.setState({title:e})}))},A=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).render=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Antonio Pierro"),r.a.createElement(f,{onClick:a.changeArticle}),r.a.createElement(w,{article:a.state}))},a.state={article:""},a.changeArticle=k.bind(Object(l.a)(a)),a.changeArticle("About me"),a}return n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports={navbar:"navbar_navbar__1ufxU"}},8:function(e,t,n){e.exports={article:"article_article__1mwSa"}}},[[13,1,2]]]);
//# sourceMappingURL=main.ec9d8a8a.chunk.js.map