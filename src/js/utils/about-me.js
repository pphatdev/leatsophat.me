import { activeHeader, toggleTheme } from "../helpers/header"

const buttonToggle = document.querySelectorAll('[data-toggle]')
Array.from(buttonToggle).forEach(button => button.addEventListener('click', toggleTheme))
document.addEventListener('DomContentLoaded', activeHeader())