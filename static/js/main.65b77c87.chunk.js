(this.webpackJsonp40forty=this.webpackJsonp40forty||[]).push([[0],{15:function(t,e,a){t.exports=a(36)},20:function(t,e,a){},36:function(t,e,a){"use strict";a.r(e);var r=a(0),s=a.n(r),n=a(2),c=a.n(n),o=(a(20),a(5)),i=a(6),p=a(3),u=a(8),m=a(7),l=a(12),d=a.n(l);a(21);function h(){return s.a.createElement("div",null,s.a.createElement("header",{className:"App-header"}),s.a.createElement("div",{id:"app"},s.a.createElement("div",{id:"page1"}),s.a.createElement("div",{id:"page2"})),s.a.createElement("footer",{id:"App-footer"}))}var g=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(t){var r;return Object(o.a)(this,a),(r=e.call(this,t)).handleClick=r.handleClick.bind(Object(p.a)(r)),r.count=1,r}return Object(i.a)(a,[{key:"handleClick",value:function(){var t=Math.round(Math.random()*this.props.topics.length),e=document.querySelector("#theTopic");t===this.props.topics.length&&t--,-1!==t?(e.innerHTML="<p>".concat(this.count,". ").concat(this.props.topics[t],"</p>"),this.props.topics.splice(t,1),this.count++):e.innerHTML="<p>Done</p>"}},{key:"render",value:function(){return s.a.createElement("div",{id:"topics",className:"centeredItems"},s.a.createElement("button",{onClick:this.handleClick},"Get Random Topic"),s.a.createElement("span",{id:"theTopic",className:"centeredItems"},s.a.createElement("p",null,"No topic")))}}]),a}(s.a.Component),b=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(t){var r;return Object(o.a)(this,a),(r=e.call(this,t)).state={data:[{src:"https://raw.githubusercontent.com/dcruzships/40forty/master/assets/idk-demo.mp3",artist:"Captain Brando!",img:"https://raw.githubusercontent.com/dcruzships/40forty/master/assets/sailboat.png",name:"idk / Now! demo"},{src:"https://raw.githubusercontent.com/dcruzships/40forty/master/assets/him.mp3",artist:"Captain Brando!",img:"https://raw.githubusercontent.com/dcruzships/40forty/master/assets/him.jpg",name:"Him"},{src:"https://raw.githubusercontent.com/dcruzships/40forty/master/assets/bargainbin.mp3",artist:"Altona Meadows",img:"https://raw.githubusercontent.com/dcruzships/40forty/master/assets/bargainbin.png",name:"Bargain Bin"},{src:"https://raw.githubusercontent.com/dcruzships/40forty/master/assets/goodyou.mp3",artist:"Captain Brando!",img:"https://raw.githubusercontent.com/dcruzships/40forty/master/assets/sailboat.png",name:"good, and you?"},{src:"https://raw.githubusercontent.com/dcruzships/40forty/master/assets/paralyzed.mp3",artist:"Captain Brando!",img:"https://raw.githubusercontent.com/dcruzships/40forty/master/assets/sailboat.png",name:"Paralyzed Paraplegic (instrumental)"},{src:"https://raw.githubusercontent.com/dcruzships/40forty/master/assets/bbetc.mp3",artist:"Altona Meadows",img:"https://raw.githubusercontent.com/dcruzships/40forty/master/assets/bbetc.png",name:"Better Better, etc."}]},r}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"wrapper"},s.a.createElement(d.a,{data:this.state.data}))}}]),a}(s.a.Component),f=a(13),y=a(14),E=["Race","Sexuality","School","Parents","Medication","Drugs / Alcohol","Art","Love","Violence","Self Worth","Sex","Friendship","Purpose","Wants / Needs","Physicality","Judgement","Sense of Self","Adulthood","World","Dreams","Meditation"];a.n(y)()(document).ready((function(){c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(h,null)),document.querySelector("#root")),c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f.a,{date:"June 20, 2020 00:00:00"}),s.a.createElement(g,{topics:E})),document.querySelector("#page1")),c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.querySelector("#App-footer"))}))}},[[15,1,2]]]);
//# sourceMappingURL=main.65b77c87.chunk.js.map