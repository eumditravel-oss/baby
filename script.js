const nurseries = [
  {rank:1,name:'헤세드 산후조리원',old:'구 드팜므 산후조리원 위례점',distance:7,time:'15~20분',price:'500~700만원대',priceLevel:600,massage:'10~20만원/회',rating:'4.9',facility:'호텔형 시설, 위례권 프리미엄, 깔끔한 공간 후기 중심',blog:'https://search.naver.com/search.naver?query=헤세드+산후조리원+위례+후기',map:'https://map.naver.com/p/search/헤세드%20산후조리원',phone:'031-755-5366'},
  {rank:2,name:'맘스파크 산후조리원',old:'',distance:3,time:'8~10분',price:'300~450만원대',priceLevel:380,massage:'8~15만원/회',rating:'4.7',facility:'수정구 기준 접근성 우수, 가성비 후기 중심',blog:'https://search.naver.com/search.naver?query=맘스파크+산후조리원+후기',map:'https://map.naver.com/p/search/맘스파크%20산후조리원',phone:''},
  {rank:3,name:'곽생로여성병원 산후조리원',old:'',distance:2,time:'5~8분',price:'300~500만원대',priceLevel:400,massage:'10~20만원/회',rating:'4.6',facility:'병원 연계 장점, 의료 접근성 후기 중심',blog:'https://search.naver.com/search.naver?query=곽생로+산후조리원+후기',map:'https://map.naver.com/p/search/곽생로여성병원%20산후조리원',phone:''},
  {rank:4,name:'위례포르투나 산후조리원',old:'',distance:8,time:'15~20분',price:'400~600만원대',priceLevel:520,massage:'10~20만원/회',rating:'4.8',facility:'프라이빗하고 신축급 시설 선호 후기 중심',blog:'https://search.naver.com/search.naver?query=위례포르투나+산후조리원+후기',map:'https://map.naver.com/p/search/위례포르투나%20산후조리원',phone:''},
  {rank:5,name:'오르빛 산후조리원',old:'',distance:10,time:'20~25분',price:'500~700만원대',priceLevel:620,massage:'15~25만원/회',rating:'4.7',facility:'분당권 프리미엄 시설, 산모 케어 후기 중심',blog:'https://search.naver.com/search.naver?query=오르빛+산후조리원+후기',map:'https://map.naver.com/p/search/오르빛%20산후조리원',phone:''},
  {rank:6,name:'디아망 산후조리원',old:'',distance:12,time:'20~25분',price:'500~700만원대',priceLevel:620,massage:'15~25만원/회',rating:'4.6',facility:'시설 만족도와 조용한 분위기 후기 중심',blog:'https://search.naver.com/search.naver?query=디아망+산후조리원+후기',map:'https://map.naver.com/p/search/디아망%20산후조리원',phone:''},
  {rank:7,name:'분당제일 산후조리원',old:'',distance:12,time:'20~25분',price:'400~600만원대',priceLevel:520,massage:'10~20만원/회',rating:'4.5',facility:'병원 연계와 의료 접근성 장점',blog:'https://search.naver.com/search.naver?query=분당제일+산후조리원+후기',map:'https://map.naver.com/p/search/분당제일%20산후조리원',phone:''},
  {rank:8,name:'엄마손 산후조리원 분당점',old:'',distance:13,time:'25분',price:'350~550만원대',priceLevel:450,massage:'10~20만원/회',rating:'4.4',facility:'신생아 케어와 생활 편의 후기 중심',blog:'https://search.naver.com/search.naver?query=엄마손+산후조리원+분당점+후기',map:'https://map.naver.com/p/search/엄마손%20산후조리원%20분당점',phone:''}
];

