import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'RO-Crate API',
  tagline: 'The official documentation of an RO-Crate API',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    experimental_faster: true,
  },

  // Set the production url of your site here
  url: 'https://johnf.github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ro-crate-api/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'johnf',
  projectName: 'ro-crate-api',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/johnf/ro-crate-api/tree/main',
          docItemComponent: '@theme/ApiItem',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/johnf/ro-crate-api/tree/main',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.webp',
    navbar: {
      title: 'Ro-Crate API',
      logo: {
        alt: 'Ro-Crate API Logo',
        src: 'img/logo.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/about', label: 'About', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/johnf/ro-crate-api',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'API',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'RO-Crate',
              href: 'https://www.researchobject.org/ro-crate/',
            },
            {
              label: 'PARADISEC',
              href: 'https://www.paradisec.org.au/',
            },
            {
              label: 'LDaCA',
              href: 'https://www.ldaca.edu.au/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/johnf/ro-crate-api',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PARADISEC and LDaCA. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    languageTabs: [{ language: 'curl' }, { language: 'python' }, { language: 'javascript' }, { language: 'ruby' }, { language: 'php' }],
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'API',
        docsPluginId: 'classic',
        config: {
          api: {
            specPath: 'openapi.yaml',
            outputDir: 'docs/api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
            downloadUrl: '/ro-crate-api.yaml',
            showSchemas: true,
            showExtensions: true,
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],
  themes: ['docusaurus-theme-openapi-docs'],
};

export default config;
