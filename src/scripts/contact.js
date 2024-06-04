import { Header } from "../components/header.js";
import { heroSection } from "../components/hero-profile.js";
import { sidebar, toggleTheme } from "../helpers/header.js";
import { mailIcon } from "./../helpers/assets"

(document.querySelector('[data-image]') || {}).innerHTML = heroSection(mailIcon)
const buttonToggle = document.querySelectorAll('[data-toggle]')
document.addEventListener('DomContentLoaded', new Header())
document.addEventListener('DomContentLoaded', sidebar())
Array.from(buttonToggle).forEach(button => button.addEventListener('click', toggleTheme))

if (typeof window !== "undefined") {
    window.toggleTheme = toggleTheme
}
