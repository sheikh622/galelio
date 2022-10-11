// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics,IconCash, IconUserCheck,IconBell, IconReceipt2, IconClipboardList } from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconUserCheck,
    IconReceipt2,
    IconClipboardList,
    IconBell,
    IconCash
    
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const superAdminMenu = {
    id: 'admin',
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
            id: 'brand',
            title: <FormattedMessage id="admin.brand" />,
            type: 'item',
            url: '/brand',
            icon: icons.IconUserCheck,
            breadcrumbs: false
        },
    
       
        
       
       
       
    ]
};

export default superAdminMenu;
