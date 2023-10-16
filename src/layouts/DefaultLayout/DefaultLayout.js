/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import { navMainSelector, navMainSlice } from "../components/RightMenu/components/NavMain";
import Footer from "../components/Footer";
import Overlay, { overlaySelector, overlaySlice } from "../../components/Overlay";
import RightMenu, { rightMenuSelector, rightMenuSlice } from "../components/RightMenu";

import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
   const dispatch = useDispatch();

   const [showOnTopBtn, setShowOnTopBtn] = useState(false);

   const navMainHistory = useSelector(navMainSelector.history);

   const isShowRightMenu = useSelector(rightMenuSelector.isShow);
   const isShowOverlay = useSelector(overlaySelector.isShow);

   const headerRef = useRef();
   let lastScrollTop = 0;

   useEffect(() => {
      window.document.addEventListener("scroll", handleShowOnTopBtn);

      return () => {
         window.document.removeEventListener("scroll", handleShowOnTopBtn);
      };
   }, []);

   const handleHideMenu = () => {
      dispatch(rightMenuSlice.actions.setShow(false));
   };

   const handleClickCloseBtn = () => {
      dispatch(rightMenuSlice.actions.setShow(false));
      dispatch(overlaySlice.actions.setShow(false));
   };

   const handleOverlayAnimationEnd = () => {
      if (isShowOverlay) return;
      window.document.body.style = "";
      headerRef.current.getRef().style = "";
      dispatch(navMainSlice.actions.setHistory([navMainHistory[0]]));
   };

   const handleShowOnTopBtn = () => {
      let currScrollTop = window.scrollY || window.document.documentElement.scrollTop;

      if (currScrollTop > lastScrollTop) {
         if (currScrollTop > 300) {
            setShowOnTopBtn(true);
         }
      } else if (currScrollTop < lastScrollTop) {
         if (currScrollTop < 300) {
            setShowOnTopBtn(false);
         }
      }

      lastScrollTop = currScrollTop;
   };

   const handleClickOnTopBtn = () => {
      window.document.body.scrollIntoView({
         behavior: "smooth",
         block: "start",
         inline: "start",
      });
   };

   return (
      <>
         <div className={cx("wrapper")}>
            <Header ref={headerRef} />
            <div className={cx("content")}>{children}</div>
            <Footer />
         </div>

         <Overlay onClick={handleHideMenu} onAnimationEnd={handleOverlayAnimationEnd} />
         <RightMenu onCLickCloseBtn={handleClickCloseBtn} isShow={isShowRightMenu} />
         <div className={cx("on-top-btn", showOnTopBtn && "show")} onClick={handleClickOnTopBtn}>
            <i className="fa-light fa-chevron-up"></i>
         </div>
      </>
   );
}

export default DefaultLayout;
