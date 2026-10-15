// 모바일 메뉴 토글
const menuBtn = document.querySelector('.menu-btn');
const gnb = document.getElementById('gnb');

if (menuBtn && gnb) {
  menuBtn.addEventListener('click', () => {
    const isOpen = gnb.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
    menuBtn.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  });

  // 화면이 넓어지면 메뉴 상태 초기화
  window.matchMedia('(min-width: 769px)').addEventListener('change', (e) => {
    if (e.matches) {
      gnb.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', false);
      menuBtn.setAttribute('aria-label', '메뉴 열기');
    }
  });
}

// 스크롤 등장 애니메이션
document.documentElement.classList.add('js');

const revealTargets = document.querySelectorAll(
  '.doc section > h2, .doc section > h3, .doc section > p, .timeline li, .floors li, .symbol-label, .motto li, .media-row, .uniform-img'
);

revealTargets.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      // 한 번에 화면에 들어온 항목끼리 차례로 등장
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry, i) => {
          entry.target.style.setProperty('--delay', `${i * 0.08}s`);
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealTargets.forEach((el) => observer.observe(el));
  document.querySelectorAll('.timeline').forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}
