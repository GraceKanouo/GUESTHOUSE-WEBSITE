
    document.getElementById('search-button').addEventListener('click', () => {
        const searchQuery = document.getElementById('search-bar').value.toLowerCase();
        const sections = document.querySelectorAll('section, h2, p, li');

        let found = false;

        sections.forEach(section => {
            if (section.textContent.toLowerCase().includes(searchQuery)) {
                section.scrollIntoView({ behavior: 'smooth', block: 'center' });
                section.style.border = '2px solid #FF5733';
                setTimeout(() => section.style.border = '', 2000);
                found = true;
            }
        });

        if (!found) {
            alert('Aucun résultat trouvé pour votre recherche.');
        }
    });