const faqs = [
  {q:'기본 2주 가격에 정확히 무엇이 포함되나요?',a:'입실료, 식사, 신생아 케어, 산모 교육, 마사지 포함 횟수, 추가 프로그램 비용을 분리해서 확인하세요.'},
  {q:'예약금과 환불 규정은 어떻게 되나요?',a:'출산 예정일 변경, 조기 출산, 병원 입원, 취소 시점별 환불 가능 여부를 계약서로 확인하세요.'},
  {q:'신생아실은 24시간 운영되고 간호 인력은 몇 명인가요?',a:'아기 수 대비 근무 인력, 야간 근무 인원, 응급상황 보고 체계, CCTV 확인 가능 여부를 물어보세요.'},
  {q:'소아과 회진은 주 몇 회 진행되나요?',a:'회진 주기, 추가 진료 필요 시 연계 병원, 황달·체중감소·수유 문제 발생 시 대응 기준을 확인하세요.'},
  {q:'감염관리와 면회 기준은 어떻게 운영되나요?',a:'면회 가능 인원, 배우자 출입, 감기·설사 증상자 제한, 신생아 격리 기준을 확인하세요.'},
  {q:'모자동실은 의무인가요, 선택인가요?',a:'모자동실 시간표, 야간 신생아실 위탁 가능 여부, 수유콜 방식, 산모 컨디션별 조정 가능 여부를 확인하세요.'},
  {q:'모유수유·분유수유 지원은 어떻게 하나요?',a:'수유 자세 지도, 유축기 사용, 분유 보충 기준, 모유수유 강요 여부, 수유콜 빈도를 물어보세요.'},
  {q:'산전마사지와 산후마사지 가격은 얼마인가요?',a:'무료 포함 횟수, 1회당 가격, 패키지 강매 여부, 마사지사 상주 여부, 제왕절개 산모 가능 시점을 확인하세요.'},
  {q:'식사는 어떻게 제공되고 보호자 식사는 가능한가요?',a:'하루 식사·간식 횟수, 산모식 구성, 알레르기·당뇨식 가능 여부, 배우자 식사 추가 비용을 확인하세요.'},
  {q:'퇴실 후 연계 서비스가 있나요?',a:'모유수유 상담, 신생아 케어 상담, 마사지 연장, 산후도우미 연계, 추가 숙박 가능 여부를 물어보세요.'}
];

const meals = [
  {key:'breakfast', label:'조식', icon:'🌤️', title:'속 편한 회복식', items:['소고기 미역국','잡곡밥','계란찜','나물 반찬','제철 과일']},
  {key:'lunch', label:'중식', icon:'☀️', title:'단백질 보강식', items:['소불고기','맑은 국','두부 샐러드','잡곡밥','김치류']},
  {key:'dinner', label:'석식', icon:'🌙', title:'가벼운 균형식', items:['연어구이','버섯 들깨탕','채소 반찬','잡곡밥','요거트']},
  {key:'snack', label:'간식', icon:'🍓', title:'수유 간식', items:['두유 또는 우유','견과류','고구마','과일컵','따뜻한 차']}
];

let current = [...nurseries];
let selectedMeal = meals[0];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function showScreen(name){
  $$('.screen').forEach(s => s.classList.remove('active'));
  $(`#screen-${name}`).classList.add('active');
  $$('.bottom-nav button').forEach(b => b.classList.toggle('active', b.dataset.screen === name));
  window.scrollTo({top:0, behavior:'smooth'});
}

function rankLabel(n){ return n.rank <= 3 ? ['🥇','🥈','🥉'][n.rank-1] : `${n.rank}위`; }

function renderSummary(){
  const bestDistance = [...nurseries].sort((a,b)=>a.distance-b.distance)[0];
  const bestPrice = [...nurseries].sort((a,b)=>a.priceLevel-b.priceLevel)[0];
  const bestRating = [...nurseries].sort((a,b)=>Number(b.rating)-Number(a.rating))[0];
  $('#summaryStack').innerHTML = `
    <article><span>가장 가까움</span><strong>${bestDistance.name}</strong><em>${bestDistance.distance}km · ${bestDistance.time}</em></article>
    <article><span>가격 접근성</span><strong>${bestPrice.name}</strong><em>${bestPrice.price}</em></article>
    <article><span>추천 상위</span><strong>${bestRating.name}</strong><em>⭐ ${bestRating.rating}</em></article>
  `;
}

function renderNearList(){
  $('#nearList').innerHTML = [...nurseries].sort((a,b)=>a.distance-b.distance).slice(0,3).map(n=>`
    <button class="near-item" data-id="${n.rank}">
      <span>${rankLabel(n)}</span>
      <strong>${n.name}</strong>
      <em>${n.distance}km</em>
    </button>
  `).join('');
}

function renderNurseries(){
  $('#nurseryList').innerHTML = current.map(n=>`
    <article class="nursery-card">
      <div class="nursery-rank">${rankLabel(n)}</div>
      <div class="nursery-main">
        <div class="nursery-title">
          <h3>${n.name}</h3>
          ${n.old ? `<p>${n.old}</p>` : ''}
        </div>
        <div class="metric-grid">
          <div><span>평점</span><strong>⭐ ${n.rating}</strong></div>
          <div><span>거리</span><strong>${n.distance}km</strong></div>
          <div><span>차량</span><strong>${n.time}</strong></div>
          <div><span>가격</span><strong>${n.price}</strong></div>
        </div>
        <p class="card-note">${n.facility}</p>
        <div class="card-actions">
          <button data-detail="${n.rank}">상세보기</button>
          <a href="${n.blog}" target="_blank" rel="noopener">후기검색</a>
        </div>
      </div>
    </article>
  `).join('');
}

