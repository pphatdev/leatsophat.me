export const screenshots = [
    {
        src: `./assets/screenshots-1.webp`,
        sizes: "1280x720",
        type: "image/webp",
        form_factor: "wide",
        label: "Light Mode"
    },
    {
        src: `./assets/screenshots-2.webp`,
        sizes: "1280x720",
        type: "image/webp",
        form_factor: "wide",
        label: "Dark Mode"
    }
]


export const icons = (src) => [
    {
        src: `${src}/assets/android-chrome-512x512.png`,
        sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
        purpose: "maskable"
    },
    {
        src: `${src}/assets/profile.png`,
        size: '1024x1024', // you can also use the specifications pattern
        purpose: "maskable"
    }
]