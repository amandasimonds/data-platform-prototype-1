export const ICON_SET = [
    {
		name: 'apps-gwu',
		url: 'apps-gwu.svg'
	},
    {
		name: 'apps-design-ripple',
		url: 'apps-design-ripple.svg'
	},
    {
		name: 'apps-quad',
		url: 'apps-quad.svg'
	},
    {
		name: 'apps-sbs',
		url: 'apps-sbs.svg'
	},
    {
		name: 'apps-sbs-gradient',
		url: 'gradient/apps-sbs-gradient.svg'
	},
    {
		name: 'uv-logo2',
		url: 'gradient/uv-logo.svg'
	},
    {
		name: 'apps-settings',
		url: 'apps-settings.svg'
	},
    {
		name: 'apps-settings-gradient',
		url: 'gradient/apps-settings-gradient.svg'
	},
    {
		name: 'arrow_expand',
		url: 'system/Arrow expand.svg'
	},
	{
		name: 'arrow_collapse',
		url: 'system/Arrow collapse.svg'
	},
    {
        name: 'back',
        url: 'back-arrow.svg'
    },
	{
		name: 'checked',
		url: 'entity_state/Checked.svg'
	},
    {
		name: 'clock',
		url: 'clock.svg'
	},
    {
		name: 'close',
		url: 'system/Close.svg'
	},
    {
		name: 'compare',
		url: 'system/Compare.svg'
	},
    {
		name: 'copy',
		url: 'system/Copy.svg'
	},
    {
		name: 'digital_view',
		url: 'system/Degital view.svg'
	},
    {
		name: 'document',
		url: 'document.svg'
	},
    {
		name: 'document_view',
		url: 'system/Document view.svg'
	},
	{
		name: 'double_checked',
		url: 'entity_state/Double checked New.svg'
	},
	{
		name: 'empty',
		url: 'entity_state/Empty.svg'
	},
    {
		name: 'expand',
		url: 'system/Expand.svg'
	},
	{
		name: 'filter',
		url: 'system/Filter.svg'
	},
    {
        name: 'filter2',
        url: 'filter.svg'
    },
    {
        name: 'fullscreen',
        url: 'fullscreen.svg'
    },
    {
		name: 'apps-settings-gradient',
		url: 'gradient/apps-settings-gradient.svg'
	},
	{
		name: 'link',
		url: 'entity_state/Link.svg'
	},
	{
		name: 'menu',
		url: 'system/Menu.svg'
	},
	{
		name: 'more_dots',
		url: 'system/More dots.svg'
	},
    {
		name: 'parts',
		url: 'parts.svg'
	},
    {
		name: 'profile',
		url: 'profile.svg'
	},
    {
		name: 'reorder',
		url: 'reorder.svg'
	},
    {
		name: 'search',
		url: 'search.svg'
	},
    {
		name: 'search-gradient',
		url: 'gradient/apps-search-gradient.svg'
	},
	{
		name: 'settings',
		url: 'system/Settings.svg'
	},
    {
		name: 'unlink',
		url: 'entity_state/Unlink New.svg'
	},
    {
		name: 'unlink_alt',
		url: 'system/Unlink alt.svg'
	},
    {
        name: 'up-down-arrows',
        url: 'up-down-arrows.svg'
    },
    {
        name: 'uv-logo',
        url: 'uv-logo.svg'
    },
] as const;

export type UvxMatIconName = typeof ICON_SET[number]['name'];
