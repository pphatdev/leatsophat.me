import { timelines } from "../data/timeline"
import { minify } from "../helpers/stringMinify"

const list = (data) => {
    return(data.map(item => {
        return(String(
            `<li>
                <h2 class="py-3 dark:text-primary text-xl font-bold">${item?.title}</h2>
                <ul class="list-inside list-item dark:text-white/60">
                    ${item?.list.map(list => {
                        return(`<li class="list-disc">${list?.title}</li>`)
                    })}
                </ul>
            </li>`
        ))
    }))
}

export const timeline = () => {
    const tartget = document.querySelector('#summary')
    tartget.innerHTML = minify(list(timelines)).replaceAll(/\>\,\</g, "><")
}