import { timelines } from "../data/timeline"
import { minify } from "../helpers/stringMinify"


/**
 * List Timeline
 * @returns
 */
const list = (data) => {
    return(data.map(item => {
        return(String(
            `<li>
                <h2 class="py-3 dark:text-primary md:text-xl text-sm font-bold">${item?.title}</h2>
                <ul class="list-inside list-item dark:text-white/60">
                    ${item?.list.map(list => {
                        return(`<li class="list-disc text-xs sm:text-sm">${list?.title}</li>`)
                    })}
                </ul>
            </li>`
        ))
    }))
}


/**
 * Apply Timeline
 * @route /about
 * @returns
 */
export const timeline = () => {
    const tartget = document.querySelector('#summary')
    tartget.innerHTML = minify(list(timelines)).replaceAll(/\>\,\</g, "><")
}