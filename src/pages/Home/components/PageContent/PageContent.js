import classNames from "classnames/bind";

import Image from "../../../../components/Image";

import styles from "./PageContent.module.scss";

const cx = classNames.bind(styles);

function PageContent({ datas }) {
   return (
      <div className={cx("wrapper")}>
         <div className={cx("image-wrapper")}>
            <Image className={cx("image")} src={datas.image} />
         </div>
         <span className={cx("title")}>{datas.title}</span>
         <span className={cx("content")}>{datas.content}</span>
      </div>
   );
}

export default PageContent;
