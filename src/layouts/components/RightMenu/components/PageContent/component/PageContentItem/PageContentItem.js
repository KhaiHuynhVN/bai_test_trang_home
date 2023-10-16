import classNames from "classnames/bind";

import styles from "./PageContentItem.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function PageContentItem({ datas }) {
   const renderStarIcon = () => {
      const solidStars = datas.stars;
      const outlineStars = 5 - solidStars;
      let solidStarIcons = [];
      let outlineStarsIcons = [];

      for (let i = 0; i < solidStars; i++) {
         solidStarIcons.push("fa-solid fa-star-sharp");
      }

      for (let i = 0; i < outlineStars; i++) {
         outlineStarsIcons.push(cx("fa-light fa-star-sharp", "color-white"));
      }

      const result = solidStarIcons.concat(outlineStarsIcons);

      return result.map((item, index) => <i key={index} className={item}></i>);
   };

   return (
      <li className={cx("item")}>
         <Link className={cx("item-link")} to={"/"}>
            <div
               style={{ "--background-image": `url(${datas.image})` }}
               className={cx("container")}
            >
               <div className={cx("info")}>
                  <div className={cx("price")}>
                     {datas.normalPrice && (
                        <span className={cx("normal-price")}>
                           ${datas.normalPrice.toLocaleString()}
                        </span>
                     )}
                     <span className={cx("current-price")}>${datas.price.toLocaleString()}</span>
                  </div>
                  <span className={cx("title")}>{datas.title}</span>
                  <div className={cx("star-container")}>
                     {/* <i className="fa-solid fa-star-sharp"></i>
                     <i className="fa-solid fa-star-sharp"></i>
                     <i className="fa-solid fa-star-sharp"></i>
                     <i className="fa-solid fa-star-sharp"></i>
                     <i className={cx("fa-light fa-star-sharp", "color-white")}></i> */}
                     {renderStarIcon()}
                  </div>
               </div>
            </div>
         </Link>
      </li>
   );
}

export default PageContentItem;
