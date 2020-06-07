import { defaultMediaQuery } from "@/core/constants";
import { styled, useStyletron } from "styletron-react";
import { FC, ComponentProps } from "react";

const { xs, sm, md, lg, xl } = defaultMediaQuery;

const variations = {
  [xs]: {},
  [sm]: {},
  [md]: {},
  [lg]: {},
  [xl]: {},
};

export default styled("aside", {
  width: "100%",
  height: "100%",
  ...variations,
});

// const Aside: FC<ComponentProps<any>> = ({ className, children, ...props }) => {
//   const [css] = useStyletron();
//   return (
//     <aside
//       className={`${css({
//         width: "100%",
//         height: "100%",
//         padding: ".5rem",
//         ...variations,
//       })} ${className}`}
//       {...props}
//     >
//       {children}
//     </aside>
//   );
// };

// export default Aside;
