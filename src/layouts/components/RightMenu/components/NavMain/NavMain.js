/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import RightMenuItem from "../../../../../components/RightMenuItem";
import * as navMainSelector from "./navMainSelector";
import navMainSlice from "./navMainSlice";

import styles from "./NavMain.module.scss";

const cx = classNames.bind(styles);

function NavMain({ datas = [], onChange = () => {} }) {
   const dispatch = useDispatch();

   const history = useSelector(navMainSelector.history);
   const readyNextAnimation = useSelector(navMainSelector.readyNextAnimation);
   const nextAnimation = useSelector(navMainSelector.nextAnimation);
   const readyPrevAnimation = useSelector(navMainSelector.readyPrevAnimation);
   const prevAnimation = useSelector(navMainSelector.prevAnimation);

   const contentRef = useRef();

   useEffect(() => {
      dispatch(navMainSlice.actions.setHistory([{ children: datas }]));
   }, []);

   const current = history[history.length - 1];

   const handleNextMenuContent = (datas) => {
      dispatch(navMainSlice.actions.setReadyNextAnimation(true));
      dispatch(navMainSlice.actions.setNextAnimation(false));
      dispatch(navMainSlice.actions.setPrevAnimation(false));

      contentRef.current.onanimationend = () => {
         dispatch(navMainSlice.actions.setHistory([...history, datas]));
         dispatch(navMainSlice.actions.setReadyNextAnimation(false));
         dispatch(navMainSlice.actions.setNextAnimation(true));
      };
   };

   const handleBackMenuContent = () => {
      dispatch(navMainSlice.actions.setReadyPrevAnimation(true));
      dispatch(navMainSlice.actions.setPrevAnimation(false));
      dispatch(navMainSlice.actions.setNextAnimation(false));

      contentRef.current.onanimationend = () => {
         dispatch(navMainSlice.actions.setHistory(history.slice(0, history.length - 1)));
         dispatch(navMainSlice.actions.setReadyPrevAnimation(false));
         dispatch(navMainSlice.actions.setPrevAnimation(true));
      };
   };

   const className = cx("content", {
      "readyNext-animation": readyNextAnimation,
      "next-animation": nextAnimation,
      "readyPrev-animation": readyPrevAnimation,
      "prev-animation": prevAnimation,
   });

   return (
      <nav className={cx("wrapper")}>
         <ul ref={contentRef} className={className}>
            {history.length > 1 && (
               <div onClick={handleBackMenuContent} className={cx("back-btn-container")}>
                  <i className="fa-light fa-chevron-left"></i> Back
               </div>
            )}
            {current.children.map((item, index) => (
               <RightMenuItem
                  key={index}
                  datas={item}
                  onClick={(e) =>
                     item.children.length ? handleNextMenuContent(item) : onChange(item, e.target)
                  }
               />
            ))}
         </ul>
      </nav>
   );
}

export default NavMain;
