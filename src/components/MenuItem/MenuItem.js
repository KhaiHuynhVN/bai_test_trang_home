import classNames from "classnames/bind";
import HeadLessTippy from "@tippyjs/react/headless";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import SubMenuItem from "../SubMenuItem";
import TippyWrapper from "../TippyWrapper/TippyWrapper";
import { headerSelector } from "../../layouts/components/Header";

import styles from "./MenuItem.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ datas }) {
   const [isOpen, setIsOpen] = useState(false);

   const isShowOpacity = useSelector(headerSelector.isShowOpacity);
   const isShowTranslate = useSelector(headerSelector.isShowTranslate);

   let unmountTippy = useRef();

   useEffect(() => {
      return () => {
         unmountTippy.current && clearTimeout(unmountTippy.current);
      };
   });

   const duration = 0.1;
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
      <li className={cx("wrapper")}>
         <HeadLessTippy
            disabled={!isShowOpacity || !isShowTranslate}
            offset={[65, -4]}
            interactive
            animation={true}
            onMount={onMount}
            onHide={(e) => onHide(e)}
            appendTo={"parent"}
            hideOnClick={false}
            render={render}
         >
            <NavLink
               className={(nav) => cx("nav-item-link", { active: nav.isActive })}
               to={datas.content === "Home" ? "/" : "/another-link"}
            >
               {datas.content}
               {(datas.children.length && <i className="fa-light fa-chevron-down"></i>) || ""}
            </NavLink>
         </HeadLessTippy>
      </li>
   );
}

export default MenuItem;
