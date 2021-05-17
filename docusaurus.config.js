/** @type {import('@docusaurus/types').DocusaurusConfig} */

const versions = require("./versions.json");
const latestVersion = versions[0];

module.exports = {
  title: 'Monaco',
  tagline: 'Dinosaurs are cool',
  url: 'https://CruzanCaramele.github.io',
  baseUrl: '/dynatrace-monitoring-as-code/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'CruzanCaramele',
  projectName: 'dynatrace-monitoring-as-code', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Monaco',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: "/versions",
              label: "All versions",
            },
          ],
        },
        {
          href: 'https://github.com/dynatrace-oss/dynatrace-monitoring-as-code',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Monaco. Dynatrace.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
