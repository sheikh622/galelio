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

const brandAdminMenu = {
    id: 'Brand Admin',
    // title: <FormattedMessage id="dashboard" />,
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: <FormattedMessage id="Brand.dashboard" />,
            type: 'item',
            url: '/dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },

      
    ]
};

export default brandAdminMenu;
