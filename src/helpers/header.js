export const activeHeader = () => {
    const currentURL = window.location.pathname
    const header = document.querySelector('#header')
    const match = header.querySelectorAll('ul>li [href]')
    const sidebar = document.querySelector('[data-sidebar-target]')
    const sidebarMatch = document.querySelectorAll('[data-sidebar-target] ul>li>a')
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

    Array.from(sidebarMatch).forEach( element => {
        const match = element.getAttribute('href')
        if (match.replaceAll('/','') === currentURL.replaceAll('/','')) {
            element.classList.add('active')
        }
    })
}

export const sidebar = () => {
    const buttons = document.querySelectorAll('[data-sidebar-toggle]')


    Array.from(buttons).forEach(button => {
        button.addEventListener('click', () => {
            const backdrop = document.querySelector('[data-sidebar-backdrop]')
            const content = document.querySelector('[data-sidebar-target]')
            try {
                if (content.classList.contains('hidden')) {
                    backdrop.classList.remove('hidden')
                    content.classList.remove('hidden')
                }
                else
                {
                    backdrop.classList.add('hidden')
                    content.classList.add('hidden')
                }
            } catch (error) {
                console.log(error);
            }
        })
    })
}


export const toggleTheme = () => {
    if (document.body.classList.contains("dark"))
        document.body.classList.remove("dark");
    else
        document.body.classList.add("dark");
}
