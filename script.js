import { loadContent, switchTheme } from "./js/functions.js";
import { loadBlogCategoriesPanel, loadBlogPostModal, loadBlogPosts } from "./js/blogPostFunctions.js";


//initializing the data-theme variable to 'light' when the page is loaded;
document.documentElement.setAttribute('data-theme', 'light');

loadContent('./pages/home/home.html', 'content-placeholder');
loadContent('./components/checklist/checklist.html', 'sideContentPlaceholder');

const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', switchTheme);

const homeButton = document.getElementById('homeButton');
homeButton.addEventListener('click', () => { 
	loadContent('./pages/home/home.html', 'content-placeholder'); 
	loadContent('./components/checklist/checklist.html', 'sideContentPlaceholder');
	const phrase = document.getElementById('littlePhrase');
	phrase.style.setProperty("display", "block")
});


const blogButton = document.getElementById('blogButton');
blogButton.addEventListener('click', () => {
	loadContent('./pages/blog/blog.html', 'content-placeholder');
	loadBlogPosts();
	loadBlogCategoriesPanel();
});

const aboutButton = document.getElementById('aboutButton');
aboutButton.addEventListener('click', () => { loadContent('./pages/about/about.html', 'content-placeholder') });

const shrinesButton = document.getElementById('shrinesButton');
shrinesButton.addEventListener('click', () => { loadContent('./pages/shrines/shrines.html', 'content-placeholder') });


