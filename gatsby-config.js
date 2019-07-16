module.exports = {
  siteMetadata: {
    title: 'Learn Gatsby',
    description: 'A site built during GatsbyJS workshop by Malcolm Kee'
  },
  plugins: [
    'gatsby-plugin-favicon',
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',

    // look into all the sourced files and find .md files
    // they can then be query from allMarkdownRemark GraphQL property
    'gatsby-transformer-remark',

    // __dirname refers to location of current file
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'code',
        path: `${__dirname}/src`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogs',
        path: `${__dirname}/blogs`
      }
    },
  ]
}
