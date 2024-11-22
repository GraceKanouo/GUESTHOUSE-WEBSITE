
    const emojis = document.querySelectorAll('.emoji');
    const feedbackContainer = document.getElementById('feedback-container');

    emojis.forEach(emoji => {
        emoji.addEventListener('click', () => {
            alert(`Merci pour votre feedback : ${emoji.textContent}`);
            feedbackContainer.style.display = 'none';
        });
    });

