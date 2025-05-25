import {
    LayoutDashboard,
    History,
    Calendar,
    ClipboardList,
    BarChart2,
    TestTube,
    MessageSquare,
    HelpCircle,
    Settings
} from 'lucide-react';

export const navigationData = [
    {
        name: 'Dashboard',
        icon: LayoutDashboard,
        active: true,
        section: 'general'
    },
    {
        name: 'History',
        icon: History,
        section: 'general'
    },
    {
        name: 'Calendar',
        icon: Calendar,
        section: 'general'
    },
    {
        name: 'Appointments',
        icon: ClipboardList,
        section: 'general'
    },
    {
        name: 'Statistics',
        icon: BarChart2,
        section: 'general'
    },
    {
        name: 'Tests',
        icon: TestTube,
        section: 'general'
    },
    {
        name: 'Chat',
        icon: MessageSquare,
        section: 'tools'
    },
    {
        name: 'Support',
        icon: HelpCircle,
        section: 'tools'
    },
    {
        name: 'Setting',
        icon: Settings,
        section: 'settings'
    }
];