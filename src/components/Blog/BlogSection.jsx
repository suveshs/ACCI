import React from 'react'
import {motion} from 'framer-motion'
import css from './BlogSection.module.scss'
import { fadeIn } from '../../utils/motion'
import Dialog from '@mui/material/Dialog';
import { Button } from '@mui/material';


function SimpleDialog(props) {
  const { onClose, open, data } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
    <div dangerouslySetInnerHTML={{ __html: data }} className={css.blog__data} />
      <Button variant="outlined" onClick={handleClose}>Close</Button>
    </Dialog>
  );
}

const BlogSection = (props) => {
  const {blogContent, counter} = props
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <motion.div
      variants={counter % 2 === 0 ? fadeIn("right", "tween", (counter + 1)*0.2, 1) : fadeIn("left", "tween", (counter)*0.2, 1)}
      className={css.wrapper}>
      <div className={css.content}>
        <div style={{backgroundImage: `url(${blogContent.image})`}} className={css.blogImage}/>
        <div className={css.blogContent}>
          <span className={css.writer}>Writer: </span><p className={css.blogerName}>{blogContent.name}</p>
          <hr className={css.horizonalLine}/>
          <p className={css.blogtitle}>{blogContent.title}</p>
          <p className={css.blogDescription}>{blogContent.description}</p>
          <button className={css.readmeBtn} onClick={handleClickOpen}>Read Me</button>
        </div>
      </div>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        data={`<h1>${blogContent.title}</h1>` + blogContent.blog}
      />
    </motion.div>
  )
}

export default BlogSection
