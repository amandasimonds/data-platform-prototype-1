export const navItems = {
    content: [
        {
            app: 'home-splash',
            icon: 'dashboard',
            active: false,
            navlink: 'home-splash',
            tooltip: 'Dashboard'
        },
        {
            app: 'file-folder-structure',
            icon: 'folder',
            active: false,
            navlink: 'file-folder-structure',
            tooltip: 'Folder manager'
        },
        {
            app: 'ingest',
            icon: 'upload',
            active: false,
            navlink: '/main',
            disabled: false,
            tooltip: 'Upload items'
        },
    ],
    services: [
        {
            app: 'analytics',
            icon: 'analytics',
            active: false,
            navlink: '/main',
            disabled: false,
            tooltip: 'Analytics'
        },
        {
            app: 'gwu',
            icon: 'global_where_used',
            active: false,
            navlink: 'gwu',
            disabled: false,
            tooltip: 'Atlas'
        },
        {
            app: 'sbs',
            icon: 'compare',
            active: false,
            navlink: 'sbs',
            disabled: false,
            tooltip: 'Fusion'
        },
        {
            app: 'design-ripple',
            icon: 'design',
            active: false,
            navlink: 'design-ripple',
            disabled: false,
            tooltip: 'Design Ripple'
        }
    ],
    customization: [
        {
            app: 'settings',
            icon: 'settings',
            active: false,
            navlink: 'settings',
            tooltip: 'Settings'
        }
    ]
};
