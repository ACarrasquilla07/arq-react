(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{60:function(e,t,a){e.exports=a(93)},91:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),c=a(17),s=a(20),i=a(31),m=a(38),u=a(59),d=a(28);function E(e,t){if(!t.type)return t.key instanceof Array?(console.log("state",e.setIn(t.key,t.payload).toJS()),e.setIn(t.key,t.payload)):(console.log("state",e.set(t.key,t.payload).toJS()),e.set(t.key,t.payload));switch(t.type){case"ADD_TODO":return t.payload?Object(d.a)({},e,{todos:[].concat(Object(u.a)(e.todos),[t.payload])}):e;case"COMPLETE":return Object(d.a)({},e,{todos:e.todos.filter(function(e){return e.id!==t.payload})});case"SET_TODO":return Object(d.a)({},e,{todos:t.payload.filter(function(e){return!e.complete})});default:return e}}var p=r.a.createContext({todos:[],lista:Object(i.a)([]),formLogin:{fields:{usuario:{value:"",error:""},clave:{value:"",error:""},telefono:{value:"",error:"Debes ingresar este campo"}}}}),f=p,h=function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h5",null,"Todo List")),r.a.createElement("div",{className:"col-md-4"},e.children))},b=Object({NODE_ENV:"production",PUBLIC_URL:"/arq-react"}).API_URL||"http://localhost:8080",g=function(e){return fetch("".concat(b,"/todo/").concat(e.id),{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()})},v=function(){return fetch("".concat(b,"/todo")).then(function(e){return e.json()})},y=function(e){return fetch("".concat(b,"/todo"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()})},N={getAll:function(e){return v().then(function(t){e({isResult:"success",data:t})}).catch(function(t){console.error(t),e({isResult:"error",error:t})})},update:function(e,t){return g(e).then(function(e){t({isResult:"success",item:e})}).catch(function(e){console.error(e),t({isResult:"error",error:e})})},add:function(e,t){return y({item:e,id:null}).then(function(e){t({isResult:"success",item:e})}).catch(function(e){console.error(e),t({isResult:"error",error:e})})}};var O=function(e){var t=e.state,a=e.handleComplete;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("br",null),function(e){var t;return 0===e.todos.length?r.a.createElement("h4",null,"Yay! All todos are done! Take a rest!"):r.a.createElement(h,null,r.a.createElement("span",{className:"float-right"},(t=e.todos.length)>1?"There are ".concat(t," todos."):"There is ".concat(t," todo.")))}(t))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("ul",{className:"list-group","data-testid":"all-list"},t.todos.map(function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item"},e.item,r.a.createElement("button",{className:"float-right btn btn-danger btn-sm",style:{marginLeft:10},onClick:function(){return a(e)}},"Complete"))}))))))},j=function(){var e=Object(n.useContext)(p),t=e.state,a=e.dispatch,l=Object(n.useState)(null),o=Object(s.a)(l,2),c=o[0],i=o[1];return Object(n.useEffect)(function(){N.getAll(function(e){i(e.isResult),"success"===e.isResult&&a({type:"SET_TODO",payload:e.data})})},[t.todo]),r.a.createElement(r.a.Fragment,null,{success:r.a.createElement(O,{handleComplete:function(e){var t=Object(d.a)({},e,{complete:!0});N.update(t,function(e){a({type:"COMPLETE",payload:e.item.id})})},state:t}),error:r.a.createElement("div",{className:"alert alert-dark"},"Error in the request"),null:r.a.createElement("div",null,"Loading")}[c])},C=function(e){var t=e.todo,a=e.error,n=e.handleTodoAdd,l=e.handleSubmitForm,o=e.handleTodoChange;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("br",null),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{"data-testid":"input-data",className:a?"form-control is-valid":"form-control",value:t,autoFocus:!0,placeholder:"Enter new todo",onKeyUp:l,onChange:o}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{"data-testid":"btn-add",className:"btn btn-primary",onClick:n},"Add"))),a&&r.a.createElement("small",{className:"text-danger"},"Request failed")))},k=function(){var e=Object(n.useContext)(p).dispatch,t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(null),i=Object(s.a)(c,2),m=i[0],u=i[1];function d(){N.add(l,function(t){t.error?u(t.error):(e({type:"ADD_TODO",payload:t.item}),o(""))})}return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{error:m,todo:l,handleTodoAdd:d,handleSubmitForm:function(e){13===e.keyCode&&d()},handleTodoChange:function(e){o(e.target.value)}}))},T=a(97),w=a(99),L=a(100),S=a(98),A=a(88),x=a(87),D=function(e){e.history;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{bg:"light",expand:"lg"},r.a.createElement("img",{src:"https://www.tuya.com.co/sites/all/themes/tuya/assets/images/pre-home/logo_tuya.svg",className:"img-responsive logo-top-bat",alt:"img 1"}),r.a.createElement(T.a.Brand,{href:"#home"}," Bonos"),r.a.createElement(T.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(T.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(w.a,{className:"mr-auto"},r.a.createElement(w.a.Link,null,r.a.createElement(c.b,{to:"/"},r.a.createElement("li",null,r.a.createElement("span",null,"Home")))),r.a.createElement(w.a.Link,{href:"#home"},r.a.createElement(c.b,{to:"/todoform"},r.a.createElement("span",null,"Add"))),r.a.createElement(w.a.Link,{href:"#link"},r.a.createElement(c.b,{to:"/login"},r.a.createElement("span",null,"Registrarme"))),r.a.createElement(w.a.Link,null,r.a.createElement(c.b,{to:"/list"},r.a.createElement("li",null,r.a.createElement("span",null,"Lista")))),r.a.createElement(L.a,{title:"Dropdown",id:"basic-nav-dropdown"},r.a.createElement(L.a.Item,{href:"#action/3.1"},"Action"),r.a.createElement(L.a.Item,{href:"#action/3.2"},"Another action"),r.a.createElement(L.a.Item,{href:"#action/3.3"},"Something"),r.a.createElement(L.a.Divider,null),r.a.createElement(L.a.Item,{href:"#action/3.4"},"Separated link"))),r.a.createElement(S.a,{inline:!0},r.a.createElement(A.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(x.a,{variant:"outline-success"},"Search")))),r.a.createElement("nav",{"aria-label":"breadcrumb"},r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement("a",{href:"#"},"Home")),r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement("a",{href:"#"},"Library")),r.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Data"))))},R=function(e){var t=Object(n.useContext)(f),a=t.state,l=t.dispatch,o=e.field,c=e.nameState,s=e.onBlur,i=e.optional,m=e.maxLength,u=e.label,d=a.getIn([c,"fields",o]).toJS(),E=d.error,p=d.value;return r.a.createElement("div",{className:"form-group"},r.a.createElement("span",null,"".concat(u).concat(i?"":" *")),r.a.createElement("input",{id:"id_".concat(o),className:"form-control",type:"text",maxLength:m,value:p,onChange:function(e){return l({key:[c,"fields",o,"value"],payload:e.target.value})},name:"input-normal",onBlur:s}),E&&r.a.createElement("span",{id:"id_".concat(o,"Error"),className:"error-input"},E))},I=function(e){e.history;var t=Object(n.useContext)(f),a=t.state,l=t.dispatch,o=a.get("formLogin").toJS();function c(){console.log("login"),console.log(o)}return r.a.createElement("div",{className:"row col-12"},r.a.createElement("div",{className:"card col-md-6 col-sm-12",style:{background:"#ED1C29"}}),r.a.createElement("div",{className:"card col-md-6 col-sm-12"},r.a.createElement("form",{className:"container",onSubmit:function(){c()}},r.a.createElement("span",null,"Usuario"),r.a.createElement("input",{type:"text",id:"usuario",placeholder:"Tu usuario",onChange:function(e){return l({key:["formLogin","fields","usuario","value"],payload:e.target.value})}}),r.a.createElement("span",null,"Clave"),r.a.createElement("input",{type:"password",id:"lname",name:"lastname",placeholder:"Tu clave"}),r.a.createElement(R,{field:"telefono",nameState:"formLogin",label:"Telefono"}),r.a.createElement("span",null,"Rol"),r.a.createElement("select",{id:"country",name:"country"},r.a.createElement("option",{value:"admin"},"Administrador"),r.a.createElement("option",{value:"tuyaAdmin"},"Tuya")),r.a.createElement("button",{id:"btn_buscarAfiliado",type:"button",className:"btn btn-login",onClick:c},"Ingresar"))))},_=function(){var e=Object(i.a)(Object(n.useContext)(f)),t=Object(n.useReducer)(E,e),a=Object(s.a)(t,2),l=a[0],o=a[1];return r.a.createElement(f.Provider,{value:{state:l,dispatch:o}},r.a.createElement(D,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/login",component:I}),r.a.createElement(m.a,{path:"/list",component:j}),r.a.createElement(m.a,{path:"/todoform",component:k})))},J=(a(89),a(91),document.getElementById("root"));o.a.render(r.a.createElement(function(){return r.a.createElement(c.a,null,r.a.createElement(_,null))},null),J)}},[[60,2,1]]]);
//# sourceMappingURL=main.ccd33456.chunk.js.map