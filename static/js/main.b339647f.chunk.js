(this["webpackJsonpto-do-list-react"]=this["webpackJsonpto-do-list-react"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),l=(a(14),a(1)),i=a(2),u=a(4),o=a(3),m=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:"./img/logo.svg",alt:""}))}}]),a}(r.a.Component),d=a(8),v=a(5),p=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).change=function(e){n.setState(Object(v.a)(Object(v.a)({},n.state),{},{userInput:e.target.value.trim()})),console.log("this is e.target.value",e.target.value)},n.add=function(e){var t=n.state.userInput;n.setState({userInput:"",list:[].concat(Object(d.a)(n.state.list),[{id:n.state.list.length,title:t,done:!1}])})},n.remove=function(e){console.log("remove",e);var t=n.state.list.filter((function(t){return t.id!==e}));n.setState({list:t})},n.state={userInput:"",list:[]},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"add-to-section"},r.a.createElement("div",{className:"add-todo"},r.a.createElement("div",{className:"text-input"},r.a.createElement("input",{type:"text",id:"userText",value:this.state.userInput,onChange:this.change,placeholder:"Type a task here and click + to add"}),r.a.createElement("div",{className:"underline"})),r.a.createElement("button",{className:"buttonAdd",onClick:this.add},r.a.createElement("img",{src:"./img/add-button.svg"})))),r.a.createElement("div",{className:"tasks"},this.state.list.map((function(t){return r.a.createElement("div",{key:t.id,className:"divResult"},r.a.createElement("div",{className:"tasksText"},t.title),r.a.createElement("button",{onClick:function(){return e.remove(t.id)},className:"button-delete"},r.a.createElement("img",{src:"./img/delete-button.svg"})))}))))}}]),a}(r.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(p,null))}}]),a}(r.a.Component);s.a.render(r.a.createElement(b,null),document.getElementById("app"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.b339647f.chunk.js.map