export const toggleTheme = () => {
    if (document.body.classList.contains("dark"))
        document.body.classList.remove("dark");
    else
        document.body.classList.add("dark");
}

const buttonToggle = document.querySelector('[data-toggle]')
buttonToggle.addEventListener('click', toggleTheme)