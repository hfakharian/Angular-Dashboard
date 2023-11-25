import { navbarData } from 'src/app/Models/navbarSide';
import { Query } from '@angular/core';

export const navbarItem: navbarData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'fa fa-tachometer',
    badge: {
      class: 'bg-info',
      text: 'NEW'
    }
  },
  {
    title : true,
    name: 'Theme Color',
  },
  {
    name: 'Colors',
    url: '/theme/color',
    icon: 'fa fa-eyedropper',
  },
  {
    title : true,
    name: 'Tools',
  },
  {
    name: 'Smart',
    url: '/smart',
    icon: 'fa fa-th-large',
    children: [
      {
        name: 'File Uploader',
        url: '/smart/fileUploader',
        badge: {
          class: 'bg-danger',
          text: 'PRO'
        }
      },
      {
        name: 'Image Cropper',
        url: '/smart/imageCropper',
        badge: {
          class: 'bg-danger',
          text: 'PRO'
        }
      },
      {
        name: 'Date Time Picker',
        url: '/smart/datePicker',
        badge: {
          class: 'bg-danger',
          text: 'PRO'
        }
      },
      {
        name: 'Select And Multi Select',
        url: '/smart/select',
        badge: {
          class: 'bg-danger',
          text: 'PRO'
        }
      },
      {
        name: 'Slider And Range Slider',
        url: '/smart/slider',
        badge: {
          class: 'bg-danger',
          text: 'PRO'
        }
      },
      {
        name: 'Html Editor',
        url: '/smart/htmlEditor',
        badge: {
          class: 'bg-danger',
          text: 'PRO'
        }
      }]
  },
  {
    name: 'Chart',
    url: '/',
    icon: 'fa fa-pie-chart',
  },
  {
    name: 'Forms',
    url: '/',
    icon: 'fa fa-pencil-square',
    children: [
      {
        name: 'Dropdown',
        url: '/'
      },
      {
        name: 'Date Picker',
        url: '/'
      }
    ]
  },
  {
    name: 'Signin',
    url: '/signin',
    icon: 'fa fa-lock'
  },
  {
    name: 'Signup',
    url: '/signup',
    icon: 'fa fa-lock'
  }
];
