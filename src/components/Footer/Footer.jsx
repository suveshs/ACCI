import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            United we stand<br />
            Divided we fall.
          </span>
          <span className="primaryText">
            communicate with us by <a href="mailto:corporate@aviationchamber.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>W-1503, Amrapali Sapphire, Sector-45, Noida 201301</p>
          </div>
          <ul className={css.menu}>
            <li>Services</li>
            <li>Events</li>
            <li>Join</li>
            <li>Team</li>
          </ul>
        </div>
      </motion.div>
      <div className={`innerWidth ${css.container} flexCenter`}><span>Developed by © Itanium Software and Services LTD</span></div>
    </motion.section>
  );
};

export default Footer;
