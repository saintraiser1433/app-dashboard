interface sidebarItem {
    id: number;
    title: string;
    link?: string;
    icon: string;
    submenu: boolean;
    submenuItems?: submenuItem[];

}
interface submenuItem {
    title: string;
    link: string;

}

export const SideBarItems: sidebarItem[] = [
    {
        id: 1,
        title: 'Dashboard',
        link: './dashboard',
        submenu: false,
        icon: 'faHome',
    },
    {
        id: 2,
        title: 'App Manager',
        submenu: true,
        icon: 'faQrcode',
        submenuItems: [
            {
                title: 'Application',
                link: './app',

            },
            {
                title: 'Module',
                link: './module',
            },
            {
                title: 'Sub Module',
                link: './submodule',
            },
            {
                title: 'Assign Module & Sub',
                link: './assignmod',
            },
        ]
    },
    {
        id: 3,
        title: 'User Manager',
        submenu: true,
        icon: 'faUser',
        submenuItems: [
            {
                title: 'User',
                link: './user',
            },
            {
                title: 'Request User',
                link: './requser',
            }
        ]
    },
    {
        id: 4,
        title: 'Role Manager',
        submenu: true,
        icon: 'faCog',
        submenuItems: [
            {
                title: 'Role',
                link: './role',
            },
            {
                title: 'Assign Module',
                link: './assignrmodule',
            }
        ]
    },



]