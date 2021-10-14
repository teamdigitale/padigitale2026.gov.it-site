import React from 'react';
import { Layout } from './src/layouts/Layout';

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;
