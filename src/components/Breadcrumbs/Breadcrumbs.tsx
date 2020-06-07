import Link from "next/link";
import { useRouter } from "next/router";
import { Anchor } from "atomize";
import { styled } from "styletron-react";

interface BreadcrumbsProps {
  separator?: string;
  withBorders?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  separator = "/",
  withBorders = false,
  ...rest
}) => {
  const router = useRouter();

  const path = ["/", ...router.asPath.split("/").slice(1)];

  const getPath = (array: string[], idx: number): string => {
    const path = array.slice(1, idx + 1);
    return "/" + path.join("/");
  };

  const StyledNav = styled("nav", (props) => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    // margin: "1.4rem 0",
    borderTop: withBorders ? "1px solid #ccc" : "none",
    borderBottom: withBorders ? "1px solid #ccc" : "none",
  }));

  return (
    <StyledNav aria-label="breadcrumbs" {...rest}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          padding: 0,
          margin: 0,
          // marginLeft: "1rem",
        }}
      >
        {path.map((curr, idx, arr) => {
          const isFirst = idx === 0 && curr === "/";
          const isLast = idx === arr.length - 1;
          return (
            <li
              key={idx}
              className={isLast ? "is-active" : undefined}
              style={{ marginLeft: idx === 0 ? undefined : "10px" }}
            >
              <Link href={isFirst ? curr : getPath(arr, idx)}>
                <Anchor
                  aria-current={isLast ? "page" : undefined}
                  textColor="#666"
                  textTransform="capitalize"
                >
                  {curr === "/" ? "Home" : curr}
                </Anchor>
              </Link>
              {!isLast ? ` ${separator} ` : undefined}
            </li>
          );
        })}
      </ul>
    </StyledNav>
  );
};
