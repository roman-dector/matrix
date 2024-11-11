"use strict";(self.webpackChunkmatrix=self.webpackChunkmatrix||[]).push([[109],{3536:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>h});const c=JSON.parse('{"id":"browser/cors","title":"CORS","description":"\u0415\u0441\u0442\u044c \u0434\u0432\u0430 \u0432\u0438\u0434\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0439 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a:","source":"@site/docs/browser/cors.mdx","sourceDirName":"browser","slug":"/browser/cors","permalink":"/docs/browser/cors","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"wikiSidebar","previous":{"title":"\u0411\u0440\u0430\u0443\u0437\u0435\u0440","permalink":"/docs/browser/"},"next":{"title":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0412\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b","permalink":"/docs/browser/fetching-page/"}}');var r=s(4848),i=s(8453);const l={},d="CORS",o={},h=[{value:"CORS \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",id:"cors-\u0434\u043b\u044f-\u043f\u0440\u043e\u0441\u0442\u044b\u0445-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",level:2},{value:"\xab\u041d\u0435\u043f\u0440\u043e\u0441\u0442\u044b\u0435\xbb \u0437\u0430\u043f\u0440\u043e\u0441\u044b",id:"\u043d\u0435\u043f\u0440\u043e\u0441\u0442\u044b\u0435-\u0437\u0430\u043f\u0440\u043e\u0441\u044b",level:2},{value:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",id:"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435-\u0434\u0430\u043d\u043d\u044b\u0435",level:2},{value:"CORS and &lt;img /&gt;",id:"cors-and-img-",level:2}];function t(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"cors",children:"CORS"})}),"\n",(0,r.jsx)(n.p,{children:"\u0415\u0441\u0442\u044c \u0434\u0432\u0430 \u0432\u0438\u0434\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0439 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u041f\u0440\u043e\u0441\u0442\u044b\u0435."}),"\n",(0,r.jsx)(n.li,{children:"\u0412\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.w3.org/TR/cors/#terminology",children:"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"}),"\xa0\u2013 \u044d\u0442\u043e \u0437\u0430\u043f\u0440\u043e\u0441, \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u044f\u044e\u0449\u0438\u0439 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.w3.org/TR/cors/#simple-method",children:"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u043c\u0435\u0442\u043e\u0434"}),": GET, POST \u0438\u043b\u0438 HEAD"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.w3.org/TR/cors/#simple-header",children:"\u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438"}),"\xa0\u2013 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Accept"}),","]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Accept-Language"}),","]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Content-Language"}),","]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Content-Type"}),"\xa0\u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c\xa0",(0,r.jsx)(n.code,{children:"application/x-www-form-urlencoded"}),",\xa0",(0,r.jsx)(n.code,{children:"multipart/form-data"}),"\xa0\u0438\u043b\u0438\xa0",(0,r.jsx)(n.code,{children:"text/plain"}),". (\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0432 \u043e\u0431\u0435 \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0438 \u043d\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0443 \u0438 \u043d\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u043d\u0438\u043c\u0438 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \xab\u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441\xbb \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0441\u0434\u0435\u043b\u0430\u043d \u0447\u0435\u0440\u0435\u0437\xa0",(0,r.jsx)(n.code,{children:"<form>"}),"\xa0\u0438\u043b\u0438\xa0",(0,r.jsx)(n.code,{children:"<script>"}),", \u0431\u0435\u0437 \u043a\u0430\u043a\u0438\u0445-\u0442\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432."]})}),"\n",(0,r.jsx)(n.p,{children:"\u041a\u043e\u0433\u0434\u0430 \u043c\u044b \u043f\u044b\u0442\u0430\u0435\u043c\u0441\u044f \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043d\u0435\u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441, \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043f\u043e\u0441\u044b\u043b\u0430\u0435\u0442 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 (\xabpreflight\xbb), \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u2013 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043b\u0438 \u043e\u043d \u043f\u0440\u0438\u043d\u044f\u0442\u044c \u0442\u0430\u043a\u043e\u0439 \u043d\u0435\u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0438\u043b\u0438 \u043d\u0435\u0442?"}),"\n",(0,r.jsx)(n.h2,{id:"cors-\u0434\u043b\u044f-\u043f\u0440\u043e\u0441\u0442\u044b\u0445-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",children:"CORS \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"}),"\n",(0,r.jsxs)(n.p,{children:["\u041f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0439 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0442\u0430\u0432\u0438\u0442 \u0441\u0430\u043c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\xa0",(0,r.jsx)(n.code,{children:"Origin"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["\u0421\u0435\u0440\u0432\u0435\u0440 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c\xa0",(0,r.jsx)(n.code,{children:"Origin"}),"\xa0\u0438, \u0435\u0441\u043b\u0438 \u043e\u043d \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043f\u0440\u0438\u043d\u044f\u0442\u044c \u0442\u0430\u043a\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441, \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0441\u043e\u0431\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\xa0",(0,r.jsx)(n.code,{children:"Access-Control-Allow-Origin"}),"\xa0\u043a \u043e\u0442\u0432\u0435\u0442\u0443. \u042d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043d\u043d\u044b\u0439 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a (\u0432 \u043d\u0430\u0448\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435\xa0",(0,r.jsx)(n.code,{children:"https://javascript.info"}),") \u0438\u043b\u0438 \u0437\u0432\u0451\u0437\u0434\u043e\u0447\u043a\u0443\xa0",(0,r.jsx)(n.code,{children:"*"}),". \u0422\u043e\u0433\u0434\u0430 \u043e\u0442\u0432\u0435\u0442 \u0443\u0441\u043f\u0435\u0448\u0435\u043d, \u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0430."]}),"\n",(0,r.jsx)(n.p,{children:"\u0417\u0434\u0435\u0441\u044c \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0438\u0433\u0440\u0430\u0435\u0442 \u0440\u043e\u043b\u044c \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0441\u0440\u0435\u0434\u043d\u0438\u043a\u0430:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u041e\u043d \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442, \u0447\u0442\u043e \u043a \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0439 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\xa0",(0,r.jsx)(n.code,{children:"Origin"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["\u041e\u043d \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0433\u043e \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430\xa0",(0,r.jsx)(n.code,{children:"Access-Control-Allow-Origin"}),"\xa0\u0432 \u043e\u0442\u0432\u0435\u0442\u0435 \u0438, \u0435\u0441\u043b\u0438 \u0432\u0441\u0451 \u0445\u043e\u0440\u043e\u0448\u043e, \u0442\u043e JavaScript \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043e\u0442\u0432\u0435\u0442\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u2013 \u0434\u043e\u0441\u0442\u0443\u043f \u0437\u0430\u043f\u0440\u0435\u0449\u0430\u0435\u0442\u0441\u044f \u0441 \u043e\u0448\u0438\u0431\u043a\u043e\u0439."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043a \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0443 JavaScript \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u0442\u043e\u043b\u044c\u043a\u043e \u043a \u0442\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u043c \xab\u043f\u0440\u043e\u0441\u0442\u044b\u043c\xbb \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430\u043c \u043e\u0442\u0432\u0435\u0442\u0430:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Cache-Control"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Content-Language"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Content-Length"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Content-Type"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Expires"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Last-Modified"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Pragma"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0427\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c JavaScript \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043b\u044e\u0431\u043e\u043c\u0443 \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0443 \u043e\u0442\u0432\u0435\u0442\u0430, \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\xa0",(0,r.jsx)(n.code,{children:"Access-Control-Expose-Headers"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"\u043d\u0435\u043f\u0440\u043e\u0441\u0442\u044b\u0435-\u0437\u0430\u043f\u0440\u043e\u0441\u044b",children:"\xab\u041d\u0435\u043f\u0440\u043e\u0441\u0442\u044b\u0435\xbb \u0437\u0430\u043f\u0440\u043e\u0441\u044b"}),"\n",(0,r.jsx)(n.p,{children:"\u0411\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u0434\u0435\u043b\u0430\u0435\u0442 \xab\u043d\u0435\u043f\u0440\u043e\u0441\u0442\u044b\u0435\xbb \u0437\u0430\u043f\u0440\u043e\u0441\u044b (\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435\u043b\u044c\u0437\u044f \u0431\u044b\u043b\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432 \u043f\u0440\u043e\u0448\u043b\u043e\u043c) \u0441\u0440\u0430\u0437\u0443. \u041f\u0435\u0440\u0435\u0434 \u044d\u0442\u0438\u043c \u043e\u043d \u043f\u043e\u0441\u044b\u043b\u0430\u0435\u0442 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441, \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsxs)(n.p,{children:["\u041f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043c\u0435\u0442\u043e\u0434\xa0",(0,r.jsx)(n.code,{children:"OPTIONS"}),", \u0443 \u043d\u0435\u0433\u043e \u043d\u0435\u0442 \u0442\u0435\u043b\u0430, \u043d\u043e \u0435\u0441\u0442\u044c \u0442\u0440\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Origin"}),"\xa0\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043c\u0435\u043d\u043d\u043e \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a (\u0434\u043e\u043c\u0435\u043d/\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b/\u043f\u043e\u0440\u0442), \u0431\u0435\u0437 \u043f\u0443\u0442\u0438."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Access-Control-Request-Method"}),"\xa0\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 HTTP-\u043c\u0435\u0442\u043e\u0434 \xab\u043d\u0435\u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e\xbb \u0437\u0430\u043f\u0440\u043e\u0441\u0430."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Access-Control-Request-Headers"}),"\xa0\u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0440\u0430\u0437\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0439 \u0437\u0430\u043f\u044f\u0442\u044b\u043c\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u0435\u0433\u043e \xab\u043d\u0435\u043f\u0440\u043e\u0441\u0442\u044b\u0445\xbb HTTP-\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u0415\u0441\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0442\u0430\u043a\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b, \u0442\u043e \u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u0431\u0435\u0437 \u0442\u0435\u043b\u0430, \u0441\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u043e\u043c 200 \u0438 \u0441 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430\u043c\u0438:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Access-Control-Allow-Origin"}),"\xa0\u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043d\u043d\u044b\u0439 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Access-Control-Allow-Methods"}),"\xa0\u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043d\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Access-Control-Allow-Headers"}),"\xa0\u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043d\u043d\u044b\u0445 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432."]}),"\n",(0,r.jsxs)(n.li,{children:["\u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\xa0",(0,r.jsx)(n.code,{children:"Access-Control-Max-Age"}),"\xa0\u043c\u043e\u0436\u0435\u0442 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0435\u043a\u0443\u043d\u0434, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043d\u0443\u0436\u043d\u043e \u043a\u0435\u0448\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u041f\u0440\u0435\u0434\u0437\u0430\u043f\u0440\u043e\u0441 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \xab\u0437\u0430 \u043a\u0443\u043b\u0438\u0441\u0430\u043c\u0438\xbb, \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u043e \u0434\u043b\u044f JavaScript."}),"\n",(0,r.jsx)(n.p,{children:"JavaScript \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0438\u043b\u0438 \u043e\u0448\u0438\u0431\u043a\u0443, \u0435\u0441\u043b\u0438 \u0441\u043e \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435-\u0434\u0430\u043d\u043d\u044b\u0435",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),"\n",(0,r.jsxs)(n.p,{children:["\u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0439 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 (credentials), \u043f\u043e\u0434 \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0437\u0434\u0435\u0441\u044c \u043f\u043e\u043d\u0438\u043c\u0430\u044e\u0442\u0441\u044f \u043a\u0443\u043a\u0438 \u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438 HTTP-\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438.\n\u0427\u0442\u043e\u0431\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0443 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\xa0",(0,r.jsx)(n.code,{children:"fetch"}),", \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u043f\u0446\u0438\u044e\xa0",(0,r.jsx)(n.code,{children:'credentials: "include"'}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043f\u0440\u0438\u043d\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\xa0",(0,r.jsx)(n.em,{children:"\u0441 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438"}),", \u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\xa0",(0,r.jsx)(n.code,{children:"Access-Control-Allow-Credentials: true"}),"\xa0\u043a \u043e\u0442\u0432\u0435\u0442\u0443, \u0432 \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a\xa0",(0,r.jsx)(n.code,{children:"Access-Control-Allow-Origin"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u0432\xa0",(0,r.jsx)(n.code,{children:"Access-Control-Allow-Origin"}),"\xa0\u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0437\u0432\u0451\u0437\u0434\u043e\u0447\u043a\u0443\xa0",(0,r.jsx)(n.code,{children:"*"}),"\xa0\u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0441 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438. \u0422\u0430\u043c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0438\u043c\u0435\u043d\u043d\u043e \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a."]}),"\n",(0,r.jsx)(n.h2,{id:"cors-and-img-",children:"CORS and <img />"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u0410\u0442\u0440\u0438\u0431\u0443\u0442 crossorigin \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0430\u0441\u0442\u044c\u044e \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 CORS"}),"\xa0\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u043e \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0435 ",(0,r.jsx)(n.code,{children:"<canvas>"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 ",(0,r.jsx)(n.code,{children:"<img>"})," \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d \u0430\u0442\u0440\u0438\u0431\u0443\u0442 crossorigin, \u0442\u043e \u043f\u043e\u0441\u044b\u043b\u0430\u0435\u0442\u0441\u044f \u0437\u0430\u043f\u0440\u043e\u0441, \u043d\u0435 \u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0438\u0439\u0441\u044f \u043a CORS (\u0431\u0435\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 Origin). \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043f\u043e\u043c\u0435\u0447\u0430\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u0430\u043a \u0438\u0441\u043f\u043e\u0440\u0447\u0435\u043d\u043d\u043e\u0435 (\u043e\u043d\u043e \u043d\u0435 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u043c) \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0435\u0433\u043e \u0434\u0430\u043d\u043d\u044b\u043c, \u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0445 ",(0,r.jsx)(n.code,{children:"<canvas>"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"\u0415\u0441\u043b\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 crossorigin \u0443\u043a\u0430\u0437\u0430\u043d, \u0442\u043e \u043f\u043e\u0441\u044b\u043b\u0430\u0435\u0442\u0441\u044f CORS-\u0437\u0430\u043f\u0440\u043e\u0441 (\u0441 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u043c Origin). \u0415\u0441\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0441\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0439 \u0434\u043e\u0441\u0442\u0443\u043f, \u0442\u043e \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438 \u0444\u0438\u043a\u0441\u0438\u0440\u0443\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0443 \u0432 \u043f\u0430\u043d\u0435\u043b\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430."})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var c=s(6540);const r={},i=c.createContext(r);function l(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);