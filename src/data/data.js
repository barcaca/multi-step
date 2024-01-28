import { AdvancedIcon, ArcadeIcon, ProIcon } from '@/components/icon/icon'

export const dataTitle = {
  title: [
    'Personal info',
    'Select your plan',
    'Pick add-ons',
    'Finishing up',
    'Thank you!',
  ],
  description: [
    'Please provide your name, email address, and phone number.',
    'You have the option of monthly or yearly billing.',
    'Add-ons help enhance your gaming experience.',
    'Double-check everything looks OK before confirming.',
    'Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please fell free to email us at support@loremgamin.com.',
  ],
}
export const dataPlans = [
  {
    text: 'Arcade',
    icon: <ArcadeIcon />,
    monthValue: '9',
    yearValue: '90',
  },
  {
    text: 'Advanced',
    icon: <AdvancedIcon />,
    monthValue: '12',
    yearValue: '120',
  },
  {
    text: 'Pro',
    icon: <ProIcon />,
    monthValue: '15',
    yearValue: '150',
  },
]
export const dataAddOns = [
  {
    text: 'Online service',
    name: 'onlineService',
    description: 'Acess to mutiplayer games',
    monthValue: '1',
    yearValue: '10',
  },
  {
    text: 'Larger storage',
    name: 'largerStorage',
    description: 'Extra 1TB of cloud save',
    monthValue: '2',
    yearValue: '20',
  },
  {
    text: 'Customizable profile',
    name: 'customProfile',
    description: 'Custom theme on your profile',
    monthValue: '2',
    yearValue: '20',
  },
]
