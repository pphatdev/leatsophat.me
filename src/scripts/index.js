import { Header } from "../components/header.js";
import { showProfile } from "../components/hero-profile.js";
import { codingWith, frameworksWith, onlineToolsWith, stylingWith } from "../helpers/candowith";
import { sidebar, toggleTheme } from "../helpers/header.js";


import "../components/data.js"

document.querySelector('[data-image]').innerHTML = showProfile()
const buttonToggle = document.querySelectorAll('[data-toggle]')
document.addEventListener('DomContentLoaded', new Header())
Array.from(buttonToggle).forEach(button => button.addEventListener('click', toggleTheme))
document.addEventListener('DomContentLoaded', codingWith())
document.addEventListener('DomContentLoaded', stylingWith())
document.addEventListener('DomContentLoaded', frameworksWith())
document.addEventListener('DomContentLoaded', onlineToolsWith())
document.addEventListener('DomContentLoaded', sidebar())


if (typeof window !== "undefined") {
    window.toggleTheme = toggleTheme
}