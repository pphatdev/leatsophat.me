import { activeHeader, sidebar, toggleTheme } from "../helpers/header"

const buttonToggle = document.querySelectorAll('[data-toggle]')
Array.from(buttonToggle).forEach(button => button.addEventListener('click', toggleTheme))
document.addEventListener('DomContentLoaded', activeHeader())
document.addEventListener('DomContentLoaded', sidebar())