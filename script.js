const nurseries = [
  {
    rank:1,
    name:'헤세드 산후조리원',
    old:'구 드팜므 산후조리원 위례점',
    distance:7,
    time:'15~20분',
    price:'500~700만원',
    priceLevel:600,
    massage:'10~20만원',
    rating:4.9,
    hospital:'보통',
    facility:'호텔형 시설, 위례권 프리미엄, 깔끔한 공간 후기 중심',
    scores:{distance:'A', price:'B', rating:'A+', massage:'A', hospital:'B+'},
    blog:'https://search.naver.com/search.naver?query=헤세드+산후조리원+위례+후기',
    map:'https://map.naver.com/p/search/헤세드%20산후조리원',
    phone:'031-755-5366'
  },
  {
    rank:2,
    name:'맘스파크 산후조리원',
    old:'',
    distance:3,
    time:'8~10분',
    price:'300~450만원',
    priceLevel:380,
    massage:'8~15만원',
    rating:4.7,
    hospital:'보통',
    facility:'수정구 기준 접근성 우수, 가성비 후기 중심',
    scores:{distance:'A+', price:'A', rating:'A', massage:'A+', hospital:'B+'},
    blog:'https://search.naver.com/search.naver?query=맘스파크+산후조리원+후기',
    map:'https://map.naver.com/p/search/맘스파크%20산후조리원',
    phone:''
  },
  {
    rank:3,
    name:'곽생로여성병원 산후조리원',
    old:'',
    distance:2,
    time:'5~8분',
    price:'300~500만원',
    priceLevel:400,
    massage:'10~20만원',
    rating:4.6,
    hospital:'강함',
    facility:'병원 연계 장점, 의료 접근성 후기 중심',
    scores:{distance:'A+', price:'A', rating:'A', massage:'A', hospital:'A+'},
    blog:'https://search.naver.com/search.naver?query=곽생로+산후조리원+후기',
    map:'https://map.naver.com/p/search/곽생로여성병원%20산후조리원',
    phone:''
  },
  {
    rank:4,
    name:'위례포르투나 산후조리원',
    old:'',
    distance:8,
    time:'15~20분',
    price:'400~600만원',
    priceLevel:520,
    massage:'10~20만원',
    rating:4.8,
    hospital:'보통',
    facility:'프라이빗하고 신축급 시설 선호 후기 중심',
    scores:{distance:'A', price:'B+', rating:'A+', massage:'A', hospital:'B+'},
    blog:'https://search.naver.com/search.naver?query=위례포르투나+산후조리원+후기',
    map:'https://map.naver.com/p/search/위례포르투나%20산후조리원',
    phone:''
  },
  {
    rank:5,
    name:'오르빛 산후조리원',
    old:'',
    distance:10,
    time:'20~25분',
    price:'500~700만원',
    priceLevel:620,
    massage:'15~25만원',
    rating:4.7,
    hospital:'보통',
    facility:'분당권 프리미엄 시설, 산모 케어 후기 중심',
    scores:{distance:'B+', price:'B', rating:'A', massage:'B+', hospital:'B+'},
    blog:'https://search.naver.com/search.naver?query=오르빛+산후조리원+후기',
    map:'https://map.naver.com/p/search/오르빛%20산후조리원',
    phone:''
  },
  {
    rank:6,
    name:'디아망 산후조리원',
    old:'',
    distance:12,
    time:'20~25분',
    price:'500~700만원',
    priceLevel:620,
    massage:'15~25만원',
    rating:4.6,
    hospital:'보통',
    facility:'시설 만족도와 조용한 분위기 후기 중심',
    scores:{distance:'B+', price:'B', rating:'A', massage:'B+', hospital:'B+'},
    blog:'https://search.naver.com/search.naver?query=디아망+산후조리원+후기',
    map:'https://map.naver.com/p/search/디아망%20산후조리원',
    phone:''
  },
  {
    rank:7,
    name:'분당제일 산후조리원',
    old:'',
    distance:12,
    time:'20~25분',
    price:'400~600만원',
    priceLevel:520,
    massage:'10~20만원',
    rating:4.5,
    hospital:'강함',
    facility:'병원 연계와 의료 접근성 장점',
    scores:{distance:'B+', price:'B+', rating:'B+', massage:'A', hospital:'A+'},
    blog:'https://search.naver.com/search.naver?query=분당제일+산후조리원+후기',
    map:'https://map.naver.com/p/search/분당제일%20산후조리원',
    phone:''
  },
  {
    rank:8,
    name:'엄마손 산후조리원 분당점',
    old:'',
    distance:13,
    time:'25분',
    price:'350~550만원',
    priceLevel:450,
    massage:'10~20만원',
    rating:4.4,
    hospital:'보통',
    facility:'신생아 케어와 생활 편의 후기 중심',
    scores:{distance:'B', price:'A', rating:'B+', massage:'A', hospital:'B+'},
    blog:'https://search.naver.com/search.naver?query=엄마손+산후조리원+분당점+후기',
    map:'https://map.naver.com/p/search/엄마손%20산후조리원%20분당점',
    phone:''
  }
];

