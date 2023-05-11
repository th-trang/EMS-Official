import { INavbarData } from "./helper";

export const navbarData : INavbarData[]= [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard',

    },
    {
        routeLink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics',

    },
    {
        routeLink: 'alarm',
        icon: 'fal fa-bell',
        label: 'Alarm',

    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings',
        expanded: false,
        items: [
            {
                routeLink: 'settings/customize',
                label: 'Customize'
            },
            {
                routeLink: 'settings/logout',
                label: 'Log Out',
            }
        ]
    }  
]