export const navbarData = [
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
        items: [
            {
                routeLink: 'settings/alarm',
                label: 'Alarm Settings'
            }
        ]

    }
    
]