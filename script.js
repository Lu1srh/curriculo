document.addEventListener('DOMContentLoaded', function() {
    console.log('Currículo carregado com sucesso!');
    initGreetingButton();
    initVisitorCounter();
    initSkillsChart();
});

// 1. Botão de saudação
function initGreetingButton() {
    const greetingButton = document.getElementById('btn-saudacao');
    if (!greetingButton) return;

    greetingButton.addEventListener('click', function() {
        const userName = prompt('Qual é o seu nome?');
        if (userName && userName.trim() !== '') {
            alert(`Olá, ${userName}! Obrigado por visitar meu currículo`);
        } else {
            alert('Olá! Obrigado por visitar meu currículo! 😊');
        }
    });
}

// 2. Contador de visitantes (localStorage)
function initVisitorCounter() {
    const visitorCountElement = document.getElementById('visitor-count');
    if (!visitorCountElement) return;

    let visitorCount = parseInt(localStorage.getItem('visitorCount') || '0');
    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    animateCounter(visitorCountElement, 0, visitorCount, 1000);
}

function animateCounter(element, start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        element.textContent = Math.floor(start + (end - start) * progress);
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// 3. Gráfico de habilidades (Canvas)
function initSkillsChart() {
    const canvas = document.getElementById('skillsChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const skills = [
        { name: 'HTML/CSS', level: 95, color: '#e34c26' },
        { name: 'JavaScript', level: 90, color: '#f7df1e' },
        { name: 'React', level: 85, color: '#61dafb' },
        { name: 'Node.js', level: 80, color: '#339933' },
        { name: 'Python', level: 75, color: '#3776ab' }
    ];

    const barHeight = 30;
    const spacing = 15;
    const startX = 120;
    const maxBarWidth = canvas.width - 150;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    skills.forEach((skill, index) => {
        const y = 50 + (barHeight + spacing) * index;
        const barWidth = (skill.level / 100) * maxBarWidth;

        // fundo
        ctx.fillStyle = '#e0e0e0';
        ctx.fillRect(startX, y, maxBarWidth, barHeight);

        // barra
        ctx.fillStyle = skill.color;
        ctx.fillRect(startX, y, barWidth, barHeight);

        // nome da skill
        ctx.fillStyle = '#333';
        ctx.font = '14px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(skill.name, startX - 10, y + barHeight / 2 + 5);

        // porcentagem
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        if (barWidth > 40) {
            ctx.fillText(`${skill.level}%`, startX + barWidth / 2, y + barHeight / 2 + 4);
        }
    });

    // título
    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Nível de Proficiência', canvas.width / 2, 25);
}
