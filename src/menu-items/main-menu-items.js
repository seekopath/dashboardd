import React from 'react';
import {FormattedMessage} from 'react-intl';

import {
    IconAtom,
    IconBasket,
    IconBellRinging,
    IconBorderAll,
    IconBorderRadius,
    IconBoxMultiple,
    IconBrandChrome,
    IconBrandGravatar,
    IconBrush,
    IconBug,
    IconCalendar,
    IconChartArcs,
    IconChartCandle,
    IconChartInfographic,
    IconCircle,
    IconCircleOff,
    IconClipboardList,
    IconDashboard,
    IconDeviceAnalytics,
    IconFiles,
    IconForms,
    IconHelp,
    IconId,
    IconKey,
    IconLayoutList,
    IconLoader,
    IconLockAccess,
    IconMail,
    IconMenu,
    IconMessages,
    IconNfc,
    IconPalette,
    IconPencil,
    IconPhoneCall,
    IconPictureInPicture,
    IconReceipt2,
    IconRun,
    IconShadow,
    IconShape,
    IconShieldLock,
    IconSitemap,
    IconTools,
    IconTypography,
    IconUser,
    IconUserCheck,
    IconTrees,
    IconCalculator,
    IconLink,
    IconShieldCheck,
    IconSettings
} from '@tabler/icons';

const icons = {
    IconDashboard: IconDashboard,
    IconDeviceAnalytics,

    IconChartArcs: IconChartArcs,
    IconClipboardList: IconClipboardList,
    IconChartInfographic: IconChartInfographic,

    IconForms: IconForms,
    IconReceipt2: IconReceipt2,
    IconPencil: IconPencil,
    IconPalette: IconPalette,
    IconShadow: IconShadow,
    IconPhoneCall: IconPhoneCall,
    IconBrandChrome: IconBrandChrome,
    IconFiles: IconFiles,
    IconAtom: IconAtom,
    IconTools: IconTools,
    IconBrush: IconBrush,
    IconLockAccess: IconLockAccess,
    IconShieldLock: IconShieldLock,
    IconKey: IconKey,
    IconTypography: IconTypography,
    IconMenu: IconMenu,
    IconBoxMultiple: IconBoxMultiple,
    IconCircleOff: IconCircleOff,
    IconCircle: IconCircle,
    IconBorderRadius: IconBorderRadius,
    IconBrandGravatar: IconBrandGravatar,
    IconShape: IconShape,
    IconUserCheck: IconUserCheck,
    IconId: IconId,
    IconLayoutList: IconLayoutList,
    IconBug: IconBug,
    IconLoader: IconLoader,
    IconRun: IconRun,
    IconUser: IconUser,
    IconHelp: IconHelp,
    IconSitemap: IconSitemap,
    IconPictureInPicture: IconPictureInPicture,
    IconMail: IconMail,
    IconMessages: IconMessages,
    IconNfc: IconNfc,
    IconCalendar: IconCalendar,
    IconBellRinging: IconBellRinging,
    IconBorderAll: IconBorderAll,
    IconChartCandle: IconChartCandle,
    IconBasket: IconBasket,
    IconTrees: IconTrees,
    IconCalculator: IconCalculator,
    IconLink: IconLink,
    IconShieldCheck: IconShieldCheck,
    IconSettings: IconSettings
};

const menuItems = {
    items: [
        {
            id: 'dashboard',
            title: <FormattedMessage id="dashboard" />,
            type: 'group',
            children: [
                {
                    id: 'dash-default',
                    title: <FormattedMessage id="Landing" />,
                    type: 'item',
                    url: '/dashboard/default',
                    icon: icons['IconDashboard'],
                    breadcrumbs: false
                }
            ]
        },

        
        {
            id: 'pages',
            title: <FormattedMessage id="pages" />,
            caption: <FormattedMessage id="pages-caption" />,
            type: 'group',
            children: [
                {
                    id: 'counting',
                    title: <FormattedMessage id="counting" />,
                    type: 'item',
                    url: '/counting',
                    icon: icons['IconCalculator']
                },
                {
                    id: 'environment',
                    title: <FormattedMessage id="environment" />,
                    type: 'item',
                    url: '/environment',
                    icon: icons['IconTrees']
                },
                {
                    id: 'connectivity',
                    title: <FormattedMessage id="connectivity" />,
                    type: 'item',
                    url: '/connectivity',
                    icon: icons['IconLink']
                },
                {
                    id: 'safety',
                    title: <FormattedMessage id="safety" />,
                    type: 'item',
                    url: '/safety',
                    icon: icons['IconShieldCheck']
                },
                {
                    id: 'fullview',
                    title: <FormattedMessage id="fullview" />,
                    type: 'item',
                    url: '/fullview',
                    icon: icons['IconTrees']
                },
                {
                    id: 'documentation',
                    title: <FormattedMessage id="documentation" />,
                    type: 'item',
                    url: '#',
                    icon: icons['IconHelp'],
                    target: true,
                    external: true
                }
            ]
        }
    ]
};

export default menuItems;
