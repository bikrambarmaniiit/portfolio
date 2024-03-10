window.addEventListener('load', () => {
    const speedText = document.getElementById('speed');

    function detectNetworkSpeed() {
        const startTime = performance.now();
        const fileSize = 165 * 1024; 

        const imageSrc = 'https://source.unsplash.com/random?topics=nature'; 

        const image = new Image();
        image.onload = () => {
            const endTime = performance.now();
            const duration = (endTime - startTime) / 1000; 
            const speedBps = fileSize * 8 / duration; 
            const speedMbps = speedBps / 1000000; 
            speedText.textContent = `Your network speed is approximately ${speedMbps.toFixed(2)} Mbps`;
        };

        image.src = imageSrc;
    }

    detectNetworkSpeed();
});