const mealPlans = {
  '6월': [
    {type:'조식', title:'미역국 회복식', icon:'🥣', items:['소고기 미역국','잡곡밥','계란찜','나물 반찬']},
    {type:'중식', title:'단백질 보강식', icon:'🍗', items:['소불고기','두부 샐러드','맑은 국','제철 과일']},
    {type:'석식', title:'가벼운 균형식', icon:'🐟', items:['연어구이','버섯 들깨탕','채소 반찬','요거트']}
  ],
  '7월': [
    {type:'조식', title:'담백한 산모식', icon:'🍚', items:['황태 미역국','잡곡밥','두부조림','오이무침']},
    {type:'중식', title:'여름 보양식', icon:'🍲', items:['닭안심 탕','감자조림','샐러드','수박']},
    {type:'석식', title:'속 편한 저녁', icon:'🥬', items:['흰살생선찜','근대국','나물 반찬','따뜻한 차']}
  ],
  '8월': [
    {type:'조식', title:'수유 에너지식', icon:'🥛', items:['들깨 미역국','잡곡밥','스크램블','견과류']},
    {type:'중식', title:'철분 보강식', icon:'🥩', items:['불고기','시금치나물','미소국','과일컵']},
    {type:'석식', title:'편안한 회복식', icon:'🍠', items:['닭가슴살구이','호박죽','채소 반찬','고구마']}
  ]
};

const checklist = {
  '예약': [
    {title:'예약금과 잔금 납부일을 확인했나요?', hint:'계약서 금액과 납부 기한'},
    {title:'출산일 변경 시 입실 기준을 확인했나요?', hint:'예정일 전후 조정 가능 여부'},
    {title:'환불 규정을 문서로 받았나요?', hint:'취소 시점별 환불률'}
  ],
  '시설': [
    {title:'산모실 위치와 채광을 확인했나요?', hint:'소음, 온도, 환기'},
    {title:'공용 공간 청결 상태를 봤나요?', hint:'복도, 좌욕실, 면회 공간'},
    {title:'세탁과 소독 운영 방식을 확인했나요?', hint:'개별 세탁 여부'}
  ],
  '신생아실': [
    {title:'아기 수 대비 근무 인력을 확인했나요?', hint:'주간과 야간 구분'},
    {title:'CCTV 확인 가능 여부를 물어봤나요?', hint:'열람 방식과 시간'},
    {title:'황달이나 응급상황 대응 절차를 확인했나요?', hint:'연계 병원과 보고 체계'}
  ],
  '수유': [
    {title:'수유콜 방식과 빈도를 확인했나요?', hint:'직수, 유축, 분유 보충'},
    {title:'모유수유 강요 여부를 확인했나요?', hint:'산모 컨디션 우선'},
    {title:'유축기와 소모품 제공 범위를 봤나요?', hint:'개별 사용 기준'}
  ],
  '마사지': [
    {title:'산전마사지 포함 횟수를 확인했나요?', hint:'무료와 유료 구분'},
    {title:'산후마사지 1회 가격을 기록했나요?', hint:'패키지 강매 여부'},
    {title:'제왕절개 산모 가능 시점을 물어봤나요?', hint:'회복 상태별 기준'}
  ],
  '식사': [
    {title:'하루 식사와 간식 횟수를 확인했나요?', hint:'야식 포함 여부'},
    {title:'알레르기 대체식이 가능한가요?', hint:'당뇨식, 저염식'},
    {title:'보호자 식사 비용을 확인했나요?', hint:'1식 가격과 신청 방식'}
  ],
  '퇴실': [
    {title:'퇴실 교육 자료를 제공하나요?', hint:'수유, 목욕, 배꼽 관리'},
    {title:'퇴실 후 상담 채널이 있나요?', hint:'전화, 카톡, 방문 상담'},
    {title:'산후도우미 연계가 가능한가요?', hint:'업체와 비용'}
  ]
};