function renderFaq(){
  $('#faqList').innerHTML = faqs.map((f,i)=>`
    <label class="faq-item">
      <input type="checkbox" />
      <span class="q-icon">Q</span>
      <span class="faq-text"><strong>${f.q}</strong><em>${f.a}</em></span>
    </label>
  `).join('');
}

function renderMeals(){
  $('#mealTabs').innerHTML = meals.map(m=>`<button class="${m.key===selectedMeal.key?'active':''}" data-meal="${m.key}">${m.icon}<span>${m.label}</span></button>`).join('');
  $('#mealCard').innerHTML = `
    <div class="meal-icon">${selectedMeal.icon}</div>
    <div>
      <p>${selectedMeal.label}</p>
      <h3>${selectedMeal.title}</h3>
    </div>
    <ul>${selectedMeal.items.map(i=>`<li>${i}</li>`).join('')}</ul>
  `;
}

function openDetail(rank){
  const n = nurseries.find(item => item.rank === Number(rank));
  $('#modalCard').innerHTML = `
    <button class="modal-close" data-close="modal">×</button>
    <div class="modal-head">
      <span>${rankLabel(n)}</span>
      <h2>${n.name}</h2>
      ${n.old ? `<p>${n.old}</p>` : ''}
    </div>
    <div class="modal-metrics">
      <div><span>거리</span><strong>${n.distance}km</strong></div>
      <div><span>차량</span><strong>${n.time}</strong></div>
      <div><span>가격</span><strong>${n.price}</strong></div>
      <div><span>마사지</span><strong>${n.massage}</strong></div>
    </div>
    <p class="modal-review">${n.facility}</p>
    <div class="modal-links">
      <a href="${n.blog}" target="_blank" rel="noopener">블로그 후기</a>
      <a href="${n.map}" target="_blank" rel="noopener">지도 검색</a>
      ${n.phone ? `<a href="tel:${n.phone}">전화</a>` : ''}
    </div>
  `;
  $('#detailModal').classList.add('open');
  $('#detailModal').setAttribute('aria-hidden','false');
}

function closeModal(){
  $('#detailModal').classList.remove('open');
  $('#detailModal').setAttribute('aria-hidden','true');
}

$$('[data-screen]').forEach(btn => btn.addEventListener('click', () => showScreen(btn.dataset.screen)));

$$('.sort-pills button').forEach(btn=>btn.addEventListener('click',()=>{
  $$('.sort-pills button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  current = [...nurseries];
  if(btn.dataset.sort === 'distance') current.sort((a,b)=>a.distance-b.distance);
  if(btn.dataset.sort === 'price') current.sort((a,b)=>a.priceLevel-b.priceLevel);
  if(btn.dataset.sort === 'rank') current.sort((a,b)=>a.rank-b.rank);
  renderNurseries();
}));

document.addEventListener('click', (e)=>{
  const detailBtn = e.target.closest('[data-detail]');
  if(detailBtn) openDetail(detailBtn.dataset.detail);
  const nearBtn = e.target.closest('.near-item');
  if(nearBtn) { showScreen('nursery'); setTimeout(()=>openDetail(nearBtn.dataset.id), 250); }
  const mealBtn = e.target.closest('[data-meal]');
  if(mealBtn){ selectedMeal = meals.find(m=>m.key===mealBtn.dataset.meal); renderMeals(); }
  if(e.target.closest('[data-close="modal"]')) closeModal();
});

$('#copySummary').addEventListener('click', async()=>{
  const text = nurseries.slice(0,8).map(n=>`${n.rank}위 ${n.name} / ${n.distance}km / 차량 ${n.time} / ${n.price} / 마사지 ${n.massage}`).join('\n');
  try{ await navigator.clipboard.writeText(text); alert('카톡 공유용 요약을 복사했습니다.'); }catch(e){ alert(text); }
});

$('#copyChecks').addEventListener('click', async()=>{
  const text = faqs.map((f,i)=>`${i+1}. ${f.q}`).join('\n');
  try{ await navigator.clipboard.writeText(text); alert('상담 질문을 복사했습니다.'); }catch(e){ alert(text); }
});

$('#resetChecks').addEventListener('click', ()=>{
  $$('#faqList input[type="checkbox"]').forEach(input => input.checked = false);
});

renderSummary();
renderNearList();
renderNurseries();
renderFaq();
renderMeals();
