import{u as a,r as d,a as i,j as e,c as p,B as h}from"../app.js";var g={VITE_GOOGLE_OAUTH_CLIENT_ID:"294495511088-3qp5knhls0n3jkpgcooe0i0i0vrots9h.apps.googleusercontent.com",VITE_API_URL:"https://api.cihot.com:43443",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};function E(){console.debug("-- TestPage --");const{data:n,isSuccess:t,isError:r,error:o}=a(["aws","health"],async()=>await h.get("/aws/sample.json").then(s=>s)),{data:c,isError:l}=a(["redis"],async()=>await i.get("http://localhost:3000/redis/get/name").then(s=>s.data));return d.useEffect(()=>{i.get("https://localhost:3443/").then(s=>{console.debug("!!",s)})},[]),e.jsxs("div",{className:p`
        pre {
          word-break: keep-all;
          white-space: pre-wrap;
          text-align: start;
        }
      `,children:[e.jsx("div",{children:"Test - "}),e.jsx("div",{children:g.VITE_AWS_URL}),e.jsx("div",{children:JSON.stringify({isSuccess:t,isError:r})}),t&&e.jsx("pre",{children:JSON.stringify(n,null,2)}),r&&e.jsxs("pre",{children:[JSON.stringify(o,null,2)," "]}),l?e.jsx(e.Fragment,{children:"Err"}):e.jsx("pre",{children:JSON.stringify(c)})]})}export{E as default};
