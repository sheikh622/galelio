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
    IconClipboardList,
    IconLayout2,
    IconBuildingStore,
    IconCurrencyEthereum
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
    IconCash,
    IconLayout2,
    IconBuildingStore,
    IconCurrencyEthereum
};
import GridViewIcon from '@mui/icons-material/GridView';

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
            icon: icons.IconLayout2,
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
            id: 'categories',
            title: <FormattedMessage id="categories" />,
            type: 'item',
            icon: icons.IconCheckbox,
            url: '/categories',
            breadcrumbs: false
        },

        {
            id: 'brand',
            title: <FormattedMessage id="admin.BrandManagement" />,
            type: 'item',
            icon: icons.IconBuildingStore,
            url: '/brands',
            breadcrumbs: false
        },
        {
            id: 'nft',
            title: <FormattedMessage id="NFT Management" />,
            type: 'item',
            icon: icons.IconCurrencyEthereum,
            url: '/category',
            breadcrumbs: false
        }
    ]
};

export default superAdminMenu;
