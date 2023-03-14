import React from 'react'
import {motion} from 'framer-motion'
import css from './BlogSection.module.scss'
import { fadeIn } from '../../utils/motion'

const BlogSection = (props) => {
  const {blogContent, counter} = props

  return (
    <motion.div
      variants={counter % 2 === 0 ? fadeIn("right", "tween", (counter + 1)*0.2, 1) : fadeIn("left", "tween", (counter)*0.2, 1)}
      className={css.wrapper}>
      <div style={{backgroundImage: `url(${blogContent.image})`}} className={css.blogImage}/>
      <div className={css.blogContent}>
        <span className={css.writer}>Writer: </span><p className={css.blogerName}>{blogContent.name}</p>
        <hr className={css.horizonalLine}/>
        <p className={css.blogtitle}>{blogContent.title}</p>
        <p className={css.blogDescription}>{blogContent.description}</p>
        <button className={css.readmeBtn}>Read Me</button>
      </div>
    </motion.div>
  )
}

export default BlogSection
