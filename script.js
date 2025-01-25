window.onload = function() {
    // Select all paragraphs that immediately follow an h2 element
    const articles = document.querySelectorAll('h2 + p');

    articles.forEach(article => {
        // Set initial opacity of each article to 0 (hidden)
        article.style.opacity = '0';

        // Function to gradually increase the opacity of the article
        const fadeIn = () => {
            let opacity = 0;
            const interval = setInterval(() => {
                opacity += 0.05;
                article.style.opacity = opacity;

                // Stop the interval when opacity reaches 1 (fully visible)
                if (opacity >= 1) {
                    clearInterval(interval);
                }
            }, 30);
        };

        // Delay the fade-in effect based on the article's index
        setTimeout(fadeIn, 500 * articles.indexOf(article)); 
    });
};