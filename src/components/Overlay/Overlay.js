/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import { useImperativeHandle, forwardRef, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import overlaySlice from "./overlaySlice";
import { overlaySelector } from ".";

import styles from "./Overlay.module.scss";

const cx = classNames.bind(styles);

const Overlay = forwardRef(({ onClick = () => {}, onAnimationEnd = () => {} }, ref) => {
   const dispatch = useDispatch();

   const isShow = useSelector(overlaySelector.isShow);

   const wrapperRef = useRef();

   useEffect(() => {
      if (!isShow) {
         wrapperRef.current.addEventListener("animationend", handleAnimationEnd);
      } else {
         wrapperRef.current.removeEventListener("animationend", handleAnimationEnd);
         wrapperRef.current.style = "";
      }

      return () => {
         wrapperRef.current.removeEventListener("animationend", handleAnimationEnd);
      };
   }, [isShow]);

   useImperativeHandle(ref, () => ({
      getRef: () => wrapperRef.current,
   }));

   const handleAnimationEnd = () => {
      wrapperRef.current.style.display = "none";
   };

   const handleHide = () => {
      dispatch(overlaySlice.actions.setShow(false));
   };

   return (
      <div
         style={{ display: "none" }}
         ref={wrapperRef}
         onClick={(e) => {
            onClick(e);
            handleHide();
         }}
         onAnimationEnd={onAnimationEnd}
         className={cx("wrapper", { show: isShow })}
      ></div>
   );
});

export default Overlay;
