import React from 'react'
import {motion} from 'framer-motion'
import BlogSection from './BlogSection'
import {blogs} from '../../../src/utils/data'
import { staggerContainer, textVariant} from '../../utils/motion'
import css from './Blog.module.scss'

const Blog = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0}}
      className={css.wrapper}
    >
    <div className={`innerWidth flexCenter ${css.container}`}>
      <motion.div
        variants={textVariant(.4)}
        className="primaryText yPaddings"
      >
        Blogs
      </motion.div>
      <div className={`flexCenter ${css.blogDailog}`}>
        {blogs.map((b, i) => <BlogSection key={i} counter={i} blogContent={b}/>)}
      </div>
    </div>
    </motion.section>
  )
}

export default Blog
