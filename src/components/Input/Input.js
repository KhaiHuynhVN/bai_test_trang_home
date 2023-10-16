import classNames from "classnames/bind";
import { useRef } from "react";

import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

function Input({
   type,
   value,
   placeholder,
   htmlFor,
   onChange = () => {},
   onFocus = () => {},
   onBlur = () => {},
   className,
   wrapperClassName,
   leftIcon,
   rightIcon,
   iconWidth,
   ...props
}) {
   const inputRef = useRef();

   const wrapperClassNames = cx("wrapper", {
      [wrapperClassName]: wrapperClassName,
   });

   const classNames = cx("input", {
      [className]: className,
   });

   const _props = { ...props };

   return (
      <label htmlFor={htmlFor} className={wrapperClassNames}>
         <span className={cx("left-icon", "icon")}>{leftIcon}</span>
         <input
            ref={inputRef}
            id={htmlFor}
            className={classNames}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            style={{
               "--icon-width": iconWidth,
            }}
            {..._props}
         />
         <span className={cx("right-icon", "icon")}>{rightIcon}</span>
      </label>
   );
}

export default Input;
