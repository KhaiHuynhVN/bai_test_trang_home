import classNames from "classnames/bind";
import { useRef } from "react";

import styles from "./Select.module.scss";

const cx = classNames.bind(styles);

function Select({
   datas = [],
   title,
   className,
   onClick = () => {},
   leftIcon,
   rightIcon,
   wrapperClassName,
   appearanceNone,
   ...props
}) {
   const selectRef = useRef();

   const classNames = cx("select-main", {
      [className]: className,
      appearanceNone,
   });

   const wrapperClassNames = cx("wrapper", {
      [wrapperClassName]: wrapperClassName,
   });

   const _props = { onClick, ...props };

   return (
      <div className={wrapperClassNames}>
         <span className={cx("left-icon", "icon")}>{leftIcon}</span>
         <select ref={selectRef} className={classNames} {..._props}>
            <option value="">{title || "--Choose One--"}</option>
            {datas.map((data, index) => (
               <option key={index} value={data}>
                  {data}
               </option>
            ))}
         </select>
         <span className={cx("right-icon", "icon")}>{rightIcon}</span>
      </div>
   );
}

export default Select;
