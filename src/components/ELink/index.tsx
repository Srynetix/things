import React from "react";
import IconExternalLink from "@theme/Icon/ExternalLink";
import Link from "@docusaurus/Link";

interface Props {
  href: string;
  children: string;
}

const ELink = ({ children, href }: Props) => (
  <Link to={href}>
    {children}
    <IconExternalLink />
  </Link>
);

export default ELink;
