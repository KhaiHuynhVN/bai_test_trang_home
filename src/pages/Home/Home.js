import classNames from "classnames/bind";
import { useEffect, useRef } from "react";

import Section from "./components/Section";
import DestinationCardItem from "./components/DestinationCardItem";
import TripCard from "./components/TripCard";
import BlogCard from "./components/BlogCard";
import PageContent from "./components/PageContent";
import TourSearchForm from "./components/TourSearchForm";
import { destinationDatas, pageContentDatas, tripDatas, blogDatas } from "./datas";

import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
   const iframeRef = useRef();
   const headerBackgroundRef = useRef();

   useEffect(() => {
      handleResize();

      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("resize", handleResize);
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   const handleResize = () => {
      const iframeWidth = iframeRef.current.offsetWidth;
      const windowWidth = window.innerWidth;
      const breakPoint = 1512;
      let result;

      if (windowWidth < breakPoint) {
         const extra = -10.5;

         result = (windowWidth - iframeWidth) / 2 + extra;
         iframeRef.current.style.marginLeft = result + "px";
      } else if (windowWidth === breakPoint) {
         Object.assign(iframeRef.current.style, {
            width: "1491px",
            height: "1238.69px",
            marginTop: "-182.344px",
            marginLeft: "0",
         });
      } else {
         const remainingWidth = windowWidth - breakPoint;
         Object.assign(iframeRef.current.style, {
            width: 1491 + remainingWidth + "px",
            height: 1238.69 + 0.56 * remainingWidth + "px",
            marginTop: -182.344 - 0.281 * remainingWidth + "px",
            marginLeft: "0",
         });
      }
   };

   const handleScroll = () => {
      const scrollTop = window.document.documentElement.scrollTop;

      if (scrollTop > headerBackgroundRef.current.offsetHeight) return;

      let result = -18.5 - 0.5 * scrollTop;

      iframeRef.current.style.transform = `translate3d(0px, ${result}px, 0px)`;
   };

   return (
      <div className={cx("wrapper")}>
         <header className={cx("header")}>
            <div ref={headerBackgroundRef} className={cx("header-background")}>
               <iframe
                  ref={iframeRef}
                  frameBorder="0"
                  allowFullScreen="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  title="Spectacular Norway - from the air"
                  width="640"
                  height="360"
                  src="https://www.youtube.com/embed/JPe2mwq96cw?autoplay=1&mute=1&autohide=1&rel=0&playsinline=1&iv_load_policy=3&modestbranding=1&controls=0&showinfo=0&disablekb=1&enablejsapi=1&origin=https%3A%2F%2Fthemes.themegoods.com&widgetid=1"
               ></iframe>
            </div>
            <div className={cx("header-content")}>
               <div className={cx("header-content-container")}>
                  <h1 className={cx("title")}>Where do you want to go?</h1>
                  <span className={cx("sub-title")}>
                     Trips, experiences, and places. All in one service.
                  </span>

                  <TourSearchForm />
               </div>
            </div>
         </header>

         <div className={cx("body")}>
            <Section
               title="Popular Destinations"
               subTitle="World's best tourist destinations"
               CardComponent={DestinationCardItem}
               datas={destinationDatas}
               gridRowClassName={`row
                                 row-cols-1
                                 row-cols-sm-1
                                 row-cols-md-4
                                 row-cols-lg-4
                                 row-cols-xl-4
                                 row-cols-xxl-4`}
            />
            <Section
               title="Best Value Trips"
               subTitle="Best offers trips from us"
               CardComponent={TripCard}
               datas={tripDatas}
               gridRowClassName={`row
                                 row-cols-1
                                 row-cols-sm-1
                                 row-cols-md-3
                                 row-cols-lg-3
                                 row-cols-xl-3
                                 row-cols-xxl-3`}
            />
            <Section
               title="Why Choose Us"
               subTitle="Here are reasons you should plan trip with us"
               CardComponent={PageContent}
               datas={pageContentDatas}
               gridRowClassName={`row
                                 row-cols-1
                                 row-cols-sm-1
                                 row-cols-md-3
                                 row-cols-lg-3
                                 row-cols-xl-3
                                 row-cols-xxl-3`}
            />
            <div className={cx("parallax")}></div>
            <Section
               wrapperClassName={cx("blog-section")}
               title="Articles & Tips"
               subTitle="Explore some of the best tips from around the world"
               CardComponent={BlogCard}
               datas={blogDatas}
               gridRowClassName={`row
                                 row-cols-1
                                 row-cols-sm-1
                                 row-cols-md-3
                                 row-cols-lg-3
                                 row-cols-xl-3
                                 row-cols-xxl-3`}
            />
         </div>
      </div>
   );
}

export default Home;
