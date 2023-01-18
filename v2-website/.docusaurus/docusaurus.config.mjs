/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Legend Test",
  "tagline": "Language and visual platform to generate models for the financial services industry",
  "url": "https://legend.finos.org",
  "baseUrl": "/",
  "organizationName": "finos",
  "deploymentBranch": "gh-pages",
  "trailingSlash": false,
  "projectName": "legend",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "stylesheets": [
    "https://fonts.googleapis.com/css?family=Roboto+Condensed:400,500,700,900|Source+Code+Pro:400,500,700,900&display=swap"
  ],
  "favicon": "img/favicon/favicon.ico",
  "customFields": {
    "wrapPagesHTML": true,
    "repoUrl": "https://github.com/finos/legend",
    "highlight": {
      "theme": "tomorrow-night-blue"
    }
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "../docs",
          "breadcrumbs": false,
          "sidebarPath": "../v2-website/sidebars.json"
        },
        "blog": {},
        "theme": {
          "customCss": "./src/css/customTheme.css"
        },
        "googleAnalytics": {
          "trackingID": "UA-89349362-7"
        }
      }
    ]
  ],
  "plugins": [
    null
  ],
  "themeConfig": {
    "algolia": {
      "appId": "X69JR631XX",
      "apiKey": "b8ea4fa1535a60bc9385193ba58dcd69",
      "indexName": "legend-finos",
      "contextualSearch": false,
      "searchPagePath": "search",
      "searchParameters": {}
    },
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": true,
      "respectPrefersColorScheme": false
    },
    "navbar": {
      "logo": {
        "src": "img/legend.svg"
      },
      "items": [
        {
          "to": "docs/overview/legend-overview",
          "label": "Docs",
          "position": "right"
        },
        {
          "to": "releases",
          "label": "Releases",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "Twitter",
              "to": "https://twitter.com/finosfoundation"
            },
            {
              "label": "Privacy Policy",
              "to": "https://www.finos.org/privacy-policy"
            }
          ]
        }
      ],
      "logo": {
        "alt": "FINOS",
        "src": "https://legend.finos.org/img/finos_wordmark.svg",
        "href": "https://www.finos.org"
      },
      "style": "light"
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "prism": {
      "additionalLanguages": [],
      "theme": {
        "plain": {
          "color": "#bfc7d5",
          "backgroundColor": "#292d3e"
        },
        "styles": [
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(105, 112, 152)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "string",
              "inserted"
            ],
            "style": {
              "color": "rgb(195, 232, 141)"
            }
          },
          {
            "types": [
              "number"
            ],
            "style": {
              "color": "rgb(247, 140, 108)"
            }
          },
          {
            "types": [
              "builtin",
              "char",
              "constant",
              "function"
            ],
            "style": {
              "color": "rgb(130, 170, 255)"
            }
          },
          {
            "types": [
              "punctuation",
              "selector"
            ],
            "style": {
              "color": "rgb(199, 146, 234)"
            }
          },
          {
            "types": [
              "variable"
            ],
            "style": {
              "color": "rgb(191, 199, 213)"
            }
          },
          {
            "types": [
              "class-name",
              "attr-name"
            ],
            "style": {
              "color": "rgb(255, 203, 107)"
            }
          },
          {
            "types": [
              "tag",
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 114)"
            }
          },
          {
            "types": [
              "operator"
            ],
            "style": {
              "color": "rgb(137, 221, 255)"
            }
          },
          {
            "types": [
              "boolean"
            ],
            "style": {
              "color": "rgb(255, 88, 116)"
            }
          },
          {
            "types": [
              "keyword"
            ],
            "style": {
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "doctype"
            ],
            "style": {
              "color": "rgb(199, 146, 234)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "color": "rgb(178, 204, 214)"
            }
          },
          {
            "types": [
              "url"
            ],
            "style": {
              "color": "rgb(221, 221, 221)"
            }
          }
        ]
      },
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "path": "i18n",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "themes": [],
  "headTags": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};