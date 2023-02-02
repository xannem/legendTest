import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/legendTest/__docusaurus/debug',
    component: ComponentCreator('/legendTest/__docusaurus/debug', 'c38'),
    exact: true
  },
  {
    path: '/legendTest/__docusaurus/debug/config',
    component: ComponentCreator('/legendTest/__docusaurus/debug/config', 'a42'),
    exact: true
  },
  {
    path: '/legendTest/__docusaurus/debug/content',
    component: ComponentCreator('/legendTest/__docusaurus/debug/content', '467'),
    exact: true
  },
  {
    path: '/legendTest/__docusaurus/debug/globalData',
    component: ComponentCreator('/legendTest/__docusaurus/debug/globalData', 'f2f'),
    exact: true
  },
  {
    path: '/legendTest/__docusaurus/debug/metadata',
    component: ComponentCreator('/legendTest/__docusaurus/debug/metadata', 'd9a'),
    exact: true
  },
  {
    path: '/legendTest/__docusaurus/debug/registry',
    component: ComponentCreator('/legendTest/__docusaurus/debug/registry', '5a2'),
    exact: true
  },
  {
    path: '/legendTest/__docusaurus/debug/routes',
    component: ComponentCreator('/legendTest/__docusaurus/debug/routes', 'a10'),
    exact: true
  },
  {
    path: '/releases',
    component: ComponentCreator('/releases', 'fb1'),
    exact: true
  },
  {
    path: '/legendTest/docs',
    component: ComponentCreator('/legendTest/docs', 'aa1'),
    routes: [
      {
        path: '/legendTest/docs/case-studies/legend-case-studies',
        component: ComponentCreator('/legendTest/docs/case-studies/legend-case-studies', '17b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/community/contribute-to-legend',
        component: ComponentCreator('/legendTest/docs/community/contribute-to-legend', '606'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/community/get-help-from-community',
        component: ComponentCreator('/legendTest/docs/community/get-help-from-community', 'f1d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/community/legend-media',
        component: ComponentCreator('/legendTest/docs/community/legend-media', '98f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/community/legend-roadmap',
        component: ComponentCreator('/legendTest/docs/community/legend-roadmap', '0c6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/community/terms-of-service',
        component: ComponentCreator('/legendTest/docs/community/terms-of-service', '83a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/concepts/data-modeling-concepts',
        component: ComponentCreator('/legendTest/docs/concepts/data-modeling-concepts', '8b7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/concepts/legend-concepts',
        component: ComponentCreator('/legendTest/docs/concepts/legend-concepts', 'b1f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/getting-started/installation-guide',
        component: ComponentCreator('/legendTest/docs/getting-started/installation-guide', '77d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/getting-started/introduction-to-legend',
        component: ComponentCreator('/legendTest/docs/getting-started/introduction-to-legend', '510'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/overview/architecture',
        component: ComponentCreator('/legendTest/docs/overview/architecture', '463'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/overview/legend-overview',
        component: ComponentCreator('/legendTest/docs/overview/legend-overview', 'e0b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/overview/use-cases',
        component: ComponentCreator('/legendTest/docs/overview/use-cases', 'd37'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/reference/bindings',
        component: ComponentCreator('/legendTest/docs/reference/bindings', 'a28'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/reference/legend-language',
        component: ComponentCreator('/legendTest/docs/reference/legend-language', 'd2c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/reference/query-protocol',
        component: ComponentCreator('/legendTest/docs/reference/query-protocol', '960'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/reference/released-functions',
        component: ComponentCreator('/legendTest/docs/reference/released-functions', 'eb4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/reference/stores',
        component: ComponentCreator('/legendTest/docs/reference/stores', 'a53'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/reference/upcoming-functions',
        component: ComponentCreator('/legendTest/docs/reference/upcoming-functions', '884'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/release/release-2021-10-18',
        component: ComponentCreator('/legendTest/docs/release/release-2021-10-18', '774'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/release/release-2022-04-26',
        component: ComponentCreator('/legendTest/docs/release/release-2022-04-26', '404'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/release/release-2022-05-05',
        component: ComponentCreator('/legendTest/docs/release/release-2022-05-05', '3ed'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/sdlc/project-structure',
        component: ComponentCreator('/legendTest/docs/sdlc/project-structure', '01e'),
        exact: true
      },
      {
        path: '/legendTest/docs/showcases/LogicalModellingBasic',
        component: ComponentCreator('/legendTest/docs/showcases/LogicalModellingBasic', '70f'),
        exact: true
      },
      {
        path: '/legendTest/docs/tour',
        component: ComponentCreator('/legendTest/docs/tour', '3a4'),
        exact: true
      },
      {
        path: '/legendTest/docs/tutorials/query-tutorial',
        component: ComponentCreator('/legendTest/docs/tutorials/query-tutorial', '13e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/legendTest/docs/tutorials/studio-tutorial',
        component: ComponentCreator('/legendTest/docs/tutorials/studio-tutorial', 'ec1'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/legendTest/',
    component: ComponentCreator('/legendTest/', 'a97'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
