import { Header } from "../components/header.js";
import { timeline } from "../components/timeline.js";
import { sidebar, toggleTheme } from "../helpers/header.js";

const buttonToggle = document.querySelectorAll('[data-toggle]')
document.addEventListener('DomContentLoaded', new Header())
document.addEventListener('DomContentLoaded', sidebar())
document.addEventListener('DomContentLoaded', timeline())
Array.from(buttonToggle).forEach(button => button.addEventListener('click', toggleTheme))

if (typeof window !== "undefined") {
    window.toggleTheme = toggleTheme
}
