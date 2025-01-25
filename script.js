window.onload = function() {
    // Select all paragraphs that immediately follow an h2 element
    const articles = document.querySelectorAll('h2 + p');

    articles.forEach((article, index) => {
        // Set initial opacity of each article to 0 (hidden)
        article.style.opacity = '0';

        // Function to gradually increase the opacity of the article
        const fadeIn = () => {
            let opacity = 0;
            const increaseOpacity = () => {
                opacity += 0.05;
                article.style.opacity = opacity;

                // Continue the animation until opacity reaches 1 (fully visible)
                if (opacity < 1) {
                    requestAnimationFrame(increaseOpacity);
                }
            };
            requestAnimationFrame(increaseOpacity);
        };

        // Delay the fade-in effect based on the article's index
        setTimeout(fadeIn, 500 * index); 
    });
};