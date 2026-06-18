// ── API FETCH ──
async function fetchAPI() {
  const out = document.getElementById('api-data');
  const st  = document.getElementById('api-status');
  const btn = document.getElementById('api-btn');
  btn.textContent = '⏳ Requesting...'; btn.style.opacity='.5';
  out.style.color='rgba(134,239,172,.3)'; out.innerText='Connecting...'; st.innerText='';
  try {
    const t0 = performance.now();
    const r  = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
    const ms = Math.round(performance.now()-t0);
    const d  = await r.json();
    out.style.color='#86efac';
    st.innerText=` ✓ [200 OK] · ${ms}ms`; st.style.color='var(--c2)';
    out.innerText=JSON.stringify(d,null,2);
  } catch(e) {
    out.style.color='#fca5a5'; st.innerText=' ✗ Error'; st.style.color='var(--c5)';
    out.innerText='Failed to fetch.';
  }
  btn.innerHTML='↺ Run Again'; btn.style.opacity='1';
}

// ── FORM + LOCALSTORAGE ──
let entries=[];
(function(){try{const s=localStorage.getItem('cet138');if(s){entries=JSON.parse(s);renderEntries();}}catch(e){}}());
function saveEntry(){
  const n=document.getElementById('f-name'),e=document.getElementById('f-email');
  const name=n.value.trim(),email=e.value.trim();
  n.style.borderColor=name?'var(--border)':'var(--c5)';
  e.style.borderColor=email?'var(--border)':'var(--c5)';
  if(!name||!email)return;
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){e.style.borderColor='var(--c5)';return;}
  entries.push({name,email,phone:document.getElementById('f-phone').value.trim(),
    role:document.getElementById('f-role').value,level:document.getElementById('f-level').value});
  try{localStorage.setItem('cet138',JSON.stringify(entries));}catch(x){}
  renderEntries();
  const f=document.getElementById('form-flash'); f.style.display='block';
  setTimeout(()=>f.style.display='none',3000);
  n.value=''; e.value=''; document.getElementById('f-phone').value='';
  n.style.borderColor='var(--border)'; e.style.borderColor='var(--border)';
}
function renderEntries(){
  const wrap=document.getElementById('rec-wrap'); wrap.style.display='block';
  document.getElementById('rec-cnt').textContent=entries.length;
  const rc={'Frontend':'#2563eb','Backend':'#ea580c','Full Stack':'#16a34a'};
  document.getElementById('rec-body').innerHTML=entries.map((e,i)=>`
    <tr><td>${i+1}</td><td><strong>${e.name}</strong></td><td>${e.email}</td>
    <td>${e.phone||'—'}</td>
    <td><span style="background:${rc[e.role]||'#6b7280'};color:#fff;padding:.1em .4em;font-size:.58rem;font-weight:700;">${e.role}</span></td>
    <td>${e.level}</td></tr>`).join('');
}
function clearEntries(){
  if(!confirm('Clear all entries?'))return;
  entries=[];
  try{localStorage.removeItem('cet138');}catch(x){}
  document.getElementById('rec-wrap').style.display='none';
  document.getElementById('rec-cnt').textContent='0';
}

// ── FLEXBOX PLAYGROUND ──
function updateFlex(){
  const s=document.getElementById('fpg-stage');
  const dir=document.getElementById('fpg-dir').value;
  const jc=document.getElementById('fpg-jc').value;
  const ai=document.getElementById('fpg-ai').value;
  const gap=document.getElementById('fpg-gap').value;
  s.style.flexDirection=dir; s.style.justifyContent=jc;
  s.style.alignItems=ai; s.style.gap=gap;
  document.getElementById('fpg-code').textContent=
    `.container { display: flex; flex-direction: ${dir}; justify-content: ${jc}; align-items: ${ai}; gap: ${gap}; }`;
}

// ── BOOTSTRAP TABS ──
function bsTab(name){
  ['grid','cards','comp','util'].forEach(t=>{
    document.getElementById('bp-'+t).classList.toggle('show',t===name);
    document.getElementById('bt-'+t).classList.toggle('active',t===name);
  });
}

// ── TO-DO ──
let todos=[];
function addTodo(){
  const inp=document.getElementById('todo-in');
  const t=inp.value.trim(); if(!t)return;
  todos.push({text:t,done:false}); inp.value=''; renderTodos();
}
function renderTodos(){
  document.getElementById('todo-list').innerHTML=todos.map((t,i)=>`
    <li class="${t.done?'done':''}">
      <label style="display:flex;align-items:center;gap:.4rem;cursor:pointer;flex:1;">
        <input type="checkbox" class="tck" ${t.done?'checked':''} onchange="togTodo(${i})">
        <span>${t.text}</span></label>
      <button class="t-del" onclick="delTodo(${i})">✕</button></li>`).join('');
  const r=todos.filter(t=>!t.done).length;
  document.getElementById('todo-cnt').textContent=`${r} task${r!==1?'s':''} remaining`;
}
function togTodo(i){todos[i].done=!todos[i].done;renderTodos();}
function delTodo(i){todos.splice(i,1);renderTodos();}

