export const activeHeader = () => {
    const currentURL = window.location.pathname
    const header = document.querySelector('#header')
    const match = header.querySelectorAll('ul>li [href]')
    Array.from(match).forEach( element => {
        const matchURL = element.getAttribute('href')
        if (matchURL === currentURL) {
            element.classList.add('active')
        }
    })
}


export const toggleTheme = () => {
    if (document.body.classList.contains("dark"))
        document.body.classList.remove("dark");
    else
        document.body.classList.add("dark");
}
