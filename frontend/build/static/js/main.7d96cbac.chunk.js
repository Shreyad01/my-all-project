(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(3),c=n.n(o),s=(n(15),n(7)),l=n(4),r=n(5),d=n(8),m=n(6),u=n(1),h=n(9),f=(n(16),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={todoList:[],activeItem:{id:null,title:"",completed:!1},editing:!1},n.fetchTasks=n.fetchTasks.bind(Object(u.a)(n)),n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.getCookie=n.getCookie.bind(Object(u.a)(n)),n.startEdit=n.startEdit.bind(Object(u.a)(n)),n.deleteItem=n.deleteItem.bind(Object(u.a)(n)),n.strikeUnstrike=n.strikeUnstrike.bind(Object(u.a)(n)),n}return Object(h.a)(t,e),Object(r.a)(t,[{key:"getCookie",value:function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var i=n[a].trim();if(i.substring(0,e.length+1)===e+"="){t=decodeURIComponent(i.substring(e.length+1));break}}return t}},{key:"componentWillMount",value:function(){this.fetchTasks()}},{key:"fetchTasks",value:function(){var e=this;console.log("Fetching..."),fetch("http://127.0.0.1:8000/api/task-list/").then((function(e){return e.json()})).then((function(t){return e.setState({todoList:t})}))}},{key:"handleChange",value:function(e){var t=e.target.name,n=e.target.value;console.log("Name:",t),console.log("Value:",n),this.setState({activeItem:Object(s.a)({},this.state.activeItem,{title:n})})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log("ITEM:",this.state.activeItem);var n=this.getCookie("csrftoken"),a="http://127.0.0.1:8000/api/task-create/";1==this.state.editing&&(a="http://127.0.0.1:8000/api/task-update/".concat(this.state.activeItem.id,"/"),this.setState({editing:!1})),fetch(a,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":n},body:JSON.stringify(this.state.activeItem)}).then((function(e){t.fetchTasks(),t.setState({activeItem:{id:null,title:"",completed:!1}})})).catch((function(e){console.log("ERROR:",e)}))}},{key:"startEdit",value:function(e){this.setState({activeItem:e,editing:!0})}},{key:"deleteItem",value:function(e){var t=this,n=this.getCookie("csrftoken");fetch("http://127.0.0.1:8000/api/task-delete/".concat(e.id,"/"),{method:"DELETE",headers:{"Content-type":"application/json","X-CSRFToken":n}}).then((function(e){t.fetchTasks()}))}},{key:"strikeUnstrike",value:function(e){var t=this;e.completed=!e.completed;var n=this.getCookie("csrftoken"),a="http://127.0.0.1:8000/api/task-update/".concat(e.id,"/");fetch(a,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":n},body:JSON.stringify({completed:e.completed,title:e.title})}).then((function(){t.fetchTasks()})),console.log("TASK:",e.completed)}},{key:"render",value:function(){var e=this.state.todoList,t=this;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{id:"task-container"},i.a.createElement("div",{id:"form-wrapper"},i.a.createElement("form",{onSubmit:this.handleSubmit,id:"form"},i.a.createElement("div",{className:"flex-wrapper"},i.a.createElement("div",{style:{flex:6}},i.a.createElement("input",{onChange:this.handleChange,className:"form-control",id:"title",value:this.state.activeItem.title,type:"text",name:"title",placeholder:"Add task.."})),i.a.createElement("div",{style:{flex:1}},i.a.createElement("input",{id:"submit",className:"btn btn-warning",type:"submit",name:"Add"}))))),i.a.createElement("div",{id:"list-wrapper"},e.map((function(e,n){return i.a.createElement("div",{key:n,className:"task-wrapper flex-wrapper"},i.a.createElement("div",{onClick:function(){return t.strikeUnstrike(e)},style:{flex:7}},0==e.completed?i.a.createElement("span",null,e.title):i.a.createElement("strike",null,e.title)),i.a.createElement("div",{style:{flex:1}},i.a.createElement("button",{onClick:function(){return t.startEdit(e)},className:"btn btn-sm btn-outline-info"},"Edit")),i.a.createElement("div",{style:{flex:1}},i.a.createElement("button",{onClick:function(){return t.deleteItem(e)},className:"btn btn-sm btn-outline-dark delete"},"-")))})))))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.7d96cbac.chunk.js.map
