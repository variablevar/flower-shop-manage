import { AdminJSOptions } from 'adminjs';

import UserAddress from '../models/address.js';
import Blog from '../models/blog.js';
import { OrderModel } from '../models/order.js';
import Product from '../models/product.js';
import User from '../models/user.js';

import componentLoader from './component-loader.js';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [
    {
      resource: User,
      options: {
        navigation: {
          name: 'Users',
          icon: 'User',
        },
        properties: {
          password: {
            isVisible: {
              edit: true,
              show: false,
              list: false,
              filter: false,
            },
          },
        },
      },
    },
    {
      resource: UserAddress,
      options: {
        navigation: {
          name: 'UserAddress',
          icon: 'Map',
        },
      },
    },
    {
      resource: Product,
      options: {
        navigation: {
          name: 'Products',
          icon: 'Gift',
        },
      },
    },
    {
      resource: OrderModel,
      options: {
        navigation: {
          name: 'Orders',
          icon: 'Box',
        },
      },
    },
    {
      resource: Blog,
      options: {
        navigation: {
          name: 'Blogs',
          icon: 'Archive',
        },
      },
    },
  ],

  databases: [],
};

export default options;
