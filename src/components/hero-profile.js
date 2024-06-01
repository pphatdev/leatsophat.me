import { fav512 } from "../helpers/assets"

/**
 * Create Image for Hero Sections of Home page
 * @returns
 */
export const showProfile = () => {
    return `
    <div class="w-36 rounded-full h-36 sm:w-44 md:w-64 sm:h-44 md:h-64 inset-y-7 ring- outline-offset ring-primary absolute animate-spin-slow duration-1000 border-primary/40 border-4 border-solid border-t-transparent"></div>
    <img
        src="${ fav512.replace("dist",'.') }"
        loading="lazy"
        class="w-36 rounded-full ring-4 ring-inset ring-primary h-36 sm:w-44 md:w-64 sm:h-44 md:h-64 my-7"
        alt="Leat Sophat"
    >
    `
}