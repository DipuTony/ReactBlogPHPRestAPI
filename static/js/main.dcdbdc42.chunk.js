(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),o=(a(13),function(){return l.a.createElement("nav",{className:"navbar"},l.a.createElement("h1",{className:"title"},"My React Blog"),l.a.createElement("div",{className:"links"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://demo.quantainfotech.com/reactblogapi",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"}},"New Blog")))}),s=a(1);function i(e){var t=e.blog,a=e.title;return l.a.createElement("div",{className:"blog-list"},l.a.createElement("h2",{align:"center"},a),l.a.createElement("br",null),t.items.map(function(e){return l.a.createElement("div",{className:"blog-preview",key:e.id},l.a.createElement("div",{className:"blogposts"},l.a.createElement("div",{className:"blogpost-title"},e.name),l.a.createElement("div",{className:"blogppost-post"},e.description),l.a.createElement("div",{className:"blogpost-author"},"Written By : ",e.price)),l.a.createElement("p",{className:"border-below"}))}))}var m=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),o=Object(s.a)(r,2),m=o[0],u=o[1];return Object(n.useEffect)(function(){fetch("https://demo.quantainfotech.com/reactblogapi/items/read").then(function(e){return e.json()}).then(function(e){c(e),u(!1)})},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"home"},m&&l.a.createElement("div",null," Loading.... "),a&&l.a.createElement(i,{blog:a,title:"All Blogs Posts"})))};var u=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o,null),l.a.createElement("div",{className:"content"},l.a.createElement(m,null)))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,17)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(16)}},[[4,3,2]]]);
//# sourceMappingURL=main.dcdbdc42.chunk.js.map