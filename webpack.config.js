import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename        = fileURLToPath(import.meta.url);
const __dirname         = path.dirname(__filename);
export const dist       = path.resolve(__dirname, "dist")
export const src        = path.resolve(__dirname, "src")
export const nodeModule = path.resolve(__dirname, "node_modules")
export const defaultCon = path.resolve(__dirname, 'src/index.js')


export default {
    devtool: "eval",
    mode: 'production',
    entry: {
        js: defaultCon
    },
    output: {
        filename: '[name].[contenthash].js',
        asyncChunks: false,
        chunkFilename: '[name].[contenthash].bundle.js',
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
            title: 'Hello - Leat Sophat' ,
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
        new CopyPlugin({
            patterns: [
                {
                    from: `${src}/assets/`,
                    to: `${dist}/assets`
                }
            ],
        }),
    ]
};

