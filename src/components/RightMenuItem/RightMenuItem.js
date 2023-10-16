import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./RightMenuItem.module.scss";

const cx = classNames.bind(styles);

function RightMenuItem({ datas, onClick }) {
   const Component = datas.children.length ? "li" : Link;

   return (
      <Component
         to={(!datas.children.length && "/") || ""}
         className={cx("wrapper")}
         onClick={onClick}
      >
         {datas.content}
      </Component>
   );
}

export default RightMenuItem;
