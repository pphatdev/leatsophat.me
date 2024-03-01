import { Header } from "../components/header.js";
import { showProfile } from "../components/hero-profile.js";
import { projects } from "../components/projects.js";
import { sidebar, toggleTheme } from "../helpers/header.js";

(document.querySelector('[data-image]') || {}).innerHTML = showProfile()
const buttonToggle = document.querySelectorAll('[data-toggle]')
document.addEventListener('DomContentLoaded', new Header())
document.addEventListener('DomContentLoaded', sidebar())
Array.from(buttonToggle).forEach(button => button.addEventListener('click', toggleTheme))

if (typeof window !== "undefined") {
    window.toggleTheme = toggleTheme
}

document.addEventListener('DomContentLoaded', projects())