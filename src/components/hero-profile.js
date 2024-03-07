import { fav512 } from "../helpers/assets"

/**
 * Create Image for Hero Sections of Home page
 * @returns
 */
export const showProfile = () => {
    return `<img src="${fav512.replace("dist",'.')}" loading="lazy" class="w-36 rounded-full sm:rounded-2xl h-36 sm:w-44 md:w-64 sm:h-44 md:h-64 my-7" alt="Leat Sophat">`
}