// const rupture = require("rupture");
const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const { i18n } = require('./next-i18next.config');
const path = require('path');
// configuraciones de NEXT.JS
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ['vcmimages.sfo2.digitaloceanspaces.com'],
  },
  i18n,
  sassOptions: {
    includePaths: ['node_modules', 'node_modules/rupture-sass/*'].map((d) =>
      path.join(__dirname, d)
    ),
  },
};

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'src', 'styles')],
//     prependData: `@import "main.scss";`
//   }
// }

module.exports = withPlugins(
  [
    // Plugin para agregar Antd al proyecto
    [
      withAntdLess({
        // optional
        // modifyVars: { "@primary-color": "#00ff00" },
        // optional
        lessVarsFilePath: './src/styles/variables.less',
        // optional
        lessVarsFilePathAppendToEndOfContent: true,
        // optional https://github.com/webpack-contrib/css-loader#object
        cssLoaderOptions: {},
        // Other Config Here...
        webpack(config) {
          return config;
        },
        // ONLY for Next.js 10, if you use Next.js 11, delete this block
        // future: {
        //   webpack5: true,
        // },
      }),
    ],
    // [
    //   stylus,
    //   {
    //     stylusLoaderOptions: {
    //       use: [
    //         rupture(),
    //         poststylus([
    //           require("css-mqpacker"),
    //           // require('postcss-css-variables'),
    //         ]),
    //       ],
    //     },
    //   },
    // ],
    // // add a plugin without a configuration
    // images,
  ],
  nextConfig
);
