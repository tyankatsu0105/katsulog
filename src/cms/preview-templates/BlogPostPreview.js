import React from 'react'
import { BlogPostTemplate } from '../../templates/blog-post.jsx'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
    date={entry.getIn(['data', 'date'])}
  />
)

export default BlogPostPreview
