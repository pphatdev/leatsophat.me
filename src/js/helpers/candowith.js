import { css, webpack, html, figma, github, gitlab, javascript, laravel, microsoft, nodejs, npm, python, react, sass, vue, tux, wordpress, php, tailwind, less, bootstrap, nuxtjs, nextjs, typescript, blogger, wix, firebase } from "./assets"

const languages = [
    {name : "html", logo : html },
    {name : "css", logo : css },
    {name : "javascript", logo : javascript },
    {name : "nodejs", logo : nodejs },
    {name : "php", logo : php },
]

const frameworks = [
    {name : "webpack", logo : webpack },
    {name : "react", logo : react },
    {name : "nextjs", logo : nextjs },
    {name : "vue", logo : vue },
    {name : "nuxtjs", logo : nuxtjs },
    {name : "typescript", logo : typescript },
    {name : "laravel", logo : laravel },
    {name : "python", logo : python },
    {name : "firebase", logo : firebase },
]

const styling = [
    {name : "tailwindcss", logo : tailwind },
    {name : "less", logo : less },
    {name : "sass", logo : sass },
    {name : "bootstrap", logo : bootstrap },
]

const onlineTools = [
    {name : "wordpress", logo : wordpress },
    {name : "blogger", logo : blogger },
    {name : "wix", logo : wix },
]

export const codingWith = () => {
    const target = document.querySelector('#languages')
    target.innerHTML =  String(languages.map(
        (logo, index) => (
            `<li key="${index}">
                <img alt="${logo?.name}" loading="lazy" class="h-12 w-12 flex-shrink-0 opacity-30 hover:opacity-100" src="${(logo?.logo).replace("dist",'.')}" />
            </li>`
        )
    )).replaceAll(',', '')
}

export const frameworksWith = () => {
    const target = document.querySelector('#frameworks')
    target.innerHTML =  String(frameworks.map(
        (logo, index) => (
            `<li key="${index}">
                <img alt="${logo?.name}" loading="lazy" class="h-12 w-12 flex-shrink-0 opacity-30 hover:opacity-100" src="${(logo?.logo).replace("dist",'.')}" />
            </li>`
        )
    )).replaceAll(',', '')
}

export const stylingWith = () => {
    const target = document.querySelector('#styling')
    target.innerHTML =  String(styling.map(
        (logo, index) => (
            `<li key="${index}">
                <img alt="${logo?.name}" loading="lazy" class="h-12 w-12 flex-shrink-0 opacity-30 hover:opacity-100" src="${(logo?.logo).replace("dist",'.')}" />
            </li>`
        )
    )).replaceAll(',', '')
}

export const onlineToolsWith = () => {
    const target = document.querySelector('#onlinetools')
    target.innerHTML =  String(onlineTools.map(
        (logo, index) => (
            `<li key="${index}">
                <img alt="${logo?.name}" loading="lazy" class="h-12 w-12 flex-shrink-0 opacity-30 hover:opacity-100" src="${(logo?.logo).replace("dist",'.')}" />
            </li>`
        )
    )).replaceAll(',', '')
}