import { AdminJSOptions } from 'adminjs';
import User from '../models/user.js';

import componentLoader from './component-loader.js';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [User],
  locale: {
    language: 'en',
    translations: {
      labels: {
        User: 'People',
      },
    },
  },
  databases: [],
};

export default options;
