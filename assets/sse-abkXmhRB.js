import{r,Q as e,al as j,S as f}from"./index-qolRe1dg.js";function b(){const[l,p]=r.useState(1),[c,x]=r.useState(""),u=`http://localhost:3300/sse?userId=${l}`,[n,h]=r.useState(null),[m,i]=r.useState([]),g=()=>{var o;n&&((o=n==null?void 0:n.close)==null||o.call(n));const s=new EventSource(u);s.onopen=t=>{console.log("open",t),i(a=>[...a,{type:"open"}])},s.onmessage=t=>{console.log("message",t);try{i(a=>[...a,{type:t.type,data:JSON.parse(t.data)}])}catch(a){console.error("error",a)}},s.onerror=t=>{console.log("error",t)},h(s)},d=()=>{j.post("/sse/create",{type:"message",data:{text:c},userId:l})};return r.useEffect(()=>{g()},[l]),e.jsxs("div",{className:y,children:[e.jsx("h4",{children:"SSE"}),e.jsxs("fieldset",{onSubmit:d,children:[e.jsxs("label",{children:[e.jsx("span",{children:"userId"}),e.jsx("input",{type:"number",value:l,onChange:s=>p(Number(s.target.value))})]}),e.jsxs("label",{children:[e.jsx("span",{children:"text"}),e.jsx("input",{type:"text",value:c,onChange:s=>x(s.target.value)})]})]}),e.jsx("div",{children:e.jsx("button",{onClick:d,children:"send"})}),e.jsx("table",{children:e.jsx("tbody",{children:m.map((s,o)=>e.jsxs("tr",{children:[e.jsx("td",{children:s.type}),e.jsx("td",{children:JSON.stringify(s.data)})]},o))})})]})}const y=f`
  fieldset {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    max-width: 20rem;
    gap: 0.5rem;

    label {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      gap: 0.5rem;

      input {
        padding: 0.5rem;
      }
    }
  }
`;export{b as default};
