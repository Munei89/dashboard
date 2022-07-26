import React from 'react';

export interface IMenu {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface IScheduleItem {
  id: string;
  title: string;
  type: string;
  typeColor: string;
  time: string;
}

export interface IContact {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export interface IAppState {
  isError: boolean;
  isLoading: boolean;
  contactList: IContact[];
  isDrawerOpen: boolean;
}
