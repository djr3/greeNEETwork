import Link from "next/link";
import { useRouter } from "next/router";

import { Breadcrumbs as BC } from "@geist-ui/react";
import type { NormalSizes } from "@geist-ui/react/dist/utils/prop-types";

interface BreadcrumbsProps {
  separator?: string;
  withBorders?: boolean;
  size?: NormalSizes;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  separator = "/",
  withBorders = false,
  size = "medium",
  ...rest
}) => {
  const router = useRouter();

  const path = ["/", ...router.asPath.split("?")[0].split("/").slice(1)];

  const getPath = (array: string[], idx: number): string => {
    const url = array.slice(1, idx + 1);
    return "/" + url.join("/");
  };

  return (
    <BC aria-label="breadcrumbs" separator={separator} size={size} {...rest}>
      {path.map((curr, idx, arr) => {
        const isFirst = idx === 0 && curr === "/";
        const isLast = idx === arr.length - 1;
        if (isLast)
          return (
            <BC.Item key={"bc_" + curr + idx} aria-current="page">
              <span
                style={{
                  textTransform: "capitalize",
                }}
              >
                {curr.split("-").join(" ")}
              </span>
            </BC.Item>
          );
        return (
          <Link
            key={"bc_" + curr + idx}
            href={isFirst ? curr : getPath(arr, idx)}
            prefetch={false}
          >
            <BC.Item
              nextLink
              style={{
                textTransform: "capitalize",
              }}
            >
              {isFirst ? "Home" : curr}
            </BC.Item>
          </Link>
        );
      })}
    </BC>
  );
};

export default Breadcrumbs;
