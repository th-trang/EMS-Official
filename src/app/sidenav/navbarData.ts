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
        expanded: false,
        items: [
            {
                routeLink: 'statistics/all',
                label: 'All Factors',
            },
        ]
    },
    {
        routeLink: 'alarm',
        icon: 'fal fa-bell',
        label: 'Alarm',

    },
    {
        routeLink: 'setting',
        icon: 'fal fa-cog',
        label: 'Settings',
        expanded: false,
        items: [
            {
                routeLink: 'setting/customize',
                label: 'Alarm Settings'
            },
            {
                routeLink: 'login',
                label: 'Log Out',
            }
        ]
    }  
]