module.exports = {
    "stories": [
        "../projects/uv-ui-lib/src/lib/**/*.stories.ts",
        "../projects/uv-ui-lib/src/lib/**/*.stories.mdx",
        "*.(story|stories).[tj]sx?",
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ],
    core: { builder: 'webpack5', }
}
