(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[714],{9013:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/en/contacter",function(){return n(4241)}])},7885:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(5893);function a(e){let{className:t}=e;return(0,s.jsxs)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 657 394",children:[(0,s.jsx)("path",{d:"M628,45V360H37V45H628m2-14H35A12,12,0,0,0,23,43V362a12,12,0,0,0,12,12H630a12,12,0,0,0,12-12V43a12,12,0,0,0-12-12Z",style:{fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:14}}),(0,s.jsx)("path",{d:"M334.5,88a133.35,133.35,0,0,1,108.7,56L634,43,33,42,225.1,145A133.34,133.34,0,0,1,334.5,88Z",style:{fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:14}}),(0,s.jsx)("path",{style:{fill:"#fff"},d:"M380.21,336.6C361.79,346.32,343,350,320.6,350c-54.93,0-101.48-40.19-101.48-104.49,0-69,47.89-128.6,122.24-128.6,58.28,0,97.46,40.86,97.46,96.78,0,50.24-28.13,79.71-59.61,79.71-13.4,0-25.79-9-24.79-29.47h-1.34C341.36,283.69,326,293.4,305.86,293.4c-19.42,0-36.17-15.74-36.17-42.2,0-41.52,32.82-79.37,79.37-79.37,14.41,0,27.13,3,35.84,7l-11.39,60.62c-5,25.45-1,37.18,10.05,37.51,17.08.34,36.17-22.44,36.17-61.29,0-48.56-29.14-83.39-81.05-83.39-54.59,0-100.47,43.21-100.47,111.19,0,55.93,36.51,90.42,86.07,90.42,19.09,0,36.84-4,50.57-11.72ZM361.79,191.93a57.64,57.64,0,0,0-16.74-2.35c-29.47,0-53.25,27.8-53.25,60.28,0,14.74,7.36,25.46,22.1,25.46,19.42,0,37.17-24.79,40.86-45.55Z"})]})}},2856:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(5893);function a(e){let{className:t}=e;return(0,s.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 329 384",children:(0,s.jsx)("path",{d:"M212,231.4a73.39,73.39,0,0,0-32.68,60.4c-24.28-11.95-47.82-31.81-64.12-65.18-15.76-32.25-18.46-61-14.89-85.42a73.42,73.42,0,0,0,69.15,19c39.4-9.72,4.21-152.41-35.2-142.7A73.52,73.52,0,0,0,78.43,90.36C48.19,126.41,24.71,204.42,53.36,262.73c29.48,60,106.43,89.59,152.22,86a73.51,73.51,0,0,0,88.07,4.85C327.41,331.09,245.79,208.86,212,231.4Z",style:{fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:14}})})}},4241:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var s=n(5893);n(1431);var a=n(9008),r=n.n(a),c=n(1664),o=n.n(c),i=n(7294),l=n(7536),m=n(7885),u=n(2856),h=n(2920),d=n(6800),p=n.n(d);let f="mathieu.dery@outlook.fr",x="(819) 500-3463";function _(){let[e,t]=(0,i.useState)(0),{register:n,handleSubmit:a,formState:{errors:c},reset:d}=(0,l.cI)();async function _(e){let n=await fetch("https://pfk.ddns.net/api/sendmail",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)});n.ok?((0,h.Am)("Message sent",{type:"success"}),d(),t(0)):(0,h.Am)("Error while sending message",{type:"error"})}return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("title",{children:"Contact | Mathieu D\xe9ry"}),(0,s.jsx)("meta",{name:"title",content:"Contact | Mathieu D\xe9ry"}),(0,s.jsx)("meta",{name:"description",content:"Contact on Mathieu D\xe9ry's portfolio"}),(0,s.jsx)("meta",{property:"og:title",content:"Contact | Mathieu D\xe9ry"}),(0,s.jsx)("meta",{property:"og:description",content:"Contact on Mathieu D\xe9ry's portfolio"})]}),(0,s.jsx)(h.Ix,{}),(0,s.jsxs)("main",{className:p().main,children:[(0,s.jsx)("div",{className:p().contact,children:(0,s.jsx)("span",{className:p().subtitle,children:"Send a message"})}),(0,s.jsxs)("form",{className:p().form,noValidate:!0,onSubmit:a(_),children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("input",{className:p().input,type:"text",placeholder:"Name",...n("nom",{required:"The name cannot be empty"})}),c.nom&&(0,s.jsx)("pre",{className:p().err,children:c.nom.message})]}),(0,s.jsxs)("label",{children:[(0,s.jsx)("input",{className:p().input,type:"text",placeholder:"Email",...n("courriel",{required:"The email cannot be empty",pattern:{value:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i,message:"The email format is invalid"}})}),c.courriel&&(0,s.jsx)("pre",{className:p().err,children:c.courriel.message})]}),(0,s.jsxs)("label",{children:[(0,s.jsx)("textarea",{className:p().input,onInput:e=>t(e.target.value.length),rows:5,maxLength:500,placeholder:"Message",...n("message",{required:"The message cannot be empty",minLength:{value:8,message:"The message must be at least 8 characters"},maxLength:{value:500,message:"The message cannot have more than ".concat(500," characters")}})}),(0,s.jsx)("span",{className:p().progress,children:"".concat(e," / ").concat(500)}),c.message&&(0,s.jsx)("pre",{className:p().err,children:c.message.message})]}),(0,s.jsx)("input",{className:p().input,type:"submit",value:"Send"})]}),(0,s.jsxs)("section",{className:p().contact,children:[(0,s.jsx)("span",{className:p().subtitle,children:"Contact Info"}),(0,s.jsxs)(o(),{className:p().link,href:"mailto:".concat(f),children:[(0,s.jsx)(m.Z,{className:p().icon}),f]}),(0,s.jsxs)(o(),{className:p().link,href:"tel:".concat(x),children:[(0,s.jsx)(u.Z,{className:p().icon}),x]})]})]})]})}},6800:function(e){e.exports={main:"Contacter_main__E7X6I",form:"Contacter_form__zzSFU",input:"Contacter_input__t5CDu",progress:"Contacter_progress__7z4CP",err:"Contacter_err__BDUE_",contact:"Contacter_contact__DSh7G",subtitle:"Contacter_subtitle__VHLAK",link:"Contacter_link__AKLb8",icon:"Contacter_icon__oc7nx"}}},function(e){e.O(0,[224,774,888,179],function(){return e(e.s=9013)}),_N_E=e.O()}]);