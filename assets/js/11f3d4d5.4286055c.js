"use strict";(self.webpackChunkmatrix=self.webpackChunkmatrix||[]).push([[457],{4547:(e,n,r)=>{r.d(n,{Ay:()=>t,RM:()=>o});var s=r(4848),i=r(8453);const o=[];function c(e){const{Details:n}={...(0,i.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"\u0420\u0435\u0441\u0443\u0440\u0441\u044b"}),(0,s.jsx)("ul",{children:e.children})]})}function t(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3199:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>j,frontMatter:()=>t,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"browser/fetching-page/index","title":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0412\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b","description":"\u0421\u0435\u0442\u0435\u0432\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441","source":"@site/docs/browser/fetching-page/index.mdx","sourceDirName":"browser/fetching-page","slug":"/browser/fetching-page/","permalink":"/docs/browser/fetching-page/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"wikiSidebar","previous":{"title":"CORS","permalink":"/docs/browser/cors"},"next":{"title":"CLS (Cumulative Layout Shift)","permalink":"/docs/browser/fetching-page/cls"}}');var i=r(4848),o=r(8453),c=r(4547);const t={},l="\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0412\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b",d={},h=[{value:"\u0421\u0435\u0442\u0435\u0432\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441",id:"\u0441\u0435\u0442\u0435\u0432\u043e\u0439-\u0437\u0430\u043f\u0440\u043e\u0441",level:2},{value:"\u0420\u0435\u043d\u0434\u0435\u0440 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b | CRP | Render Loop",id:"\u0440\u0435\u043d\u0434\u0435\u0440-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b--crp--render-loop",level:2},{value:"\u0420\u0435\u0441\u0443\u0440\u0441\u044b",id:"\u0440\u0435\u0441\u0443\u0440\u0441\u044b",level:2},...c.RM];function x(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0412\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b"})}),"\n",(0,i.jsx)(n.h2,{id:"\u0441\u0435\u0442\u0435\u0432\u043e\u0439-\u0437\u0430\u043f\u0440\u043e\u0441",children:"\u0421\u0435\u0442\u0435\u0432\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DNS lookup"}),":",(0,i.jsx)("br",{}),"\n-> \u0431\u0440\u0430\u0443\u0437\u0435\u0440/\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e (\u0435\u0441\u043b\u0438 \u0440\u0430\u043d\u0435\u0435 \u0443\u0436\u0435 \u0431\u044b\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043a \u044d\u0442\u043e\u043c\u0443 \u0430\u0434\u0440\u0435\u0441\u0443)",(0,i.jsx)("br",{}),"\n-> \u0440\u043e\u0443\u0442\u0435\u0440",(0,i.jsx)("br",{}),"\n-> \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430",(0,i.jsx)("br",{}),"\n-> \u043a\u043e\u0440\u043d\u0435\u0432\u043e\u0439 \u0441\u0435\u0440\u0432\u0435\u0440",(0,i.jsx)("br",{}),"\n-> \u0441\u0435\u0440\u0432\u0435\u0440 \u0437\u043e\u043d\u044b 1-\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f (com, ru ...)",(0,i.jsx)("br",{}),"\n-> \u0433\u0443\u0433\u043b\u043e\u0432\u0441\u043a\u0438\u0439 Name Server",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"TCP Handshake"})," (\u0422\u0440\u043e\u0439\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u043f\u043e\u0436\u0430\u0442\u0438\u0435, ",(0,i.jsx)(n.strong,{children:"http - 80"})," \u043f\u043e\u0440\u0442, ",(0,i.jsx)(n.strong,{children:"https - 443"})," \u043f\u043e\u0440\u0442):",(0,i.jsx)("br",{}),"\n-> \u043f\u0440\u0435\u0434\u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f",(0,i.jsx)("br",{}),"\n-> \u043e\u0442\u0432\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",(0,i.jsx)("br",{}),"\n-> \u0435\u0441\u043b\u0438 \u0432\u0441\u0435 \u043e\u043a, \u0442\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0441\u043e\u043a\u0435\u0442\u0430"]}),"\n",(0,i.jsxs)(n.li,{children:["\u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b HTTPs, \u0442\u043e \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c \u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ",(0,i.jsx)(n.strong,{children:"TLS/SSL \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442"}),", \u0435\u0441\u043b\u0438 \u0432\u0441\u0435 \u043e\u043a, \u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043e\u0431\u043c\u0435\u043d \u043a\u043b\u044e\u0447\u0430\u043c\u0438"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"\u0417\u0430\u043f\u0440\u043e\u0441 \u0434\u0430\u043d\u043d\u044b\u0445"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 html \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u0440\u0435\u043d\u0434\u0435\u0440-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b--crp--render-loop",children:"\u0420\u0435\u043d\u0434\u0435\u0440 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b | CRP | Render Loop"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 DOM"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 CSSOM"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Render Tree, \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0441\u0442\u0438\u043b\u0435\u0439"}),(0,i.jsx)("br",{}),"\nRender tree \u0434\u0443\u0431\u043b\u0438\u0440\u0443\u0435\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 DOM, \u043d\u043e \u0441\u044e\u0434\u0430 \u043d\u0435 \u043f\u043e\u043f\u0430\u0434\u0430\u044e\u0442 \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b",(0,i.jsx)("br",{}),"\n(\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u2014 ",(0,i.jsx)(n.code,{children:"<head>"}),", \u0438\u043b\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0441\u043e \u0441\u0442\u0438\u043b\u0435\u043c ",(0,i.jsx)(n.code,{children:"display:none;"}),").",(0,i.jsx)("br",{}),"\n\u0422\u0430\u043a\u0436\u0435, \u043a\u0430\u0436\u0434\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 \u0434\u0435\u0440\u0435\u0432\u0435 \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0430 \u043a\u0430\u043a \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 renderer.",(0,i.jsx)("br",{}),"\n\u041a\u0430\u0436\u0434\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0435\u043c\u0443 \u043e\u0431\u044a\u0435\u043a\u0442 DOM (\u0438\u043b\u0438 \u0431\u043b\u043e\u043a \u0442\u0435\u043a\u0441\u0442\u0430), \u0438 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0439 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0441\u0442\u0438\u043b\u044c.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"\u041f\u0440\u043e\u0449\u0435 \u0433\u043e\u0432\u043e\u0440\u044f, render tree \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 DOM."})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Layout"})," (\u0440\u0430\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u043c \u0438 \u043f\u043e\u0437\u0438\u0446\u0438\u0438)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Paint"})," (\u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0430 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Composing"})," (\u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441\u043b\u043e\u0435\u0432 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u0438\u0445 z-index \u0438 \u0442.\u043f.) \u0438 \u043d\u0435\u043f\u043e\u0441\u0442\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u043a\u0430\u0437 \u044e\u0437\u0435\u0440\u0443"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u0415\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u0440\u0435\u043d\u0434\u0435\u0440\u0438\u0442\u044c, \u0442\u043e \u0441\u0434\u0435\u043b\u0430\u043d\u043e \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0441\u043b\u0435 \u043e\u043f\u0443\u0441\u0442\u043e\u0448\u0435\u043d\u0438\u044f \u043e\u0447\u0435\u0440\u0435\u0434\u0438 \u043c\u0438\u043a\u0440\u043e\u0437\u0430\u0434\u0430\u0447"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Repaint"}),(0,i.jsx)("br",{}),"\n\u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0442\u0438\u043b\u0435\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430, \u043d\u0435 \u0432\u043b\u0438\u044f\u044e\u0449\u0438\u0445 \u043d\u0430 \u0435\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u0438 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440,\xa0",(0,i.jsx)(n.code,{children:"background-color"}),",\xa0",(0,i.jsx)(n.code,{children:"border-color"}),",\xa0",(0,i.jsx)(n.code,{children:"visibility"}),"), \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043f\u0440\u043e\u0441\u0442\u043e \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u044b\u0432\u0430\u0435\u0442 \u0435\u0433\u043e \u0437\u0430\u043d\u043e\u0432\u043e, \u0441 \u0443\u0447\u0451\u0442\u043e\u043c \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u0442\u0438\u043b\u044f \u2014 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 repaint (\u0438\u043b\u0438 restyle)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Reflow"}),(0,i.jsx)("br",{}),"\n\u0415\u0441\u043b\u0438 \u0436\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0442\u0440\u0430\u0433\u0438\u0432\u0430\u044e\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435, \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430, \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u2014 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 reflow (\u0438\u043b\u0438 relayout). \u041f\u0440\u0438\u0447\u0438\u043d\u0430\u043c\u0438 \u0442\u0430\u043a\u0438\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u043e\u0431\u044b\u0447\u043d\u043e \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 DOM (\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435, \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435, \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435, \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432);"}),"\n",(0,i.jsx)(n.li,{children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e, \u0432 \u0442.\u0447. \u0442\u0435\u043a\u0441\u0442\u0430 \u0432 \u043f\u043e\u043b\u044f\u0445 \u0444\u043e\u0440\u043c;"}),"\n",(0,i.jsx)(n.li,{children:"\u0420\u0430\u0441\u0447\u0451\u0442 \u0438\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 CSS-\u0441\u0432\u043e\u0439\u0441\u0442\u0432;"}),"\n",(0,i.jsx)(n.li,{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435, \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446 \u0441\u0442\u0438\u043b\u0435\u0439;"}),"\n",(0,i.jsxs)(n.li,{children:["\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u043c \xab",(0,i.jsx)(n.code,{children:"class"}),"\xbb;"]}),"\n",(0,i.jsx)(n.li,{children:"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043e\u043a\u043d\u043e\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u2014 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432, \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0430;"}),"\n",(0,i.jsxs)(n.li,{children:["\u0410\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044f \u043f\u0441\u0435\u0432\u0434\u043e-\u043a\u043b\u0430\u0441\u0441\u043e\u0432 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440,\xa0",(0,i.jsx)(n.code,{children:":hover"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["Forced Reflow \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u0433\u0434\u0430, \u043a\u043e\u0433\u0434\u0430 \u043c\u044b \u043e\u0431\u0440\u0430\u0449\u0430\u0435\u043c\u0441\u044f \u043a \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043f\u043e\u0441\u043b\u0435 \u0435\u0433\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f:",(0,i.jsx)("br",{}),"\n\u0415\u0441\u043b\u0438 \u043c\u044b \u043f\u0440\u043e\u0441\u0442\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0438, \u0442\u043e reflow \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0435\u0442 \u043f\u0440\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0441\u043c\u0435\u043d\u0435 \u043a\u0430\u0434\u0440\u0430."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=On2EWADF81Y",children:"\u041a\u043e\u043f\u0430\u0435\u043c\u0441\u044f \u043f\u043e\u0434 \u043a\u0430\u043f\u043e\u0442\u043e\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 event loop \u0438 compositing"}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=QDQSj4__v_8",children:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435"})}),"\n"]})]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"\u0425\u043e\u0440\u043e\u0448\u0430\u044f \u043d\u043e\u0432\u043e\u0441\u0442\u044c, \u043a\u0430\u0441\u0430\u0442\u0435\u043b\u044c\u043d\u043e HTML, \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d \u043f\u043e \u0447\u0430\u0441\u0442\u044f\u043c. \u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u043d\u0430\u0447\u0430\u043b \u043f\u043e\u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435. \u041e\u0434\u043d\u0430\u043a\u043e, \u0434\u0440\u0443\u0433\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a CSS \u0438 JavaScript, \u043c\u043e\u0433\u0443\u0442 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b."}),(0,i.jsxs)(n.p,{children:["\u041f\u0440\u0438 \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0435 HTML, \u043a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442 ",(0,i.jsx)(n.code,{children:"<script>"})," \u0438\u043b\u0438 ",(0,i.jsx)(n.code,{children:"<link>"}),", \u043e\u043d \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0438 \u0436\u0434\u0451\u0442, \u043f\u043e\u043a\u0430 JS \u0438\u043b\u0438 CSS-\u0444\u0430\u0439\u043b \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044f, \u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0438\u0434\u0435\u0442 \u0434\u0430\u043b\u044c\u0448\u0435."]}),(0,i.jsx)(n.p,{children:"CSS \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442 \u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f \xab\u0431\u043b\u043e\u043a\u0438\u0440\u0443\u044e\u0449\u0438\u043c \u0441\u043a\u0440\u0438\u043f\u0442\u044b\xbb, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e JavaScript-\u0444\u0430\u0439\u043b\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0434\u043e\u0436\u0434\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f CSSOM, \u043f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f."}),(0,i.jsxs)(n.p,{children:["\u0412\u044b\u0448\u0435\u0438\u0437\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0435 \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0442\u0430\u043a\u0443\u044e \u043c\u0435\u0442\u0440\u0438\u043a\u0443 \u043a\u0430\u043a ",(0,i.jsx)(n.a,{href:"./fetching-page/fcp",children:(0,i.jsx)(n.strong,{children:"FCP (First Contentful Paint)"})})," - \u0438\u0437\u043c\u0435\u0440\u044f\u044e\u0449\u0443\u044e \u0432\u0440\u0435\u043c\u044f, \u0437\u0430\u0442\u0440\u0430\u0447\u0435\u043d\u043d\u043e\u0435 \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0434\u043e \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0438 \u043f\u0435\u0440\u0432\u043e\u0433\u043e DOM \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430."]})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"\u041d\u0443\u0436\u043d\u043e \u0441\u0442\u0430\u0440\u0430\u0442\u044c\u0441\u044f \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u044c \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0443 css, \u0442\u0430\u043a \u043e\u043d\u0430 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u043c composition \u043f\u043e\u0442\u043e\u043a\u0435 \u0438 \u043d\u0435 \u043f\u0440\u0435\u0440\u0432\u0435\u0442\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u043d\u0430\u0448 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043f\u043e\u0442\u043e\u043a \u0441\u0442\u043e\u043f\u043d\u0435\u0442\u0441\u044f."})}),"\n",(0,i.jsx)(n.h2,{id:"\u0440\u0435\u0441\u0443\u0440\u0441\u044b",children:"\u0420\u0435\u0441\u0443\u0440\u0441\u044b"}),"\n",(0,i.jsx)(c.Ay,{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=ylG8_d9Qk1U",children:"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0431\u0440\u0430\u0443\u0437\u0435\u0440, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0412\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443?"}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=c8VW5_PtxU0",children:"\u0427\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0432\u0432\u0451\u043b \u0430\u0434\u0440\u0435\u0441 \u0432 \u0430\u0434\u0440\u0435\u0441\u043d\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443 \u2014 SPB Frontend"}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.a,{href:"https://habr.com/ru/companies/htmlacademy/articles/254825/",children:"\u0427\u0442\u043e \u043d\u0430 \u0441\u0430\u043c\u043e\u043c \u0434\u0435\u043b\u0435 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442, \u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0432\u0431\u0438\u0432\u0430\u0435\u0442 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0430\u0434\u0440\u0435\u0441 google.com"}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.a,{href:"https://medium.com/jspoint/how-the-browser-renders-a-web-page-dom-cssom-and-rendering-df10531c9969",children:"How the browser renders a web page? \u2014 DOM, CSSOM, and\nRendering"}),(0,i.jsx)("br",{})]})})]})}function j(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>t});var s=r(6540);const i={},o=s.createContext(i);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);