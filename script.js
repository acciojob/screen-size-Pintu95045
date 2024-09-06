//your JS code here. If required.
function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeText = document.getElementById('sizeText');
    sizeText.textContent = `Width: ${width} and Height: ${height}`;
}

// Update size initially
updateSize();

// Attach resize event listener to window
window.addEventListener('resize', updateSize);