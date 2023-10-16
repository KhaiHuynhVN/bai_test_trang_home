import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import HeadLessTippy from "@tippyjs/react/headless";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import TippyWrapper from "../TippyWrapper";

import styles from "./SubMenuItem.module.scss";

const cx = classNames.bind(styles);

function SubMenuItem({ datas }) {
   const [isOpen, setIsOpen] = useState(false);

   let unmountTippy = useRef();

   useEffect(() => {
      return () => {
         unmountTippy.current && clearTimeout(unmountTippy.current);
      };
   });

   const duration = 0.15;
   const variants = {
      open: { scale: 1, opacity: 1, transition: { duration: duration } },
      closed: { scale: 0.8, opacity: 0, transition: { duration: 0 } },
   };

   function onMount() {
      setIsOpen(true);
   }

   function onHide(e) {
      unmountTippy.current = setTimeout(() => {
         e.unmount();
         setIsOpen(false);
      });
      e.popper.remove();
   }

   const render = (attrs) => (
      <motion.div animate={isOpen ? "open" : "closed"} variants={variants} tabIndex="-1" {...attrs}>
         <TippyWrapper>
            <ul>
               {(datas.children.length &&
                  datas.children.map((item, index) => (
                     <SubMenuItem key={index} datas={item} attrs={attrs} />
                  ))) ||
                  ""}
            </ul>
         </TippyWrapper>
      </motion.div>
   );
   return (
      <HeadLessTippy
         placement="right-start"
         offset={[0, 1]}
         interactive
         animation={true}
         onMount={onMount}
         onHide={onHide}
         hideOnClick={false}
         appendTo={"parent"}
         render={render}
      >
         <li className={cx("wrapper")}>
            <Link className={cx("link")} to="/">
               <span className={cx("link-content")}>{datas.content}</span>
               {(datas.children.length && <i className="fa-light fa-chevron-right"></i>) || ""}
            </Link>
         </li>
      </HeadLessTippy>
   );
}

export default SubMenuItem;
