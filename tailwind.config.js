/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/index.html',
        './src/**/*.{html,js}',
        './src/pages/**/*.{html,js}',
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#25e9b8",
                    50: "#eafff7",
                    100: "#cbffeb",
                    200: "#9dfddc",
                    300: "#5ef7cc",
                    400: "#25e9b8",
                    500: "#00d0a1",
                    600: "#00a983",
                    700: "#00886e",
                    800: "#006b57",
                    900: "#00584a",
                    950: "#00322b",
                }
            },
            fontFamily: {
                body: ["'Poppins'","'Open San'","'Sofia Sans Condensed'", "sans-serif"],
                poppins: [ '"Poppins"', 'sans-serif']
            }
        },
    },
    plugins: [],
}

