
// LOADER

window.addEventListener('load', () => {
    const loaderContainer = document.querySelector('.loader-container');
    setTimeout(() => {
        loaderContainer.classList.add('loader-hidden');
    }, 3000); // Show loader for at least 1 second
});

//  LIGHT AND DARk MODE

const themeBtn = document.querySelector("[data-theme-btn]");
const htmlElement = document.documentElement;

themeBtn.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    htmlElement.setAttribute("data-theme", newTheme);
});


// TAB

const tabBtns = document.querySelectorAll("[data-tab-btn]");
const tabContents = document.querySelectorAll("[data-tab-content]");

let lastActiveTab = document.querySelector("[data-tab-content].active") || tabContents[0];
let lastActiveTabBtn = document.querySelector("[data-tab-btn].active") || tabBtns[0];



tabBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        if (lastActiveTab) lastActiveTab.classList.remove("active");
        if (lastActiveTabBtn) lastActiveTabBtn.classList.remove("active");

        const newTabContent = document.querySelector(`[data-tab-content="${btn.dataset.tabBtn}"]`);

        if (newTabContent) {
            newTabContent.classList.add("active");
            btn.classList.add("active");

            lastActiveTab = newTabContent;
            lastActiveTabBtn = btn;
        }
    });
});




