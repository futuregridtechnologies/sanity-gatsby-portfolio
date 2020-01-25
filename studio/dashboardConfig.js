export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e2c03bfdab71613e4fb300d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-j2ymay6k',
                  apiId: '15a41b99-92e3-4939-8e0c-1b4fa87dcc3f'
                },
                {
                  buildHookId: '5e2c03bfb1f2ea892baa482a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-v79nxz31',
                  apiId: '8f446502-4458-4c17-8422-c03a4e91fc7c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/welcometodailykit/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-v79nxz31.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
