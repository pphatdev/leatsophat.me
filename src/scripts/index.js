import { Header } from "../components/header.js";
// import { showProfile } from "../components/hero-profile.js";
import { sidebar, toggleTheme } from "../helpers/header.js";
import { homeProjects } from "../components/home-projects.js";
import { homeTemplates } from "../components/home-templates.js";
import { renderCanvas } from "../components/render-canvas.js";
import {
    codingWith,
    frameworksWith,
    onlineToolsWith,
    stylingWith
} from "../helpers/candowith";
// import { fav512 } from "./../helpers/assets"


// document.querySelector('[data-image]').innerHTML = showProfile(fav512)
const buttonToggle = document.querySelectorAll('[data-toggle]')
document.addEventListener('DomContentLoaded', new Header())
document.addEventListener('DomContentLoaded', codingWith())
document.addEventListener('DomContentLoaded', Array.from(buttonToggle).forEach(button => button.addEventListener('click', toggleTheme)))
document.addEventListener('DomContentLoaded', stylingWith())
document.addEventListener('DomContentLoaded', frameworksWith())
document.addEventListener('DomContentLoaded', onlineToolsWith())
document.addEventListener('DomContentLoaded', sidebar())
document.addEventListener('DomContentLoaded', homeProjects())
document.addEventListener('DomContentLoaded', homeTemplates())
document.addEventListener('DomContentLoaded', renderCanvas())


if (typeof window !== "undefined") {
    window.toggleTheme = toggleTheme
    window.renderCanvas = renderCanvas
}