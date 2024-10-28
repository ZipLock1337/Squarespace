const radioButtons = document.querySelectorAll('.input_check');

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        document.querySelector('.activePay').classList.remove('activePay');
        document.getElementById('notActiveLabel').classList.remove('activePay');
        let accent = document.querySelector('.input_accent')

        if (radio.id === 'payAnnually') {
            document.getElementById('activeLabel').classList.add('activePay');
            accent.style.color = '#0074c2';
        } else if (radio.id === 'payMonthly') {
            document.getElementById('notActiveLabel').classList.add('activePay');
            accent.style.color = '#a1a1a1';
        }
    });
});

// JavaScript for burger menu
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});
