// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics,IconCheckbox, IconUser, IconUserCheck, IconReceipt2, IconClipboardList,  } from '@tabler/icons';
import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
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

const brandAdminMenu = {
    id: 'Brand Admin',
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
        {
            id: 'categories',
            title: <FormattedMessage id="categories" />,
            type: 'item',
            url: '/categories',
            icon: icons.IconCheckbox,
            breadcrumbs: false
        },
        {
            id: 'Delivery Dashboard',
            title: <FormattedMessage id="deliveryDashboard" />,
            type: 'item',
            url: '/deliveryDashboard',
            icon: LocalShippingIcon,
            breadcrumbs: false
        },
       

      
    ]
};

export default brandAdminMenu;
