import classNames from "classnames";
import { forwardRef } from "react";

import images from "../../assets/images";

const Image = forwardRef(
   ({ src = images.defaultImage, className, alt = "image", ...props }, ref) => {
      const classes = classNames("wrapper", className);

      return (
         <img
            ref={ref}
            className={classes}
            alt={alt}
            src={src}
            {...props}
            onError={(e) => (e.target.src = images.defaultImage)}
         />
      );
   },
);

export default Image;
