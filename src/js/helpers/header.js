export const activeHeader = () => {
    const currentURL = window.location.pathname
    const header = document.querySelector('#header')
    const match = header.querySelectorAll('ul>li [href]')
    Array.from(match).forEach( element => {
        const matchURL = element.getAttribute('href')
        const div = element.querySelector('a>div')
        if (matchURL.replaceAll('/','') === currentURL.replaceAll('/','')) {
            element.classList.add('active')
            div.classList.remove('hidden')
            div.classList.remove('translate-y-[14px]')
            div.classList.add('translate-y-8', 'hover:translate-y-[14px]')
        }
    })
}


export const toggleTheme = () => {
    if (document.body.classList.contains("dark"))
        document.body.classList.remove("dark");
    else
        document.body.classList.add("dark");
}
