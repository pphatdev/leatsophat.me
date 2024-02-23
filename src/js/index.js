import { fav192 } from "./helpers/assets";

export const toggleTheme = () => {
    if (document.body.classList.contains("dark"))
        document.body.classList.remove("dark");
    else
        document.body.classList.add("dark");
}

export const showProfile = () => {
    return `<img src="${fav192.replace("dist",'.')}" class="w-28 h-28 mb-7" alt="Leat Sophat">`
}

const buttonToggle = document.querySelectorAll('[data-toggle]')
Array.from(buttonToggle).forEach(button => button.addEventListener('click', toggleTheme))
document.querySelector('[data-image]').innerHTML = showProfile()