const state = {
  screen:'home',
  sort:'rank',
  search:'',
  month:'6월',
  checkCategory:'예약'
};

const STORAGE_CHECKS = 'baby.checklist.v2';
const STORAGE_MEMOS = 'baby.memos.v2';

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

let savedChecks = loadJSON(STORAGE_CHECKS, {});
let savedMemos = loadJSON(STORAGE_MEMOS, {});
let saveTimer;

function loadJSON(key, fallback){
  try{
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  }catch(error){
    return fallback;
  }
}

function saveJSON(key, value){
  try{
    localStorage.setItem(key, JSON.stringify(value));
  }catch(error){
    // 저장 공간을 사용할 수 없는 브라우저에서도 화면 동작은 유지합니다.
  }
}

function escapeHTML(value){
  return String(value).replace(/[&<>"']/g, (match) => ({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#039;'
  })[match]);
}

function rankLabel(rank){
  return rank <= 3 ? ['1위','2위','3위'][rank - 1] : `${rank}위`;
}

function filterNurseries(){
  const query = state.search.trim().toLowerCase();
  const result = nurseries.filter((nursery) => {
    if(!query) return true;
    return `${nursery.name} ${nursery.old} ${nursery.facility}`.toLowerCase().includes(query);
  });

  const sorters = {
    rank:(a,b) => a.rank - b.rank,
    distance:(a,b) => a.distance - b.distance,
    price:(a,b) => a.priceLevel - b.priceLevel,
    rating:(a,b) => b.rating - a.rating
  };

  return result.sort(sorters[state.sort]);
}

function sortLabel(){
  return {
    rank:'추천순',
    distance:'거리순',
    price:'가격순',
    rating:'평점순'
  }[state.sort];
}

function renderHomeCards(){
  const list = filterNurseries().slice(0, 3);
  $('#homeResultCount').textContent = `${list.length}곳`;
  $('#homeCards').innerHTML = list.length ? list.map((nursery) => `
    <button class="recommend-card" data-detail="${nursery.rank}">
      <span class="rank-badge">${rankLabel(nursery.rank)}</span>
      <span class="recommend-main">
        <strong>${escapeHTML(nursery.name)}</strong>
        <span>⭐ ${nursery.rating} · 🚗 ${nursery.time}</span>
      </span>
      <span class="recommend-meta">
        <span>${nursery.distance}km</span>
        <span>${nursery.price}</span>
      </span>
    </button>
  `).join('') : '<div class="empty-state">검색 결과가 없습니다.</div>';
}

function renderNurseries(){
  const list = filterNurseries();
  $('#nurseryStatus').textContent = `${sortLabel()} ${list.length}곳`;
  $('#nurseryList').innerHTML = list.length ? list.map((nursery) => `
    <article class="nursery-card">
      <div class="nursery-top">
        <span class="rank-badge">${rankLabel(nursery.rank)}</span>
        <div class="nursery-title">
          <h3>${escapeHTML(nursery.name)}</h3>
          ${nursery.old ? `<p>${escapeHTML(nursery.old)}</p>` : ''}
        </div>
      </div>
      <div class="metric-list">
        <div class="metric"><i>⭐</i><span>${nursery.rating}</span></div>
        <div class="metric"><i>🚗</i><span>${nursery.time}</span></div>
        <div class="metric"><i>📍</i><span>${nursery.distance}km</span></div>
        <div class="metric"><i>💰</i><span>${nursery.price}</span></div>
        <div class="metric"><i>💆</i><span>${nursery.massage}</span></div>
        <div class="metric"><i>🏥</i><span>병원연계 : ${nursery.hospital}</span></div>
      </div>
      <p class="card-note">${escapeHTML(nursery.facility)}</p>
      <div class="card-actions">
        <button data-detail="${nursery.rank}">상세보기</button>
        <a href="${nursery.blog}" target="_blank" rel="noopener">블로그 후기</a>
        ${nursery.phone
          ? `<a href="tel:${nursery.phone}">전화하기</a>`
          : `<a href="${nursery.map}" target="_blank" rel="noopener">전화하기</a>`}
      </div>
    </article>
  `).join('') : '<div class="empty-state">검색 결과가 없습니다.</div>';
}

