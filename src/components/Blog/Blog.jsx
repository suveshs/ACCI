import React from 'react'
import BlogSection from './BlogSection'
import css from './Blog.module.scss'
import {blogs} from '../../../src/utils/data'

const Blog = () => {
  return (
    <section className={css.wrapper}>
    <div className={`innerWidth flexCenter ${css.container}`}>
      <div className="primaryText yPaddings">Blogs</div>
      <div className={`flexCenter ${css.blogDailog}`}>
        {blogs.map((b, i) => <BlogSection key={i} blogContent={b}/>)}
      </div>
    </div>
    </section>
  )
}

export default Blog
