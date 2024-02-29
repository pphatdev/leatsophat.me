import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpackPwaManifest from 'webpack-pwa-manifest'
import { WebpackManifestPlugin } from "webpack-manifest-plugin";
import { fileURLToPath } from 'url';
import { pages } from "./pages.config.js";
import { rules } from "./rules.config.js";
import { me } from './me.config.js';
import { icons, screenshots } from "./src/helpers/webmanifest.js";
import { dots } from './src/helpers/config-path.js';

const __filename    = fileURLToPath(import.meta.url);
const __dirname     = path.dirname(__filename);
const dist          = path.resolve(__dirname, "dist")
const src           = path.resolve(__dirname, "src")
const nodeModule    = path.resolve(__dirname, "node_modules")

export default {
    devtool: "eval",
    mode: 'production',
    entry: pages.reduce(
        (config, page) => {
            config[page?.route] = `./src/scripts/${page?.route == "home" ? 'index' : `${page?.route}` }.js`;
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
        rules: [].concat(rules),
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
        new HtmlWebpackPlugin({
            filename: `${dist}/googleff785c31669eafd5.html`,
            template: `googleff785c31669eafd5.html`,
        }),
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
            icons: [].concat(icons(src)),
            screenshots: [].concat(screenshots),
            filename: "site.webmanifest"
        })
    ].concat(
        pages.map((page) =>
            new HtmlWebpackPlugin({
                favicon: `${src}/assets/favicon.ico`,
                title: `${page?.route.toLocaleUpperCase()} - ${me?.fullName}`,
                filename: `${dist}/${page?.route == "home" ? 'index' : `${page?.route}/index`}.html`,
                template: `${src}/views/${page?.route == "home" ? 'index' : `${page?.route}`}.html`,
                detail: me?.description,
                chunks: [page?.route],
                minify: true,
                inject: "body",
                templateParameters: {
                    title: `${page?.route.toLocaleUpperCase()} - ${me?.fullName}`,
                    detail: me?.description,
                    link: `${me?.domain}/${ page?.route == "home" ? "":page?.route }`,
                    cover: `${ dots(page?.route, "home")}/assets/screenshots-2.webp`,
                    appleTouchIcon: `${ dots(page?.route, "home") }/assets/apple-touch-icon.png`,
                    icon16x16: `${ dots(page?.route, "home") }/assets/favicon-32x32.png`,
                    icon32x32: `${ dots(page?.route, "home") }/assets/favicon-16x16.png`,
                    style: `${ dots(page?.route, "home") }/index.css`,
                }
            })
        )
    ),
    resolve: {
        roots: [path.resolve(__dirname, "dist/assets")],
    },
};