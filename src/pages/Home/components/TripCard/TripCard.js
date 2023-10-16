import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./TripCard.module.scss";

const cx = classNames.bind(styles);

function TripCard({ datas }) {
   const renderStarIcon = () => {
      const solidStars = datas.stars;
      const outlineStars = 5 - solidStars;
      let solidStarIcons = [];
      let outlineStarsIcons = [];

      for (let i = 0; i < solidStars; i++) {
         solidStarIcons.push("fa-solid fa-star-sharp");
      }

      for (let i = 0; i < outlineStars; i++) {
         outlineStarsIcons.push("fa-light fa-star-sharp");
      }

      const result = solidStarIcons.concat(outlineStarsIcons);

      return result.map((item, index) => <i key={index} className={item}></i>);
   };

   return (
      <div className={cx("wrapper")}>
         {datas.isSale && <div className={cx("sale-sticker")}>Sale</div>}
         <Link
            to="/"
            className={cx("background")}
            style={{ "--background-image": `url(${datas.image})` }}
         >
            <div className={cx("price-container")}>
               {datas.normalPrice && (
                  <span className={cx("normal-price")}>${datas.normalPrice.toLocaleString()}</span>
               )}
               <span className={cx("price")}>${datas.price.toLocaleString()}</span>
            </div>
         </Link>
         <div className={cx("content-container")}>
            <Link className={cx("title")} to="/">
               <h3>{datas.title}</h3>
            </Link>
            <span className={cx("sub-title")}>{datas.subTitle}</span>
            <div className={cx("attributes")}>
               <div className={cx("rating")}>
                  <div className={cx("star-container")}>{renderStarIcon()}</div>
                  <span className={cx("reviews")}>{datas.reviews} reviews</span>
               </div>
               <div className={cx("date")}>
                  <i className="fa-light fa-clock"></i>
                  <span>{datas.days} days</span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default TripCard;
