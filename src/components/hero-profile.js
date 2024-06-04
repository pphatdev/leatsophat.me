/**
 * Create Image for Hero Sections of Home page
 * @returns
 */
export const showProfile = (fav512) => {
    return `
    <div class="w-36 rounded-full h-36 sm:w-44 md:w-64 sm:h-44 md:h-64 inset-y-7 outline-offset ring-primary absolute animate-spin-slow duration-1000 border-primary/90 border-4 border-solid border-t-transparent"></div>
    <img
        src="${ fav512.replace("dist",'.') }"
        loading="lazy"
        class="w-36 rounded-full ring-4 ring-inset ring-primary h-36 sm:w-44 md:w-64 sm:h-44 md:h-64 my-7"
        alt="Leat Sophat"
    >
    `
}

/**
 * Create Image for Hero Sections of Home page
 * @returns
 */
export const heroSection = (source) => {
    return `<img
        src="${ source.replace("dist",'.') }"
        loading="lazy"
        class="w-36 h-36 sm:w-44 md:w-80 sm:h-44 md:h-80 my-7"
        alt="Leat Sophat"
    >
    `
}