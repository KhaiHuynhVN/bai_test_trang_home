import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import Image from "../../../components/Image";
import Social from "../../../components/Social";

import styles from "./Footer.module.scss";
import "./Footer.scss";

const cx = classNames.bind(styles);

function Footer() {
   return (
      <div className={cx("wrapper")}>
         <div className={cx("grid-wrapper", "grid wide")}>
            <div className={cx("main")}>
               <div
                  className={cx(
                     "row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3",
                  )}
               >
                  <div className={cx("col")}>
                     <div className={cx("widget")}>
                        <h2 className={cx("widget-title")}>Our Awards</h2>
                        <div className={cx("widget-content-wrapper")}>
                           <span className={cx("widget-content")}>
                              London is a megalopolis of people, ideas and frenetic energy. The
                              capital and largest city of the United Kingdom.
                           </span>
                           <Image
                              className={cx("widget-image")}
                              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
                           />
                        </div>
                     </div>
                  </div>
                  <div className={cx("col")}>
                     <div className={cx("widget")}>
                        <h2 className={cx("widget-title")}>Contact Info</h2>
                        <div className={cx("widget-content-wrapper")}>
                           <div className={cx("widget-contact")}>
                              <p>
                                 <i className="fa-light fa-mobile"></i>
                                 1-567-124-44227
                              </p>
                              <p>
                                 <i className="fa-sharp fa-solid fa-location-dot"></i>
                                 184 Main Street East Perl Habour 8007
                              </p>
                              <p>
                                 <i className="fa-sharp fa-regular fa-alarm-clock"></i>
                                 Mon - Sat 8.00 - 18.00 Sunday CLOSED
                              </p>
                           </div>
                           <Social className={cx("widget-social")} circle />
                        </div>
                     </div>
                  </div>
                  <div className={cx("col")}>
                     <div className={cx("widget")}>
                        <h2 className={cx("widget-title")}>Recent Trips</h2>
                        <div className={cx("widget-content-wrapper")}>
                           <div
                              style={{
                                 "--col-gutter-y": "4px",
                                 "--col-sm-gutter-y": "8px",
                                 "--col-md-gutter-y": "12px",
                                 "--col-lg-gutter-y": "16px",
                                 "--col-xl-gutter-y": "20px",
                                 "--col-xxl-gutter-y": "24px",
                              }}
                              className={cx("widget-image-container", "grid")}
                           >
                              <div
                                 className={cx(
                                    "row row-cols-3 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3",
                                 )}
                              >
                                 <div className={cx("col")}>
                                    <Image
                                       src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"
                                       className={cx("image-container-item")}
                                    />
                                 </div>
                                 <div className={cx("col")}>
                                    <Image
                                       src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg"
                                       className={cx("image-container-item")}
                                    />
                                 </div>
                                 <div className={cx("col")}>
                                    <Image
                                       src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg"
                                       className={cx("image-container-item")}
                                    />
                                 </div>
                                 <div className={cx("col")}>
                                    <Image
                                       src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg"
                                       className={cx("image-container-item")}
                                    />
                                 </div>
                                 <div className={cx("col")}>
                                    <Image
                                       src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg"
                                       className={cx("image-container-item")}
                                    />
                                 </div>
                                 <div className={cx("col")}>
                                    <Image
                                       src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg"
                                       className={cx("image-container-item")}
                                    />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={cx("bar")}>
               <div
                  className={cx(
                     "row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2",
                  )}
               >
                  <div className={cx("col")}>
                     <span className={cx("copyright")}>
                        © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
                     </span>
                  </div>
                  <div className={cx("col", "col-menu-footer")}>
                     <nav className={cx("menu-footer")}>
                        <ul>
                           <li>
                              <Link>Home</Link>
                           </li>
                           <li>
                              <Link>Tours</Link>
                           </li>
                           <li>
                              <Link>Blog</Link>
                           </li>
                           <li>
                              <Link>Purchase Theme</Link>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Footer;
