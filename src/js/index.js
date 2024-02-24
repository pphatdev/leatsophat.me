import { fav512 } from "./helpers/assets";
import { codingWith, frameworksWith, onlineToolsWith, stylingWith } from "./helpers/candowith";
import { activeHeader, sidebar, toggleTheme } from "./helpers/header";

export const showProfile = () => {
    return `<img src="${fav512.replace("dist",'.')}" loading="lazy" class="w-36 rounded-full sm:rounded-2xl h-36 sm:w-44 md:w-64 sm:h-44 md:h-64 my-7" alt="Leat Sophat">`
}


document.querySelector('[data-image]').innerHTML = showProfile()

const buttonToggle = document.querySelectorAll('[data-toggle]')
Array.from(buttonToggle).forEach(button => button.addEventListener('click', toggleTheme))
document.addEventListener('DomContentLoaded', activeHeader())
document.addEventListener('DomContentLoaded', codingWith())
document.addEventListener('DomContentLoaded', stylingWith())
document.addEventListener('DomContentLoaded', frameworksWith())
document.addEventListener('DomContentLoaded', onlineToolsWith())
document.addEventListener('DomContentLoaded', sidebar())