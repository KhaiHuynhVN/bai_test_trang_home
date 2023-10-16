import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
   to,
   href,
   primary,
   disabled,
   leftIcon,
   rightIcon,
   className,
   children,
   onClick,
   ...passProps
}) {
   let Comp = "button";
   const classes = cx("wrapper", {
      primary,
      disabled,
      [className]: className,
   });

   const _props = {
      onClick,
      ...passProps,
   };

   if (disabled) {
      Object.keys(_props).forEach((key) => {
         key.startsWith("on") && typeof _props[key] === "function" && delete _props[key];
      });
   }

   if (to) {
      _props.to = to;
      Comp = Link;
   }
   if (href) {
      _props.href = href;
      Comp = "a";
   }

   return (
      <Comp className={classes} {..._props}>
         {leftIcon && <span>{leftIcon}</span>}
         <span>{children}</span>
         {rightIcon && <span>{rightIcon}</span>}
      </Comp>
   );
}

export default Button;
