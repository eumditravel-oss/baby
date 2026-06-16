const nurseries = [
  {rank:1,name:'헤세드 산후조리원',old:'구 드팜므 산후조리원 위례점',distance:7,time:'15~20분',price:'500~700만원대',priceLevel:600,massage:'10~20만원/회',rating:'4.9',facility:'호텔형 시설, 위례권 프리미엄, 깔끔한 공간 후기 중심',blog:'https://search.naver.com/search.naver?query=헤세드+산후조리원+위례+후기',map:'https://map.naver.com/p/search/헤세드%20산후조리원'},
  {rank:2,name:'맘스파크 산후조리원',old:'',distance:3,time:'8~10분',price:'300~450만원대',priceLevel:380,massage:'8~15만원/회',rating:'4.7',facility:'수정구 기준 접근성 우수, 가성비 후기 중심',blog:'https://search.naver.com/search.naver?query=맘스파크+산후조리원+후기',map:'https://map.naver.com/p/search/맘스파크%20산후조리원'},
  {rank:3,name:'곽생로여성병원 산후조리원',old:'',distance:2,time:'5~8분',price:'300~500만원대',priceLevel:400,massage:'10~20만원/회',rating:'4.6',facility:'병원 연계 장점, 의료 접근성 후기 중심',blog:'https://search.naver.com/search.naver?query=곽생로+산후조리원+후기',map:'https://map.naver.com/p/search/곽생로여성병원%20산후조리원'},
  {rank:4,name:'위례포르투나 산후조리원',old:'',distance:8,time:'15~20분',price:'400~600만원대',priceLevel:520,massage:'10~20만원/회',rating:'4.8',facility:'프라이빗하고 신축급 시설 선호 후기 중심',blog:'https://search.naver.com/search.naver?query=위례포르투나+산후조리원+후기',map:'https://map.naver.com/p/search/위례포르투나%20산후조리원'},
  {rank:5,name:'오르빛 산후조리원',old:'',distance:10,time:'20~25분',price:'500~700만원대',priceLevel:620,massage:'15~25만원/회',rating:'4.7',facility:'분당권 프리미엄 시설, 산모 케어 후기 중심',blog:'https://search.naver.com/search.naver?query=오르빛+산후조리원+후기',map:'https://map.naver.com/p/search/오르빛%20산후조리원'},
  {rank:6,name:'디아망 산후조리원',old:'',distance:12,time:'20~25분',price:'500~700만원대',priceLevel:620,massage:'15~25만원/회',rating:'4.6',facility:'시설 만족도와 조용한 분위기 후기 중심',blog:'https://search.naver.com/search.naver?query=디아망+산후조리원+후기',map:'https://map.naver.com/p/search/디아망%20산후조리원'},
  {rank:7,name:'분당제일 산후조리원',old:'',distance:12,time:'20~25분',price:'400~600만원대',priceLevel:520,massage:'10~20만원/회',rating:'4.5',facility:'병원 연계와 의료 접근성 장점',blog:'https://search.naver.com/search.naver?query=분당제일+산후조리원+후기',map:'https://map.naver.com/p/search/분당제일%20산후조리원'},
  {rank:8,name:'엄마손 산후조리원 분당점',old:'',distance:13,time:'25분',price:'350~550만원대',priceLevel:450,massage:'10~20만원/회',rating:'4.4',facility:'신생아 케어와 생활 편의 후기 중심',blog:'https://search.naver.com/search.naver?query=엄마손+산후조리원+분당점+후기',map:'https://map.naver.com/p/search/엄마손%20산후조리원%20분당점'}
];

