window.onload = function() {
    const articles = document.querySelectorAll('h2 + p');

    articles.forEach(article => {
        article.style.opacity = '0';

        const fadeIn = () => {
            let opacity = 0;
            const interval = setInterval(() => {
                opacity += 0.05;
                article.style.opacity = opacity;

                if (opacity >= 1) {
                    clearInterval(interval);
                }
            }, 30);
        };

        setTimeout(fadeIn, 500 * articles.indexOf(article)); 
    });
};