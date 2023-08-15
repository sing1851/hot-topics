// GET THE REFERENCES
const container = document.querySelector('.main-content');
const links = document.querySelectorAll('nav a');

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent = (urlFeed) => {
    fetch(urlFeed)
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
};

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL
const selectContent = (event) => {
    event.preventDefault();
    const url = event.target.getAttribute('href');
    loadContent(url);
};

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER
links.forEach(link => {
    link.addEventListener('click', selectContent);
});

// Initial load of home.html content
loadContent('partials/home.html');