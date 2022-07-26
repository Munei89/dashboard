import { IMenu, IScheduleItem } from './types';
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

export const ScheduleItems: IScheduleItem[] = [
  {
    id: '1',
    title: 'Lunch',
    type: 'Team Meeting',
    typeColor: '#39BD45',
    time: '12:00 pm - 1:00 pm',
  },
  {
    id: '1',
    title: 'BD & Treatment Centre',
    type: 'Medical checks',
    typeColor: '#505DD6',
    time: '4:15 pm - 6:00 pm',
  },
];

export const ContactList = [
  {
    id: '1',
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/',
    position: 'CEO',
  },
  {
    id: '2',
    name: 'Jane Doe',
    avatar: 'https://randomuser.me/api/portraits/',
    position: 'CTO',
  },
  {
    id: '3',
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/',
    position: 'COO',
  },
  {
    id: '4',
    name: 'Jane Doe',
    avatar: 'https://randomuser.me/api/portraits/',
    position: 'CFO',
  },
];

export const chartData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
