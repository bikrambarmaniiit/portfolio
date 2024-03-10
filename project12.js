async function generateImage() {
    const textInput = document.getElementById('textInput').value;
    const response = await fetch("https://craiyon.ajaysinghusesgi.repl.co", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: textInput,
            max_tokens: 100
        })
    });

    const imageData = await response.json();
    const imageUrl = imageData.url;

    const svgContainer = document.getElementById('svg-container');
    svgContainer.innerHTML = `<img src="${imageUrl}" alt="Generated AI Image">`;
}
