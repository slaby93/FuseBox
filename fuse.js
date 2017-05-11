const { FuseBox } = require("fuse-box");
const {
    SassPlugin,
    CSSPlugin,
    BabelPlugin
 } = require("fuse-box");

const fuse = FuseBox.init({
    sourceMaps: true,
    homeDir: "src",
    output: "dist/$name.js",
    autoImport: {
        React: "react",
        ReactDOM: "react-dom",
        PropTypes: "prop-types",
    },
    plugins: [
        SassPlugin(),
        CSSPlugin(),
        BabelPlugin({
            config: {
                sourceMaps: true,
                presets: ["es2015"],
                plugins: [
                    ["transform-react-jsx"],
                ],
            },
        })
    ]
});

fuse
    .bundle("app")
    .watch();
fuse.dev({
    port: 8080
});
fuse.run();
