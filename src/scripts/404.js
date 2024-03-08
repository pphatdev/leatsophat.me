import { Header } from "../components/header.js";
import { sidebar, toggleTheme } from "../helpers/header.js";
import { renderCanvas } from "../components/render-canvas.js";


const buttonToggle = document.querySelectorAll('[data-toggle]')
document.addEventListener('DomContentLoaded', new Header())
Array.from(buttonToggle).forEach(button => button.addEventListener('click', toggleTheme))
document.addEventListener('DomContentLoaded', sidebar())
document.addEventListener('DomContentLoaded', renderCanvas())


if (typeof window !== "undefined") {
    window.toggleTheme = toggleTheme
    window.renderCanvas = renderCanvas
}