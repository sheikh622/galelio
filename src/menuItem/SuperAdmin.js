// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
    IconDashboard,
    IconCheckbox,
    IconDeviceAnalytics,
    IconCash,
    IconUserCheck,
    IconBell,
    IconReceipt2,
    IconClipboardList
} from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconUserCheck,
    IconReceipt2,
    IconClipboardList,
    IconBell,
    IconCheckbox,
    IconCash
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const superAdminMenu = {
    id: 'Super Admin',
    // title: <FormattedMessage id="dashboard" />,
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: <FormattedMessage id="admin.dashboard" />,
            type: 'item',
            url: '/',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },

        {
            id: 'admin',
            title: <FormattedMessage id="admin.adminManagement" />,
            type: 'item',
            url: '/subAdminManagement',
            icon: icons.IconUserCheck,
            breadcrumbs: false
        },

        {
            id: 'Management',
            title: <FormattedMessage id=" Brand Management" />,
            type: 'collapse',

            icon: icons.IconDeviceAnalytics,
            breadcrumbs: false,
            children: [
                {
                    id: 'categories',
                    title: <FormattedMessage id="categories" />,
                    type: 'item',
                    icon: icons.IconCheckbox,
                    url: '/categories',
                    breadcrumbs: false
                },

                {
                    id: 'brand',
                    title: <FormattedMessage id="admin.brand" />,
                    type: 'item',
                    icon: icons.IconCheckbox,
                    url: '/brands',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default superAdminMenu;
