!function e(t,n,r){function a(i,c){if(!n[i]){if(!t[i]){var l="function"==typeof require&&require;if(!c&&l)return l(i,!0);if(o)return o(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var p=n[i]={exports:{}};t[i][0].call(p.exports,function(e){var n=t[i][1][e];return a(n?n:e)},p,p.exports,e,t,n,r)}return n[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)a(r[i]);return a}({1:[function(e,t,n){var r=React.createClass({displayName:"MockComponent",getInitialState:function(){return{initData:{}}},componentWillMount:function(){var e=this;Mock.setup({timeout:"200-600"}),Mock.mock(/\.json/,{"list|1-10":[{"id|+1":1,email:"@EMAIL"}]}),$.ajax({url:"hello.json",dataType:"json"}).done(function(t,n,r){e.setState({initData:t})})},render:function(){var e=this,t=React.Children.map(this.props.children,function(t){return React.cloneElement(t,{initData:e.state.initData})});return React.createElement("div",null,t)}});t.exports=r},{}],2:[function(e,t,n){var r=React.createClass({displayName:"MyComponent",propTypes:{initData:React.PropTypes.array},render:function(){var e=this,t=[];return e.props.initData&&e.props.initData.list&&(t=e.props.initData.list.map(function(e,t){return React.createElement("li",{key:t},React.createElement("span",null,e.id),React.createElement("span",null,e.email))})),React.createElement("ul",null,t," lalaluo1")}});t.exports=r},{}],3:[function(e,t,n){var r=e("./RootComponent"),a=e("./MockComponent");ReactDOM.render(React.createElement(a,null,React.createElement(r,null)),document.getElementById("index"))},{"./MockComponent":1,"./RootComponent":2}]},{},[3]);
//# sourceMappingURL=../maps/index.js.map
