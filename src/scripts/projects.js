import { Header } from "../components/header.js";
import { projects } from "../components/projects.js";
import { sidebar, toggleTheme } from "../helpers/header.js";

const buttonToggle = document.querySelectorAll('[data-toggle]')
document.addEventListener('DomContentLoaded', new Header())
document.addEventListener('DomContentLoaded', sidebar())
Array.from(buttonToggle).forEach(button => button.addEventListener('click', toggleTheme))

if (typeof window !== "undefined") {
    window.toggleTheme = toggleTheme
}

document.addEventListener('DomContentLoaded', projects())