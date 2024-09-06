//your JS code here. If required.
 function updateSize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        document.getElementById('width').textContent = width;
        document.getElementById('height').textContent = height;
    }

    window.addEventListener('resize', updateSize);

    updateSize(); // Initial call to set initial width and height