function renderScores(){
  const list = filterNurseries();
  $('#scoreList').innerHTML = list.length ? list.map((nursery) => `
    <article class="score-card">
      <h3>${escapeHTML(nursery.name.replace(' 산후조리원', ''))}</h3>
      <div class="score-grid">
        <div class="score-pill"><span>거리</span><strong>${nursery.scores.distance}</strong></div>
        <div class="score-pill"><span>가격</span><strong>${nursery.scores.price}</strong></div>
        <div class="score-pill"><span>평점</span><strong>${nursery.scores.rating}</strong></div>
        <div class="score-pill"><span>마사지</span><strong>${nursery.scores.massage}</strong></div>
        <div class="score-pill"><span>병원연계</span><strong>${nursery.scores.hospital}</strong></div>
      </div>
    </article>
  `).join('') : '<div class="empty-state">비교할 조리원이 없습니다.</div>';
}

function renderMonthTabs(){
  $('#monthTabs').innerHTML = Object.keys(mealPlans).map((month) => `
    <button class="${month === state.month ? 'active' : ''}" data-month="${month}">${month}</button>
  `).join('');
}

function renderMeals(){
  const plans = mealPlans[state.month];
  $('#mealGrid').innerHTML = plans.map((meal) => `
    <article class="meal-card">
      <div class="meal-photo">
        <strong>${escapeHTML(meal.title)}</strong>
        <span>${meal.icon}</span>
      </div>
      <div class="meal-body">
        <p>${state.month} · ${escapeHTML(meal.type)}</p>
        <ul class="meal-items">
          ${meal.items.map((item) => `<li>${escapeHTML(item)}</li>`).join('')}
        </ul>
      </div>
    </article>
  `).join('');
}

function renderCheckTabs(){
  $('#checkTabs').innerHTML = Object.keys(checklist).map((category) => `
    <button class="${category === state.checkCategory ? 'active' : ''}" data-category="${category}">${category}</button>
  `).join('');
}

function checkId(category, index){
  return `${category}-${index}`;
}

function renderChecklist(){
  const items = checklist[state.checkCategory];
  $('#checkList').innerHTML = items.map((item, index) => {
    const id = checkId(state.checkCategory, index);
    return `
      <label class="check-item">
        <input type="checkbox" data-check-id="${id}" ${savedChecks[id] ? 'checked' : ''} />
        <span>
          <strong>${escapeHTML(item.title)}</strong>
          <span>${escapeHTML(item.hint)}</span>
        </span>
      </label>
    `;
  }).join('');
  updateCheckProgress();
}

function updateCheckProgress(){
  const total = Object.entries(checklist).reduce((sum, [,items]) => sum + items.length, 0);
  const checked = Object.keys(savedChecks).filter((key) => savedChecks[key]).length;
  const ratio = total ? Math.round((checked / total) * 100) : 0;
  $('#checkProgress').textContent = `${checked} / ${total}`;
  $('#checkProgressBar').style.width = `${ratio}%`;
}

function populateMemoNurseries(){
  $('#memoNursery').innerHTML = nurseries.map((nursery) => `
    <option value="${nursery.rank}">${escapeHTML(nursery.name)}</option>
  `).join('');
}

function getMemo(rank){
  return savedMemos[rank] || {price:'', massage:'', pros:'', cons:''};
}

function renderMemo(){
  const rank = $('#memoNursery').value || String(nurseries[0].rank);
  const memo = getMemo(rank);
  $('#memoPrice').value = memo.price;
  $('#memoMassage').value = memo.massage;
  $('#memoPros').value = memo.pros;
  $('#memoCons').value = memo.cons;
}

function saveMemo(){
  const rank = $('#memoNursery').value;
  savedMemos[rank] = {
    price:$('#memoPrice').value,
    massage:$('#memoMassage').value,
    pros:$('#memoPros').value,
    cons:$('#memoCons').value
  };
  saveJSON(STORAGE_MEMOS, savedMemos);
  $('#memoSaveState').textContent = '저장됨';
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    $('#memoSaveState').textContent = '자동 저장';
  }, 900);
}

function renderSortButtons(){
  $$('[data-sort]').forEach((button) => {
    button.classList.toggle('active', button.dataset.sort === state.sort);
  });
}

