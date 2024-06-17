import { detail, name, domain } from '../me.config.js';

export type Info = {
    lang?: string,
    title?: string,
    description?: string,
    author?: {
        image?: string
        name?: string
        url?: string
    },
    canonical?: string,
    icons?: {
        ico?: string,
        i76x76?: string,
        i32x32?: string,
        i16x16?: string,
    },
    banner?: {
        cover?: string,
        type?: string,
        siteURL?: string
    },
    manifest?: string,
    feed?: string,
    styles?: [
        string
    ],
    themeColor?: string,
}

export const info = ({
    lang = "en",
    title = "",
    canonical = domain,
    author = {
        image: `${canonical}/assets/profile.png`,
        name: name,
        url: canonical
    },
    description = detail,
    icons = {
        ico :`${canonical}/assets/favicon.ico`,
        i76x76 :`${canonical}/assets/apple-touch-icon.png`,
        i32x32 :`${canonical}/assets/favicon-32x32.png`,
        i16x16 :`${canonical}/assets/favicon-16x16.png`,
    },
    banner = {
        cover : `${canonical}/assets/home.webp`,
        type : "website",
        siteURL : "https://twitter.com/infoSophat",
    },
    manifest = `${canonical}/assets/site.webmanifest`,
    feed = `${canonical}/assets/feed.xml`,
    styles = [
        `${canonical}/css/style.css`
    ],
    themeColor = "#ffffff"
}: Info = {} ) => {
    return {
        lang: lang,
        title: (title ? `${title} | ` : "") + name,
        author: author,
        description: description,
        canonical: canonical,
        icons: icons,
        banner: banner,
        manifest: manifest,
        feed: feed,
        styles: styles,
        themeColor: themeColor,
    }
};
