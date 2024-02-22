import HtmlWebpackPlugin from "html-webpack-plugin";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";
import WebpackPwaManifest from 'webpack-pwa-manifest'
import path from 'path';
import { fileURLToPath } from 'url';
import { pages } from "./pages.config.js";

const me = {
    fullName: "Leat Sophat",
    shortName: "Sophat",
    description: "This Website is showing about Mr.Leat Sophat",
    start_url: "/",
    background_color: "#ffffff",
    theme_color: "#ffffff",
}

const __filename    = fileURLToPath(import.meta.url);
const __dirname     = path.dirname(__filename);
const dist          = path.resolve(__dirname, "dist")
const src           = path.resolve(__dirname, "src")
const nodeModule    = path.resolve(__dirname, "node_modules")

export default {
    devtool: "eval",
    mode: 'development',
    entry: pages.reduce(
        (config, page) => {
            config[page] = `./src/js/${page == "home" ? 'index' : `pages/${page}` }.js`;
            return config;
        }, {}
    ),
    output: {
        filename: 'js/[name]-static-[contenthash:10].js?id=[contenthash]',
        asyncChunks: false,
        // chunkFilename: 'js/[name]-static-[contenthash:10].js?[contenthash]',
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
                            publicPath: dist,
                            name: 'assets/[name]_static_[contenthash:10].[ext]?[contenthash]',
                        },
                    },
                ],
            }
        ],
    },
    devServer: {
        static: {
            directory: dist,
            staticOptions: {},
            serveIndex: true,
            watch: true,
        },
    },
    plugins: [
        new WebpackManifestPlugin({
            fileName: 'mainfest.json',
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
                {
                    src: `${src}/assets/favicon.ico`,
                    size: '1024x1024',
                    purpose: 'maskable'
                }
            ],
            filename: "site.webmanifest"
        })
    ].concat(
        pages.map((page) =>
            new HtmlWebpackPlugin({
                title: `${page} - Leat Sophat` ,
                dir: `${dist}`,
                style: `${dist}/index.css`,
                filename: `${dist}/${page == "home" ? 'index.html' : `${page}/index.html`}`,
                template: `${src}/${page == "home" ? 'index' : `pages/${page}`}.html`,
                detail: `Hello Leat sophat page`,
                chunks: [page],
                inject: true,
            })
        )
    ),
    resolve: {
        roots: [path.resolve(__dirname, "dist/assets")],
    },
};