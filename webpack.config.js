import HtmlWebpackPlugin from "html-webpack-plugin";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";
import WebpackPwaManifest from 'webpack-pwa-manifest'
import path from 'path';
import { fileURLToPath } from 'url';
import { pages } from "./pages.config.js";

import { config } from "dotenv";
const env = config()?.parsed

const me = {
    fullName: env?.APP_NAME_FULL || "Leat Sophat",
    shortName: env?.APP_NAME_SHORT ||  "Sophat",
    description: env?.APP_DESCRIPTION || "This Website is showing about Mr.Leat Sophat",
    start_url: env?.APP_START_URL || "/",
    background_color: env?.APP_BG_COLOR || "#ffffff",
    theme_color: env?.APP_THEME_COLOR || "#ffffff",
}

const __filename    = fileURLToPath(import.meta.url);
const __dirname     = path.dirname(__filename);
const dist          = path.resolve(__dirname, "dist")
const src           = path.resolve(__dirname, "src")
const nodeModule    = path.resolve(__dirname, "node_modules")

export default {
    devtool: "eval",
    mode: env?.APP || 'production',
    entry: pages.reduce(
        (config, page) => {
            config[page] = `./src/js/${page == "home" ? 'index' : `utils/${page}` }.js`;
            return config;
        }, {}
    ),
    output: {
        filename: 'js/[name]-static-[contenthash:10].js?id=[contenthash]',
        asyncChunks: false,
        clean: true
    },
    watchOptions: {
        ignored: nodeModule,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                resolve: {
                    fullySpecified: false, // disable the behaviour
                },
            },
            {
                test: /\.(png|jpe?g|gif|ico|webmanifest)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: 'dist',
                            name: 'assets/[name].[ext]',
                        },
                    },
                ],
            }
        ],
    },
    devServer: {
        static: {
            directory: 'dist',
            staticOptions: {},
            serveIndex: true,
            watch: true,
        },
    },
    plugins: [
        new WebpackManifestPlugin({
            fileName: 'mainfest.json',
            publicPath: '/'
        }),
        new WebpackPwaManifest({
            publicPath: '/',
            name: me?.fullName,
            short_name: me?.shortName,
            description: me?.description,
            start_url: me?.start_url,
            background_color: me?.background_color,
            theme_color: me?.theme_color,
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            icons: [
                {
                    src: `${src}/assets/android-chrome-512x512.png`,
                    sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
                },
                {
                    src: `${src}/assets/profile.png`,
                    size: '1024x1024' // you can also use the specifications pattern
                },
                // {
                //     src: `${src}/assets/favicon.ico`,
                //     size: '1024x1024',
                //     purpose: 'maskable'
                // }
            ],
            filename: "site.webmanifest"
        })
    ].concat(
        pages.map((page) =>
            new HtmlWebpackPlugin({
                favicon: `${src}/assets/favicon.ico`,
                title: `${page.toLocaleUpperCase()} - Leat Sophat`,
                dir: `${dist}`,
                filename: `${dist}/${page == "home" ? 'index.html' : `${page}/index.html`}`,
                template: `${src}/${page == "home" ? 'index' : `pages/${page}`}.html`,
                detail: `Hello Leat sophat page`,
                chunks: [page],
                inject: "body",
                templateParameters: {
                    title: `${page.toLocaleUpperCase()} - Leat Sophat`,
                    detail: `Hello Leat sophat page`,
                    link: `https://hola.leatsophat.me/${page}`,
                    cover: `${src}/assets/${ page??'home' }-cover.png`,
                    appleTouchIcon: `${page == "home" ? '.' : `..`}/assets/apple-touch-icon.png`,
                    icon16x16: `${page == "home" ? '.' : `..`}/assets/favicon-32x32.png`,
                    icon32x32: `${page == "home" ? '.' : `..`}/assets/favicon-16x16.png`,
                    style: `${page == "home" ? './index' : `../index`}.css`,
                }
            })
        )
    ),
    resolve: {
        roots: [path.resolve(__dirname, "dist/assets")],
    },
};