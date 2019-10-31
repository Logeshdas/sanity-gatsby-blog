export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dba6750130b5ffbf0115115',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rmxybmdv',
                  apiId: '29bb8569-b41a-4acc-a0b5-12fb5054ac23'
                },
                {
                  buildHookId: '5dba67513b233008efde9568',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-eeah1o3c',
                  apiId: '7aaa6687-4f7d-4dc0-a726-05e81900b367'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Logeshdas/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-eeah1o3c.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
