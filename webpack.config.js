import HtmlWebpackPlugin from "html-webpack-plugin";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename    = fileURLToPath(import.meta.url);
const __dirname     = path.dirname(__filename);
const dist          = path.resolve(__dirname, "dist")
const src           = path.resolve(__dirname, "src")
const nodeModule    = path.resolve(__dirname, "node_modules")
const defaultCon    = path.resolve(__dirname, 'src/js/index.js')

const pageAboutMe   = path.resolve(__dirname, 'src/js/pages/about-me.js')
const pageContact   = path.resolve(__dirname, 'src/js/pages/contact.js')
const pageProject   = path.resolve(__dirname, 'src/js/pages/project.js')

export default {
    devtool: "eval",
    mode: 'development',
    entry: {
        'main': defaultCon,
        'about-me': pageAboutMe,
        'contact': pageContact,
        'project': pageProject,
    },
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
                test: /\.(png|jpe?g|gif|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: dist,
                            name: 'assets/[name]_static_[contenthash:10].[ext]?[contenthash]',
                        },
                    },
                ],
            },
            {
                test: /\.webmanifest$/,
                use: 'raw-loader',
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
        new HtmlWebpackPlugin({
            title: `Home - Leat Sophat` ,
            dir: `${dist}`,
            style: `${dist}/index.css`,
            filename: `${dist}/index.html`,
            template: `${src}/index.html`,
            detail: `Hello Leat sophat page`
        }),
        new HtmlWebpackPlugin({
            title: 'About - Leat Sophat' ,
            dir: `${dist}`,
            style: `${dist}/index.css`,
            filename: `${dist}/about-me/index.html`,
            template: `${src}/pages/about-me.html`,
            detail: `About Leat sophat page`
        }),
        new HtmlWebpackPlugin({
            title: 'Project - Leat Sophat' ,
            dir: `${dist}`,
            style: `${dist}/index.css`,
            filename: `${dist}/project/index.html`,
            template: `${src}/pages/project.html`,
            detail: `Project by Leat Sophat`
        }),
        new HtmlWebpackPlugin({
            title: 'Contact - Leat Sophat' ,
            dir: `${dist}`,
            style: `${dist}/index.css`,
            filename: `${dist}/contact/index.html`,
            template: `${src}/pages/contact.html`,
            detail: `Contact Leat sophat page`
        }),
    ],
    resolve: {
        roots: [path.resolve(__dirname, "dist/assets")],
    },
};

