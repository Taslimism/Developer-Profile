(this["webpackJsonpstyled-components-demo"]=this["webpackJsonpstyled-components-demo"]||[]).push([[0],{2:function(e,t,a){e.exports={"form-container":"Form_form-container__YkAMt","horizontal-rule":"Form_horizontal-rule__80vNz",image:"Form_image__35dyZ",title:"Form_title__2rTO9","form-title":"Form_form-title__31m_D","input-field":"Form_input-field__lv50P",label:"Form_label__QSpSi",form:"Form_form__3mdb3",submit:"Form_submit__1agxa",cancel:"Form_cancel__UIc3D"}},22:function(e,t,a){e.exports={header:"Header_header__Q-1Sx",image:"Header_image__1y2Ie",title:"Header_title__2_LAu"}},23:function(e,t,a){e.exports={footer:"Footer_footer__1nx_s",heart:"Footer_heart__3sf-p"}},28:function(e,t,a){e.exports={buttonStyle:"Button_buttonStyle__2Hnod","button-text":"Button_button-text__2E5PJ"}},38:function(e,t,a){e.exports={header:"Header_header__JrhsQ"}},4:function(e,t,a){e.exports={"dev-details":"DevDetails_dev-details__1EReb","dev-description":"DevDetails_dev-description__30EMt",image:"DevDetails_image__3OBFh",description:"DevDetails_description__1rlyD",link:"DevDetails_link__1o9dU",search:"DevDetails_search__H9vtQ","input-search":"DevDetails_input-search__3qwIN","btn-search":"DevDetails_btn-search__88qUg",form:"DevDetails_form__2_Z_V",btn:"DevDetails_btn__3H3dk"}},41:function(e,t,a){e.exports={backdrop:"BackDrop_backdrop__2WpL9"}},6:function(e,t,a){e.exports={banner:"ProfileBanner_banner__3nwH-",name:"ProfileBanner_name__HDL3W",bio:"ProfileBanner_bio__1VfkC",banner_info:"ProfileBanner_banner_info__3rS67",image:"ProfileBanner_image__2XyhB","extra-info":"ProfileBanner_extra-info__1xe10","image-container":"ProfileBanner_image-container__2JgUJ"}},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var c,n=a(1),i=a(18),r=a.n(i),s=a(10),l=a(3),o=a(38),d=a.n(o),j=a(0),m=function(){return Object(j.jsxs)("div",{className:d.a.header,children:[Object(j.jsx)("h1",{children:"The Developer Profile"}),Object(j.jsx)(s.b,{to:"/",children:Object(j.jsx)("h1",{children:"All Developers"})})]})},b=a(6),h=a.n(b),p=a(12),u=a.n(p),_=a(42),x=a(20),O=a(11),f=a(22),g=a.n(f),v=function(e){return Object(j.jsxs)("div",{className:g.a.header,children:[Object(j.jsx)("h1",{className:g.a.title,children:e.title}),Object(j.jsx)("img",{className:g.a.image,src:e.src,alt:e.alt})]})},N=a(4),k=a.n(N),w=a(78),y=a(15),D=a.n(y),F=[],S=function(e){var t=Object(n.useState)(""),a=Object(O.a)(t,2),i=a[0],r=a[1],l=Object(n.useState)(!1),o=Object(O.a)(l,2),d=o[0],m=o[1],b=Object(n.useState)(!0),h=Object(O.a)(b,2),p=h[0],_=h[1],f=function(){var e=Object(x.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,D.a.get("".concat("https://developer-account.herokuapp.com/api/developers/").concat(i));case 4:a=e.sent,n=a.data,F[0]={id:n.id,avatar_url:n.avatar_url},0!==F.length&&(c=F[0],_(!1),m(!0)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:k.a.search,children:Object(j.jsxs)("form",{className:k.a.form,onSubmit:f,children:[Object(j.jsx)("input",{className:k.a["input-search"],onInput:function(e){var t=e.target.value;r(t),""!==t&&null!==t||(_(!0),m(!1))},value:i,type:"text",placeholder:"Search for username"}),Object(j.jsx)("button",{className:k.a.btn,children:Object(j.jsx)("img",{className:k.a["btn-search"],src:"/images/search-24px.svg",alt:"Search icon"})})]})}),Object(j.jsxs)("div",{className:k.a["dev-details"],children:[p&&e.details.map((function(e,t){return Object(j.jsxs)("div",{className:k.a["dev-description"],children:[Object(j.jsx)("img",{className:k.a.image,src:e.avatar_url||"./images/account.svg",alt:"Avatar"}),Object(j.jsx)("h3",{className:k.a.description,children:e.id}),Object(j.jsx)(s.b,{className:k.a.link,to:e.id,children:Object(j.jsx)("img",{src:"./images/north_east-24px.svg",alt:"Arrow Head"})})]},Object(w.a)())})),d&&Object(j.jsxs)("div",{className:k.a["dev-description"],children:[Object(j.jsx)("img",{className:k.a.image,src:c.avatar_url||"./images/account.svg",alt:"Avatar"}),Object(j.jsx)("h3",{className:k.a.description,children:c.id}),Object(j.jsx)(s.b,{className:k.a.link,to:c.id,children:Object(j.jsx)("img",{src:"./images/north_east-24px.svg",alt:"Arrow Head"})})]})]})]})},I=a(28),C=a.n(I),H=function(e){return Object(j.jsxs)("button",{onClick:function(t){e.onClick()},className:C.a.buttonStyle,children:[" ",Object(j.jsx)("span",{className:C.a["button-text"],children:e.text})]})},B=a(21),E=a(29),P=a(2),L=a.n(P),T=function(e){var t=Object(n.useRef)(null);Object(n.useEffect)((function(){t.current.focus()}));var a=Object(n.useState)({github_id:"",linkedin_id:"",codechef_id:"",hackerrank_id:"",twitter_id:"",medium_id:""}),c=Object(O.a)(a,2),i=c[0],r=c[1],s=function(e){r(Object(E.a)(Object(E.a)({},i),{},Object(B.a)({},e.target.name,e.target.value)))},l=function(){e.onClick()};return Object(j.jsxs)("div",{onClick:function(e){e.stopPropagation()},className:L.a["form-container"],children:[Object(j.jsx)("h2",{className:L.a["form-title"],children:"Add developer profile"}),Object(j.jsxs)("form",{className:L.a.form,onSubmit:function(t){e.handleSubmit(i,t),l()},children:[Object(j.jsx)("hr",{className:L.a["horizontal-rule"]}),Object(j.jsx)("div",{className:L.a.label,children:Object(j.jsxs)("label",{htmlFor:"github_id",children:[Object(j.jsx)("img",{className:L.a.image,src:"./images/profile-icons/github.png",alt:"Logo"}),Object(j.jsx)("span",{className:L.a.title,children:"GitHub*"})]})}),Object(j.jsx)("input",{ref:t,type:"text",className:L.a["input-field"],onInput:s,id:"github_id",name:"github_id",placeholder:"Enter your GitHub id",required:!0}),Object(j.jsx)("div",{className:L.a.label,children:Object(j.jsxs)("label",{htmlFor:"linkedin_id",children:[Object(j.jsx)("img",{className:L.a.image,src:"./images/profile-icons/linkedin.png",alt:"Logo"}),Object(j.jsx)("span",{className:L.a.title,children:"LinkedIn"})]})}),Object(j.jsx)("input",{onInput:s,type:"text",className:L.a["input-field"],id:"linkedin_id",name:"linkedin_id",placeholder:"Enter your LinkedIn id"}),Object(j.jsx)("div",{className:L.a.label,children:Object(j.jsxs)("label",{htmlFor:"codechef_id",children:[Object(j.jsx)("img",{className:L.a.image,src:"./images/profile-icons/codechef.png",alt:"Logo"}),Object(j.jsx)("span",{className:L.a.title,children:"Codechef"})]})}),Object(j.jsx)("input",{onInput:s,type:"text",className:L.a["input-field"],id:"codechef_id",name:"codechef_id",placeholder:"Enter your Codechef id"}),Object(j.jsx)("div",{className:L.a.label,children:Object(j.jsxs)("label",{htmlFor:"hackerrank_id",children:[Object(j.jsx)("img",{className:L.a.image,src:"./images/profile-icons/hackerrank.png",alt:"Logo"}),Object(j.jsx)("span",{className:L.a.title,children:"Hackerrank"})]})}),Object(j.jsx)("input",{onInput:s,type:"text",className:L.a["input-field"],id:"hackerrank_id",name:"hackerrank_id",placeholder:"Enter your Hackerrank id"}),Object(j.jsx)("div",{className:L.a.label,children:Object(j.jsxs)("label",{htmlFor:"twitter_id",children:[Object(j.jsx)("img",{className:L.a.image,src:"./images/profile-icons/github.png",alt:"Logo"}),Object(j.jsx)("span",{className:L.a.title,children:"Twitter"})]})}),Object(j.jsx)("input",{onInput:s,type:"text",className:L.a["input-field"],id:"twitter_id",name:"twitter_id",placeholder:"Enter your Twitter id"}),Object(j.jsx)("div",{className:L.a.label,children:Object(j.jsxs)("label",{htmlFor:"medium_id",children:[Object(j.jsx)("img",{className:L.a.image,src:"./images/profile-icons/github.png",alt:"Logo"}),Object(j.jsx)("span",{className:L.a.title,children:"Medium"})]})}),Object(j.jsx)("input",{onInput:s,type:"text",className:L.a["input-field"],id:"medium_id",name:"medium_id",placeholder:"Enter your Medium id"}),Object(j.jsx)("hr",{className:L.a["horizontal-rule"]}),Object(j.jsx)("span",{onClick:l,className:L.a.cancel,children:"Cancel"}),Object(j.jsx)("button",{className:L.a.submit,type:"submit",children:"Submit"})]})]})},R=a(23),A=a.n(R),J=function(){return Object(j.jsx)("footer",{className:A.a.footer,children:Object(j.jsxs)("div",{className:A.a.container,children:["Made with ",Object(j.jsx)("span",{className:A.a.heart,children:"\u2665 "})," by ",Object(j.jsx)("a",{href:"https://twitter.com/Taslimism",children:"Taslim"})]})})},M=a(41),z=a.n(M),Q=function(e){var t=Object(j.jsxs)("aside",{onClick:function(){e.onClick()},className:z.a.backdrop,children:[" ",e.children]});return r.a.createPortal(t,document.getElementById("backdrop-hook"))},U=(a(76),[]),q=[],G=function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),r=Object(O.a)(i,2),s=r[0],l=r[1],o=function(){var e=Object(x.a)(u.a.mark((function e(t,a){var c,n,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,D.a.post("https://developer-account.herokuapp.com/api/developers/",t,{headers:{"Content-Type":"application/json"}});case 4:return c=e.sent,n=c.data,l((function(e){return U.push(n),[].concat(Object(_.a)(e),[n])})),e.next=9,D.a.get("".concat("https://developer-account.herokuapp.com/api/developers/").concat(t.github_id));case 9:i=e.sent,q.push(i.data),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),alert("Inavlid Username");case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[a&&Object(j.jsx)(Q,{onClick:function(){c(!1)},children:Object(j.jsx)(T,{handleSubmit:o,onClick:function(){c(!1)}})}),Object(j.jsx)(v,{title:"The Developer Repository",src:"/images/dev.png",alt:"Hero"}),Object(j.jsx)("p",{className:"heading",children:"Explore developer Profiles"}),Object(j.jsx)("hr",{}),Object(j.jsx)(S,{currDetails:s,details:U}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{className:"question",children:"Could not find what you were looking for?"}),Object(j.jsx)(H,{onClick:function(){c(!0)},text:"Add developer info"}),Object(j.jsx)(J,{})]})},K=function(e){var t=Object(l.f)().pathname.split("/")[1],a=q.find((function(e){return e.github_id===t}));return Object(j.jsxs)("div",{className:h.a.banner,children:[Object(j.jsx)("div",{className:h.a.image,children:Object(j.jsx)("img",{src:a.avatar_url||"./images/account.svg",alt:"banner"})}),Object(j.jsxs)("div",{className:h.a.banner_info,children:[Object(j.jsx)("div",{className:h.a.name,children:Object(j.jsx)("h1",{children:a.name})}),Object(j.jsx)("div",{className:h.a.bio,children:Object(j.jsx)("p",{children:a.bio})}),Object(j.jsxs)("div",{className:h.a["image-container"],children:[Object(j.jsx)("a",{href:"https://github.com/".concat(a.id),target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)("img",{className:h.a.logo,src:"./images/profile-icons/github.png",alt:"avatar"})}),Object(j.jsx)("a",{href:"https://www.hackerrank.com/".concat(a.hackerrank_id),target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)("img",{className:h.a.logo,src:"./images/profile-icons/hackerrank.png",alt:"avatar"})}),Object(j.jsx)("a",{href:"https://www.codechef.com/users/".concat(a.codechef_id),target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)("img",{className:h.a.logo,src:"./images/profile-icons/codechef.png",alt:"avatar"})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/".concat(a.linkedin_id,"/"),target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)("img",{className:h.a.logo,src:"./images/profile-icons/linkedin.png",alt:"avatar"})}),Object(j.jsx)("a",{href:"https://medium.com/".concat(a.medium_id),target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)("img",{className:h.a.logo,src:"./images/profile-icons/medium.png",alt:"avatar"})}),Object(j.jsx)("a",{href:"https://twitter.com/".concat(a.twitter_id),target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)("img",{className:h.a.logo,src:"./images/profile-icons/twitter.png",alt:"avatar"})})]}),Object(j.jsxs)("div",{className:h.a["extra-info"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"./images/location.svg",alt:""}),Object(j.jsx)("small",{children:a.location})," "]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"./images/business.svg",alt:""}),Object(j.jsx)("small",{children:a.company})," "]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{href:"https://workat.tech",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)("img",{src:"./images/insertlink.svg",alt:""})})," ",Object(j.jsx)("small",{children:a.email})]})]})]})]})},V=a(9),W=a.n(V),X=function(e){var t=Object(l.f)().pathname.split("/")[1],a=q.find((function(e){return e.github_id===t})).repos;return Object(j.jsxs)("div",{className:W.a["main_repo-container"],children:[Object(j.jsx)("h1",{className:W.a.heading,children:"Github repositories"}),Object(j.jsx)("hr",{className:W.a.divider}),a&&a.map((function(e){return Object(j.jsxs)("div",{className:W.a["repo-info"],children:[Object(j.jsx)("a",{className:W.a.link,href:e.html_url,children:e.name}),Object(j.jsx)("img",{className:W.a.arrow,src:"./images/north_east-24px.svg",alt:"arrowhead"}),Object(j.jsx)("span",{className:W.a.updateTime,children:e.updated_at}),Object(j.jsx)("p",{className:W.a.description,children:e.description}),Object(j.jsx)("hr",{className:W.a.divider})]},Object(w.a)())}))]})},Z=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{}),Object(j.jsx)(K,{}),Object(j.jsx)(X,{})]})},Y=function(){return Object(j.jsx)(s.a,{children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",exact:!0,children:Object(j.jsx)(G,{})}),Object(j.jsx)(l.a,{path:"/:id",children:Object(j.jsx)(Z,{})})]})})};r.a.render(Object(j.jsx)(Y,{}),document.getElementById("root"))},9:function(e,t,a){e.exports={link:"RepoInfo_link__2EHM8",divider:"RepoInfo_divider__1tJSQ","repo-info":"RepoInfo_repo-info__2K2Ny",arrow:"RepoInfo_arrow__1NKg6",updateTime:"RepoInfo_updateTime__1L534",heading:"RepoInfo_heading__2pSSu",description:"RepoInfo_description__uFCX2"}}},[[77,1,2]]]);
//# sourceMappingURL=main.69f0690c.chunk.js.map