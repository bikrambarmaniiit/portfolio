const container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
