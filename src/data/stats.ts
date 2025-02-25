export interface Stat {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
}

export interface StatsList {
    id: string;
    stats: Stat[];
    content?: {
        title: string;
        description: string;
        button?: {
            text: string;
            link: string;
            variant?: 'primary' | 'secondary' | 'ghostLight' | 'ghostDark';
        };
    };
}

export const statsLists: Record<string, StatsList> = {
    main: {
        id: 'main',
        stats: [
            {
                value: 10,
                label: 'Theme Configurations',
            },
            {
                value: 11,
                label: 'Pre-Built Components',
            },
            {
                value: 48,
                label: 'Team Members',
            },
            {
                value: 500000,
                label: 'Lines of Code',
                prefix: '+'
            }
        ]
    },
    withContent: {
        id: 'withContent',
        content: {
            title: "Delivering Results That Matter",
            description: "Our track record speaks for itself. We've helped countless businesses achieve their digital goals through innovative solutions and dedicated support.",
            button: {
                text: "Learn More",
                link: "/about",
                variant: "primary"
            }
        },
        stats: [
            {
                value: 10,
                label: 'Color Schemes',
            },
            {
                value: 14.53,
                label: 'Core Bundle Size',
                suffix: 'KB'
            },
            {
                value: 11,
                label: 'Pre-Built Components',
            },
            {
                value: 10,
                label: 'Build Time',
                prefix: '<100',
                suffix: 's'
            }
        ]
    }
};
