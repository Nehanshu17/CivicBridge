file_gen:generate_document(query="""Create an app.js file containing the JavaScript code extracted from CivicBridge.html:

'use strict';
const API_BASE='http://localhost:3001/api';
let lang='en',tts=false,hist=[],rec=null,micOn=false,lowBw=false;

const SCHEMES=[
{id:'pm-awas-yojana',title:'Pradhan Mantri Awas Yojana (PMAY)',category:'housing',description:'Affordable housing for economically weaker sections and low/middle income groups.',eligibility:['Annual income below ₹18 lakh','No existing pucca house','First-time homebuyers'],benefits:'Subsidy up to ₹2.67 lakh on home loans',how_to_apply:'Apply at your local urban body office or at pmaymis.gov.in',documents:['Aadhaar card','Income certificate','Property documents'],tags:['housing','subsidy','shelter','house'],helpline:'1800-11-6163'},
{id:'pm-kisan',title:'PM-KISAN Samman Nidhi',category:'agriculture',description:'Direct income support of ₹6,000 a year to farmer families.',eligibility:['Small and marginal farmers','Land ownership records required'],benefits:'₹6,000 a year in three instalments to your bank account',how_to_apply:'Register at pmkisan.gov.in or your nearest CSC',documents:['Aadhaar card','Bank passbook','Land records'],tags:['farming','farmer','agriculture','income','cash'],helpline:'155261'},
{id:'ayushman-bharat',title:'Ayushman Bharat – PM-JAY',category:'health',description:'Health cover of ₹5 lakh per family per year for hospital treatment.',eligibility:['BPL families','Households listed in SECC 2011'],benefits:'Free treatment up to ₹5 lakh at empanelled hospitals',how_to_apply:'Check eligibility at pmjay.gov.in or any CSC',documents:['Aadhaar card','Ration card'],tags:['health','hospital','insurance','medical'],helpline:'14555'},
{id:'mid-day-meal',title:'PM POSHAN (Mid-Day Meal)',category:'education',description:'Free nutritious meals for children in government and aided schools.',eligibility:['Students in Classes 1–8 in government schools'],benefits:'Free cooked meal every school day',how_to_apply:'Automatic for enrolled students',documents:[],tags:['children','education','nutrition','school'],helpline:'1800-180-8004'},
{id:'nrega',title:'MGNREGS – Employment Guarantee',category:'employment',description:'100 days of guaranteed wage work a year for rural households.',eligibility:['Rural household members','Willing to do unskilled manual work'],benefits:'100 days of paid work per year',how_to_apply:'Apply for a job card at your Gram Panchayat',documents:['Aadhaar card','Bank account','Residence proof'],tags:['employment','work','wages','job'],helpline:'1800-111-555'},
{id:'pm-ujjwala',title:'Pradhan Mantri Ujjwala Yojana',category:'energy',description:'Free LPG connection for women from BPL households.',eligibility:['Women from BPL households','No existing LPG connection'],benefits:'Free LPG connection with first refill',how_to_apply:'Apply at the nearest LPG distributor or CSC',documents:['BPL ration card','Aadhaar card','Bank account'],tags:['cooking','gas','women','lpg'],helpline:'1906'},
{id:'skill-india',title:'Skill India Mission – PMKVY',category:'skills',description:'Free skill training with certification and placement support.',eligibility:['Aged 15–45','Indian citizen','School dropouts or unemployed'],benefits:'Free training, certificate and ₹8,000 reward on passing',how_to_apply:'Register at skillindia.gov.in or a training centre',documents:['Aadhaar card','Educational certificates'],tags:['training','skills','jobs','youth'],helpline:'1800-123-9626'},
{id:'pm-jan-dhan',title:'PM Jan Dhan Yojana',category:'finance',description:'Zero-balance bank account with RuPay card and accident insurance.',eligibility:['Citizens without a bank account','Minimum age 10'],benefits:'Zero-balance account, RuPay card, ₹2 lakh accident cover',how_to_apply:'Visit any bank branch or Business Correspondent',documents:['Aadhaar card','Address proof'],tags:['banking','bank','account','finance'],helpline:'1800-11-0001'},
{id:'anganwadi',title:'ICDS – Anganwadi Services',category:'child-welfare',description:'Nutrition, health care and pre-school for children under 6 and for mothers.',eligibility:['Children 0–6 years','Pregnant women','Lactating mothers'],benefits:'Nutrition, immunisation, health check-ups, pre-school',how_to_apply:'Register at your nearest Anganwadi centre',documents:['Birth certificate','Mother’s Aadhaar'],tags:['children','nutrition','mothers','baby'],helpline:'1098'},
{id:'digital-india',title:'Common Service Centres (CSC)',category:'digital-access',description:'Digital government services at village level, 5 lakh+ centres.',eligibility:['All Indian citizens'],benefits:'300+ government services close to home',how_to_apply:'Visit your nearest CSC (locator.csccloud.in)',documents:['Varies by service'],tags:['digital','internet','csc','services'],helpline:'1800-121-3468'}];

const SKILLS=[
{id:'a',title:'Basic Digital Literacy',category:'digital',description:'Use smartphones, internet, email and government apps',duration:'2 weeks',format:'In-person / Online',provider_type:'CSC, Library, NGO',level:'beginner',tags:['smartphone','internet','email']},
{id:'b',title:'Organic Farming Techniques',category:'agriculture',description:'Composting, natural pest control and organic certification',duration:'4 weeks',format:'In-person',provider_type:'KVK, Agri University',level:'intermediate',tags:['farming','organic','soil']},
{id:'c',title:'Tailoring & Stitching',category:'vocational',description:'Stitching skills for self-employment or a micro-enterprise',duration:'3 months',format:'In-person',provider_type:'PMKVY Centre, SHG',level:'beginner',tags:['tailoring','women','self-employment']},
{id:'d',title:'Financial Literacy & Banking',category:'finance',description:'Savings, loans, insurance and digital payments',duration:'1 week',format:'In-person / Online',provider_type:'Bank BC, NGO, CSC',level:'beginner',tags:['money','savings','UPI','loan']},
{id:'e',title:'Spoken English for Employment',category:'language',description:'Conversational English for service-sector jobs',duration:'2 months',format:'Online / In-person',provider_type:'PMKVY Centre',level:'beginner',tags:['english','communication','jobs']},
{id:'f',title:'Solar Panel Installation',category:'energy',description:'Install, wire and maintain solar home systems',duration:'45 days',format:'In-person',provider_type:'PMKVY, ITI',level:'intermediate',tags:['solar','electricity','technician']},
{id:'g',title:'Community Health Worker Skills',category:'health',description:'Basic health care, nutrition and hygiene for your community',duration:'6 weeks',format:'In-person',provider_type:'NHM, Health Dept',level:'beginner',tags:['health','first aid','women']},
{id:'h',title:'Rural Entrepreneurship',category:'business',description:'Business planning, registration and MUDRA startup loans',duration:'3 weeks',format:'Online / In-person',provider_type:'RSETI, Bank, NGO',level:'beginner',tags:['business','startup','MUDRA']}];

const HELP=[['National Emergency','112','Police, ambulance, fire'],['Ayushman Bharat','14555','Free health insurance'],['PM-KISAN','155261','Farmer income support'],['MGNREGS','1800-111-555','Rural employment'],['PMAY Housing','1800-11-6163','Affordable housing'],['PM Ujjwala','1906','Free LPG'],['Skill India','1800-123-9626','Free skill training'],['Jan Dhan','1800-11-0001','Zero-balance account'],['Child Helpline','1098','Child welfare, Anganwadi'],['Common Service Centre','1800-121-3468','Digital govt services'],['Women Helpline','181','Women in distress'],['MUDRA Loan','1800-180-1111','Small business loans']];

// ── utils ──
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function md(t){return esc(t).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/^[•\-] (.+)$/gm,'<li>$1</li>').replace(/(?:<li>.*<\/li>\n?)+/g,m=>'<ul>'+m.replace(/\n/g,'')+'</ul>').replace(/\n/g,'<br>')}
function toast(m){const t=$('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2800)}
function vstat(m){const e=$('vs');e.textContent=m||'';e.classList.toggle('on',!!m)}

// ── nav ──
function view(v){document.querySelectorAll('.view').forEach(e=>e.classList.remove('active'));$('view-'+v).classList.add('active');document.querySelectorAll('[data-view]').forEach(b=>{const a=b.dataset.view===v;b.classList.toggle('active',a);a?b.setAttribute('aria-current','page'):b.removeAttribute('aria-current')});scrollTo(0,0)}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>view(b.dataset.view)));

// ── eligibility matcher ──
const RULES=[
 ['pm-kisan',p=>p.job==='farmer'?[70,'You work in farming']:null],
 ['pm-awas-yojana',p=>p.house==='no'&&p.inc<3?[p.inc<2?70:50,'You have no pucca house and your income is within the limit']:null],
 ['ayushman-bharat',p=>p.inc<=1?[p.inc===0?72:55,'Your family income is low enough for hospital cover']:null],
 ['mid-day-meal',p=>p.kids==='school'?[65,'You have a school-age child']:null],
 ['anganwadi',p=>p.kids==='u6'?[72,'You have a child under 6']:null],
 ['nrega',p=>(['worker','unemployed','farmer'].includes(p.job)&&p.inc<=1)?[58,'Rural wage work is available to you']:null],
 ['pm-ujjwala',p=>p.sex==='f'&&p.inc<=1?[p.inc===0?68:48,'Free LPG is meant for women in low-income homes']:null],
 ['skill-india',p=>p.age>=15&&p.age<=45&&['student','unemployed','worker','home'].includes(p.job)?[p.job==='unemployed'||p.job==='student'?66:42,'You are aged 15–45 and free training is open to you']:null],
 ['pm-jan-dhan',p=>p.bank==='no'?[78,'You do not have a bank account yet']:null],
 ['digital-india',p=>[18,'A nearby centre can help you apply for all of these']]
];
function localMatch(p){
  const out=[];
  RULES.forEach(([id,fn])=>{const r=fn(p);if(r){out.push({s:SCHEMES.find(x=>x.id===id),score:Math.min(98,r[0]+(p.inc===0?8:0)),why:[r[1]]})}});
  return out.sort((a,b)=>b.score-a.score);
}
async function recommend(p){
  if(lowBw)return localMatch(p);
  try{
    const r=await fetch(API_BASE.replace(/\/api$/,'')+'/api/v1/recommend-schemes',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(p),signal:AbortSignal.timeout(4000)});
    if(!r.ok)throw 0;const d=await r.json();
    const m=(d.schemes||[]).map(x=>({s:SCHEMES.find(y=>y.id===x.id),score:x.score,why:x.reasons||[]})).filter(x=>x.s);
    if(m.length)return m;
  }catch(e){}
  return localMatch(p);
}
$('fform').addEventListener('submit',async e=>{
  e.preventDefault();
  const p={age:+$('f-age').value||0,job:$('f-job').value,inc:+$('f-inc').value,sex:$('f-sex').value,house:$('f-house').value,bank:$('f-bank').value,kids:$('f-kids').value,language:lang};
  const res=$('results');res.innerHTML='<div class="empty">Matching schemes…</div>';
  const m=(await recommend(p)).filter(x=>x.score>=30||x.s.id==='digital-india');
  if(!m.length){res.innerHTML='<div class="empty">No strong match found. Visit your nearest Common Service Centre or call 1800-121-3468.</div>';return}
  const docs=[...new Set(m.slice(0,5).flatMap(x=>x.s.documents))];
  res.innerHTML=`<p style="font-size:.85rem;color:var(--mu);margin-bottom:10px"><strong>${m.length}</strong> schemes may suit you. Best matches first.</p>`+
  m.map((x,i)=>`<div class="match${i===0?' top':''}"><div class="mh"><h3>${esc(x.s.title)}</h3><span class="score">${x.score}%</span></div>
  <div class="bar" role="img" aria-label="${x.score} percent match"><b style="width:${x.score}%"></b></div>
  <ul class="why">${x.why.map(w=>`<li>${esc(w)}</li>`).join('')}</ul>
  <div style="font-size:.84rem;margin-top:7px"><strong>You get:</strong> ${esc(x.s.benefits)}</div>
  <div class="mf"><button class="btn line" data-id="${x.s.id}" data-type="scheme">How to apply</button><span class="hl">📞 ${esc(x.s.helpline)}</span></div></div>`).join('')+
  `<div class="checklist"><h3>📎 Carry these documents</h3>${docs.map(d=>`<label><input type="checkbox"/> ${esc(d)}</label>`).join('')}<div class="mf"><button class="btn sun" onclick="print()">Print my list</button></div></div>
  <p style="font-size:.74rem;color:var(--mu);margin-top:10px">Guidance only. Final eligibility is decided by the scheme authority.</p>`;
});

// ── chat ──
function addMsg(role,html,raw){
  const d=document.createElement('div');d.className='message '+role;
  d.innerHTML=`<div class="av" aria-hidden="true">${role==='bot'?'C':'🧑'}</div><div class="bubble">${raw?html:md(html)}</div>`;
  $('msgs').appendChild(d);$('msgs').scrollTop=1e9;
  if(role==='bot'&&tts&&'speechSynthesis'in window){const u=new SpeechSynthesisUtterance(d.textContent.slice(0,400));u.lang={hi:'hi-IN',bn:'bn-IN',ta:'ta-IN',te:'te-IN',mr:'mr-IN',gu:'gu-IN'}[lang]||'en-IN';speechSynthesis.speak(u)}
}
function typing(on){if(!on){const t=$('typ');t&&t.remove();return}const d=document.createElement('div');d.id='typ';d.className='message bot';d.innerHTML='<div class="av">C</div><div class="bubble"><div class="dots" aria-label="Thinking"><span></span><span></span><span></span></div></div>';$('msgs').appendChild(d);$('msgs').scrollTop=1e9}
async function send(text){
  text=text.trim();if(!text)return;
  $('qp').style.display='none';addMsg('user',text);hist.push({role:'user',content:text});
  $('ci').value='';$('ci').style.height='auto';typing(true);
  try{
    const r=await fetch(API_BASE+'/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:lowBw?hist.slice(-3):hist,language:lang,lowData:lowBw}),signal:AbortSignal.timeout(15000)});
    typing(false);if(!r.ok)throw 0;
    const reply=(await r.json()).reply||'I could not get a response. Please try again.';
    addMsg('bot',reply);hist.push({role:'assistant',content:reply});
  }catch(e){typing(false);const f=fallback(text);addMsg('bot',f.html,true);hist.push({role:'assistant',content:f.text})}
}
function fallback(t){
  const q=t.toLowerCase();
  const m=SCHEMES.filter(s=>s.tags.some(x=>q.includes(x))||q.includes(s.category)).slice(0,2);
  if(m.length){
    const text='You may be eligible for: '+m.map(s=>s.title).join(', ');
    return{text,html:'Based on what you described, these may help:'+m.map(s=>`<div class="sc"><h4>${esc(s.title)}</h4><div>${esc(s.benefits)}</div><div><strong>How to apply:</strong> ${esc(s.how_to_apply)}</div><div style="color:var(--ok);font-weight:700;margin-top:4px">📞 ${esc(s.helpline)}</div></div>`).join('')}
  }
  if(/\b(hi|hello|namaste|hey)\b/.test(q))return{text:'Namaste',html:'Namaste! 🙏 Tell me about yourself, such as your work, family or what you need, and I will find schemes for you.'};
  return{text:'help',html:'I can help with <strong>housing, health, farming, jobs, skills, banking, energy, children</strong> and <strong>digital access</strong>. Try “I am a farmer” or “I need health insurance”. For emergencies call <strong>112</strong>.'};
}
$('send').onclick=()=>send($('ci').value);
$('ci').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send($('ci').value)}});
$('ci').addEventListener('input',e=>{e.target.style.height='auto';e.target.style.height=Math.min(e.target.scrollHeight,120)+'px'});$('qp').addEventListener('click',e=>{const b=e.target.closest('button');b&&send(b.dataset.p)});

// ── voice ──
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
if(SR){
  rec=new SR();rec.interimResults=true;
  const lm={en:'en-IN',hi:'hi-IN',bn:'bn-IN',ta:'ta-IN',te:'te-IN',mr:'mr-IN',gu:'gu-IN'};
  const reset=()=>{micOn=false;$('mic').classList.remove('on');$('mic').textContent='🎙️';$('mic').setAttribute('aria-label','Start voice input');vstat('')};
  rec.onstart=()=>{micOn=true;$('mic').classList.add('on');$('mic').textContent='⏹';$('mic').setAttribute('aria-label','Stop voice input');vstat('🎙️ Listening… speak now')};
  rec.onresult=e=>{$('ci').value=[...e.results].map(r=>r[0].transcript).join('')};
  rec.onerror=e=>{reset();if(e.error!=='aborted')toast('Voice error: '+e.error)};
  rec.onend=()=>{reset();if($('ci').value.trim())send($('ci').value)};$('mic').onclick=()=>{if(micOn)rec.stop();else{rec.lang=lm[lang]||'en-IN';rec.start()}};
}else{$('mic').style.opacity='.4';$('mic').title='Voice input is not supported in this browser'}

$('lang').addEventListener('change',e=>setLang(e.target.value));$('bw').addEventListener('click',()=>setBw(!lowBw));

// ── browse ──
function cardHTML(s,type){
  return `<div class="card"><div class="ch"><h3>${esc(s.title)}</h3><span class="cat">${esc(s.category.replace('-',' '))}</span></div><p>${esc(s.description)}</p>
  ${type==='skill'?`<p>⏱ ${esc(s.duration)} · 📍 ${esc(s.format)} · <strong style="color:var(--brand-d)">${esc(s.level)}</strong></p>`:''}
  <div class="tags">${s.tags.slice(0,4).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
  <div class="cf">${type==='scheme'?`<span class="hl">📞 ${esc(s.helpline)}</span>`:`<span style="font-size:.78rem;color:var(--mu)">by ${esc(s.provider_type)}</span>`}
  <button class="sm" data-id="${s.id}" data-type="${type}" aria-label="Details for ${esc(s.title)}">Details</button></div></div>`}
function list(data,gid,nid,type,unit){
  $(nid).textContent=data.length+' '+unit+(data.length!==1?'s':'');$(gid).innerHTML=data.length?data.map(s=>cardHTML(s,type)).join(''):'<div class="empty">Nothing matched. Try different words.</div>';
}
const hit=(s,q)=>!q||(s.title+s.description).toLowerCase().includes(q)||s.tags.some(t=>t.toLowerCase().includes(q));
const fS=()=>list(SCHEMES.filter(s=>hit(s,$('sc-q').value.toLowerCase())&&(!$('sc-c').value\vert{}\vert{}s.category===$('sc-c').value)),'sc-g','sc-n','scheme','scheme');
const fK=()=>list(SKILLS.filter(s=>hit(s,$('sk-q').value.toLowerCase())&&(!$('sk-l').value\vert{}\vert{}s.level===$('sk-l').value)),'sk-g','sk-n','skill','program');
['sc-q','sc-c'].forEach(i=>$(i).addEventListener('input',fS));['sk-q','sk-l'].forEach(i=>$(i).addEventListener('input',fK));$('hl-l').innerHTML=HELP.map(h=>`<div class="card"><div class="ch"><h3>${h[0]}</h3><span class="hl">📞 ${h[1]}</span></div><p>${h[2]}</p><a class="sm" style="align-self:flex-start" href="tel:${h[1].replace(/-/g,'')}" aria-label="Call ${h[0]}">Call now</a></div>`).join('');

// ── modal ──
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-id][data-type]');if(!b)return;
  const s=(b.dataset.type==='scheme'?SCHEMES:SKILLS).find(x=>x.id===b.dataset.id);if(!s)return;
  const sec=(h,c)=>`<div class="ms"><h4>${h}</h4>${c}</div>`;
  const ul=a=>'<ul>'+(a.length?a.map(x=>`<li>${esc(x)}</li>`).join(''):'<li>None required</li>')+'</ul>';
  $('mc').innerHTML=b.dataset.type==='scheme'
   ?`<h2 id="mt">${esc(s.title)}</h2>`+sec('About',`<p>${esc(s.description)}</p>`)+sec('Who can apply',ul(s.eligibility))+sec('What you get',`<p>${esc(s.benefits)}</p>`)+sec('How to apply',`<p>${esc(s.how_to_apply)}</p>`)+sec('Documents',ul(s.documents))+sec('Helpline',`<p style="font-size:1.1rem;font-weight:800;color:var(--ok)">📞 ${esc(s.helpline)}</p><a class="btn sun" href="tel:${s.helpline.replace(/-/g,'')}">Call helpline</a>`)
   :`<h2 id="mt">${esc(s.title)}</h2>`+sec('About',`<p>${esc(s.description)}</p>`)+sec('Details',ul(['Duration: '+s.duration,'Format: '+s.format,'Level: '+s.level,'Provided by: '+s.provider_type]))+`<a class="btn sun" href="https://skillindia.gov.in" target="_blank" rel="noopener">Register on Skill India</a>`;
  $('ov').classList.add('open');$('mx').focus();
});
const closeM=()=>$('ov').classList.remove('open');$('mx').onclick=closeM;$('ov').addEventListener('click',e=>{if(e.target===$('ov'))closeM()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeM()});

// ── language + low data ──
const T={
hi:{n_find:'खोजें',n_chat:'पूछें',n_sch:'योजनाएँ',n_ski:'कौशल',n_abt:'परिचय',n_hlp:'सहायता',h1:'एक मिनट में जानें आप किन योजनाओं के पात्र हैं',hp:'छह आसान सवालों के जवाब दें। योजना का नाम जानने या लॉगिन की ज़रूरत नहीं। आपको सूची, साथ ले जाने वाले दस्तावेज़ और जाने की जगह मिलेगी।',ayou:'आपके बारे में',l_age:'आपकी उम्र',l_job:'आप क्या करते हैं?',l_inc:'परिवार की सालाना आय',l_sex:'लिंग',l_house:'क्या आपके पास पक्का मकान है?',l_bank:'क्या आपका बैंक खाता है?',l_kids:'परिवार में बच्चे',btn:'मेरी योजनाएँ खोजें',mt:'आपके लिए योजनाएँ',ph:'अपनी बात लिखें: “मैं किसान हूँ”, “मुझे स्वास्थ्य बीमा चाहिए”…',hi:'नमस्ते! 🙏 मुझे अपने बारे में बताइए, मैं आपके लिए सही योजनाएँ खोजूँगा।',sch_h:'सरकारी योजनाएँ',ski_h:'कौशल विकास कार्यक्रम',hl_h:'हेल्पलाइन',low:'कम डेटा'},
mr:{n_find:'शोधा',n_chat:'विचारा',n_sch:'योजना',n_ski:'कौशल्य',n_abt:'माहिती',n_hlp:'मदत',h1:'तुम्ही कोणत्या योजनांसाठी पात्र आहात ते एका मिनिटात जाणून घ्या',hp:'सहा सोप्या प्रश्नांची उत्तरे द्या. योजनेचे नाव माहीत असण्याची किंवा लॉगिनची गरज नाही. तुम्हाला यादी, सोबत न्यायची कागदपत्रे आणि कुठे जायचे ते मिळेल.',ayou:'तुमच्याबद्दल',l_age:'तुमचे वय',l_job:'तुम्ही काय करता?',l_inc:'कुटुंबाचे वार्षिक उत्पन्न',l_sex:'लिंग',l_house:'तुमच्याकडे पक्के घर आहे का?',l_bank:'तुमचे बँक खाते आहे का?',l_kids:'कुटुंबातील मुले',btn:'माझ्या योजना शोधा',mt:'तुमच्यासाठी योजना',ph:'तुमचा प्रश्न लिहा: “मी शेतकरी आहे”, “मला आरोग्य विमा हवा”…',hi:'नमस्कार! 🙏 तुमच्याबद्दल सांगा, मी तुमच्यासाठी योग्य योजना शोधतो.',sch_h:'सरकारी योजना',ski_h:'कौशल्य विकास कार्यक्रम',hl_h:'हेल्पलाइन',low:'कमी डेटा'},
bn:{n_find:'খুঁজুন',n_chat:'জিজ্ঞাসা',n_sch:'প্রকল্প',n_ski:'দক্ষতা',n_abt:'পরিচিতি',n_hlp:'সাহায্য',h1:'এক মিনিটে জানুন আপনি কোন প্রকল্পের যোগ্য',hp:'ছয়টি সহজ প্রশ্নের উত্তর দিন। প্রকল্পের নাম জানা বা লগইন করার দরকার নেই। আপনি তালিকা, সঙ্গে নেওয়ার নথি এবং কোথায় যাবেন তা পাবেন।',ayou:'আপনার সম্পর্কে',l_age:'আপনার বয়স',l_job:'আপনি কী করেন?',l_inc:'পরিবারের বার্ষিক আয়',l_sex:'লিঙ্গ',l_house:'আপনার কি পাকা বাড়ি আছে?',l_bank:'আপনার কি ব্যাংক অ্যাকাউন্ট আছে?',l_kids:'পরিবারে শিশু',btn:'আমার প্রকল্প খুঁজুন',mt:'আপনার জন্য প্রকল্প',ph:'আপনার প্রশ্ন লিখুন: “আমি কৃষক”, “আমার স্বাস্থ্যবিমা দরকার”…',hi:'নমস্কার! 🙏 আপনার সম্পর্কে বলুন, আমি আপনার জন্য সঠিক প্রকল্প খুঁজে দেব।',sch_h:'সরকারি প্রকল্প',ski_h:'দক্ষতা উন্নয়ন কর্মসূচি',hl_h:'হেল্পলাইন',low:'কম ডেটা'},
ta:{n_find:'தேடு',n_chat:'கேள்',n_sch:'திட்டங்கள்',n_ski:'திறன்கள்',n_abt:'பற்றி',n_hlp:'உதவி',h1:'நீங்கள் தகுதியான திட்டங்களை ஒரே நிமிடத்தில் அறியுங்கள்',hp:'ஆறு எளிய கேள்விகளுக்கு பதிலளிக்கவும். திட்டத்தின் பெயர் தெரிய வேண்டியதில்லை, உள்நுழைவும் தேவையில்லை. பட்டியல், எடுத்துச் செல்ல வேண்டிய ஆவணங்கள், செல்ல வேண்டிய இடம் கிடைக்கும்.',ayou:'உங்களைப் பற்றி',l_age:'உங்கள் வயது',l_job:'நீங்கள் என்ன செய்கிறீர்கள்?',l_inc:'குடும்ப ஆண்டு வருமானம்',l_sex:'பாலினம்',l_house:'உங்களுக்கு கான்கிரீட் வீடு உள்ளதா?',l_bank:'உங்களுக்கு வங்கிக் கணக்கு உள்ளதா?',l_kids:'குடும்பத்தில் குழந்தைகள்',btn:'என் திட்டங்களைத் தேடு',mt:'உங்களுக்கான திட்டங்கள்',ph:'உங்கள் கேள்வியை எழுதுங்கள்: “நான் விவசாயி”, “எனக்கு மருத்துவக் காப்பீடு வேண்டும்”…',hi:'வணக்கம்! 🙏 உங்களைப் பற்றிச் சொல்லுங்கள், உங்களுக்கு ஏற்ற திட்டங்களைக் கண்டறிகிறேன்.',sch_h:'அரசுத் திட்டங்கள்',ski_h:'திறன் மேம்பாட்டுத் திட்டங்கள்',hl_h:'உதவி எண்கள்',low:'குறைந்த டேட்டா'},
te:{n_find:'వెతుకు',n_chat:'అడుగు',n_sch:'పథకాలు',n_ski:'నైపుణ్యాలు',n_abt:'గురించి',n_hlp:'సహాయం',h1:'మీరు అర్హులైన పథకాలను ఒక్క నిమిషంలో తెలుసుకోండి',hp:'ఆరు సులభమైన ప్రశ్నలకు సమాధానం ఇవ్వండి. పథకం పేరు తెలియాల్సిన అవసరం లేదు, లాగిన్ అవసరం లేదు. జాబితా, తీసుకెళ్లాల్సిన పత్రాలు, వెళ్లాల్సిన చోటు మీకు లభిస్తాయి.',ayou:'మీ గురించి',l_age:'మీ వయస్సు',l_job:'మీరు ఏమి చేస్తారు?',l_inc:'కుటుంబ వార్షిక ఆదాయం',l_sex:'లింగం',l_house:'మీకు పక్కా ఇల్లు ఉందా?',l_bank:'మీకు బ్యాంక్ ఖాతా ఉందా?',l_kids:'కుటుంబంలో పిల్లలు',btn:'నా పథకాలను వెతుకు',mt:'మీ కోసం పథకాలు',ph:'మీ ప్రశ్న రాయండి: “నేను రైతును”, “నాకు ఆరోగ్య బీమా కావాలి”…',hi:'నమస్కారం! 🙏 మీ గురించి చెప్పండి, మీకు సరైన పథకాలను కనుగొంటాను.',sch_h:'ప్రభుత్వ పథకాలు',ski_h:'నైపుణ్యాభివృద్ధి కార్యక్రమాలు',hl_h:'హెల్ప్‌లైన్‌లు',low:'తక్కువ డేటా'},
gu:{n_find:'શોધો',n_chat:'પૂછો',n_sch:'યોજનાઓ',n_ski:'કૌશલ્ય',n_abt:'માહિતી',n_hlp:'મદદ',h1:'તમે કઈ યોજનાઓ માટે પાત્ર છો તે એક મિનિટમાં જાણો',hp:'છ સરળ પ્રશ્નોના જવાબ આપો. યોજનાનું નામ જાણવાની કે લૉગિનની જરૂર નથી. તમને યાદી, સાથે લઈ જવાના દસ્તાવેજો અને ક્યાં જવું તે મળશે.',ayou:'તમારા વિશે',l_age:'તમારી ઉંમર',l_job:'તમે શું કરો છો?',l_inc:'પરિવારની વાર્ષિક આવક',l_sex:'જાતિ',l_house:'શું તમારી પાસે પાકું મકાન છે?',l_bank:'શું તમારું બેંક ખાતું છે?',l_kids:'પરિવારમાં બાળકો',btn:'મારી યોજનાઓ શોધો',mt:'તમારા માટે યોજનાઓ',ph:'તમારો પ્રશ્ન લખો: “હું ખેડૂત છું”, “મને આરોગ્ય વીમો જોઈએ”…',hi:'નમસ્તે! 🙏 તમારા વિશે કહો, હું તમારા માટે યોગ્ય યોજનાઓ શોધીશ.',sch_h:'સરકારી યોજનાઓ',ski_h:'કૌશલ્ય વિકાસ કાર્યક્રમો',hl_h:'હેલ્પલાઇન',low:'ઓછો ડેટા'}};
document.querySelectorAll('[data-i18n]').forEach(e=>e.dataset.en=e.textContent);
document.querySelectorAll('[data-i18n-ph]').forEach(e=>e.dataset.en=e.placeholder);
const keep=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const grab=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
function setLang(l,quiet){
  lang=l;$('lang').value=l;document.documentElement.lang=l;tts=l!=='en';keep('cb-lang',l);
  const d=T[l]||{};
  document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=d[e.dataset.i18n]||e.dataset.en);
  document.querySelectorAll('[data-i18n-ph]').forEach(e=>e.placeholder=d[e.dataset.i18nPh]||e.dataset.en);
  if(!quiet){toast('Language: '+$('lang').selectedOptions[0].text);if(d.hi)addMsg('bot',d.hi)}
}
function setBw(on,quiet){
  lowBw=on;document.body.classList.toggle('lowbw',on);$('bw').setAttribute('aria-pressed',on);$('lbn').hidden=!on;keep('cb-bw',on?'1':'');
  if(!quiet)toast(on?'Low-data mode on':'Low-data mode off');
}

// ── init ──
addMsg('bot','**Namaste! 🙏 I’m your CivicBridge guide.**\n\nTell me about your work, family or what you need, and I’ll find the right programs. Try:\n• I am a farmer\n• I need health insurance for my family\n• I want free skill training\n\nYou can type, or tap 🎙️ and speak.');
fS();fK();
const sl=grab('cb-lang');if(sl&&T[sl])setLang(sl,true);
if(grab('cb-bw'))setBw(true,true);
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
""")
