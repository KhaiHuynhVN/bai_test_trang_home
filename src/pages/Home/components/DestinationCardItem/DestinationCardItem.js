import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./DestinationCardItem.module.scss";

const cx = classNames.bind(styles);

function DestinationCardItem({ datas }) {
   return (
      <div className={cx("wrapper")}>
         <Link
            to="/"
            className={cx("background")}
            style={{ "--background-image": `url(${datas.image})` }}
         >
            <h3 className={cx("title")}>{datas.title}</h3>
         </Link>
      </div>
   );
}

export default DestinationCardItem;
