import React from 'react'

export const HTMLContent = ({ content }) => (
  <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content }) => (
  <div>{content}</div>
)

export default Content
