(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),c=n.n(o),s=(n(12),n(1)),l=n(2),i=n(3),h=n(4),u=function(e){e.searchfield;var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 b--green bg-lightest-blue",type:"search",placeholder:"search holder",onChange:t}))},d=function(e){e.robots;throw new Error("NOOOOO")},f=(n(13),function(e){return a.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)}),m=function(e){Object(h.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){return this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oops, that's not good"):this.props.children}}]),n}(r.Component),b=function(e){Object(h.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return console.log(r),t.length?a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f2"},"RoboFriends"),a.a.createElement(u,{searchChange:this.onSearchChange}),a.a.createElement(f,null,a.a.createElement(m,null,a.a.createElement(d,{robots:r})))):a.a.createElement("h1",null,"Loading")}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.4583c597.chunk.js.map