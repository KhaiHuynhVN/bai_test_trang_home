import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

import NavMain, { navMainSelector, navMainSlice } from "./components/NavMain";
import { menuDatas } from "../Header/datas";
import PageContent from "./components/PageContent";
import Social from "../../../components/Social";

import styles from "./RightMenu.module.scss";

const cx = classNames.bind(styles);

function RightMenu({ isShow = false, onCLickCloseBtn }) {
   const dispatch = useDispatch();

   const history = useSelector(navMainSelector.history);

   const wrapperRef = useRef();

   const handleCloseMenu = () => {
      wrapperRef.current.ontransitionend = (e) => {
         if (e.target === wrapperRef.current) {
            dispatch(navMainSlice.actions.setHistory([history[0]]));
            dispatch(navMainSlice.actions.setPrevAnimation(false));
            dispatch(navMainSlice.actions.setNextAnimation(false));
         }
      };
   };

   return (
      <div ref={wrapperRef} className={cx("wrapper", { show: isShow })}>
         <div
            onClick={() => {
               onCLickCloseBtn();
               handleCloseMenu();
            }}
            className={cx("close-container")}
         >
            <span className={cx("close-btn")}>
               <i className="fa-light fa-xmark"></i>
            </span>
         </div>

         <NavMain datas={menuDatas} />
         <PageContent />
         <Social />
      </div>
   );
}

export default RightMenu;
