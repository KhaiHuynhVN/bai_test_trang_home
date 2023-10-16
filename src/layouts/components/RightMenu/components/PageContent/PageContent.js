import classNames from "classnames/bind";

import PageContentItem from "./component/PageContentItem";
import { pageContentDatas } from "./datas";

import styles from "./PageContent.module.scss";

const cx = classNames.bind(styles);

function PageContent() {
   return (
      <div className={cx("wrapper")}>
         <ul>
            {pageContentDatas.map((item, index) => (
               <PageContentItem key={index} datas={item} />
            ))}
         </ul>
      </div>
   );
}

export default PageContent;
