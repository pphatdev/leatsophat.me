import { fav512 } from "./helpers/assets";

export const toggleTheme = () => {
    if (document.body.classList.contains("dark"))
        document.body.classList.remove("dark");
    else
        document.body.classList.add("dark");
}

export const showProfile = () => {
    return `<img src="${fav512.replace("dist",'.')}" loading="lazy" class="w-36 h-36 sm:w-44 md:w-64 sm:h-44 md:h-64  mb-7" alt="Leat Sophat">`
}

const buttonToggle = document.querySelectorAll('[data-toggle]')
Array.from(buttonToggle).forEach(button => button.addEventListener('click', toggleTheme))
document.querySelector('[data-image]').innerHTML = showProfile()