// .btn-menu
const btnMenu = document.querySelector('.btn-menu');
// main nav
const mainNav = document.querySelector('.main-nav');

// curriculum tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
        tabButtons.forEach((tabButton) => tabButton.classList.remove('active'));
        tabPanels.forEach((panel) => panel.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});

// .btn-menu click event
btnMenu.addEventListener('click', () => {
    mainNav.classList.toggle('open-menu');
    // 
    if (btnMenu.innerHTML === 'Menu') {
        btnMenu.innerHTML = 'Close';
    } else {
        btnMenu.innerHTML = 'Menu';
    }
});
// dark mode button
const btnTheme = document.querySelector('.btn-theme');

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        btnTheme.innerHTML = '☀️';
        btnTheme.setAttribute('aria-label', 'Light mode');
    } else {
        btnTheme.innerHTML = '🌙';
        btnTheme.setAttribute('aria-label', 'Dark mode');
    }
});
// character count for textarea
const textarea = document.querySelector('.apply-textarea');
const charCount = document.querySelector('.char-count');

textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;
    charCount.textContent = `${currentLength}/200`;

    if (currentLength >= 180) {
        charCount.classList.add('warn');
    } else {
        charCount.classList.remove('warn');
    }
});
// clock
const clockDate = document.querySelector('.clock-date');
const clockTime = document.querySelector('.clock-time');
const days=['일', '월', '화', '수', '목', '금', '토'];

function updateClock() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const day = days[now.getDay()];
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockDate.textContent = `${year}년 ${month}월 ${date}일 ${day}`;
    clockTime.textContent = `${hours}:${minutes}:${seconds}`;
}
updateClock();
setInterval(updateClock, 1000);