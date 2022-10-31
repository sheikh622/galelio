// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconUser, IconUserCheck, IconReceipt2, IconClipboardList } from '@tabler/icons';
import React from 'react';

// constant
const icons = {
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
    // title: <FormattedMessage id="dashboard" />,
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: <FormattedMessage id="admin.dashboard" />,
            type: 'item',
            url: '/dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },

      
    ]
};

export default subAdminMenu;