const faqs = [
  {q:'기본 2주 가격에 정확히 무엇이 포함되나요?',a:'입실료, 식사, 신생아 케어, 산모 교육, 산전·산후 마사지 포함 횟수, 추가 프로그램 비용을 분리해서 확인하세요.',tags:['가격','포함항목','추가비']},
  {q:'예약금과 환불 규정은 어떻게 되나요?',a:'출산 예정일 변경, 조기 출산, 병원 입원, 취소 시점별 환불 가능 여부를 계약서로 확인하세요.',tags:['계약','예약금','환불']},
  {q:'신생아실은 24시간 운영되고 간호 인력은 몇 명인가요?',a:'아기 수 대비 근무 인력, 야간 근무 인원, 응급상황 보고 체계, CCTV 확인 가능 여부를 물어보세요.',tags:['신생아실','야간케어','CCTV']},
  {q:'소아과 회진은 주 몇 회 진행되나요?',a:'회진 주기, 추가 진료 필요 시 연계 병원, 황달·체중감소·수유 문제 발생 시 대응 기준을 확인하세요.',tags:['소아과','병원연계','응급대응']},
  {q:'감염관리와 면회 기준은 어떻게 운영되나요?',a:'방문객 손 위생, 면회 가능 인원, 배우자 출입, 감기·설사 증상자 제한, 신생아 격리 기준을 확인하세요.',tags:['감염관리','면회','위생']},
  {q:'모자동실은 의무인가요, 선택인가요?',a:'모자동실 시간표, 야간 신생아실 위탁 가능 여부, 수유콜 방식, 산모 컨디션에 따른 조정 가능 여부를 확인하세요.',tags:['모자동실','수유콜','휴식']},
  {q:'모유수유·분유수유 지원은 어떻게 하나요?',a:'수유 자세 지도, 유축기 사용, 분유 보충 기준, 모유수유 강요 여부, 수유콜 빈도를 물어보세요.',tags:['모유수유','분유','유축']},
  {q:'산전마사지와 산후마사지 가격은 얼마인가요?',a:'무료 포함 횟수, 1회당 가격, 패키지 강매 여부, 마사지사 상주 여부, 제왕절개 산모 가능 시점을 확인하세요.',tags:['마사지','산전','산후']},
  {q:'식사는 어떻게 제공되고 보호자 식사는 가능한가요?',a:'하루 식사·간식 횟수, 산모식 구성, 알레르기·당뇨식 가능 여부, 배우자 식사 추가 비용을 확인하세요.',tags:['식사','간식','보호자']},
  {q:'퇴실 후 연계 서비스가 있나요?',a:'모유수유 상담, 신생아 케어 상담, 마사지 연장, 산후도우미 연계, 추가 숙박 가능 여부를 물어보세요.',tags:['퇴실후','연장','연계']}
];

let current = [...nurseries];
function badgeClass(rank){return rank===1?'rank-1':rank===2?'rank-2':rank===3?'rank-3':'rank-other'}
function render(){
  document.getElementById('tableBody').innerHTML = current.map(n=>`<tr><td><span class="rank-badge ${badgeClass(n.rank)}">${n.rank}</span></td><td class="name">${n.name}${n.old?`<br><small>${n.old}</small>`:''}</td><td>${n.distance}km</td><td>${n.time}</td><td>${n.price}</td><td>${n.massage}</td><td>${n.facility}</td><td><a class="blog-btn" href="${n.blog}" target="_blank">후기</a></td></tr>`).join('');
  document.getElementById('mobileCompareList').innerHTML = current.map(n=>`<article class="mobile-compare-card"><div class="mobile-rank ${badgeClass(n.rank)}">${n.rank}</div><div class="mobile-info"><h3>${n.name}</h3>${n.old?`<p>${n.old}</p>`:''}<div class="mobile-specs"><span>${n.distance}km</span><span>차량 ${n.time}</span><span>${n.price}</span><span>마사지 ${n.massage}</span></div></div><a href="${n.blog}" target="_blank" class="mobile-blog">후기</a></article>`).join('');
  document.getElementById('cardGrid').innerHTML = current.map(n=>`<article class="nursery-card"><div class="card-top"><div class="card-icon">${n.rank<=3?'🏅':'🍼'}</div><div><h3>${n.rank}위. ${n.name}</h3>${n.old?`<p class="old-name">${n.old}</p>`:''}</div></div><div class="meta"><div><span>평점</span><strong>⭐ ${n.rating}</strong></div><div><span>거리</span><strong>${n.distance}km</strong></div><div><span>차량</span><strong>${n.time}</strong></div><div><span>가격</span><strong>${n.price}</strong></div><div><span>산전마사지</span><strong>${n.massage}</strong></div><div><span>기준지</span><strong>수정로260</strong></div></div><p class="review">${n.facility}</p><div class="actions"><a href="${n.blog}" target="_blank">블로그 후기</a><a class="secondary" href="${n.map}" target="_blank">지도 검색</a></div></article>`).join('');
}
function renderFaq(){
  document.getElementById('faqList').innerHTML = faqs.map((f,i)=>`<div class="faq-item"><div class="q-icon">Q</div><div><h3>${f.q}</h3><p>${f.a}</p><div class="tag-row">${f.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></div></div>`).join('');
}
document.querySelectorAll('.toolbar button[data-sort]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.toolbar button[data-sort]').forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  const s=btn.dataset.sort; current=[...nurseries];
  if(s==='distance') current.sort((a,b)=>a.distance-b.distance);
  if(s==='price') current.sort((a,b)=>a.priceLevel-b.priceLevel);
  if(s==='rank') current.sort((a,b)=>a.rank-b.rank);
  render();
}));
document.getElementById('copySummary').addEventListener('click', async()=>{
  const text = current.slice(0,8).map(n=>`${n.rank}위 ${n.name} / ${n.distance}km / 차량 ${n.time} / ${n.price} / 마사지 ${n.massage}`).join('\n');
  try{ await navigator.clipboard.writeText(text); alert('카톡 공유용 요약을 복사했습니다.'); }catch(e){ alert(text); }
});
render(); renderFaq();
