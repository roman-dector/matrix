"use strict";(self.webpackChunkmatrix=self.webpackChunkmatrix||[]).push([[389],{4547:(e,n,s)=>{s.d(n,{Ay:()=>d,RM:()=>c});var r=s(4848),t=s(8453);const c=[];function a(e){const{Details:n}={...(0,t.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0420\u0435\u0441\u0443\u0440\u0441\u044b"}),(0,r.jsx)("ul",{children:e.children})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},7077:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>j,frontMatter:()=>d,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"auth/jwt","title":"JWT","description":"JWT - \u0441\u0442\u0440\u043e\u043a\u0430 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 header.payload.signature.","source":"@site/docs/auth/jwt.mdx","sourceDirName":"auth","slug":"/auth/jwt","permalink":"/docs/auth/jwt","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"wikiSidebar","previous":{"title":"Auth","permalink":"/docs/auth/"}}');var t=s(4848),c=s(8453),a=s(4547);const d={},o="JWT",i={},h=[{value:"Header",id:"header",level:2},{value:"Payload",id:"payload",level:2},{value:"Signature",id:"signature",level:2},{value:"Token",id:"token",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"Access \u0438 Refresh",id:"access-\u0438-refresh",level:2},{value:"\u0420\u0435\u0441\u0443\u0440\u0441\u044b",id:"\u0440\u0435\u0441\u0443\u0440\u0441\u044b",level:2},...a.RM];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"jwt",children:"JWT"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"JWT"})," - \u0441\u0442\u0440\u043e\u043a\u0430 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,t.jsx)(n.code,{children:"header.payload.signature"}),".\n\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0442 \u043d\u0435\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430."]}),"\n",(0,t.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,t.jsx)(n.p,{children:"Header - JSON \u043e\u0431\u044a\u0435\u043a\u0442 \u0444\u043e\u0440\u043c\u0430\u0442\u0430:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "alg": "HS256", // \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0445\u0435\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f signature\n  "typ": "JWT"\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"HS256 - \u0441\u0438\u043c\u043c\u0435\u0442\u0440\u0438\u0447\u043d\u044b\u0439 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0432\u043c\u0435\u0441\u0442\u043e \u043d\u0435\u0433\u043e \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f\n\u0430\u0441\u0441\u0438\u043c\u0435\u0442\u0440\u0438\u0447\u043d\u044b\u0439 RS256"})}),"\n",(0,t.jsx)(n.h2,{id:"payload",children:"Payload"}),"\n",(0,t.jsx)(n.p,{children:"Payload - JSON \u043e\u0431\u044a\u0435\u043a\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Payload, \u043a\u0430\u043a \u0438 Header, \u043d\u0435 \u043f\u043e\u0434\u0432\u0435\u0440\u0433\u0430\u0435\u0442\u0441\u044f \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u044e,\n\u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0435 \u0441\u0442\u043e\u0438\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432 \u043d\u0435\u043c \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435."})}),"\n",(0,t.jsx)(n.h2,{id:"signature",children:"Signature"}),"\n",(0,t.jsxs)(n.p,{children:["\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0445\u044d\u0448 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0432 ",(0,t.jsx)(n.code,{children:"header"})," \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u043e\u0442 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0445\n\u0447\u0435\u0440\u0435\u0437 \u0442\u043e\u0447\u043a\u0443 ",(0,t.jsx)(n.code,{children:"header"})," \u0438 ",(0,t.jsx)(n.code,{children:"payload"})," \u0432 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0435 base64, \u0430 \u0442\u0430\u043a\u0436\u0435 ",(0,t.jsx)(n.code,{children:"secret"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const headerB64 = base64(header)\nconst payloadB64 = base64(payload)\n\nconst signature = HS256(`${headerB64}.${payloadB64}`, secret)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"token",children:"Token"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const jwt = `${headerB64}.${payloadB64}.${signature}`\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\n",(0,t.jsxs)(n.p,{children:["\u0421\u0435\u0440\u0432\u0438\u0441 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0434\u0430\u043d\u043d\u044b\u0445 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 jwt \u0442\u043e\u043a\u0435\u043d,\n\u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0434\u0430\u043b\u0435\u0435 \u043a\u043b\u0438\u0435\u043d\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u0432 \u0441\u0435\u0440\u0432\u0438\u0441\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f.\n\u0421\u0435\u0440\u0432\u0438\u0441 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043f\u043e\u043b\u0443\u0447\u0438\u0432 \u0442\u043e\u043a\u0435\u043d \u043e\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438 ",(0,t.jsx)(n.code,{children:"secret"})," \u043e\u0442 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438, \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u044c\n\u0438, \u0435\u0441\u043b\u0438 \u043e\u043d\u0430 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442, \u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u043c."]}),"\n",(0,t.jsx)(n.h2,{id:"access-\u0438-refresh",children:"Access \u0438 Refresh"}),"\n",(0,t.jsxs)(n.p,{children:["\u0412 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0441\u0445\u0435\u043c\u0435 \u0441\u0435\u0440\u0432\u0435\u0440 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u0442\u0434\u0430\u0435\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u0443 \u0434\u0432\u0430 \u0442\u043e\u043a\u0435\u043d\u0430 ",(0,t.jsx)(n.code,{children:"access"})," - jwt \u0438 ",(0,t.jsx)(n.code,{children:"refresh"})," - \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"refresh"})," \u0442\u043e\u043a\u0435\u043d \u0438\u043c\u0435\u0435\u0442 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0436\u0438\u0437\u043d\u0438 (\u043e\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0447\u0430\u0441\u043e\u0432 \u0434\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043b\u0435\u0442)",(0,t.jsx)("br",{}),"\n\u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u043e\u0442\u043f\u0435\u0447\u0430\u0442\u043e\u043a \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0442\u043e\u043a\u0435\u043d\u0430.",(0,t.jsx)("br",{}),"\n\u041f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u043e\u0431\u043c\u0435\u043d\u0430 \u0442\u043e\u043a\u0435\u043d\u0430 \u0431\u043e\u043b\u0435\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0430, \u043b\u0438\u0431\u043e \u043f\u0440\u0438 \u043d\u0435\u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0438 \u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0433\u043e \u043e\u0442\u043f\u0435\u0447\u0430\u0442\u043a\u0430,\n\u0438 \u043d\u043e\u0432\u044b\u0439 \u0438 \u0441\u0442\u0430\u0440\u044b\u0439 \u0442\u043e\u043a\u0435\u043d\u044b \u043f\u043e\u043f\u0430\u0434\u0430\u044e\u0442 \u0432 blacklist, \u0442\u0435\u043a\u0443\u0449\u0430\u044f \u0441\u0435\u0441\u0441\u0438\u044f \u043e\u0442\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0443 \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f\n\u0437\u0430\u043d\u043e\u0432\u043e \u043f\u0440\u043e\u0439\u0442\u0438 \u043f\u0440\u043e\u0441\u0435\u0441\u0441 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438.",(0,t.jsx)("br",{}),"\n\u041d\u0438\u0433\u0434\u0435, \u043a\u0440\u043e\u043c\u0435 \u043a\u0430\u043a \u0432\u043e \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0438 \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 ",(0,t.jsx)(n.code,{children:"refresh"})," \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f.\n\u0420\u0435\u0444\u0440\u0435\u0448 \u0442\u043e\u043a\u0435\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0432 http only cookie."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"access"})," \u0442\u043e\u043a\u0435\u043d \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0436\u0438\u0432\u0443\u0449\u0438\u0439 (\u043e\u0431\u044b\u0447\u043d\u043e \u043d\u0435 \u0431\u043e\u043b\u043b\u0435\u0435 15 \u043c\u0438\u043d).",(0,t.jsx)("br",{}),"\n\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0436\u0438\u0437\u043d\u0438 \u043e\u0431\u0443\u0441\u043b\u043e\u0432\u043b\u0435\u043d\u043e \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u0437\u044b\u0432\u0430 \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043d\u0430 \u0441\u043a\u043e\u043c\u043f\u0440\u043e\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u044c.\n\u0412\u0440\u0435\u043c\u044f \u0436\u0438\u0437\u043d\u0438 \u0442\u043e\u043a\u0435\u043d\u0430 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0432 payload \u043f\u043e\u043b\u0435 iat (issue at time) \u0435\u0441\u043b\u0438 \u043e\u043d\u043e \u0438\u0441\u0442\u0435\u043a\u043b\u043e,\n\u0441\u0435\u0440\u0432\u0435\u0440 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 ",(0,t.jsx)(n.code,{children:"401"})," \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u0434\u043e\u043c."]}),"\n",(0,t.jsx)(n.h2,{id:"\u0440\u0435\u0441\u0443\u0440\u0441\u044b",children:"\u0420\u0435\u0441\u0443\u0440\u0441\u044b"}),"\n",(0,t.jsxs)(a.Ay,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://jwt.io/",children:"JWT.io"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=7iuwfKOcvkE",children:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 JWT \u0438 \u043a\u0430\u043a \u0435\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c"})]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=YAtneg1Ot80",children:"JWT \u0442\u043e\u043a\u0435\u043d\u044b: \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 payload"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=mWNN8hpXS-A",children:"JWT \u043a\u0430\u043a \u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0443"})]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=vQldMjSJ6-w",children:"JWT. \u0427\u0430\u0441\u0442\u044c 1. \u0422\u0435\u043e\u0440\u0438\u044f"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=601CnGGp_MU",children:"JWT. \u0427\u0430\u0441\u0442\u044c 2. \u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=_BSag4ABBMY",children:"JWT. \u0427\u0430\u0441\u0442\u044c 3. \u0421\u0435\u0440\u0432\u0435\u0440"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=XG-xOHogPkY",children:"JWT. \u0427\u0430\u0441\u0442\u044c 4. \u041a\u043b\u0438\u0435\u043d\u0442"}),(0,t.jsx)("br",{})]})]})]})}function j(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var r=s(6540);const t={},c=r.createContext(t);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);