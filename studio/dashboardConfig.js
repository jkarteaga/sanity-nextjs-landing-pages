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
                  buildHookId: '5f2ebd2c17794b8dd366ab47',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yq8wvm2b',
                  apiId: '889b1e2f-199d-4581-88c6-294848e0ebd1'
                },
                {
                  buildHookId: '5f2ebd2df5cc1f357affdaa0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nkpdyshh',
                  apiId: '458a8100-abe2-4b89-b853-dc65fc335f6f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jkarteaga/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nkpdyshh.netlify.app', category: 'apps'}
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
