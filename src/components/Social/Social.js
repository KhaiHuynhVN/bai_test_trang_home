import classNames from "classnames/bind";

import { socialDatas } from "./datas";

import styles from "./Social.module.scss";

const cx = classNames.bind(styles);

const backgroundColor = ["#2D5F9A", "#00C3F3", "#cc181e", "#bd081c", "#405de6"];

function Social({ className, circle }) {
   const classNames = cx("wrapper", {
      [className]: className,
      circle,
   });

   return (
      <div className={classNames}>
         <ul>
            {socialDatas.map((item, index) => (
               <li style={{ "--background-color": circle && backgroundColor[index] }} key={index}>
                  <a href="/">{item}</a>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Social;
