import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'RO-Crate API',
  tagline: 'The official documentation of the RO-Crate API',
  favicon: 'img/favicon.ico',

  url: 'https://johnf.github.com',
  baseUrl: '/ro-crate-api/',

  organizationName: 'johnf',
  projectName: 'ro-crate-api',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl: 'https://github.com/johnf/ro-crate-api/tree/main',
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
          label: 'API',
        },
        { to: '/about', label: 'About', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/johnf/ro-crate=api',
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
      copyright: `Copyright © ${new Date().getFullYear()} TBA. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    languageTabs: [
      { language: 'curl' },
      { language: 'python' },
      { language: 'javascript' },
      { language: 'ruby' },
      { language: 'php' },
    ],
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
              categoryLinkSource: "tag",
            },
            downloadUrl: "/ro-crate-api.yaml",
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
