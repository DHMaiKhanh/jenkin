// Chuyển ngôn ngữ VI/EN — lưu lựa chọn vào localStorage, dùng chung mọi trang
(function () {
  const KEY = 'jk-course-lang';
  const saved = localStorage.getItem(KEY) || 'vi';

  function apply(lang) {
    document.body.classList.toggle('lang-en', lang === 'en');
    document.body.classList.toggle('lang-vi', lang === 'vi');
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.classList.toggle('on', b.dataset.lang === lang);
    });
    localStorage.setItem(KEY, lang);
  }

  document.body.classList.add(saved === 'en' ? 'lang-en' : 'lang-vi');

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.addEventListener('click', () => apply(b.dataset.lang));
    });
    apply(saved);
  });
})();
