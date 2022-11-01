// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconCheckbox,IconDeviceAnalytics,IconCash, IconUserCheck,IconBell, IconReceipt2, IconClipboardList } from '@tabler/icons';

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
        //  {
        //     id: 'brand',
        //     title: <FormattedMessage id="admin.brand" />,
        //     type: 'item',
        //     url: '/brands',
        //     icon: icons.IconUserCheck,
        //     breadcrumbs: false
        // },
        {
            id: 'nftManagement',
            title: <FormattedMessage id="Management" />,
            type: 'collapse',

            icon: icons.IconDeviceAnalytics,
            breadcrumbs: false,
            children: [
             
               
                {
                    id: 'brand',
                    title: <FormattedMessage id="admin.brand" />,
                    type: 'item',
                    icon: icons.IconCheckbox,
                    url: '/brands',
                    breadcrumbs: false
                },
                {
                    id: 'category',
                    title: <FormattedMessage id="Category" />,
                    type: 'item',
                    icon: icons.IconCheckbox,
                    url: '/categories',
                    breadcrumbs: false
                }
              
            ]
        }
         ,
         {
            id: 'admin',
            title: <FormattedMessage id="admin.adminManagement" />,
            type: 'item',
            url: '/adminManagement',
            icon: icons.IconUserCheck,
            breadcrumbs: false
        },
    
       
        
       
       
       
    ]
};

export default superAdminMenu;
