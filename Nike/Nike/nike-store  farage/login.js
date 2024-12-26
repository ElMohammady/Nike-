// Create Bubbles in Background
const bubblesContainer = document.querySelector('.bubbles');

function createBubble() {
    const bubble = document.createElement('span');
    const size = Math.random() * 40 + 20; // Bubble size
    bubble.style.width = ${size}px;
    bubble.style.height = ${size}px;
    bubble.style.left = ${Math.random() * 100}%;
    bubble.style.animationDuration = ${Math.random() * 10 + 5}s;
    bubble.style.animationDelay = ${Math.random() * 5}s;

    bubblesContainer.appendChild(bubble);

    // Remove bubble after animation
    setTimeout(() => bubble.remove(), 15000);
}

// Generate multiple bubbles
setInterval(createBubble, 500);
document.querySelector('.button').addEventListener('click', function() {
    window.location.href = 'indix.html';
});