(this.webpackJsonpdubious_derby=this.webpackJsonpdubious_derby||[]).push([[0],{33:function(e,t,n){e.exports=n.p+"static/media/racetrack.1855b73f.jpg"},45:function(e,t,n){e.exports=n(58)},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){e.exports=n.p+"static/media/DDBack.c9a36704.jpg"},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),o=(n(28),n(50),n(9)),s=n(29),u=n(30),l=n(31),d=n(41),f=n(32),p=n(42),h=(n(51),n(76)),m=n(77),b=n(75),v=n(10),g=n(33),E=n.n(g);n(52);function R(){var e=Object(o.a)(["\n  position: absolute;\n  left: 42px;\n  font-size: 30px;\n  background: transparent;\n  border: none;\n  &:hover {\n    font-size: 40px;\n  }\n  &:active {\n    border: 1px solid orange;\n  }\n"]);return R=function(){return e},e}function w(){var e=Object(o.a)(["\n  position: absolute;\n  left: 18px;\n  font-size: 30px;\n  background: transparent;\n  outline: none;\n  border: none;\n  &:hover {\n    font-size: 40px;\n    outline: none;\n  }\n"]);return w=function(){return e},e}function S(){var e=Object(o.a)(["\n  background-image: url(",");\n  background-size: 100% 380px;\n  background-repeat: repeat-y;\n  padding: 2% 6%;\n"]);return S=function(){return e},e}function x(){var e=Object(o.a)(["\n  position: absolute;\n  padding: 18% 25%;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  font-size: 32px;\n  background-color: rgba(0, 0, 0, 0.8);\n"]);return x=function(){return e},e}function j(){var e=Object(o.a)(["\n  margin-left: 40px;\n  input {\n    background: transparent;\n    height: 32px;\n    color: white;\n    margin-right: 5%;\n  }\n"]);return j=function(){return e},e}function k(){var e=Object(o.a)(["\n  list-style-type: none;\n  font-size: 1.5em;\n"]);return k=function(){return e},e}function y(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return y=function(){return e},e}function C(){var e=Object(o.a)(["\n  width: 700px;\n  font-size: 30px;\n  color: orange;\n  margin: 2% auto;\n"]);return C=function(){return e},e}function O(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  height: 300px;\n"]);return O=function(){return e},e}function P(){var e=Object(o.a)(["\n"]);return P=function(){return e},e}function M(){var e=Object(o.a)(["\n  padding: 2%;\n  color: white;\n  height: 1000px;\n"]);return M=function(){return e},e}var z=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).call(this))).inputAttribute=function(t){e.setState(Object(s.a)({},t.target.name,t.target.value))},e.inputRacers=function(){return r.a.createElement(_,null,r.a.createElement("input",{placeholder:"Contestant Name",name:"name",type:"text",value:e.state.name,onChange:function(t){return e.inputAttribute(t)}}),r.a.createElement(h.a,{title:"Add Contestant!",arrow:!0},r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){return e.inputBtn()}},"+")))},e.inputBtn=function(){var t="".concat(e.state.name," has been added to the race!");e.setState({raceMessage:t});var n={id:Date.now(),name:e.state.name,currentPlace:e.state.currentPlace,speedboost:!1,icon:e.state.icons[Math.floor(Math.random()*e.state.icons.length)]},a=e.state.racers;a.push(n),e.setState({racers:a}),e.setState({name:""})},e.deleteRacer=function(t){var n=e.state.racers;n.forEach((function(e,a){e.id===t&&n.splice(a,1)})),e.setState({racers:n})},e.boostRacer=function(t){var n=e.state.racers;n.forEach((function(e,n){e.id===t&&(e.speedboost=!0)})),e.setState({racers:n})},e.setupRace=function(){0!==e.state.racers.length?(e.setState({raceMessage:"The race has started!!"}),e.setState({raceStart:!0}),e.startRace()):e.setState({raceMessage:"Add Contestants!"})},e.speedBoostCheck=function(e){return!0===e.speedboost&&e.currentPlace<6},e.startRace=function(){var t=e.state.racers.length,n=Math.floor(Math.random()*t),a=e.state.racers;a[n].currentPlace++,e.speedBoostCheck(a[n])&&a[n].currentPlace++;var r=e.state.currentRound;r++,e.setState({currentRound:r}),e.setState({racers:a}),a[n].currentPlace>=e.state.finishPlace&&e.winner(a,n),setTimeout((function(){!1===e.state.winCondition&&e.startRace()}),700)},e.reRace=function(){var t=e.state.racers.map((function(e){var t={};return t.id=e.id,t.name=e.name,t.icon=e.icon,t.currentPlace=0,t}));e.setState({currentRound:0}),e.setState({winCondition:!1}),e.setState({racers:t})},e.winner=function(t,n){e.whosWinning(),setTimeout((function(){e.setState({winCondition:!0})}),800),e.setState({raceStart:!1});var a=t[n].name+" is the winner!!";e.setState({raceMessage:a})},e.renderWinners=function(e,t){return r.a.createElement("p",{key:"-1"},0===t&&"1st place: ",1===t&&"2nd place: ",2===t&&"3rd place: ",t>=3&&"".concat(t+1,"th place: "),e.name)},e.whosWinning=function(){var t=[];e.state.racers.forEach((function(e){return t.push(e)}));var n=t.sort((function(e,t){return t.currentPlace-e.currentPlace})).map((function(t,n){return e.renderWinners(t,n)}));e.setState({lastRacers:n})},e.state={name:"",currentRound:0,currentPlace:0,finishPlace:7,raceStart:!1,raceMessage:"",winCondition:!1,winnerName:"",racers:[],icons:["\ud83d\udc36","\ud83d\udc31","\ud83d\udc2d","\ud83d\udc39","\ud83d\udc30","\ud83e\udd8a","\ud83d\udc3b","\ud83d\udc3c","\ud83d\udc28","\ud83d\udc2f","\ud83e\udd81","\ud83d\udc2e","\ud83d\udc37","\ud83d\udc38","\ud83d\udc35","\ud83e\udd2a","\ud83e\udd28","\ud83e\uddd0","\ud83e\udd13","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83e\udd74","\ud83e\udd22","\ud83e\udd2e","\ud83e\udd12","\ud83e\udd15","\ud83e\udd11","\ud83e\udd20","\ud83d\ude08","\ud83d\udc79","\ud83d\udc80","\ud83d\udc7d","\ud83d\udc7e","\ud83e\udd16","\ud83c\udf83","\ud83e\udde0","\ud83d\ude2d","\ud83d\ude24","\ud83e\udd2c","\ud83e\udd2f","\ud83e\udd76","\ud83d\ude31","\ud83d\udc32"],lastRacers:[]},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.racers.map((function(t){var n="racer place".concat(t.currentPlace);return r.a.createElement("div",{key:t.id,className:n},r.a.createElement(q,{onClick:function(){return e.deleteRacer(t.id)}},"\ud83d\udde1"),r.a.createElement(F,{onClick:function(){return e.boostRacer(t.id)}},r.a.createElement("span",{role:"img","aria-label":"carrot"},"\ud83e\udd55")),r.a.createElement(b.a,{variant:"h4"},t.icon),r.a.createElement("br",null),r.a.createElement(b.a,{variant:"h5"},t.name))}));return r.a.createElement(D,null,r.a.createElement(W,null,r.a.createElement(B,null,r.a.createElement(b.a,{variant:"h2"},"Dubious Derby"),r.a.createElement(T,null,r.a.createElement("li",null,"Welcome to Dubious Derby!"),r.a.createElement("li",null,"Enter in New Contestants below."),r.a.createElement("li",null,"When you're ready hit start!"),r.a.createElement("li",null,"The winner is the first to the finish line!")),!1===this.state.raceStart&&this.inputRacers()),r.a.createElement(h.a,{title:"Start the Race!",arrow:!0},r.a.createElement(m.a,{id:"start_btn",variant:"contained",color:"primary",onClick:function(){return e.setupRace()}},0===this.state.currentRound?"Start":"Round: ".concat(this.state.currentRound)))),this.state.lastRacers.length>0&&r.a.createElement(N,null,r.a.createElement(A,null,this.state.raceMessage)),this.state.racers.length>0&&r.a.createElement(I,null,t),!0===this.state.winCondition&&r.a.createElement(J,null,this.state.lastRacers,r.a.createElement(m.a,{id:"rerace_btn",variant:"contained",color:"primary",onClick:function(){return e.reRace()}},"Reset Race!")))}}]),t}(a.Component),D=v.a.div(M()),B=v.a.div(P()),W=v.a.div(O()),A=v.a.div(C()),N=v.a.div(y()),T=v.a.ul(k()),_=v.a.div(j()),J=v.a.div(x()),I=v.a.div(S(),E.a),q=v.a.button(w()),F=v.a.button(R());i.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.6107c70f.chunk.js.map