import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">EVENT `Galleria`</span>
            <p style={{marginTop: "10px"}}>ACCI Education Summit 2023</p>
          </div>
          <span className="secondaryText">Stand By for image uploads March-April Book Fest</span>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./book.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./board.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./bill.png" alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
