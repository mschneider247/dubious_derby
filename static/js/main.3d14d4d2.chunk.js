(this.webpackJsonpdubious_derby=this.webpackJsonpdubious_derby||[]).push([[0],{35:function(e,t,n){e.exports=n.p+"static/media/racetrack.c2d3b8ab.jpg"},48:function(e,t,n){e.exports=n(62)},53:function(e,t,n){},54:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),o=(n(31),n(53),n(11)),s=n(32),u=n(33),l=n(34),d=n(44),p=n(43),f=(n(54),n(83)),m=n(63),h=n(81),b=n(82),v=n(12),S=n(35),E=n.n(S);function g(){var e=Object(o.a)(["\n  position: absolute;\n  left: 42px;\n  font-size: 30px;\n  background: transparent;\n  border: none;\n  &:hover {\n    font-size: 35px;\n  }\n  &:active {\n    border: 1px solid orange;\n  }\n"]);return g=function(){return e},e}function w(){var e=Object(o.a)(["\n  position: absolute;\n  left: 18px;\n  font-size: 30px;\n  background: transparent;\n  outline: none;\n  border: none;\n  &:hover {\n    font-size: 35px;\n    outline: none;\n  }\n"]);return w=function(){return e},e}function y(){var e=Object(o.a)(["\n  background-image: url(",");\n  background-size: 100% 400px;\n  background-repeat: repeat-y;\n  padding: 6px 30px;\n  border-radius: 2px;\n"]);return y=function(){return e},e}function k(){var e=Object(o.a)(["\n  position: absolute;\n  padding: 18% 25%;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  font-size: 32px;\n  background-color: rgba(0, 0, 0, 0.8);\n"]);return k=function(){return e},e}function x(){var e=Object(o.a)(["\n  margin-left: 40px;\n  input {\n    background: transparent;\n    height: 32px;\n    color: white;\n    margin-right: 5%;\n  }\n"]);return x=function(){return e},e}function R(){var e=Object(o.a)(["\n  list-style-type: none;\n  font-size: 1.5em;\n"]);return R=function(){return e},e}function j(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return j=function(){return e},e}function C(){var e=Object(o.a)(["\n  width: 700px;\n  font-size: 30px;\n  color: #ED9B40;\n  margin: 2% auto;\n"]);return C=function(){return e},e}function O(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n"]);return O=function(){return e},e}function M(){var e=Object(o.a)(["\n  padding-left: 4%;\n"]);return M=function(){return e},e}function P(){var e=Object(o.a)(["\n  padding-top: 2%;\n  color: #E1F2FE;\n"]);return P=function(){return e},e}var z=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).inputAttribute=function(t){e.setState(Object(s.a)({},t.target.name,t.target.value))},e.inputRacers=function(){return r.a.createElement(T,null,r.a.createElement("input",{placeholder:"Contestant Name",name:"name",type:"text",value:e.state.name,onChange:function(t){return e.inputAttribute(t)}}),r.a.createElement(f.a,{title:"Add Contestant!",arrow:!0},r.a.createElement(m.a,{id:"input_btn",variant:"contained",color:"primary",onClick:function(){return e.inputBtn()}},"+")))},e.inputBtn=function(){if(""!==e.state.name){var t="".concat(e.state.name," has been added to the race!");e.setState({raceMessage:t});var n={id:Date.now(),name:e.state.name,currentPlace:e.state.currentPlace,speedboost:!1,icon:e.state.icons[Math.floor(Math.random()*e.state.icons.length)]},a=e.state.racers;a.push(n),e.setState({racers:a}),e.setState({name:""})}else e.setState({raceMessage:"Please enter a name!"})},e.deleteRacer=function(t){var n=e.state.racers;n.forEach((function(a,r){if(a.id===t)if(a.icon){var c=a.name+" just lost their head!";e.setState({raceMessage:c}),a.icon="",a.name=""}else{n.splice(r,1);e.setState({raceMessage:"Fresh jerky at the food court!"})}})),e.setState({racers:n})},e.boostRacer=function(t){var n=e.state.racers;n.forEach((function(n,a){if(n.id===t){n.speedboost=!0;var r=n.name+" has been BOOSTED!";e.setState({raceMessage:r})}})),e.setState({racers:n})},e.setupRace=function(){0!==e.state.racers.length?(e.setState({raceMessage:"The race has started!!"}),e.setState({raceStart:!0}),e.startRace()):e.setState({raceMessage:"Add Contestants!"})},e.speedBoostCheck=function(e){return!0===e.speedboost&&e.currentPlace<9},e.startRace=function(){var t=e.state.racers.length,n=Math.floor(Math.random()*t),a=e.state.racers;a[n].name&&a[n].currentPlace++,e.speedBoostCheck(a[n])&&a[n].currentPlace++;var r=e.state.currentRound;r++,e.setState({currentRound:r}),e.setState({racers:a}),a[n].currentPlace>=e.state.finishPlace&&e.winner(a,n),setTimeout((function(){!e.state.winCondition&&e.startRace()}),a[n].name?e.state.raceSpeed:0)},e.reRace=function(){var t=e.state.racers.map((function(e){var t={};return t.id=e.id,t.name=e.name,t.icon=e.icon,t.currentPlace=0,t}));e.setState({currentRound:0}),e.setState({winCondition:!1}),e.setState({raceStart:!1}),e.setState({racers:t})},e.winner=function(t,n){e.whosWinning(),setTimeout((function(){e.setState({winCondition:!0})}),600);var a=t[n].name+" is the winner!!";e.setState({raceMessage:a})},e.renderWinners=function(e,t){return r.a.createElement("p",{key:"-1"},0===t&&"1st place: ",1===t&&"2nd place: ",2===t&&"3rd place: ",t>=3&&"".concat(t+1,"th place: "),e.name)},e.whosWinning=function(){var t=[];e.state.racers.forEach((function(e){return t.push(e)}));var n=t.sort((function(e,t){return t.currentPlace-e.currentPlace})).map((function(t,n){return e.renderWinners(t,n)}));e.setState({lastRacers:n})},e.setSpeed=function(t){e.setState({raceSpeed:t})},e.state={name:"",currentRound:0,currentPlace:0,finishPlace:13,raceStart:!1,raceMessage:"",winCondition:!1,winnerName:"",racers:[],icons:["\ud83d\udc36","\ud83d\udc31","\ud83d\udc2d","\ud83d\udc39","\ud83d\udc30","\ud83e\udd8a","\ud83d\udc3b","\ud83d\udc3c","\ud83d\udc28","\ud83d\udc2f","\ud83e\udd81","\ud83d\udc2e","\ud83d\udc37","\ud83d\udc38","\ud83d\udc35","\ud83e\udd2a","\ud83e\udd28","\ud83e\uddd0","\ud83e\udd13","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83e\udd74","\ud83e\udd22","\ud83e\udd2e","\ud83e\udd12","\ud83e\udd15","\ud83e\udd11","\ud83e\udd20","\ud83d\ude08","\ud83d\udc79","\ud83d\udc80","\ud83d\udc7d","\ud83d\udc7e","\ud83e\udd16","\ud83c\udf83","\ud83e\udde0","\ud83d\ude2d","\ud83d\ude24","\ud83e\udd2c","\ud83e\udd2f","\ud83e\udd76","\ud83d\ude31","\ud83d\udc32"],lastRacers:[],raceSpeed:420},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.racers.map((function(t){var n="racer place".concat(t.currentPlace);return r.a.createElement("div",{key:t.id,className:n},r.a.createElement(I,{onClick:function(){return e.deleteRacer(t.id)}},"\ud83d\udde1"),r.a.createElement(q,{onClick:function(){return e.boostRacer(t.id)}},r.a.createElement("span",{role:"img","aria-label":"carrot"},"\ud83e\udd55")),r.a.createElement(h.a,{variant:"h4"},t.icon),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"h5"},t.name))}));return r.a.createElement(_,null,r.a.createElement(D,null,!this.state.raceStart&&r.a.createElement(B,null,r.a.createElement(h.a,{variant:"h2"},"Dubious Derby"),r.a.createElement(F,null,r.a.createElement("li",null,"Welcome to Dubious Derby!"),r.a.createElement("li",null,"Enter in New Contestants below."),r.a.createElement("li",null,"When you're ready hit start!"),r.a.createElement("li",null,"The winner is the first to the finish line!")),!1===this.state.raceStart&&this.inputRacers()),!this.state.raceStart&&r.a.createElement("div",{id:"speed_and_start_buttons"},r.a.createElement(b.a,{size:"large",color:"primary","aria-label":"speed buttons"},r.a.createElement(f.a,{title:"Slow Speed",arrow:!0},r.a.createElement(m.a,{id:"slowSpeed",variant:"contained",color:"primary",onClick:function(){return e.setSpeed(680)}},"Slow")),r.a.createElement(f.a,{title:"Normal Speed",arrow:!0},r.a.createElement(m.a,{id:"normSpeed",variant:"contained",color:"primary",onClick:function(){return e.setSpeed(420)}},"Norm")),r.a.createElement(f.a,{title:"Fast Speed",arrow:!0},r.a.createElement(m.a,{id:"fastSpeed",variant:"contained",color:"primary",onClick:function(){return e.setSpeed(180)}},"Fast"))),r.a.createElement(f.a,{title:"Start the Race!",arrow:!0},r.a.createElement(m.a,{id:"start_btn",variant:"contained",color:"primary",size:"large",onClick:function(){return e.setupRace()}},"Start")))),r.a.createElement(W,null,r.a.createElement(N,null,this.state.raceMessage)),this.state.racers.length>0&&r.a.createElement(J,null,t),!0===this.state.winCondition&&r.a.createElement(A,null,this.state.lastRacers,r.a.createElement(m.a,{id:"rerace_btn",variant:"contained",color:"primary",onClick:function(){return e.reRace()}},"Reset Race!")))}}]),n}(a.Component),_=v.a.div(P()),B=v.a.div(M()),D=v.a.div(O()),N=v.a.div(C()),W=v.a.div(j()),F=v.a.ul(R()),T=v.a.div(x()),A=v.a.div(k()),J=v.a.div(y(),E.a),I=v.a.button(w()),q=v.a.button(g());i.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.3d14d4d2.chunk.js.map