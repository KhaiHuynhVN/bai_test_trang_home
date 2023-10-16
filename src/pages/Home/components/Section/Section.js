import classNames from "classnames/bind";

import styles from "./Section.module.scss";
import "./Section.scss";

const cx = classNames.bind(styles);

function Section({ title, subTitle, CardComponent, gridRowClassName, datas, wrapperClassName }) {
   const wrapperClassNames = cx("wrapper", {
      [wrapperClassName]: wrapperClassName,
   });

   return (
      <section className={wrapperClassNames}>
         <div className={cx("title-container")}>
            <h2 className={cx("title")}>{title}</h2>
            <span className={cx("sub-title")}>{subTitle}</span>
         </div>

         <div className={cx("content-wrapper")}>
            <div
               style={{
                  "--col-gutter-x": "30px",
                  "--col-sm-gutter-x": "30px",
                  "--col-md-gutter-x": "30px",
                  "--col-lg-gutter-x": "30px",
                  "--col-xl-gutter-x": "30px",
                  "--col-xxl-gutter-x": "30px",
                  "--col-gutter-y": "25px",
                  "--col-sm-gutter-y": "25px",
                  "--col-md-gutter-y": "0",
                  "--col-lg-gutter-y": "0",
                  "--col-xl-gutter-y": "0",
                  "--col-xxl-gutter-y": "0",
               }}
               className={cx("container-grid Section_container-grid__uKItq", "grid wide")}
            >
               <div className={gridRowClassName}>
                  {CardComponent &&
                     datas.map((item, index) => (
                        <div key={index} className={cx("col")}>
                           <CardComponent datas={item} />
                        </div>
                     ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default Section;
