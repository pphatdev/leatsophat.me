export const rules = [
    {
        test: /\.m?js$/,
        exclude: /node_modules/,
        resolve: {
            fullySpecified: false, // disable the behaviour
        },
    },
    {
        test: /\.(png|jpe?g|gif|ico|webp)$/i,
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
]