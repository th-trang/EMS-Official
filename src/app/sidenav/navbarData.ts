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
                routeLink: 'statistics/flue gas H2O',
                label: 'Flue Gas H2O',
            },
            {
                routeLink: 'statistics/flue gas HCl',
                label: 'Flue Gas HCl',
            },
            {
                routeLink: 'statistics/flue gas SO2',
                label: 'Flue Gas SO2',
            },
            {
                routeLink: 'statistics/flue gas NOx',
                label: 'Flue Gas NOx',
            },
            {
                routeLink: 'statistics/flue gas CO',
                label: 'Flue Gas CO',
            },
            {
                routeLink: 'statistics/flue gas O2',
                label: 'Flue Gas O2',
            },
            {
                routeLink: 'statistics/flue gas dust',
                label: 'Flue Gas Dust',
            },
            {
                routeLink: 'statistics/flue gas flow',
                label: 'Flue Gas Flow',
            },
            {
                routeLink: 'statistics/flue gas pressure',
                label: 'Flue Gas Pressure',
            },
            {
                routeLink: 'statistics/flue gas temp.',
                label: 'Flue Gas Temp.',
            },
        ]

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