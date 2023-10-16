import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./BlogCard.module.scss";

const cx = classNames.bind(styles);

function BlogCard({ datas }) {
   const formatDate = (date) => {
      // Lấy ngày hiện tại
      const getDay = new Date(date);

      // Danh sách các tháng
      const monthNames = [
         "January",
         "February",
         "March",
         "April",
         "May",
         "June",
         "July",
         "August",
         "September",
         "October",
         "November",
         "December",
      ];

      // Lấy tên tháng từ đối tượng Date
      const month = monthNames[getDay.getMonth()];

      // Lấy ngày và năm
      const day = getDay.getDate();
      const year = getDay.getFullYear();

      // Định dạng chuỗi ngày tháng
      const formattedDate = month + " " + day + ", " + year;

      return formattedDate;
   };

   return (
      <div className={cx("wrapper")}>
         <Link
            to="/"
            className={cx("background")}
            style={{ "--background-image": `url(${datas.image})` }}
         ></Link>

         <div className={cx("content-container")}>
            <Link className={cx("date")}>{formatDate(datas.date)}</Link>
            <Link to="/" className={cx("title")}>
               <h3>{datas.title}</h3>
            </Link>
            <span className={cx("content")}>{datas.content}</span>
            <Link className={cx("read-more-btn")}>
               Read More <i className="fa-light fa-chevron-right"></i>
            </Link>
         </div>
      </div>
   );
}

export default BlogCard;
