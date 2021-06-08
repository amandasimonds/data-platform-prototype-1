module.exports = {
    "stories": [
        "../projects/uv-ui-lib/src/lib/**/*.stories.ts",
        "*.(story|stories).[tj]sx?",
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ]
}