function renderNurseryViews(){
  renderHomeCards();
  renderNurseries();
  renderScores();
  renderSortButtons();
}

function showScreen(name){
  state.screen = name;
  $$('.screen').forEach((screen) => {
    screen.classList.toggle('active', screen.id === `screen-${name}`);
  });
  $$('.bottom-nav button').forEach((button) => {
    button.classList.toggle('active', button.dataset.screen === name);
  });
  window.scrollTo({top:0, behavior:'smooth'});
}

function openDetail(rank){
  const nursery = nurseries.find((item) => item.rank === Number(rank));
  if(!nursery) return;

  $('#modalCard').innerHTML = `
    <button class="modal-close" data-close="modal">×</button>
    <div class="modal-head">
      <span class="rank-badge">${rankLabel(nursery.rank)}</span>
      <h2>${escapeHTML(nursery.name)}</h2>
      ${nursery.old ? `<p>${escapeHTML(nursery.old)}</p>` : ''}
    </div>
    <div class="modal-metrics">
      <div class="metric"><i>⭐</i><span>${nursery.rating}</span></div>
      <div class="metric"><i>🚗</i><span>${nursery.time}</span></div>
      <div class="metric"><i>📍</i><span>${nursery.distance}km</span></div>
      <div class="metric"><i>💰</i><span>${nursery.price}</span></div>
      <div class="metric"><i>💆</i><span>${nursery.massage}</span></div>
      <div class="metric"><i>🏥</i><span>${nursery.hospital}</span></div>
    </div>
    <p class="modal-review">${escapeHTML(nursery.facility)}</p>
    <div class="modal-links">
      <a href="${nursery.blog}" target="_blank" rel="noopener">블로그 후기</a>
      <a href="${nursery.map}" target="_blank" rel="noopener">지도 검색</a>
      ${nursery.phone
        ? `<a href="tel:${nursery.phone}">전화하기</a>`
        : `<a href="${nursery.map}" target="_blank" rel="noopener">전화하기</a>`}
    </div>
  `;

  $('#detailModal').classList.add('open');
  $('#detailModal').setAttribute('aria-hidden', 'false');
}

function closeModal(){
  $('#detailModal').classList.remove('open');
  $('#detailModal').setAttribute('aria-hidden', 'true');
}

document.addEventListener('click', (event) => {
  const screenButton = event.target.closest('[data-screen]');
  if(screenButton){
    showScreen(screenButton.dataset.screen);
    return;
  }

  const sortButton = event.target.closest('[data-sort]');
  if(sortButton){
    state.sort = sortButton.dataset.sort;
    renderNurseryViews();
    return;
  }

  const detailButton = event.target.closest('[data-detail]');
  if(detailButton){
    openDetail(detailButton.dataset.detail);
    return;
  }

  const monthButton = event.target.closest('[data-month]');
  if(monthButton){
    state.month = monthButton.dataset.month;
    renderMonthTabs();
    renderMeals();
    return;
  }

  const categoryButton = event.target.closest('[data-category]');
  if(categoryButton){
    state.checkCategory = categoryButton.dataset.category;
    renderCheckTabs();
    renderChecklist();
    return;
  }

  if(event.target.closest('[data-close="modal"]')){
    closeModal();
  }
});

document.addEventListener('change', (event) => {
  const checkbox = event.target.closest('[data-check-id]');
  if(checkbox){
    savedChecks[checkbox.dataset.checkId] = checkbox.checked;
    saveJSON(STORAGE_CHECKS, savedChecks);
    updateCheckProgress();
  }
});

$('#searchInput').addEventListener('input', (event) => {
  state.search = event.target.value;
  renderNurseryViews();
});

$('#memoNursery').addEventListener('change', renderMemo);

['memoPrice','memoMassage','memoPros','memoCons'].forEach((id) => {
  $(`#${id}`).addEventListener('input', saveMemo);
});

document.addEventListener('keydown', (event) => {
  if(event.key === 'Escape') closeModal();
});

renderMonthTabs();
renderMeals();
renderCheckTabs();
renderChecklist();
populateMemoNurseries();
renderMemo();
renderNurseryViews();

const initialScreen = new URLSearchParams(window.location.search).get('screen');
if(['home','nursery','meal','checklist','memo'].includes(initialScreen)){
  showScreen(initialScreen);
}
