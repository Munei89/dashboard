import { IMenu } from './types';
import {
  HomeIcon,
  CalenderIcon,
  UsersIcon,
  MessegesIcon,
  SettingsIcon,
} from './assets/icons';

export const MenuLinks: IMenu[] = [
  {
    id: 'home',
    name: 'Home',
    url: '#home',
    icon: typeof HomeIcon === 'function' ? HomeIcon() : HomeIcon,
  },
  {
    id: 'calender',
    name: 'Calender',
    url: '#calender',
    icon: typeof CalenderIcon === 'function' ? CalenderIcon() : CalenderIcon,
  },
  {
    id: 'users',
    name: 'Users',
    url: '#users',
    icon: typeof UsersIcon === 'function' ? UsersIcon() : UsersIcon,
  },
  {
    id: 'messages',
    name: 'Messages',
    url: '#messages',
    icon: typeof MessegesIcon === 'function' ? MessegesIcon() : MessegesIcon,
  },
  {
    id: 'settings',
    name: 'Settings',
    url: '#settings',
    icon: typeof SettingsIcon === 'function' ? SettingsIcon() : SettingsIcon,
  },
];
