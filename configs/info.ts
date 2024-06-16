export type Info = {
    lang?: string,
    title?: string,
    desciption?: string,
    author?: string,
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

export const info: Info = {
    lang: "en",
    title: "Leat Sophat",
    author: "Leat Sophat",
    desciption: "Welcome to my portfolio - Thoughts from a wandering mind. I am the senior front-end developer of TurboTech, and an UI/UX designer. In my free time, I like design side projects and developing them.",
    canonical: "https://leatsophat.me",
    icons: {
        ico: "assets/favicon.ico",
        i76x76: "assets/apple-touch-icon.png",
        i32x32: "assets/favicon-32x32.png",
        i16x16: "assets/favicon-16x16.png",
    },
    banner: {
        cover: "assets/home.webp",
        type: "website",
        siteURL: "https://twitter.com/infoSophat"
    },
    manifest: "site.webmanifest",
    feed: "feed.xml",
    styles: [
        "css/style.css",
    ],
    themeColor: "#ffffff",
}