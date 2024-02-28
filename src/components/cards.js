import { minify } from "../helpers/stringMinify"

export class Cards {

    constructor() { return this.view() }

    #header = (
        title = '',
        description = ''
    ) => {
        return(`
            <div class="flex items-center justify-center border text-black/20 animate-pulse rounded-xl">
                ${this.#title(title)}
                ${this.#description(description)}
            </div>
        `)
    }

    #title = (title = '') => {
        return(`
            <h1 class="text-4xl font-black text-center text-black dark:text-white">${title}</h1>
        `)
    }

    #description = (description) => {
        return(`
            <h1 class="text-4xl font-black text-center text-black dark:text-white">${description}</h1>
        `)
    }

    #content = (title = '') => {
        return(`
            <h1 class="text-4xl font-black text-center text-black dark:text-white">${title}</h1>
        `)
    }

    #footer = (title = '') => {
        return(`
            <h1 class="text-4xl font-black text-center text-black dark:text-white">${title}</h1>
        `)
    }

    view = (
        title = 'Coming Soon...',
        description = 'This page is under construction. Please come back later.',
        content = '',
        footer = ''
    ) => {
        return(
            minify(`
                <div class="flex items-center justify-center border text-black/20 animate-pulse rounded-xl">
                    ${this.#header(title, description)}
                    ${this.#content(content)}
                    ${this.#footer(footer)}
                </div>
            `)
        )
    }
}