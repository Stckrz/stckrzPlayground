
import  { loadContent, switchTheme }  from "../../js/functions.js";


//initializing the data-theme variable to 'light' when the page is loaded;
document.documentElement.setAttribute('data-theme', 'light');

loadContent('/components/pageLinks.html', 'linkList');
loadContent('/components/buttonBox.html','linkBox-placeholder');

const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', switchTheme);
