import { minify } from "../helpers/stringMinify"

export class Cards {

    constructor() { return this.view() }

    #header = (data = {}) => {
        const title = data?.title
        const date = new Date(data?.date);
        return(`
            <header class="w-full">
                <h1 class="font-semibold text-base uppercase font-poppins leading-7 dark:text-white line-clamp-2">${title}</h1>
                <time class="text-xs dark:text-white/60"><span>Last updated:</span> ${date.toDateString()}</time>
            </header>
        `)
    }

    #content = (data = {}) => {
        return(`<p class="leading-7 dark:text-white/70 line-clamp-2 pt-2">${data?.description}</p>`)
    }

    #footer = (data = {}) => {
        const url       = data?.url
        const language  = data?.language
        return(`
            <footer class="flex absolute bottom-4 right-4 dark:text-white/70 items-center justify-center gap-4">
                ${ language ? `<p class="text-[10px] my-1"> <span class="bg-primary/50 dark:bg-primary p-1 px-3 rounded-full text-white font-semibold">${language}</span> </p>`:'' }
                <a href="${url?.html}" title="Source Code" class="hover:text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </a>
                ${ url?.demo ?
                    `<a href="${url?.demo}" title="Live Demo" class="hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
                    </a>`: ''
                }
            </footer>
        `)
    }

    view = ( data = {} ) => {
        return(
            minify(`
                <div class="flex flex-col relative ring-2 ring-primary/20 dark:ring-white/10 min-h-44 pb-14 h-full dark:bg-slate-800 dark:hover:bg-slate-700 bg-white hover:bg-primary-50 items-start justify-start p-5 text-black drop-shadow-sm rounded-xl">
                    ${this.#header(data?.header || {})}
                    ${this.#content(data?.content || {})}
                    ${this.#footer(data?.footer || {})}
                </div>
            `)
        )
    }
}