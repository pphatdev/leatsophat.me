import { Header } from "../components/header.js";
import { exp } from "../data/exp.js";
import { sidebar, toggleTheme } from "../helpers/header.js";

class HireMe {

    static typeList = (item) => {
        return (`
            <li class="flex flex-col items-center justify-start gap-2 sm:flex-row">
                <p class="flex-shrink-0 w-full font-medium sm:w-28">${item.key}</p>
                <p class="w-full text-sm leading-6 text-slate-600 dark:text-slate-400">${item.value}</p>
            </li>
        `)
    }

    static typeParagraph = (item) => {
        return (`
            <li class="flex flex-col items-center justify-start gap-2 sm:flex-row">
                <p class="w-full text-sm leading-6 text-slate-600 dark:text-slate-400">${item.value}</p>
            </li>
        `)
    }

    static item = (data) => {
        return (`
            <li class="w-full p-4 border backdrop-blur-[1px] bg-white/40 dark:bg-white/5 print:dark:border-black/10 dark:border-white/10 rounded-xl">
                <ul class="flex flex-col gap-1 text-left">
                    <h1 class="mb-2 font-bold">${data?.name}</h1>
                    ${ data.items.map(
                        item => {
                            return (`
                                <li class="flex flex-col items-center justify-start gap-2 sm:flex-row">
                                    ${ data.type === "list" ? HireMe.typeList(item) : HireMe.typeParagraph(item) }
                                </li>
                            `)
                        }
                    ).join('') }
                </ul>
            </li>
        `)
    }

    static loader = () =>
    {
        const expContainer = document.querySelector('[data-tartget="exp"]')
        expContainer.innerHTML += exp.map( item => HireMe.item(item) ).join('')

        const buttonToggle = document.querySelectorAll('[data-toggle]')
        Array.from(buttonToggle).forEach(button => button.addEventListener('click', toggleTheme))

        sidebar()
        new Header()
    }
}

HireMe.loader()

if (typeof window !== "undefined") {
    window.toggleTheme = toggleTheme
}