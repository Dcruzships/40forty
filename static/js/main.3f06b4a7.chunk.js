(this.webpackJsonp40forty=this.webpackJsonp40forty||[]).push([[0],{46:function(e,t,a){e.exports=a(73)},66:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(18),c=a.n(r),i=a(79),u=a(80),o=a(10),m=a(11),l=a(14),d=a(13),h=a(30),p=a.n(h),g=(a(51),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={songs:[{src:"https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/idk-demo.mp3",artist:"Captain Brando!",name:"idk / Now! (demo)",img:"https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/sailboat.png",id:"66575568423123"},{src:"https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/him.mp3",artist:"Captain Brando!",name:"Him",img:"https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/him.jpg",id:"66575568425354321"},{src:"https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/goodyou.mp3",artist:"Captain Brando!",name:"good, and you?",img:"https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/sailboat.png",id:"66575568423274"},{src:"https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/bargainbin.mp3",artist:"Captain Brando!",name:"Bargain Bin",img:"https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/bargainbin.png",id:"66575568425349835"},{src:"https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/bbetc.mp3",artist:"Captain Brando!",name:"Better Better, etc.",img:"https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/bbetc.png",id:"66575568463795"},{src:"https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/paralyzed.mp3",artist:"Captain Brando!",name:"Paralyzed Paraplegic (instrumental)",img:"https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/sailboat.png",id:"66575568425355568"}]},n}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"wrapper",id:"musicPlayer"},s.a.createElement(p.a,{data:this.state.songs}))}}]),a}(s.a.Component)),b=a(25),z=a(20);function f(e){var t="";switch(e.num){case 0:t=s.a.createElement(z.a,{date:"June 20, 2020 00:00:00"});break;case 1:t=s.a.createElement(v,null);break;case 2:t=s.a.createElement("div",null,"test2");break;default:t=s.a.createElement(z.a,{date:"June 20, 2020 00:00:00"})}return s.a.createElement(s.a.Fragment,null,t)}function v(e){var t=["Race","Sexuality","School","Parents","Medication","Drugs / Alcohol","Art","Love","Violence","Self Worth","Sex","Friendship","Purpose","Wants / Needs","Physicality","Judgement","Sense of Self","Adulthood","World","Dreams","Meditation"];return s.a.createElement("div",{id:"topics"},s.a.createElement("button",{onClick:function(){var e=Math.round(Math.random()*t.length),a=document.querySelector("#theTopic");e===t.length&&e--,a.innerHTML=-1!==e?"<p>".concat(t[e],"</p>"):"<p>Done</p>"}},"Get Random Topic"),s.a.createElement("span",{id:"theTopic",className:"centeredItems"},s.a.createElement("p",null,"No topic")))}var E=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={num:0,components:["<Countdown date={'June 20, 2020 00:00:00'} onClick={handleClick} />","<div></div>"]},n}return Object(m.a)(a,[{key:"changePanel",value:function(e){var t=this.state.num;e?t++:t--,t<0&&(t=this.state.components.length-1),t>this.state.components.length-1&&(t=0),this.setState({num:t}),console.log(t)}},{key:"render",value:function(){var e=this,t=this.state.num;return s.a.createElement("div",{id:"panel",className:"centeredItems"},s.a.createElement(b.a,{className:"controls",id:"left",onClick:function(){return e.changePanel(!1)}}),s.a.createElement("div",{id:"item"},s.a.createElement(f,{num:t})),s.a.createElement(b.b,{className:"controls",id:"right",onClick:function(){return e.changePanel(!0)}}))}}]),a}(s.a.Component);a(66);function w(){return s.a.createElement(u.a,{id:"musicPlayer"},s.a.createElement(g,null))}var y=function(){return s.a.createElement(i.a,{height:"100vh"},s.a.createElement(u.a,{height:"92vh",align:"center",justify:"center"},s.a.createElement(E,null)),s.a.createElement(w,null))};c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(y,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.3f06b4a7.chunk.js.map