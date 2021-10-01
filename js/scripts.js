/*----------------------------- TOGGLE COLOR ----------------------------------*/
const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const toggleColor = document.getElementById("toggle-color");

const rootStyle = document.documentElement.style;

const langButtons = document.getElementById("lang-buttons");
const textsToChange = document.querySelectorAll("[data-value]");


const changeLanguage = async language => {
    const requestJson = await fetch(`/languages/${language}.json`);
    const texts = await requestJson.json();

    for (const text of textsToChange) {
        const value = text.dataset.value;
        text.textContent = texts[value];
    }
};



toggleTheme.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(toggleIcon.classList.contains("fa-moon")){
        toggleIcon.classList.replace("fa-moon", "fa-sun");
        toggleText.textContent = "Light Mode";

    }else{
        toggleIcon.classList.replace("fa-sun", "fa-moon");
        toggleText.textContent = "Dark Mode";

    }
});

// Toggle Primary-color
toggleColor.addEventListener("click", (e) => {
    if(e.target.classList.contains("colors__item")){
        rootStyle.setProperty("--primary-color", e.target.dataset.color);
    }
});


/*----------- MULTI-LANGUAGE ---------*/
langButtons.addEventListener("click", e => {
    changeLanguage(e.target.dataset.language);
});




/*==================== Mostrar el SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    //Cuando es scroll es mayor que (200 viewport height), añade la clase show-scroll a un tag con la clase scroll-top
    if(this.scrollY >= 200) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)