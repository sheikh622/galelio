// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconCheckbox, IconUser, IconUserCheck, IconReceipt2, IconClipboardList } from '@tabler/icons';
import React from 'react';

// constant
const icons = {
    IconCheckbox,
    IconDashboard,
    IconDeviceAnalytics,
    IconUserCheck,
    IconUser,
    IconReceipt2,
    IconClipboardList
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const subAdminMenu = {
    id: 'Admin',
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
            id: 'Management',
            title: <FormattedMessage id=" Brand Management" />,
            type: 'collapse',

            icon: icons.IconDeviceAnalytics,
            breadcrumbs: false,
            children: [
                {
                    id: 'category',
                    title: <FormattedMessage id="Category" />,
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

export default subAdminMenu;

