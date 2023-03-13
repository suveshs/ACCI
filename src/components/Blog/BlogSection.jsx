import React from 'react'

const BlogSection = (props) => {
  const {blogContent} = props
  return (
    <div>
      <h1>{blogContent.name}</h1>
    </div>
  )
}

export default BlogSection
