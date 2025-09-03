import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import apiSidebar from './docs/api/sidebar';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  sidebar: [
    { type: 'doc', id: 'intro' },
    {
      type: 'category',
      label: 'API',
      link: {
        type: 'generated-index',
        title: 'RO-Crate API',
        description: 'API for interacting with RO-Crate metadata',
        slug: '/docs/api',
      },
      items: apiSidebar,
    },
  ],
};

export default sidebars;
