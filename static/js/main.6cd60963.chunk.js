(this.webpackJsonpnasa=this.webpackJsonpnasa||[]).push([[0],{65:function(e,t,a){e.exports=a(76)},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),l=a(37),s=a(38),i=a(44),u=a(43),m=a(39),h=a(126),p=a(117),v=a(128),f=a(127),g=a(130),E=a(131),d=a(121),b=a(122),w=a(114),j=Object(w.a)((function(){return{formControl:{marginBottom:50,minWidth:120,width:"100%"},sol:{width:"100%",marginBottom:50}}}));function y(e){var t=e.rover,a=e.camera,n=e.sol,r=e.onChange,c=e.onClick,l=j();return o.a.createElement("div",null,o.a.createElement("h2",{style:{textAlign:"center"}},"select options"),o.a.createElement("form",null,o.a.createElement(p.a,{className:l.formControl},o.a.createElement(v.a,{id:"rover"},"Choose the rover"),o.a.createElement(f.a,{labelId:"rover",id:"rover",name:"rover",value:t,onChange:r},o.a.createElement(g.a,{value:"curiosity"},"Curiosity"),o.a.createElement(g.a,{value:"opportunity"},"Opportunity"),o.a.createElement(g.a,{value:"spirit"},"Spirit"))),o.a.createElement(p.a,{className:l.formControl},o.a.createElement(v.a,{id:"camera"},"Choose the camera"),o.a.createElement(f.a,{labelId:"camera",id:"camera",name:"camera",value:a,onChange:r},o.a.createElement(g.a,{value:"fhaz"},"Front"),o.a.createElement(g.a,{value:"rhaz"},"Rear"))),o.a.createElement(E.a,{id:"sol",label:"Sol",name:"sol",value:n,type:"number",InputLabelProps:{shrink:!0},className:l.sol,onChange:r,error:n<1,helperText:"not less than 1"}),o.a.createElement(d.a,{direction:"row",justify:"center",container:!0},o.a.createElement(b.a,{variant:"contained",onClick:c},"Show photos"))))}function O(e){var t=e.sol,a=e.camera,n=e.rover,r=e.page,c=e.onChange,l=e.showPhotos;return o.a.createElement(y,{onClick:l,onChange:c,sol:t,camera:a,rover:n,page:r})}var C=a(25),N=Object(w.a)({root:{width:"48%",marginBottom:10},img:{width:"100%",height:"100%"}});function P(e){var t=N(),a=e.photo;return o.a.createElement("div",{className:t.root},o.a.createElement("img",{alt:"img",src:a.img_src,className:t.img}))}var k=Object(w.a)({list:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",paddingTop:20},btn:{marginBottom:20}});var S=Object(C.b)((function(e){return{photos:e.photos}}))((function(e){var t=k(),a=e.photos,n=e.nextPage;return a.length?o.a.createElement(o.a.Fragment,null,o.a.createElement("ol",{className:t.list},a.map((function(e){return o.a.createElement(P,{key:e.id,photo:e})}))),o.a.createElement(d.a,{direction:"row",justify:"center",container:!0,className:t.btn},o.a.createElement(b.a,{variant:"outlined",onClick:function(e){n()}},"Load more\u2026"))):o.a.createElement("h3",null,"No photos")})),T=a(123),x=a(124),L=a(125),A=Object(w.a)((function(e){return{title:{flexGrow:1},bar:{background:"black"}}}));function B(){var e=A();return o.a.createElement("div",null,o.a.createElement(T.a,{position:"static",className:e.bar},o.a.createElement(x.a,null,o.a.createElement(L.a,{variant:"h6",className:e.title},"Nasa"))))}var I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={rover:"opportunity",camera:"fhaz",sol:1,page:1,isLoading:!0},e.onChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(m.a)({},n,o))},e.nextPage=function(t){e.setState((function(e){return{page:e.page+1}}),(function(){var t=e.state,a=t.sol,n=t.camera,o=t.rover,r=t.page;e.props.updatePlanets({rover:o,camera:n,sol:a,page:r})}))},e.showPhotos=function(t){t.preventDefault(),e.state.sol>0&&e.setState({page:1},(function(){var t=e.state,a=t.sol,n=t.camera,o=t.rover,r=t.page;e.props.planetsFetchData({rover:o,camera:n,sol:a,page:r})}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.sol,a=e.camera,n=e.rover,r=e.page;return o.a.createElement(o.a.Fragment,null,o.a.createElement(B,null),o.a.createElement(h.a,null,o.a.createElement(O,{onChange:this.onChange,showPhotos:this.showPhotos,rover:n,sol:t,page:r,camera:a}),o.a.createElement(S,{nextPage:this.nextPage})))}}]),a}(o.a.Component),J={updatePlanets:function(e){var t=e.rover,a=e.camera,n=e.sol,o=e.page;return function(e){fetch("".concat("https://api.nasa.gov/mars-photos/api/v1/rovers","/").concat(t,"/photos?sol=").concat(n,"&camera=").concat(a,"&page=").concat(o,"}&api_key=").concat("cQzJd3198WmBLRaaR7I6wKsGIESoJwfyNpvnJfsh")).then((function(e){if(e.status<400)return e.json();throw Error("Error")})).then((function(t){e({type:"UPDATE_PLANETS",photos:t.photos})})).catch((function(e){return console.log(e)}))}},planetsFetchData:function(e){var t=e.rover,a=e.camera,n=e.sol,o=e.page;return function(e){fetch("".concat("https://api.nasa.gov/mars-photos/api/v1/rovers","/").concat(t,"/photos?sol=").concat(n,"&camera=").concat(a,"&page=").concat(o,"}&api_key=").concat("cQzJd3198WmBLRaaR7I6wKsGIESoJwfyNpvnJfsh")).then((function(e){if(e.status<400)return e.json();throw Error("Error")})).then((function(t){e({type:"GET_PLANETS",photos:t.photos})})).catch((function(e){return console.log(e)}))}}},W=Object(C.b)((function(){return{}}),J)(I),_=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(W,null)}}]),a}(o.a.Component);a(75),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(24),z=a(47),F=a(35),G={photos:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PLANETS":return Object(F.a)(Object(F.a)({},e),{},{photos:t.photos});case"UPDATE_PLANETS":return Object(F.a)(Object(F.a)({},e),{},{photos:[].concat(Object(z.a)(e.photos),Object(z.a)(t.photos))});default:return e}},K=a(55),Q=a(56),U=Object(D.createStore)(R,Object(K.composeWithDevTools)(Object(D.applyMiddleware)(Q.a)));c.a.render(o.a.createElement(C.a,{store:U},o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.6cd60963.chunk.js.map