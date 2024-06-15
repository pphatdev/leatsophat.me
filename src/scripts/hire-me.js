import { Header } from "../components/header.js";
import { exp } from "../data/exp.js";
import { sidebar, toggleTheme } from "../helpers/header.js";

const buttonToggle = document.querySelectorAll('[data-toggle]')
document.addEventListener('DomContentLoaded', new Header())
document.addEventListener('DomContentLoaded', sidebar())
Array.from(buttonToggle).forEach(button => button.addEventListener('click', toggleTheme))

if (typeof window !== "undefined") {
    window.toggleTheme = toggleTheme
}

const expContainer = document.querySelector('[data-tartget="exp"]')
console.log(expContainer, exp);

const list = (data) => {
    const typeList = (`
        <li class="w-full p-4 border backdrop-blur-[1px] bg-white/40 dark:bg-white/5 print:dark:border-black/10 dark:border-white/10 rounded-xl">
            <ul class="flex flex-col gap-1 text-left">
                <h1 class="mb-2 font-bold">${data?.name}</h1>
                ${
                    data.items.map(
                        item => {
                            return (`
                                <li class="flex flex-col items-center justify-start gap-2 sm:flex-row">
                                    ${
                                        data.type === "list"
                                        ? (`
                                            <p class="flex-shrink-0 w-full font-medium sm:w-28">${item.key}</p>
                                            <p class="w-full text-sm leading-6 text-slate-600 dark:text-slate-400">${item.value}</p>
                                        `)
                                        : (`
                                            <p class="w-full text-sm leading-6 text-slate-600 dark:text-slate-400">${item.value}</p>
                                        `)
                                    }
                                </li>
                            `)
                        }
                    ).join('')
                }
            </ul>
        </li>
    `)

    return typeList
}



expContainer.innerHTML += exp.map(
    items => {
        return list(items)
    }
).join('')