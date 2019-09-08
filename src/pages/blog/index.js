import React from 'react'

import Layout from '../../components/Layout.jsx'
import BlogRoll from '../../components/BlogRoll.jsx'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <BlogRoll />
      </Layout>
    )
  }
}
