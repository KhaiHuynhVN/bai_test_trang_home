/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";

import Image from "../../../components/Image";
import images from "../../../assets/images";
import MenuItem from "../../../components/MenuItem/MenuItem";
import { menuDatas } from "./datas";
import * as headerSelector from "./headerSelector";
import headerSlice from "./headerSlice";
import { overlaySlice } from "../../../components/Overlay";
import { rightMenuSlice } from "../RightMenu";

import styles from "./Header.module.scss";
import "./Header.scss";

const cx = classNames.bind(styles);

function Header({ ...props }, ref) {
   const dispatch = useDispatch();

   const isShowOpacity = useSelector(headerSelector.isShowOpacity);
   const isShowTranslate = useSelector(headerSelector.isShowTranslate);
   const isShowBackground = useSelector(headerSelector.isShowBackground);

   const wrapperRef = useRef();

   useImperativeHandle(ref, () => ({
      getRef: () => wrapperRef.current,
   }));

   let lastScrollTop;

   const wrapperClassName = cx("wrapper", {
      showOpacity: isShowOpacity,
      showTranslate: isShowTranslate,
      showBackground: isShowBackground,
   });

   useEffect(() => {
      window.document.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      return () => {
         window.document.removeEventListener("scroll", handleScroll);
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   const handleResize = (e) => {
      if (e.target === window) {
         let currScrollTop = window.scrollY || window.document.documentElement.scrollTop;

         dispatch(headerSlice.actions.setIsShowTranslate(true));
         dispatch(headerSlice.actions.setIsShowOpacity(true));

         if (currScrollTop > 300) {
            dispatch(headerSlice.actions.setIsShowBackground(true));
         }
      }
   };

   const handleScroll = () => {
      let currScrollTop = window.scrollY || window.document.documentElement.scrollTop;

      if (currScrollTop > lastScrollTop) {
         if (window.innerWidth > 960) {
            // PC
            if (currScrollTop < 300) {
               dispatch(headerSlice.actions.setIsShowOpacity(false));
            } else {
               dispatch(headerSlice.actions.setIsShowTranslate(false));
               dispatch(headerSlice.actions.setIsShowBackground(false));
            }
         } else {
            // mobile
            if (currScrollTop < 300) {
               dispatch(headerSlice.actions.setIsShowBackground(false));
            } else {
               dispatch(headerSlice.actions.setIsShowBackground(true));
            }
         }
      } else if (currScrollTop < lastScrollTop) {
         if (window.innerWidth > 960) {
            // PC
            if (currScrollTop < 300) {
               dispatch(headerSlice.actions.setIsShowOpacity(true));
               dispatch(headerSlice.actions.setIsShowBackground(false));
            } else {
               dispatch(headerSlice.actions.setIsShowTranslate(true));
               dispatch(headerSlice.actions.setIsShowBackground(true));
            }

            dispatch(headerSlice.actions.setIsShowOpacity(true));
            dispatch(headerSlice.actions.setIsShowTranslate(true));
         } else {
            // mobile
            dispatch(headerSlice.actions.setIsShowOpacity(true));
            dispatch(headerSlice.actions.setIsShowTranslate(true));

            if (currScrollTop < 300) {
               dispatch(headerSlice.actions.setIsShowBackground(false));
            }
         }
      }

      lastScrollTop = currScrollTop;
   };

   const handleShowMenu = () => {
      dispatch(overlaySlice.actions.setShow(true));
      dispatch(rightMenuSlice.actions.setShow(true));

      const prevWidth = window.visualViewport.width;

      window.document.body.style.overflow = "hidden";

      const currWidth = window.innerWidth;
      const scrollbarWidth = currWidth - prevWidth;

      window.document.body.style.paddingRight = scrollbarWidth + "px";
      wrapperRef.current.style.paddingRight = scrollbarWidth + "px";
   };

   return (
      <>
         <div ref={wrapperRef} className={wrapperClassName}>
            <div className={cx("container-grid Header_container-grid__eZZHO", "grid wide")}>
               <header className={cx("container")}>
                  <Image
                     className={cx("logo")}
                     src={!isShowBackground ? images.logo : images.logo2}
                  />
                  <nav className={cx("navbar")}>
                     <ul>
                        {menuDatas.map((item, index) => (
                           <MenuItem key={index} datas={item} />
                        ))}
                     </ul>
                  </nav>
                  <div className={cx("right-button")}>
                     <div onClick={handleShowMenu} className={cx("menu-icon")} to="/">
                        <i className="fa-regular fa-bars"></i>
                     </div>
                     <div className={cx("cart-container")}>
                        <Link className={cx("nav-item-link")} to="/">
                           <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                        </Link>
                        <span>0</span>
                     </div>
                  </div>
               </header>
            </div>
         </div>
      </>
   );
}

export default forwardRef(Header);
