/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../../components/Button";
import Select from "../../../../components/Select";
import Input from "../../../../components/Input";
import * as homeSelector from "../../homeSelector";
import homeSlice from "../../homeSlice";

import styles from "./TourSearchForm.module.scss";
import "./TourSearchForm.scss";

const cx = classNames.bind(styles);

const fakeData = [
   "option item",
   "option item",
   "option item",
   "option item",
   "option item",
   "option item",
   "option item",
   "option item",
   "option item",
   "option item",
];

function TourSearchForm() {
   const dispatch = useDispatch();

   const showAdvanceSearch = useSelector(homeSelector.showAdvanceSearch);

   const tourAdvanceSearchWrapperRef = useRef();

   useEffect(() => {
      const defaultHeight = tourAdvanceSearchWrapperRef.current.scrollHeight;
      if (showAdvanceSearch) {
         tourAdvanceSearchWrapperRef.current.style.height = defaultHeight + "px";
      } else {
         tourAdvanceSearchWrapperRef.current.style = "";
      }

      window.addEventListener("resize", handleHideAdvanceSearch);

      return () => {
         window.removeEventListener("resize", handleHideAdvanceSearch);
      };
   }, [showAdvanceSearch]);

   const handleShowAdvanceSearch = () => {
      dispatch(homeSlice.actions.setShowAdvanceSearch(!showAdvanceSearch));
   };

   const handleHideAdvanceSearch = () => {
      if (!showAdvanceSearch) return;
      dispatch(homeSlice.actions.setShowAdvanceSearch(false));
   };

   return (
      <form
         style={{
            "--col-gutter-y": "11px",
            "--col-sm-gutter-y": "13px",
            "--col-md-gutter-y": "13px",
            "--col-lg-gutter-y": "13px",
            "--col-xl-gutter-y": "13px",
            "--col-xxl-gutter-y": "13px",
         }}
         className={cx("tour-search-form", "grid wide")}
      >
         <div className={cx("tour-search-wrapper")}>
            <div
               className={cx(
                  "row",
                  "row-cols-1",
                  "row-cols-sm-1",
                  "row-cols-md-4",
                  "row-cols-lg-4",
                  "row-cols-xl-4",
                  "row-cols-xxl-4",
               )}
            >
               <div className={cx("col")}>
                  <Input
                     wrapperClassName={cx("input-wrapper")}
                     className={cx("input")}
                     rightIcon={<i className="fa-light fa-magnifying-glass"></i>}
                     placeholder="Destination, city"
                     htmlFor="destination"
                     iconWidth="16px"
                  />
               </div>
               <div className={cx("col")}>
                  <Select
                     rightIcon={<i className="fa-sharp fa-solid fa-calendar"></i>}
                     datas={fakeData}
                     title="Any Month"
                     wrapperClassName={cx("select-wrapper")}
                     className={cx("select")}
                     appearanceNone
                  />
               </div>
               <div className={cx("col")}>
                  <Select
                     rightIcon={<i className="fa-solid fa-arrow-down-arrow-up"></i>}
                     datas={fakeData}
                     title="Sort By Date"
                     wrapperClassName={cx("select-wrapper")}
                     className={cx("select")}
                     appearanceNone
                  />
               </div>
               <div className={cx("col")}>
                  <Button primary className={cx("tour-search-btn")}>
                     Search
                  </Button>
               </div>
            </div>
         </div>
         <div
            ref={tourAdvanceSearchWrapperRef}
            className={cx("tour-advance-search-wrapper", { show: showAdvanceSearch })}
         >
            <div
               className={cx(
                  "row",
                  "row-cols-1",
                  "row-cols-sm-1",
                  "row-cols-md-4",
                  "row-cols-lg-4",
                  "row-cols-xl-4",
                  "row-cols-xxl-4",
               )}
            >
               <div className={cx("col")}>
                  <Select
                     datas={fakeData}
                     rightIcon={<i className="fa-light fa-chevron-down"></i>}
                     title="All Categories"
                     wrapperClassName={cx("select-wrapper")}
                     className={cx("select")}
                     appearanceNone
                  />
               </div>
               <div className={cx("col")}>
                  <Select
                     datas={fakeData}
                     rightIcon={<i className="fa-light fa-chevron-down"></i>}
                     title="Any Destinations"
                     wrapperClassName={cx("select-wrapper")}
                     className={cx("select")}
                     appearanceNone
                  />
               </div>
               <div className={cx("col")}>
                  <Input
                     wrapperClassName={cx("input-wrapper")}
                     className={cx("input")}
                     rightIcon={<i className="fa-duotone fa-dollar-sign"></i>}
                     placeholder="Max budget ex. 500"
                     htmlFor="maxbudget"
                     iconWidth="10px"
                  />
               </div>
            </div>
         </div>
         <div onClick={handleShowAdvanceSearch} className={cx("tour-advance-search-toggle-btn")}>
            {showAdvanceSearch ? (
               <i className="fa-light fa-chevron-up"></i>
            ) : (
               <i className="fa-light fa-chevron-down"></i>
            )}
            Advanced Search
         </div>
      </form>
   );
}

export default TourSearchForm;