// ── PASSWORD GENERATOR ──
function generatePassword(){
  const len=document.getElementById('pw-len').value;
  let cs="abcdefghijklmnopqrstuvwxyz";
  if(document.getElementById('pw-up').checked)  cs+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if(document.getElementById('pw-num').checked) cs+="0123456789";
  if(document.getElementById('pw-sym').checked) cs+="!@#$%^&*()-_=+[]{}";
  let pw="";
  for(let i=0;i<len;i++) pw+=cs[Math.floor(Math.random()*cs.length)];
  document.getElementById('pw-display').innerText=pw;
}

// ── CALCULATOR ──
let cA=null,cOp=null,cNew=true;
const cVal=()=>document.getElementById('calc-val');
const cExpr=()=>document.getElementById('calc-expr');
function calcNum(n){const e=cVal();if(cNew){e.textContent=n;cNew=false;}else{e.textContent=e.textContent==='0'?n:e.textContent+n;}}
function calcDot(){const e=cVal();if(cNew){e.textContent='0.';cNew=false;return;}if(!e.textContent.includes('.'))e.textContent+='.';}
function calcOp(op){
  const cur=parseFloat(cVal().textContent);
  if(cA!==null&&!cNew){const r=compute(cA,cur,cOp);cVal().textContent=String(parseFloat(r.toFixed(10)));cA=parseFloat(r.toFixed(10));}
  else cA=cur;
  cOp=op;cNew=true;cExpr().textContent=cA+' '+op;
}
function calcEq(){
  const cur=parseFloat(cVal().textContent);
  if(cA===null||cOp===null)return;
  const r=compute(cA,cur,cOp);
  cExpr().textContent=cA+' '+cOp+' '+cur+' =';
  cVal().textContent=String(parseFloat(r.toFixed(10)));
  cA=null;cOp=null;cNew=true;
}
function compute(a,b,op){switch(op){case'+':return a+b;case'−':return a-b;case'×':return a*b;case'÷':return b?a/b:0;}}
function calcClear(){cA=null;cOp=null;cNew=true;cVal().textContent='0';cExpr().textContent='';}
function calcSign(){cVal().textContent=String(parseFloat(cVal().textContent)*-1);}
function calcPct(){cVal().textContent=String(parseFloat(cVal().textContent)/100);}

// ── QUIZ ──
const qData=[
  {q:'What does HTML stand for?',opts:['HyperText Markup Language','HighText Macro Language','HyperTool Multiple Language','HyperText Multiple Links'],ans:0},
  {q:'Which CSS property changes text size?',opts:['font-weight','text-size','font-size','letter-spacing'],ans:2},
  {q:'What does DOM stand for?',opts:['Data Object Model','Document Object Model','Document Ordered Method','Data Oriented Markup'],ans:1},
  {q:'Which Bootstrap class creates a responsive row?',opts:['container','flex-row','row','col'],ans:2},
  {q:'Which JS method attaches an event listener?',opts:['addEvent()','on()','addEventListener()','bindEvent()'],ans:2},
];
let qi=0,qa=false;
function renderQ(){
  qa=false;
  const q=qData[qi];
  document.getElementById('qz-q').textContent=`Q${qi+1}/${qData.length}: ${q.q}`;
  document.getElementById('qz-res').textContent='';
  document.getElementById('qz-next').style.display='none';
  const wrap=document.getElementById('qz-opts'); wrap.innerHTML='';
  q.opts.forEach((o,i)=>{
    const b=document.createElement('button');
    b.className='qz-opt'; b.textContent=o; b.onclick=()=>checkQ(i);
    wrap.appendChild(b);
  });
}
function checkQ(i){
  if(qa)return; qa=true;
  const q=qData[qi];
  const btns=document.querySelectorAll('.qz-opt');
  btns[i].classList.add(i===q.ans?'correct':'wrong');
  btns[q.ans].classList.add('correct');
  btns.forEach(b=>b.disabled=true);
  const res=document.getElementById('qz-res');
  res.style.color=i===q.ans?'var(--c2)':'var(--c5)';
  res.textContent=i===q.ans?'✓ Correct!':'✗ Not quite.';
  if(qi<qData.length-1) document.getElementById('qz-next').style.display='inline-block';
  else res.textContent+=' Quiz complete!';
}
function nextQ(){qi++;renderQ();}
renderQ();