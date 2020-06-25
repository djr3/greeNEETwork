import Link from "next/link";
import { ReactNode } from "react";
import { getLayout as getSiteLayout } from "../Vertical";
import { useRouter } from "next/router";

/**
 * Persistent Components
 */
import Page from "containers/Main";
import { Container, Row } from "atomize";

interface ActiveLinkProps {
  children?: ReactNode;
  href: string;
  className?: string;
}

export const ActiveLink = ({ children, href, className }: ActiveLinkProps) => {
  const router = useRouter();
  return (
    <li className={router.pathname === href ? "is-active" : undefined}>
      <Link href={href} scroll={false}>
        <a className={className}>{children}</a>
      </Link>
    </li>
  );
};

export const BlogLayout = ({ children }) => {
  return (
    <Page id="blog">
      <Container>
        <Row>
          <div className="tabs is-fullwidth is-small is-centered">
            <ul>
              <ActiveLink href="/blog/pictures">Pictures</ActiveLink>
              <ActiveLink href="/blog/music">Music</ActiveLink>
              <ActiveLink href="/blog/videos">Videos</ActiveLink>
              <ActiveLink href="/blog/documents">Documents</ActiveLink>
            </ul>
          </div>
        </Row>
        <Row>{children}</Row>
      </Container>
    </Page>
  );
};

export const getLayout = (page) =>
  getSiteLayout(<BlogLayout>{page}</BlogLayout>);
