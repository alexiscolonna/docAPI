// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Flatchr Docs',
  tagline: 'flatchr.io | Logiciel de recrutement',
  url: 'https://www.flatchr.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'flatchr.io', // Usually your GitHub org/user name.
  projectName: 'api', // Usually your repo name.
  

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Flatchr',
        logo: {
          alt: 'Logo Fl',
          src: 'img/logo.svg',
        },
        items: [
          
          {
            type: 'doc',
            docId: 'getting_started',
            position: 'left',
            label: 'API Reference',
          },
          {to: '/Webhooks', label: 'Webhooks', position: 'left'},
          {to: '/Iframe', label: 'Iframe', position: 'left'},
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'API Reference',
                to: '/docs/getting_started',
              },
              {to: '/Webhooks', label: 'Webhooks'},
              {to: '/Iframe', label: 'Iframe'},
            ],
          },
          {
            title: 'Communauté',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/flatchr/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Flatchr',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/flatchr.io/',
              },

            ],
          },
          {
            title: 'En savoir plus',
            items: [

              {
                label: 'flatchr.io',
                href: 'https://www.flatchr.io/',
              },
              {
                label: 'Blog',
                href: 'https://blog.flatchr.io/',
              },
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Flatchr International `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;