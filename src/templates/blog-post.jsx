import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import '../styles/post.scss'

const StyledPostHeading = styled.h1`
  color: var(--color-font-link);
  font-size: 2rem;
  font-weight: bold;
`;

const StyledPostDate = styled.time`
  font-size: 0.9rem;
  color: var(--color-font-accent);
`;

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  date,
}) => {
  const PostContent = contentComponent || Content

  return (
    <>
      {helmet || ''}

      <StyledPostHeading>
        {title}
      </StyledPostHeading>

      <StyledPostDate dateTime={date}>
        {date}
      </StyledPostDate>
      <PostContent content={content} />
    </>
  )
}


const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY-mm-DD hh:mm", locale: "ja-jp")
        title
        description
      }
    }
  }
`
