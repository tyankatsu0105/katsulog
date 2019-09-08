import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from '@emotion/styled'

const StyledArticle = styled.article`
  padding-bottom: 20px;
  & + &{
    padding-top: 20px;
  }
`;
const StyledArticleHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const StyledArticleDate = styled.time`
  font-size: 0.9rem;
  color: var(--color-font-accent);
`;

const StyledArticleExcerpt = styled.p`
  padding-top: 12px;
`;

const BlogRoll = (props) => {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark

  return (
    <>
    {posts && posts.map(({node:post}) => (
      <StyledArticle>

        <StyledArticleHeading>
          <Link
            to={post.fields.slug}
          >
            {post.frontmatter.title}
          </Link>
        </StyledArticleHeading>

        <StyledArticleDate dateTime={post.frontmatter.date}>
          {post.frontmatter.date}
        </StyledArticleDate>

        <StyledArticleExcerpt>
          {post.excerpt}
        </StyledArticleExcerpt>

      </StyledArticle>
    ))}
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "YYYY-mm-DD hh:mm", locale: "ja-jp")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
