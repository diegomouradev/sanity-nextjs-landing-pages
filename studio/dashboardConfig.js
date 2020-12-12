export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fd4f4d7284e76ded16a759d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-a9aoyjvs',
                  apiId: 'cf8b39ce-bcba-4344-b111-e0fdaac1e5d5'
                },
                {
                  buildHookId: '5fd4f4d7314ec1e0a3303edf',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-463fok76',
                  apiId: 'f09625dc-6fc3-42fd-8fd8-db5c5f0e9674'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/diegomouradev/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-463fok76.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
