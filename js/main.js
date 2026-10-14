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
